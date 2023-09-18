import { combineReducers } from "redux";
import exerciseTextReducer from "./excersiseText/exerciseTextReducer";
import exerciseApiReducer from "./excerciseApi/exerciseApiReducer";


const RootReducer = combineReducers({
  exerciseTextObj: exerciseTextReducer,
  exerciseApiObj: exerciseApiReducer

});

export default RootReducer;