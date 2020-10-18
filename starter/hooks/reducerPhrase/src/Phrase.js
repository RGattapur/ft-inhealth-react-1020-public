
import React, {useReducer} from 'react';
import './Phrase.css';
import {reducer} from "./Reducer";
import {HYPHEN,SPACE,UPPER,LOWER,REVERSE,RANDOM} from "./ActionTypes";

const Phrase = ({data}) => {

  const [state, dispatch] = useReducer(reducer, data);

  return (
    <section>
      <p>{state.phrase}</p>

      <button onClick={() => dispatch({type:HYPHEN})}>Hyphen</button>
      <button onClick={() => dispatch({type:SPACE})}>Space</button>
      <button onClick={() => dispatch({type:UPPER})}>Upper</button>
      <button onClick={() => dispatch({type:LOWER})}>Lower</button>
      <button onClick={() => dispatch({type:REVERSE})}>Reverse</button>
      <button onClick={() => dispatch({type:RANDOM})}>Random</button>
      
    </section>
  );
}

export default Phrase
