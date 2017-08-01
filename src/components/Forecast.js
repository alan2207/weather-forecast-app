import React from 'react';
import ForecastDay from './ForecastDay';

// component that renders list of days for the forecast

import {returnWeekDays} from '../helpers'




export default function Forecast(props) {

    function renderDays() {
        return props.data.map((day, index) => {
            return <ForecastDay weekday={returnWeekDays(index)[0]} key={index} data={day} />
        });
    }

    return (
        <div className="row forecast seven-cols">
            {renderDays()}
        </div>
    )
}