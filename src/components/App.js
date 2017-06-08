import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import {celsius, transformIcon, transformWindDirection, transformWindSpeed} from '../helpers';


const API_KEY = '4bafbdf75b0167248104e17ead13fcca';
const FORECAST_URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?&appid=${API_KEY}`;
const CURRENT_WEATHER_URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}`;


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      forecast: [],
      current: {}
    };
    this.getCurrentWeather = this.getCurrentWeather.bind(this);
    this.getForecast = this.getForecast.bind(this);
  }

  componentDidMount() {
    // while initializing the app, get the weather of curren location
    navigator.geolocation.getCurrentPosition((position) => {
      this.getForecast(null, position.coords.latitude.toFixed(2), position.coords.longitude.toFixed(2));
      this.getCurrentWeather(null, position.coords.latitude.toFixed(2), position.coords.longitude.toFixed(2));
    });
  }


  getForecast(place, lat, lon) {
    // if place is not passed, set url to query by location (coords)
    var url;
    if(place) {
       url = `${FORECAST_URL}&q=${place}`;
    } else {
       url = `${FORECAST_URL}&lat=${lat}&lon=${lon}`;
    }
    axios.get(url, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then((response) => {
      this.setState({
        forecast: [...response.data.list]
      });
    }).catch(error => console.log(error));
  }

  getCurrentWeather(place, lat, lon) {
    // if place is not passed, set url to query by location (coords)
    var url;
    if(place) {
       url = `${CURRENT_WEATHER_URL}&q=${place}`;
    } else {
       url = `${CURRENT_WEATHER_URL}&lat=${lat}&lon=${lon}`;
    }
    axios.get(url, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then((response) => {
      const data = response.data;
      this.setState({
        current: {
          city: data.name,
          temp: celsius(data.main.temp),
          temp_min: celsius(data.main.temp_min),
          temp_max: celsius(data.main.temp_max),
          pressure: data.main.pressure + ' hPa',
          humidity: data.main.humidity + ' %',
          wind_dir: transformWindDirection(data.wind.deg),
          wind_speed: transformWindSpeed(data.wind.speed) + ' km/h',
          icon: transformIcon(data.weather[0].icon),
          description: data.weather[0].description
        }
      });
    }).catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <div className="App-header">
          <h1>Weather Forecast App</h1>
          <SearchBar getForecast={this.getForecast} getCurrentWeather={this.getCurrentWeather}/>
          <CurrentWeather data={this.state.current}/>
          <Forecast data={this.state.forecast}/>
        </div>
      </div>
    );
  }
}

export default App;


