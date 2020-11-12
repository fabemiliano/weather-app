import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from './context/context';

ReactDOM.render(
  <React.StrictMode>
    {/* to provide the context I must pass the App component as the Context's child */}
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById('root'),
);
