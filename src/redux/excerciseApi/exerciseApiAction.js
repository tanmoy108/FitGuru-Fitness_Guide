import { EXERCISE_API_ACTION_TYPE } from "./exerciseApiActionType"

export const exerciseArray = (item) => {
    return {
        type: EXERCISE_API_ACTION_TYPE.TYPE_ARRAY,
        payload:item
    }
}

