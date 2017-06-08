import React from 'react';
import ForecastDay from './ForecastDay';

// component that renders list of days for the forecast

export default function Forecast(props) {

    function renderDays() {
        return props.data.map((day, index) => {
            return <ForecastDay  key={index} data={day} />
        });
    }

    return (
        <div className="row forecast seven-cols">
            {renderDays()}
        </div>
    )
}