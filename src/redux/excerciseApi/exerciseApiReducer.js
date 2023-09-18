import { EXERCISE_ACTION_TYPE } from "./exerciseApiActionType"

const INITIAL_STATE = []

const exerciseApiReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case EXERCISE_ACTION_TYPE.EQUIPMENT:
            return payload !== undefined ? payload : null;
        default:
            return state;
    }
}

export default exerciseApiReducer