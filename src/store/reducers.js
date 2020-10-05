import { createStore, combineReducers, applyMiddleware } from 'redux';
import {unitSelectionReducer} from './controlActions.js';
import {conversionOptionReducer} from './optionActions.js';

//const mainReducer =
export default combineReducers({unit:unitSelectionReducer,convert:conversionOptionReducer});
//export default mainReducer;


// BUG: bug with the reducers
