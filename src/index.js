import React from 'react';
import ReactDOM from 'react-dom';
import './style1.css';
 import App from './App'
import {BrowserRouter} from 'react-router-dom' 
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'


 
 
ReactDOM.render(

  <BrowserRouter>
    <App /> 
    </BrowserRouter>,

document.getElementById('root')
);

 