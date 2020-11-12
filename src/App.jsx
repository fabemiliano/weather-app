import React, { useContext } from 'react';
import Header from './components/Header';
import MainInfo from './components/MainInfo';
import MoreDetails from './components/MoreDetails';
import { ApplicationContext } from './context/context';
import {
  MainPage,
} from './components/styles/styles';

function App() {
  const { url, weatherInfo } = useContext(ApplicationContext);
  return (
    weatherInfo
    && (
      <MainPage background={url}>
        <Header />
        <MainInfo />
        <MoreDetails />
      </MainPage>
    )
  );
}

export default App;
