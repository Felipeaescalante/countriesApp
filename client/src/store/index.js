import rootReducer from '../reducer/index';
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //


const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)),  //applyMiddleware(thunk) se encarga de manejar acciones async.
  );                 
export default store;