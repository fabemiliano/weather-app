/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import api from '../services/api';
// this weatherPics is an object I created with some images url. Depending on the api response
// it will return a diffent pic for each weatcher condition
import weatherPics from '../services/bg';

export const ApplicationContext = React.createContext();

const APIKey = process.env.REACT_APP_API_KEY;

function Context({ children }) {
  const [city, setCity] = useState('Florianopolis');
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // the method below will make a get request to the open weather api. It will return a promise
    // that will have to update the wheatherInfo property
    api.get(`?q=${city}&appid=${APIKey}`)
      .then(({ data }) => {
        setWeatherInfo(data);
        const currentWeather = data.weather[0].main;
        const bg = weatherPics.filter(({ weather }) => weather === currentWeather);
        // the method above will set the backgroud url based on the api response
        setUrl(bg[0].url);
      })
      .catch(() => setCity('Florianopolis'));
    // if there city searcher doesn't exist will return the default city to Florianopolis
  }, [city]);

  const context = {
    weatherInfo, city, setCity, url,
  };
  return (
    // The COntet component will provide the context to the children components, see the index.js
    <ApplicationContext.Provider value={context}>
      {children}
    </ApplicationContext.Provider>
  );
}

export default Context;
