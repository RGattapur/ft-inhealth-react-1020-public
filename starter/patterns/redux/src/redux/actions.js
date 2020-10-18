
import { ADDFILM, EMPTY, REMOVE, SAMPLE, SORT } from "./constants";

const addAction = film => ({ type: ADDFILM, payload: film });

const emptyAction = () => ({ type: EMPTY });

const removeAction = (id) => ({ type: REMOVE, payload: id })

const sampleAction = (sample) => ({ type: SAMPLE, payload: sample })

const sortAction = () => ({ type: SORT })

export { 
    addAction, 
    emptyAction,
    removeAction,
    sampleAction,
    sortAction
}