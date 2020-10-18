import React from 'react';
import ReactDOM from 'react-dom';

import Aquarium from './Aquarium';

const sustainableFish = [ "dabfish","gurnard","herring","pouting" ];

ReactDOM.render(<Aquarium names={sustainableFish} />, document.getElementById('root'));
