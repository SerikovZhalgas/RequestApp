import {combineReducers, createStore } from "redux";
import {requestReducer} from "./Reducers/Request-reducer";
import {requestsListReducer} from "./Reducers/RequestsList-reducer";

const rootReducer = combineReducers({
    request: requestReducer,
    requestsList: requestsListReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppStateType = ReturnType<typeof store.getState>;