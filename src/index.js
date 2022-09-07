import React from 'react';
import ReactDOM from 'react-dom';
import Web from './Web';
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(
  <>
  <BrowserRouter>
    <Web/> 
  </BrowserRouter>
  </>
  ,document.getElementById('root'));