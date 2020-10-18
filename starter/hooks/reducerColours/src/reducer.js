
import { ADD_COLOUR, SHRINK, NO_DUPLICATES, SORT, ROTATE, EMPTY, NO_ORANGE} from "./actions";

// A reducer takes in 2 arguments: a previous-state and an action.
// Based on the action, it returns a modified state.
// reducer( previousState, action ) => newState
// A reducer is a PURE function written in plain JS.

const reducer = (state, action) => {

	console.log(`State ${state} action ${JSON.stringify(action)}`)

	switch (action.type) {
		case ADD_COLOUR: {
			return state;
		}
		case EMPTY: {
			return state;
		}
		case NO_DUPLICATES: {
			return state;
		}
		case SORT: {
			return state;
		}
		case ROTATE : {			
			return state;
		}
		case SHRINK: {
			return state;
		}
		case NO_ORANGE : {
			return state;
		}
		default:
			throw new Error(`colorReducer ${action.type}`)
	}

};

export {reducer}