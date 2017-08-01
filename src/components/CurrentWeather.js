import React from 'react';

// component that shows information about current weather

function CurrentWeather(props) {

        function displayWeather() {
            // render only if place is entered
            if(JSON.stringify(props.data) !== "{}") {
                return (
                    <div className="current row">
                        <div className=" col-md-4 col-md-offset-2 col-xs-12"> 
                            <h2>{props.data.city}</h2>
                            <h2>{props.data.temp}</h2>
                            <img height="140" width="140" src={props.data.icon} alt="img" />
                            <h4>{props.data.description}</h4>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <h3>Details:</h3>
                            <p>Wind Direction: {props.data.wind_dir}</p>
                            <p>Wind Speed: {props.data.wind_speed}</p>
                            <p>Pressure: {props.data.pressure}</p>
                            <p>Humidity: {props.data.humidity}</p>
                        </div>
                    </div>
                )
                
            } else {
                    return <div> </div>
                }
        }
        return (
            displayWeather()
        );
}

export default CurrentWeather;