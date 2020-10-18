
import React from 'react';
import { render } from 'react-dom';
import Shop from './Shop';
import './style.css';

const fruitVeg = [ "Apples", "Pears", "Bread","Milk" ];

render( <Shop basket={fruitVeg} />, document.querySelector("#root"));
