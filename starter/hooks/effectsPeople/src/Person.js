
import React from 'react';

const Person = ({user}) => 

    <section className="person">
        <p className="name">{user.name}</p>
        <img src={user.image} alt={user.name}/>
        <p>{user.city}</p>
        <p>{user.email}</p>          
    </section>

export {Person}