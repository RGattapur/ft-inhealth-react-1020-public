import React from 'react';
import './City.css';

const City = ({cities}) => {

  const city = cities[0];
  const tour = [];

  const setCity = () => null;
  const addTour = () => null;
  const sortTour = () => null;
  const reset = () => null;

  return (
    <>
      <section><span onClick={setCity}>Change</span>{JSON.stringify(city)}</section>
      <section><span onClick={addTour}>Add</span>{JSON.stringify(tour)}</section>
      <section><span onClick={sortTour}>Sort</span></section>
      <section><span onClick={reset}>Reset</span></section>
    </>    
  )
}

export {City}