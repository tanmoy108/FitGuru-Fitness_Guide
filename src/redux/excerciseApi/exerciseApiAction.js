import { EXERCISE_ACTION_TYPE } from "./exerciseApiActionType.js"
import { response,exerciseOption } from "../../utils/utilsFetchData.js";

// const ArrayFun = async(item,typeName) =>{
//     const url = typeName==="all" ? process.env.REACT_APP_ALL : process.env.REACT_APP_ALL+"/"+typeName+"/"+item;
//     const allData = await response(url, exerciseOption);
//     return allData;
// }

export const exerciseAll = (item) => {
    return {
        type: EXERCISE_ACTION_TYPE.ALL,
        payload:item
    }
}

export const exerciseName = (item) => {
    return {
        type: EXERCISE_ACTION_TYPE.NAME,
        payload:item
    }
}

export const exerciseTarget = (item) => {
    return {
        type: EXERCISE_ACTION_TYPE.TARGET,
        payload:item
    }
}

export const exerciseEquipment = (item) => {
    return {
        type: EXERCISE_ACTION_TYPE.EQUIPMENT,
        payload:item
    }
}