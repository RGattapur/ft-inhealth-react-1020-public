
import React, { useEffect, useState } from 'react';
import './Books.css';

const Books = () => {

  const [path,setPath] = useState("");
  const [book,setBook] = useState({})

  const changeNation = e => setPath(e.target.value);

  useEffect( () => {

    console.log(`[useEffect ${path}]`);

    if(path) {

      // const fn = async () => {
      //   await fetch( path ).then( r => r.json()).then( data => setBook(data))
      // }  
      // fn().catch( e => setBook({ file:path,reason:e.message}));

      fetch( path )
        .then( r => r.json())
        .then( data => setBook(data))
        .catch( e => setBook({ file:path,reason:e.message}))
    }

  },[path])

  return (
      <section className="demo">

        <h4>Please choose a nation.</h4>
        <select name="nations" onChange={changeNation}>
            <option value="">Select</option>
            <option disabled>••••••••••••••••••••</option>
            <option value="./data/spain.json">Spain</option>
            <option value="./data/france.json">France</option>
        </select>

        <hr/>
        <section className="book">{JSON.stringify(book)}</section>
      </section>
  )

}

export default Books;
