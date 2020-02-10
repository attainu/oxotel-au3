import usersReducer from "../reducer/usersReducer";
import { createStore, combineReducers } from "redux";

let rootReducers = combineReducers({
    userData: usersReducer,
});

let store = createStore(rootReducers);

export { store };
