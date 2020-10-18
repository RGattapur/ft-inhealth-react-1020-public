
import React, {useRef} from 'react';
import './Film.css';

const Film = () => {

  const films = [] ;

  return (
    <>
      <FilmForm/>
      <p>{JSON.stringify(films)}</p>
    </>
  )
}

// -----------------------------------------------------------

const FilmForm = () => {

  const title = useRef();
  const director = useRef();

  const selectFilm = e => {   
    e.preventDefault();
    console.log(title,director)
  }

  return (
    <>
      <form onSubmit={selectFilm}>
        <input type="text" placeholder="title" ref={title}/>
        <input type="text" placeholder="director" ref={director}/>
        <button>Select Film</button>
      </form>
    </>
  )
}

export default Film;

