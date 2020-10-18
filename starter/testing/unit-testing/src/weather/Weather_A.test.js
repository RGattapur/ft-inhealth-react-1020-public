// hello.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {Weather} from './Weather';
import {TD,debug} from "./Weather.utils";

describe("Weather component", () => {
  it("should work",() => {
    expect(true).toBe(true);
  })
})
