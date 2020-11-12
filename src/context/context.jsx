/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import weatherPics from '../services/bg';

export const ApplicationContext = React.createContext();

const APIKey = process.env.REACT_APP_API_KEY;

function Context({ children }) {
  const [city, setCity] = useState('Florianopolis');
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    api.get(`?q=${city}&appid=${APIKey}`)
      .then(({ data }) => {
        setWeatherInfo(data);
        const currentWeather = data.weather[0].main;
        const bg = weatherPics.filter(({ weather }) => weather === currentWeather);
        setUrl(bg[0].url);
      })
      .catch(() => setCity('Florianopolis'));
  }, [city]);

  const context = {
    weatherInfo, city, setCity, url,
  };
  return (
    <ApplicationContext.Provider value={context}>
      {children}
    </ApplicationContext.Provider>
  );
}

export default Context;
