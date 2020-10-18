
import React from 'react';
import './NewYork.css';

const Ticket = (props) => {

    const {name,photo,price,open} = props;

    return (
        <article>  
            <p>{name}</p>
            <img src={"ny/"+photo} alt={name}/>
            <p>${price}</p>
            <p>Open</p>
        </article>
    )
}

export {Ticket}