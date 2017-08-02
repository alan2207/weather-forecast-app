import React from 'react';
import ForecastDay from './ForecastDay';

// component that renders list of days for the forecast

import {returnWeekDay} from '../helpers'


export default function Forecast(props) {

    function renderDays() {
        return props.data.map((day, index) => {
            return <ForecastDay weekday={returnWeekDay(index)} key={index} data={day} />
        });
    }

    return (
        <div className="row forecast seven-cols">
            {renderDays()}
        </div>
    )
}