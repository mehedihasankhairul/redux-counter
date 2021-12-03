// here we need to import createStore from redux, and rootReducer from reducers folder
import { createStore } from "redux";
import rootReducer from "./reducers/index";

// here we create our store with the rootReducer (also redux dev tools is added)
const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;