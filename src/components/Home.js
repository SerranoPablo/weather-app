import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import CityWeather from './CityWeather.js';
import Signature from './Signature.js';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';

function Home() {
  const [cities, setCities] = useState([]);
  const [text, setText] = useState('');
  const [back, setBack] = useState(true);

  useEffect(() => {
    fetchCity("Basel");
    fetchCity("Málaga");
  }, [])

  const fetchCity = (city) => {
    var status;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87b24abe6b98eb052e073da0119f37ab&units=metric`)
      .then(res => {
        status = res.status
        return res;
      })
      .then(res =>
        res.json())
      .then(
        (res) => {
          if (status === 200) {
            if (!isCityAdded(res.name)) {

              setCities(oldCities => [{
                city: res.name,
                temperature: res.main.temp,
                description: res.weather[0].main,
                icon: res.weather[0].icon
              }, ...oldCities]);
            }
          } else {
            alert(city + " not recognized as city");
          }
        })
  }
  const isCityAdded = (city) => {
    return cities.find((x) => (x.city) === city)
  }
  const addCity = (newText = text) => {
    if (newText != '' && !cities.find((x) => (x.city).toUpperCase() === text.toUpperCase())) {
      fetchCity(newText);
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
    setCities([]);
    fetchCity("Basel");
    fetchCity("Málaga");
    setText('');
  }


  return (
    <div className="home">

      <h1>Weather App</h1>
      <div className="home__addTask">
        <input
          className="home__input"
          placeholder="Type city"
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
            temperature={x.temperature}
            description={x.description}
            icon={x.icon}
            deleteCity={deleteCity}
          />)}
      </div>
      <Signature />

    </div>
  )
}

export default Home
