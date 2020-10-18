
import React from 'react';
import {Person} from "./Person";
import './People.css';

const People = () => {

    // const API_PATH = "https://randomuser.me/api/?results=20";

    const users = [
        { 
            name:"Mestan Keçeci",
            image:"https://randomuser.me/api/portraits/med/women/19.jpg" ,
            city:"Bilecik",
            email:"mestan.kececi@example.com",
            id:"4567"
        }
    ]
  

    return <section className="people">{ users.map( p => <Person key={p.id} user={p} />)}</section>

}

export {People}
