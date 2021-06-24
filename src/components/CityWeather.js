import React, { useState } from 'react';
import '../styles/CityWeather.css';
import CloseIcon from '@material-ui/icons/Close';
import Image from './Image.js';


function CityWeather({ city, temperature, description, icon, deleteCity }) {
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
   <Image className="cityweather__image" icon={icon} />
   <h4>{temperature}ºC</h4>
   <t>{description}</t>

  </div>
 )
}

export default CityWeather
