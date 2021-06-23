import React, { useState } from 'react';
import '../styles/CityWeather.css';
import CloseIcon from '@material-ui/icons/Close';


function CityWeather({ city, temp, text, deleteCity }) {
 const [cross, setCross] = useState(true);

 return (
  <div className='cityweather'>
   <div
    className="cityweater__close"
    onMouseOver={() => setCross(!cross)}
    onMouseOut={() => setCross(!cross)}
    onClick={() => deleteCity(city)} >
    {cross ? <CloseIcon /> : <CloseIcon style={{ color: '#B53737' }} />}
   </div>
   <h1>{city}</h1>
   <h4>{temp}ºC</h4>
   <t>{text}</t>

  </div>
 )
}

export default CityWeather
