import React, {useState} from 'react';
import './Weather.css';

const Weather = ({town,temperature}) => {
    
    const [temp, changeTemp] = useState(temperature);

    const warm = () => changeTemp( temp => temp+1 );

    return (
        <section data-testid="city" onClick={warm}>{town}<span data-testid="temp">{temp}</span></section>
    )

}

export {Weather}