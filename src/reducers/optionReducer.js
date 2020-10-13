import * as Unit from './../actions/unitActions.js';
import * as OA from './../actions/optionActions.js';

// Setting state for units to convert from
const fromAssignState = (stateValue, actionValue)=>{
  return Object.assign(
          {},stateValue, {fromUnit: actionValue.type, fromUnitOptions: actionValue.options}
        );
      };

// Setting state for units to convert to
const toAssignState = (stateValue, actionValue)=>{
  return Object.assign(
          {},stateValue, {toUnit: actionValue.type, toUnitOptions: actionValue.options}
        );
      };

// Reducer for Option Component
export default function conversionOptionReducer(state = OA.initializeLength, action){
  switch (action.type) {
    case Unit.LENGTH:
      return OA.initializeLength;
    case Unit.WEIGHT:
      return OA.initializeWeight;
    case Unit.TEMP:
      return OA.initializeTemp;
    case OA.FROMMILLIMETER:
      return fromAssignState(state,action);
    case OA.TOMILLIMETER:
      return toAssignState(state,action);
    case OA.FROMCENTIMETER:
      return fromAssignState(state,action);
    case OA.TOCENTIMETER:
      return toAssignState(state,action);
    case OA.FROMINCH:
      return fromAssignState(state,action);
    case OA.TOINCH:
      return toAssignState(state,action);
    case OA.FROMFEET:
      return fromAssignState(state,action);
    case OA.TOFEET:
      return toAssignState(state,action);
    case OA.FROMMETER:
      return fromAssignState(state,action);
    case OA.TOMETER:
      return toAssignState(state,action);
    case OA.FROMKILOMETER:
      return fromAssignState(state,action);
    case OA.TOKILOMETER:
      return toAssignState(state,action);
    case OA.FROMFAHRENHEIT:
      return fromAssignState(state,action);
    case OA.TOFAHRENHEIT:
      return toAssignState(state,action);
    case OA.FROMCELSIUS:
      return fromAssignState(state,action);
    case OA.TOCELSIUS:
      return toAssignState(state,action);
    case OA.FROMKELVIN:
      return fromAssignState(state,action);
    case OA.TOKELVIN:
      return toAssignState(state,action);
    case OA.FROMMILLIGRAM:
      return fromAssignState(state,action);
    case OA.TOMILLIGRAM:
      return toAssignState(state,action);
    case OA.FROMGRAM:
      return fromAssignState(state,action);
    case OA.TOGRAM:
      return toAssignState(state,action);
    case OA.FROMOUNCE:
      return fromAssignState(state,action);
    case OA.TOOUNCE:
      return toAssignState(state,action);
    case OA.FROMPOUND:
      return fromAssignState(state,action);
    case OA.TOPOUND:
      return toAssignState(state,action);
    case OA.FROMKILOGRAM:
      return fromAssignState(state,action);
    case OA.TOKILOGRAM:
      return toAssignState(state,action);
    default:
      return state;
  }
}
