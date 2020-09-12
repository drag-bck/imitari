import { combineReducers } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import appReducer from "./app/appReducer";

export default function createReducer(asyncReducers) {
    return enableBatching(
        combineReducers({
            app: appReducer,
            ...asyncReducers
        })
    );
}