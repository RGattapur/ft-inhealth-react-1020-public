
import React from 'react';
import './films.css';
import { useSelector,useDispatch } from "react-redux";
import { removeAction } from "./redux/actions";

const FAKE_FILMS = [ { name:"Gone with the Fake",id:4567}, { name:"What Ever",id:8065} ]

const Draw = () => {

    const films = FAKE_FILMS;
    
    const remove = id => null

    return (
        <section>
            <section className="films">
                {films.map((film, n) => 
                <p onClick={ () => remove(film.id) } className="film" key={film.id}>{film.name}</p>)}
            </section>
        </section>
    )

}

export { Draw }