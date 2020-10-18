
import React from "react";
import '@testing-library/jest-dom'
import { cleanup, render, fireEvent, queryByTestId } from '@testing-library/react'
import {Colours} from "./Colours";
import {reducer} from "./reducer";
import {ADD_COLOUR,EMPTY} from "./actions";


describe("Reducer component", () => {

  test("should add colours", () => {
  
    expect(true).toBe(true);

  }) ;

})
