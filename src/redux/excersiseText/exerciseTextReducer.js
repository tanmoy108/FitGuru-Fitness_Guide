import { exerciseActionType } from './excerciseTextActionType';

const INITIAL_STATE = "";

const exerciseTextReducer = (state=INITIAL_STATE,action) => {
    const {type,payload} = action;
    switch (type) {
        case exerciseActionType.SET_TEXT:
            return(
                payload
            )
        default:
            return state;
}}

export default exerciseTextReducer;