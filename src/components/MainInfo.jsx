import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
  FlexColumnDiv, FlexRowDiv, Text,
} from './styles/styles';
import { ApplicationContext } from '../context/context';

function MainInfo() {
  const { weatherInfo } = useContext(ApplicationContext);

  return (
    <FlexColumnDiv height="50%" justify="flex-end">
      <FlexRowDiv align="center">
        <img src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} width="50px" alt="icon" />
        <Text>{weatherInfo.weather[0].description}</Text>
      </FlexRowDiv>
      <Text fontSize="5rem">{`${(weatherInfo.main.temp - 270).toFixed(1)}°C`}</Text>
      <FlexRowDiv width="200px" justify="space-between">
        <FlexRowDiv align="center">
          <FontAwesomeIcon icon={faArrowUp} />
          <Text fontSize="1.5rem">{`${(weatherInfo.main.temp_max - 270).toFixed(1)}°C`}</Text>
        </FlexRowDiv>
        <FlexRowDiv align="center">
          <FontAwesomeIcon icon={faArrowDown} />
          <Text fontSize="1.5rem">{`${(weatherInfo.main.temp_min - 270).toFixed(1)}°C`}</Text>
        </FlexRowDiv>
      </FlexRowDiv>
    </FlexColumnDiv>
  );
}

export default MainInfo;
