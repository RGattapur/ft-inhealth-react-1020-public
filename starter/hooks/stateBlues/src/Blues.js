import React from 'react';
import './Blues.css';

import {bluesSongs} from  "./data/bluesSongs";
import { FiTrash } from "react-icons/fi";

// ----------------------------------------------------------------------
const Blues = () => {

  // Store state at the root component and pass it down via props.
  console.table(bluesSongs)

  return (
    <>
      <SongList/>
      <TotalSales/>
    </>
  )
}
// ----------------------------------------------------------------------
const SongList = () => {

  return (
    <section>
      <Song/> 
      <Song/> 
      <Song/> 
      <Song/> 
    </section>
  )
}
// ----------------------------------------------------------------------
const Song = () => 

<p>
  <span>Artist</span>
  Song
  <span className="sales">0</span>
  <FiTrash/>
</p>

// ----------------------------------------------------------------------
const TotalSales = () => <h4>0</h4>
// ----------------------------------------------------------------------

export default Blues;
