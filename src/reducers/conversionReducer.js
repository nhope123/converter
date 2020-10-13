import * as Unit from './../actions/unitActions.js';
import * as OA from './../actions/optionActions.js';
import {CONVERT} from './../actions/convertActions.js';
import {evaluate} from './../conversion/unitConversion.js';


// The default and initialing value for the Interact component and states
const conversionDefault = {input: 0, output: 0};

// Reducer connected to the Interact component and states
export default function convertReducer(state= conversionDefault, action){
  //var state

  switch (action.type) {
    case Unit.LENGTH :
      return conversionDefault;
    case Unit.WEIGHT :
      return conversionDefault;
    case Unit.TEMP:
      return conversionDefault;
    case CONVERT:
      return evaluate(action);
  /*  case OA.FROMMILLIMETER:
      return evaluate(action);
    case OA.TOMILLIMETER:
      return evaluate(action);
    case OA.FROMCENTIMETER:
      return evaluate(action);
    case OA.TOCENTIMETER:
      return evaluate(action);
    case OA.FROMINCH:
      return evaluate(action);
    case OA.TOINCH:
      return evaluate(action);
    case OA.FROMFEET:
      return evaluate(action);
    case OA.TOFEET:
      return evaluate(action);
    case OA.FROMMETER:
      return evaluate(action);
    case OA.TOMETER:
      return evaluate(action);
    case OA.FROMKILOMETER:
      return evaluate(action);
    case OA.TOKILOMETER:
      return evaluate(action);
    case OA.FROMFAHRENHEIT:
      return evaluate(action);
    case OA.TOFAHRENHEIT:
      return evaluate(action);
    case OA.FROMCELSIUS:
      return evaluate(action);
    case OA.TOCELSIUS:
      return evaluate(action);
    case OA.FROMKELVIN:
      return evaluate(action);
    case OA.TOKELVIN:
      return evaluate(action);
    case OA.FROMMILLIGRAM:
      return evaluate(action);
    case OA.TOMILLIGRAM:
      return evaluate(action);
    case OA.FROMGRAM:
      return evaluate(action);
    case OA.TOGRAM:
      return evaluate(action);
    case OA.FROMOUNCE:
      return evaluate(action);
    case OA.TOOUNCE:
      return evaluate(action);
    case OA.FROMPOUND:
      return evaluate(action);
    case OA.TOPOUND:
      return evaluate(action);
    case OA.FROMKILOGRAM:
      return evaluate(action);
    case OA.TOKILOGRAM:
      return evaluate(action); */
    default:
      return state;
  }
}
