import { exerciseActionType } from "./excerciseTextActionType"

export const exerciseText = (text) =>{
    return {
        type: exerciseActionType.SET_TEXT,
        payload : text
    }
}


// export const exerciseName = () =>{

// }

// export const exerciseBodyPart = () =>{

// }

// export const exerciseTarget = () =>{

// }

// export const exerciseEquipment = () =>{

// }