import { createStore, combineReducers} from 'redux';
import unitSelectionReducer from './../reducers/selectionReducer.js';
import conversionOptionReducer from './../reducers/optionReducer.js';
import convertReducer from './../reducers/conversionReducer.js';

export const store = createStore(  combineReducers({
    select: unitSelectionReducer,
    option: conversionOptionReducer,
    convert: convertReducer
  }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
