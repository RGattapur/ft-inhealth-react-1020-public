import React from 'react';
import ReactDOM from 'react-dom';
import {Weather} from './weather/Weather';
import {People} from './people/People';

ReactDOM.render(<Weather town="Castellfullit de la Roca" temperature={24} />, document.querySelector('.weather'));
ReactDOM.render(<People/>, document.querySelector('.people'));