
// transforms icon data from the json into url for proper icon
export function transformIcon(icon) {
  return `http://openweathermap.org/img/w/${icon}.png`;
} 

// transforms temperature from kelvin, and also adds celsious degree symbol
export function celsius(temp) {
  return parseInt(temp - 273.15, 10)  + String.fromCharCode(176) + 'C';
}

// getting wind direction from direction degrees of the wind
export function transformWindDirection(dir) {
  switch(true) {
    case dir >= 348.75 && dir < 11.25:
      return 'N';
    case dir >= 11.25 && dir < 33.75:
      return 'NNE';
    case dir >= 33.75 && dir < 56.25:
      return 'NE';
    case dir >= 56.25 && dir < 78.75:
      return 'ENE';
    case dir >= 78.75 && dir < 101.25:
      return 'E';
    case dir >= 101.25 && dir < 123.75:
      return 'ESE';
    case dir >= 123.75 && dir < 146.25:
      return 'SE';
    case dir >= 146.25 && dir < 168.75:
      return 'SSE';
    case dir >= 168.75 && dir < 191.25:
      return 'S';
    case dir >= 191.25 && dir < 213.75:
      return 'SSW';
    case dir >= 213.75 && dir < 236.25:
      return 'SW';
    case dir >= 236.25 && dir < 258.75:
      return 'WSW';
    case dir >= 258.75 && dir < 281.25:
      return 'W';
    case dir >= 281.25 && dir < 303.75:
      return 'WNW';
    case dir >= 303.75 && dir < 326.25:
      return 'NW';
    case dir >= 326.25 && dir < 348.75:
      return 'NNW';
    default: 
      return 'not available';
  }
}

// converts mps to km/h - for wind speed
export function transformWindSpeed(speed) {
  return (speed * 3.6).toFixed(1);
}