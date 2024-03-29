import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { JHUserContextProvider } from './config/JHUserContext';
import { FDAUserContextProvider } from './config/FDAUserContext';
import { BavariaUserContextProvider } from './config/BavariaUserContext';
import "./styles.css";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <JHUserContextProvider>
      <FDAUserContextProvider>
      <BavariaUserContextProvider>
        <App />
      </BavariaUserContextProvider>
      </FDAUserContextProvider>
      </JHUserContextProvider>
    </BrowserRouter>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
