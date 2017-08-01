import React from 'react';
import {celsius, transformIcon} from '../helpers'


// this component shows info for each day in the forecast

export default function ForecastDay(props) {
    
    return (
        
        <div className="col-md-1">
            <h3>{props.weekday}</h3>
            <img height="100" width="100" src={transformIcon(props.data.weather[0].icon)} alt="icon" />
            <h4>{celsius(props.data.temp.max)}</h4>
            <h5>{props.data.weather[0].main}</h5>
        </div>
    );
}