import { combineReducers, createStore } from "redux";
import taskReducer from "./reducers";

let reducers = combineReducers({
  tasks: taskReducer
});

let store = createStore(reducers);

store.subscribe(() => {
  console.log("updated state");
  console.log(store.getState());
});

window.store = store;

export default store;
