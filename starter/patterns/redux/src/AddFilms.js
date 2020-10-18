
import React, {useState } from 'react';
import { addAction, emptyAction,sampleAction,sortAction } from "./redux/actions";
import { useSelector,useDispatch } from "react-redux";
import './films.css';
import { createSample } from "./sample";

const AddFilms = () => {

  const [film,setFilm] = useState("");

  const changeName = e => setFilm( e.currentTarget.value )

  const addFilm = e => {
    e.preventDefault();
    console.log(film)
  }

  const empty = () => null

  const sampleMovies = () => null

  const sort = () => null

  return (
    <section>

       <p>0 film(s)</p>
      
      <form onSubmit={addFilm}>

        <input value={film} onChange={changeName} />
        
        <p className="button" onClick={addFilm}>Add film</p>
        <p className="button" onClick={empty}>Empty</p>
        <p className="button" onClick={sampleMovies}>Sample</p>
        <p className="button" onClick={sort}>Sort</p>
       
      </form>

      <hr/>
    </section>

  );
  
}

export { AddFilms }
