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
// Temperature action types
const FROMFAHRENHEIT = 'fromFahrenheit';
const TOFAHRENHEIT   = 'toFahrenheit';
const FROMCELSIUS    = 'fromCelsius';
const TOCELSIUS      = 'toCelsius';
const FROMKELVIN     = 'fromKelvin';
const TOKELVIN       = 'toKelvin';



//['Fahrenheit','Celsius','Kelvin']
// ['fromMillimeter','fromCentimeter','fromInch','fromFeet','fromMeter','fromKilometer']
// Length Actions
export const fromMillimeterAction = ()=>{return{type: FROMMILLIMETER, options:[FROMCENTIMETER,FROMINCH,FROMFEET,FROMMETER,FROMKILOMETER]}};
export const fromCentimeterAction = ()=>{return{type: FROMCENTIMETER, options:[FROMMILLIMETER,FROMINCH,FROMFEET,FROMMETER,FROMKILOMETER]}};
export const fromInchAction       = ()=>{return{type: FROMINCH, options:[FROMMILLIMETER,FROMCENTIMETER,FROMFEET,FROMMETER,FROMKILOMETER]}};
export const fromFeetAction       = ()=>{return{type: FROMFEET, options:[FROMMILLIMETER,FROMCENTIMETER,FROMINCH,FROMMETER,FROMKILOMETER]}};
export const fromMeterAction      = ()=>{return{type: FROMMETER, options:[FROMMILLIMETER,FROMCENTIMETER,FROMINCH,FROMFEET,FROMKILOMETER]}};
export const fromKilometerAction  = ()=>{return{type: FROMKILOMETER, options:[FROMMILLIMETER,FROMCENTIMETER,FROMINCH,FROMFEET,FROMMETER]}};

export const toMillimeterAction   = ()=>{return{type: TOMILLIMETER, options:[TOCENTIMETER,TOINCH,TOFEET,TOMETER,TOKILOMETER]}};
export const toCentimeterAction   = ()=>{return{type: TOCENTIMETER, options:[TOMILLIMETER ,TOINCH,TOFEET,TOMETER,TOKILOMETER]}};
export const toInchAction         = ()=>{return{type: TOINCH, options:[TOMILLIMETER ,TOCENTIMETER,TOFEET,TOMETER,TOKILOMETER]}};
export const toFeetAction         = ()=>{return{type: TOFEET, options:[TOMILLIMETER ,TOCENTIMETER,TOINCH,TOMETER,TOKILOMETER]}};
export const toMeterAction        = ()=>{return{type: TOMETER, options:[TOMILLIMETER ,TOCENTIMETER,TOINCH,TOFEET,TOKILOMETER]}};
export const toKilometerAction    = ()=>{return{type: TOKILOMETER, options:[TOMILLIMETER ,TOCENTIMETER,TOINCH,TOFEET,TOMETER]}};

// Temperature actions
export const fromFahrenheitAction = ()=>{return{type: FROMFAHRENHEIT, options:[FROMCELSIUS,FROMKELVIN]}};
export const fromCelsiusAction = ()=>{return{type: FROMCELSIUS, options:[FROMFAHRENHEIT,FROMKELVIN]}};
export const fromKelvinAction = ()=>{return{type: FROMKELVIN, options:[FROMFAHRENHEIT,FROMCELSIUS]}};

export const toFahrenheitAction = ()=>{return{type: TOFAHRENHEIT, options:[TOCELSIUS,TOKELVIN]}};
export const toCelsiusAction = ()=>{return{type: TOCELSIUS, options:[TOFAHRENHEIT,TOKELVIN]}};
export const toKelvinAction = ()=>{return{type: TOKELVIN, options:[TOFAHRENHEIT,TOCELSIUS]}};

const fromAssignState = (plate, game)=>{return Object.assign({},plate, {fromUnit: game.type, fromUnitOptions: game.options});};
const toAssignState = (plate, game)=>{return Object.assign({},plate, {toUnit: game.type, toUnitOptions: game.options});};

export const conversionOptionReducer = (state = defaultState, action)=>{
  switch (action.type) {
    case FROMMILLIMETER:
      return fromAssignState(state,action);
    case TOMILLIMETER:
      return toAssignState(state,action);
    case FROMCENTIMETER:
      return fromAssignState(state,action);
    case TOCENTIMETER:
      return toAssignState(state,action);
    case FROMINCH:
      return fromAssignState(state,action);
    case TOINCH:
      return toAssignState(state,action);
    case FROMFEET:
      return fromAssignState(state,action);
    case TOFEET:
      return toAssignState(state,action);
    case FROMMETER:
      return fromAssignState(state,action);
    case TOMETER:
      return toAssignState(state,action);
    case FROMKILOMETER:
      return fromAssignState(state,action);
    case TOKILOMETER:
      return toAssignState(state,action);
    case FROMFAHRENHEIT:
      return fromAssignState(state,action);
    case TOFAHRENHEIT:
      return toAssignState(state,action);
    case FROMCELSIUS:
      return fromAssignState(state,action);
    case TOCELSIUS:
      return toAssignState(state,action);
    case FROMKELVIN:
      return fromAssignState(state,action);
    case TOKELVIN:
      return toAssignState(state,action);






  default:
      return state;
  }
};
