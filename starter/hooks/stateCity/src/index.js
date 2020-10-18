import React from 'react';
import ReactDOM from 'react-dom';
import {world} from "./data";
import {City} from './City';

ReactDOM.render(<City cities={world}/>,document.querySelector('.city'));
