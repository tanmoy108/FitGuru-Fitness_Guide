import { combineReducers } from "redux";
import exerciseTextReducer from "./excersiseText/exerciseTextReducer";


const RootStore = combineReducers({
  exerciseTextObj: exerciseTextReducer,

});

export default RootStore;