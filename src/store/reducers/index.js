import { createStore, combineReducers } from 'redux';
import preferenceReducer from './preferenceReducer';

const rootReducer = combineReducers(
    {
        preferences: preferenceReducer
    }
);

export default rootReducer;
