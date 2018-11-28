import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import Nav from './Nav/Nav';
import App from './App';

ReactDOM.render(
<BrowserRouter>
  <Nav />
</BrowserRouter>, document.getElementById('root'));

