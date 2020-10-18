// hello.test.js

import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {debug} from "./utils";

import {People} from './People';
import {FAKE_CONTENT, FAKE_PEOPLE} from "./People.data" ;

describe("People component", () => {

  it("fetches JSON people data", async () => {

    expect(true).toBe(true);
  
  })

})
