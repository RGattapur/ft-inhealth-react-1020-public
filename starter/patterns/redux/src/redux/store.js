
import { createStore } from "redux";
import { reducer } from "./reducer";

let store;

// If running in development-mode and Chrome Redux DevTools are installed
// then log Redux actions in DevTools.

if (
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "function") &&
    (process.env.NODE_ENV === 'development')) {
    store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__());
} else {
    store = createStore(reducer);
}

export { store }