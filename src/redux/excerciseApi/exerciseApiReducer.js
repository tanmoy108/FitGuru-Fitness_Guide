import { EXERCISE_API_ACTION_TYPE } from "./exerciseApiActionType.js"

const INITIAL_STATE = []

const exerciseApiReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case EXERCISE_API_ACTION_TYPE.TYPE_ARRAY:
            return payload !== undefined ? payload : null;
        default:
            return state;
    }
}

export default exerciseApiReducer