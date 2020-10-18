
import React from "react";

import '@testing-library/jest-dom'
import { cleanup, render, fireEvent, queryByTestId } from '@testing-library/react'

import {Weather} from './Weather';
import {TD} from "./Weather.utils";

describe("Weather component", () => {
  it("should work",() => {
    expect(true).toBe(true);
  })
})
