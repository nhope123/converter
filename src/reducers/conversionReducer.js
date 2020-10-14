import * as Unit from './../actions/unitActions.js';
import * as OA from './../actions/optionActions.js';
import {CONVERT} from './../actions/convertActions.js';
import {evaluate} from './../conversion/unitConversion.js';


// The default and initialing value for the Interact component and states
const conversionDefault = {input: 0, output: 0, fromSymbol: 'mm', toSymbol: 'cm'};

// Reducer connected to the Interact component and states
export default function convertReducer(state= conversionDefault, action){
  
  var fromArgs = {data: state.input, fromUnit: action.type, toUnit: action.counterUnit };
  var toArgs = {data: state.input, fromUnit: action.counterUnit, toUnit: action.type };

  switch (action.type) {
    case Unit.LENGTH :
      return {input: 0, output: 0, fromSymbol: 'mm', toSymbol: 'cm'};
    case Unit.WEIGHT :
      return {input: 0, output: 0, fromSymbol: 'mg', toSymbol: 'g '};
    case Unit.TEMP:
      return {input: 0, output: 0, fromSymbol: '°F', toSymbol: '°C'};
    case CONVERT:
      return evaluate(action);
    case OA.FROMMILLIMETER:
      return Object.assign({}, evaluate(fromArgs), {fromSymbol: action.symbol});
    case OA.TOMILLIMETER:
      return Object.assign({}, evaluate(toArgs), {toSymbol: action.symbol});
    case OA.FROMCENTIMETER:
      return Object.assign({}, evaluate(fromArgs), {fromSymbol: action.symbol});
    case OA.TOCENTIMETER:
      return Object.assign({}, evaluate(toArgs), {toSymbol: action.symbol});
    case OA.FROMINCH:
      return Object.assign({}, evaluate(fromArgs), {fromSymbol: action.symbol});
    case OA.TOINCH:
      return Object.assign({}, evaluate(toArgs), {toSymbol: action.symbol});
    case OA.FROMFEET:
      return Object.assign({}, evaluate(fromArgs), {fromSymbol: action.symbol});
    case OA.TOFEET:
      return Object.assign({}, evaluate(toArgs), {toSymbol: action.symbol});
    case OA.FROMMETER:
      return Object.assign({}, evaluate(fromArgs), {fromSymbol: action.symbol});
    case OA.TOMETER:
      return Object.assign({}, evaluate(toArgs), {toSymbol: action.symbol});
    case OA.FROMKILOMETER:
      return Object.assign({}, evaluate(fromArgs), {fromSymbol: action.symbol});
    case OA.TOKILOMETER:
      return Object.assign({}, evaluate(toArgs), {toSymbol: action.symbol});
    case OA.FROMFAHRENHEIT:
      return Object.assign({}, evaluate(fromArgs), {fromSymbol: action.symbol});
    case OA.TOFAHRENHEIT:
      return Object.assign({}, evaluate(toArgs), {toSymbol: action.symbol});
    case OA.FROMCELSIUS:
      return Object.assign({}, evaluate(fromArgs), {fromSymbol: action.symbol});
    case OA.TOCELSIUS:
      return Object.assign({}, evaluate(toArgs), {toSymbol: action.symbol});
    case OA.FROMKELVIN:
      return Object.assign({}, evaluate(fromArgs), {fromSymbol: action.symbol});
    case OA.TOKELVIN:
      return Object.assign({}, evaluate(toArgs), {toSymbol: action.symbol});
    case OA.FROMMILLIGRAM:
      return Object.assign({}, evaluate(fromArgs), {fromSymbol: action.symbol});
    case OA.TOMILLIGRAM:
      return Object.assign({}, evaluate(toArgs), {toSymbol: action.symbol});
    case OA.FROMGRAM:
      return Object.assign({}, evaluate(fromArgs), {fromSymbol: action.symbol});
    case OA.TOGRAM:
      return Object.assign({}, evaluate(toArgs), {toSymbol: action.symbol});
    case OA.FROMOUNCE:
      return Object.assign({}, evaluate(fromArgs), {fromSymbol: action.symbol});
    case OA.TOOUNCE:
      return Object.assign({}, evaluate(toArgs), {toSymbol: action.symbol});
    case OA.FROMPOUND:
      return Object.assign({}, evaluate(fromArgs), {fromSymbol: action.symbol});
    case OA.TOPOUND:
      return Object.assign({}, evaluate(toArgs), {toSymbol: action.symbol});
    case OA.FROMKILOGRAM:
      return Object.assign({}, evaluate(fromArgs), {fromSymbol: action.symbol});
    case OA.TOKILOGRAM:
      return Object.assign({}, evaluate(toArgs), {toSymbol: action.symbol});
    default:
      return state;
  }
}
