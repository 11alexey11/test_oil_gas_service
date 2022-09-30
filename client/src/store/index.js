import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { tableReducer } from './table';
import { chartReducer } from './chart';

const reducers = combineReducers({
    table: tableReducer,
    chart: chartReducer,
});

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhacers(applyMiddleware(thunk)));

