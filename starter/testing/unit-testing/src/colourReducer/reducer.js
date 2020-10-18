
import { ADD_COLOUR, SHRINK, NO_DUPLICATES, SORT, ROTATE, EMPTY, NO_ORANGE} from "./actions";

// A reducer takes in 2 arguments: a previous-state and an action.
// Based on the action, it returns a modified state.
// reducer( previousState, action ) => newState
// A reducer is a PURE function written in plain JS.

const reducer = (state, action) => {

	switch (action.type) {
		case ADD_COLOUR: {
			return [...state, action.payload];
		}
		case EMPTY: {
			return [];
		}
		case NO_DUPLICATES: {
			return [...new Set(state)];
		}
		case SORT: {
			return [...state.sort((a, b) => (a < b ? -1 : 1))];
		}

		case ROTATE : {
			let copy = [...state];
			if( copy.length ) {
				copy.unshift( copy.pop())
			}			
			return copy;
		}
		case SHRINK: {
			let copy = [...state];
			copy.pop();
			return copy;
		}
		case NO_ORANGE : {
			return state.filter( colour => colour !== "orange" )
		}
		default:
			throw new Error(`colorReducer ${action.type}`)
	}

};

export {reducer}