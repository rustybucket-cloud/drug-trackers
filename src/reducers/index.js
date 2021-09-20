import { combineReducers } from "redux";
import isLoggedIn from "./isLoggedIn";
import MedicationReducer from "./MedicationReducer";

const Reducers = combineReducers({
    MedicationReducer, isLoggedIn
});

export default Reducers;