import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { AddFilms } from './AddFilms';
import { Draw } from './Draw';

ReactDOM.render(

    <Provider store={store}>

        <section>
            <AddFilms />
            <Draw />
        </section>
        
    </Provider>

    , document.getElementById('films')
);

