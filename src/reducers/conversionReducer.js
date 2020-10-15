import * as Unit from './../actions/unitActions.js';
import * as OA from './../actions/optionActions.js';
import {CONVERT, RESET} from './../actions/convertActions.js';
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
    case RESET:
      return {input: 0, output: 0, fromSymbol: state.fromSymbol, toSymbol: state.toSymbol};
    case OA.FROMMILLIMETER:
      return evaluate(fromArgs);
    case OA.TOMILLIMETER:
      return evaluate(toArgs);
    case OA.FROMCENTIMETER:
      return evaluate(fromArgs);
    case OA.TOCENTIMETER:
      return evaluate(toArgs);
    case OA.FROMINCH:
      return evaluate(fromArgs);
    case OA.TOINCH:
      return evaluate(toArgs);
    case OA.FROMFEET:
      return evaluate(fromArgs);
    case OA.TOFEET:
      return evaluate(toArgs);
    case OA.FROMMETER:
      return evaluate(fromArgs);
    case OA.TOMETER:
      return evaluate(toArgs);
    case OA.FROMKILOMETER:
      return evaluate(fromArgs);
    case OA.TOKILOMETER:
      return evaluate(toArgs);
    case OA.FROMFAHRENHEIT:
      return evaluate(fromArgs);
    case OA.TOFAHRENHEIT:
      return evaluate(toArgs);
    case OA.FROMCELSIUS:
      return evaluate(fromArgs);
    case OA.TOCELSIUS:
      return evaluate(toArgs);
    case OA.FROMKELVIN:
      return evaluate(fromArgs);
    case OA.TOKELVIN:
      return evaluate(toArgs);
    case OA.FROMMILLIGRAM:
      return evaluate(fromArgs);
    case OA.TOMILLIGRAM:
      return evaluate(toArgs);
    case OA.FROMGRAM:
      return evaluate(fromArgs);
    case OA.TOGRAM:
      return evaluate(toArgs);
    case OA.FROMOUNCE:
      return evaluate(fromArgs);
    case OA.TOOUNCE:
      return evaluate(toArgs);
    case OA.FROMPOUND:
      return evaluate(fromArgs);
    case OA.TOPOUND:
      return evaluate(toArgs);
    case OA.FROMKILOGRAM:
      return evaluate(fromArgs);
    case OA.TOKILOGRAM:
      return evaluate(toArgs);
    default:
      return state;
  }
}
