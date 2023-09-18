import { exerciseActionType } from "./excerciseTextActionType"

export const exerciseText = (text) =>{
    return {
        type: exerciseActionType.SET_TEXT,
        payload : text
    }
}
