import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import appReducer from "./reducers/appReducers";
import {requestUsers} from "./actions/app-actions";
import {composeWithDevTools} from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});

export const store = createStore(appReducer, composeEnhancers(
    applyMiddleware(thunk),
));

store.dispatch(requestUsers())

