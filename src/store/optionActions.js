import {defaultState} from './controlActions.js';

// length action types
const FROMMILLIMETER = 'fromMillimeter';
const TOMILLIMETER   = 'toMillimeter';
const FROMCENTIMETER = 'fromCentimeter';
const TOCENTIMETER   = 'toCentimeter';
const FROMINCH       = 'fromInch';
const TOINCH         = 'toInch';
const FROMFEET       = 'fromFeet';
const TOFEET         = 'toFeet';
const FROMMETER      = 'fromMeter';
const TOMETER        = 'toMeter';
const FROMKILOMETER  = 'fromKilometer';
const TOKILOMETER    = 'toKilometer';

// ['fromMillimeter','fromCentimeter','fromInch','fromFeet','fromMeter','fromKilometer']
// Length Actions
export const fromMillimeterAction = ()=>{return{type: FROMMILLIMETER, options:[FROMCENTIMETER,FROMINCH,FROMFEET,FROMMETER,FROMKILOMETER]}};
export const toMillimeterAction   = ()=>{return{type: TOMILLIMETER, options:[TOCENTIMETER,TOINCH,TOFEET,TOMETER,TOKILOMETER]}};
export const fromCentimeterAction = ()=>{return{type: FROMCENTIMETER, options:[FROMMILLIMETER,FROMINCH,FROMFEET,FROMMETER,FROMKILOMETER]}};
export const toCentimeterAction   = ()=>{return{type: TOCENTIMETER, options:[TOMILLIMETER ,TOINCH,TOFEET,TOMETER,TOKILOMETER]}};
export const fromInchAction       = ()=>{return{type: FROMINCH, options:[FROMMILLIMETER,FROMCENTIMETER,FROMFEET,FROMMETER,FROMKILOMETER]}};
export const toInchAction         = ()=>{return{type: TOINCH, options:[TOMILLIMETER ,TOCENTIMETER,TOFEET,TOMETER,TOKILOMETER]}};
export const fromFeetAction       = ()=>{return{type: FROMFEET, options:[FROMMILLIMETER,FROMCENTIMETER,FROMINCH,FROMMETER,FROMKILOMETER]}};
export const toFeetAction         = ()=>{return{type: TOFEET, options:[TOMILLIMETER ,TOCENTIMETER,TOINCH,TOMETER,TOKILOMETER]}};
export const fromMeterAction      = ()=>{return{type: FROMMETER, options:[FROMMILLIMETER,FROMCENTIMETER,FROMINCH,FROMFEET,FROMKILOMETER]}};
export const toMeterAction        = ()=>{return{type: TOMETER, options:[TOMILLIMETER ,TOCENTIMETER,TOINCH,TOFEET,TOKILOMETER]}};
export const fromKilometerAction  = ()=>{return{type: FROMKILOMETER, options:[FROMMILLIMETER,FROMCENTIMETER,FROMINCH,FROMFEET,FROMMETER]}};
export const toKilometerAction    = ()=>{return{type: TOKILOMETER, options:[TOMILLIMETER ,TOCENTIMETER,TOINCH,TOFEET,TOMETER]}};


export const conversionOptionReducer = (state = defaultState, action)=>{
  switch (action.type) {
    case FROMMILLIMETER:
      return Object.assign({},state, {fromUnit: action.type, fromUnitOptions: action.options});
    case TOMILLIMETER:
      return Object.assign({},state, {toUnit: action.type, toUnitOptions: action.options});
    case FROMCENTIMETER:
      return Object.assign({},state, {fromUnit: action.type, fromUnitOptions: action.options});
    case TOCENTIMETER:
      return Object.assign({},state, {toUnit: action.type, toUnitOptions: action.options});
    case FROMINCH:
      return Object.assign({},state, {fromUnit: action.type, fromUnitOptions: action.options});
    case TOINCH:
      return Object.assign({},state, {toUnit: action.type, toUnitOptions: action.options});
    case FROMFEET:
      return Object.assign({},state, {fromUnit: action.type, fromUnitOptions: action.options});
    case TOFEET:
      return Object.assign({},state, {toUnit: action.type, toUnitOptions: action.options});
    case FROMMETER:
      return Object.assign({},state, {fromUnit: action.type, fromUnitOptions: action.options});
    case TOMETER:
      return Object.assign({},state, {toUnit: action.type, toUnitOptions: action.options});
    case FROMKILOMETER:
      return Object.assign({},state, {fromUnit: action.type, fromUnitOptions: action.options});
    case TOKILOMETER:
      return Object.assign({},state, {toUnit: action.type, toUnitOptions: action.options});
  default:
      return state;
  }
};
