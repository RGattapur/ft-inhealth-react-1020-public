
import { ADDFILM, EMPTY, REMOVE, SAMPLE, SORT } from "./constants";

const INITIAL_STATE = { films: [] }

const reducer = (state = INITIAL_STATE, action) => {

    console.log(`State ${JSON.stringify(state)} action ${JSON.stringify(action)}`);

    switch (action.type) {

        case ADDFILM:
            return { ...state, films: [...state.films, action.payload] }

        case EMPTY:
            return { ...state, films: [] }

        case REMOVE:
            return { ...state , films: state.films.filter( film => film.id !== action.payload ) };

        case SAMPLE:
            return { ...state, films: [...state.films, ...action.payload ]}

        case SORT:
            return { ...state, films: [...state.films.sort((a, b) => (a.name < b.name ? -1 : 1))] }

        default:
            return state;

    }

}

export { reducer }