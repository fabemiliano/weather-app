import React, { useContext, useState } from 'react';

// I used the FontAwesome lib to get some icons for the application
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  FlexColumnDiv, FlexRowDiv, Text, Button, Modal,
} from './styles/styles';
import { ApplicationContext } from '../context/context';

// this function will get the timezone value returned from the api response and transform into
// the current date and time at the city chosen;
function getTime(timezone) {
  const now = new Date();
  let hours = now.getHours() + timezone / 3600 + 3;
  let minutes = now.getMinutes();
  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  // the date show change depending on the curret time
  if (hours > 24) {
    hours -= 24;
    now.setDate(now.getDate() + 1);
  }
  if (hours < 0) {
    hours = 24 - hours;
    now.setDate(now.getDate() - 1);
  }
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  return { date: `${day}/${month}/${year}`, time: `${hours}:${minutes}` };
}

// this function will render the search bar to choose a different city to show
// this search bar will only appear when clicking the choose a different city button
function renderModal(setCity, inputCity, setInputCity, setShowModal) {
  return (
    <Modal>
      <p>Choose a city</p>
      <div>
        <FontAwesomeIcon icon={faSearch} />
        <input value={inputCity} onChange={(e) => setInputCity(e.target.value)} />
        <Button onClick={() => { setInputCity(''); setCity(inputCity); setShowModal(false); }}>Go</Button>
      </div>
    </Modal>
  );
}

function Header() {
  const { weatherInfo, city, setCity } = useContext(ApplicationContext);
  const [inputCity, setInputCity] = useState('');
  const [showModal, setShowModal] = useState(false);
  return (
    <FlexRowDiv height="20%" align="center">
      <FlexColumnDiv margin="0px 20px">
        <Text color="#fff" fontSize="2rem">{city}</Text>
        <Text color="#fff" fontSize="1rem">{getTime(weatherInfo.timezone).date}</Text>
        <Text color="#fff" fontSize="1rem">{getTime(weatherInfo.timezone).time}</Text>
      </FlexColumnDiv>
      <FlexColumnDiv justify="space-between">
        <Button onClick={() => setShowModal(true)} borderRadius="40px" width="150px" height="50px" background="#f5f5f5">Change Location</Button>
        {showModal && renderModal(setCity, inputCity, setInputCity, setShowModal)}
      </FlexColumnDiv>
    </FlexRowDiv>
  );
}

export default Header;
