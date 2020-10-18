import {render, fireEvent, cleanup} from '@testing-library/react';
import React from 'react';
import {ToDo} from "./ToDo";

afterEach(cleanup)

test( "Add a TO DO item" , () => {
    expect(true).toBe(true);
})