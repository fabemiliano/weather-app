import React, { useContext } from 'react';
import Header from './components/Header';
import MainInfo from './components/MainInfo';
import MoreDetails from './components/MoreDetails';
import { ApplicationContext } from './context/context';
import {
  MainPage,
} from './components/styles/styles';

// I decided to use functional components and hooks (useState, useEffect and useContext)
// As state manager I prefered to use Context API, as it's a small app so no need to use Redux

function App() {
  const { url, weatherInfo } = useContext(ApplicationContext);
  return (
    // here I used the shortcut trick because before the api responds with the reults there won't
    //  be any data to show and the code application will break
    weatherInfo
    && (
    // I decided to split up the main screen in three smaller components so it could be reusable
    // and the code will be easier to understand

      // I'm using the style-componetns to style the app, to be honest this is third time I used
      // this framework and I'm finding it quite easy to use because I can have same elements with
      // different propertie just passing some props
      <MainPage background={url}>
        <Header />
        <MainInfo />
        <MoreDetails />
      </MainPage>
    )
  );
}

export default App;
