import React, { useState } from 'react';
import './Effects.css';


const Effects = () => {

  const [time, setTime ] = useState(Date.now());
  const [author, setAuthor ] = useState("Shakesspeare");

  const updateTime = () => setTime(Date.now())
  const updateAuthor = () => setAuthor( `${author}•`)

  return (
    <>
      <section onClick={updateTime}>{time}</section>
      <section onClick={updateAuthor}>{author}</section>
    </>
  )

}

export default Effects;
