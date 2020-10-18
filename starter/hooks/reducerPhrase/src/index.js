import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Phrase from './Phrase';

const data = {phrase: "A JavaScript library for building user interfaces"};

ReactDOM.render( <Phrase data={data}/>, document.getElementById('root'));

