import React, { useContext } from 'react';
import {
  FlexColumnDiv, FlexRowDiv, Text,
} from './styles/styles';
import { ApplicationContext } from '../context/context';

// this is a simple component that render some informations returned from the api
// using the styled Components
function MoreDetails() {
  const { weatherInfo } = useContext(ApplicationContext);
  return (
    <FlexRowDiv height="30%">
      <FlexColumnDiv justify="center">
        <Text fontSize="1.5rem">More Details</Text>
        <p>{`Feels like: ${(weatherInfo.main.feels_like - 270).toFixed(1)}°C`}</p>
        <p>{`Humidty: ${(weatherInfo.main.humidity)}%`}</p>
        <p>{`Pressure: ${(weatherInfo.main.pressure).toFixed(1)} Pa`}</p>
        <p>{`Visbility: ${(weatherInfo.visibility)}`}</p>
      </FlexColumnDiv>
    </FlexRowDiv>
  );
}

export default MoreDetails;
