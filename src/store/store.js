import { createStore, combineReducers, applyMiddleware } from 'redux';
import {unitSelectionReducer} from './controlActions.js';
import {conversionOptionReducer} from './optionActions.js';


/*   ~~~States needed are:   ~~~~
    1> Control or Unit state --> For selecting the unit of conversion.
    2> FromUnit state --> Convert from this measurement.
    3> ToUnit state --> Convert to this measurement.
    4> Input state --> Accepts a number value.
    5> Display state --> Display the end result of conversion.

    ~~~~ Reducers   ~~~~~~~
    1> UnitSelectionReducer: control the state and action of selecting units
    2> MeasurementControlReducer: To control the FromUnit and ToUnit change
    3> ConversionReducer: To deal with the input and display of conversion


    */
const mainReducer = combineReducers({unit:unitSelectionReducer,convert:conversionOptionReducer});
export const store = createStore(unitSelectionReducer);
