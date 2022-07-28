// import de React
import React from 'react';
import ReactDOM from 'react-dom';

//  Import de Redux
//  Import { Provider } from 'react-redux'

// Importamos las hojas de estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.scss';

//  Importamos componente App
import App from './components/App';

// TODOSi trabajamos con Redux, crear el Store y applicar el Middleware

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    document.getElementById('root'),
);
