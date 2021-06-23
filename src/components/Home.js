import React, { useState } from 'react';
import '../styles/Home.css';
import CityWeather from './CityWeather.js';
import Signature from './Signature.js';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import citiesArray from '../db/cities';

function Home() {
 const [cities, setCities] = useState(citiesArray);
 const [text, setText] = useState('');
 const [back, setBack] = useState(true);

 const addCity = (newText = text) => {
  if (newText != '' && !cities.find((x) => (x.city).toUpperCase() === text.toUpperCase())) {
   setCities(oldCities => [...oldCities, { city: newText, temp: 1, text: "Snowy" }]);
  }
  setText('');

 }
 const deleteCity = (city) => {
  setCities(cities.filter(item => item.city !== city));
 }


 const handleEnter = (event) => {
  if (event.key === 'Enter') {
   addCity();
  }
 }

 const restartArrays = () => {
  setCities(citiesArray);
  setText('');
 }


 return (
  <div className="home">

   <h1>Weather App</h1>
   <div className="home__addTask">
    <input
     className="home__input"
     onChange={(event) => setText(event.target.value)}
     value={text}
     onKeyDown={handleEnter}
     type="text" />
    <button onClick={() => addCity(text)}>Add</button>
   </div>

   <div
    className="home__restart"
    onMouseOver={() => setBack(!back)}
    onMouseOut={() => setBack(!back)}
    onClick={restartArrays}>
    {back ? <SettingsBackupRestoreIcon style={{ color: '#fcfcfc' }} /> : <SettingsBackupRestoreIcon style={{ color: '#0066FF' }} />}
   </div>
   <div className="home__current">
    {cities.map((x) =>
     <CityWeather
      city={x.city}
      temp={x.temp}
      text={x.text}
      deleteCity={deleteCity}
     />)}
   </div>
   <Signature />

  </div>
 )
}

export default Home
