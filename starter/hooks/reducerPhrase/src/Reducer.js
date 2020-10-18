
import {HYPHEN,SPACE,UPPER,LOWER,REVERSE,RANDOM} from "./ActionTypes";

const reducer = (state,action) => {

    console.log(state,action);
  
    switch (action.type) {
      case HYPHEN:
      case SPACE: 
      case UPPER: 
      case LOWER:  
      case REVERSE:           
      case RANDOM: 
      default:
        return state;
    }
  
  }

  export {reducer}