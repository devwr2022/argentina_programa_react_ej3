import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import Lectura from './Lectura/Lectura';
import Navegacion from './Navegacion/Navegacion';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegacion></Navegacion>
    <App></App>
    

  </React.StrictMode>
);

reportWebVitals();
