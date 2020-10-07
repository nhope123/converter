
export const defaultState = {
                      unit:'length',
                      unitClass:['active','',''],
                      fromUnit:'fromMillimeter',
                      fromUnitOptions:['fromCentimeter','fromInch','fromFeet','fromMeter','fromKilometer'],
                      toUnit:'toCentimeter',
                      toUnitOptions:['toMillimeter','toInch','toFeet','toMeter','toKilometer'],
                      input:'0',
                      output:'0'
};

/*          ~~~ Action Types ~~~          */
// Unit Action types
const LENGTH = 'length';
const WEIGHT = 'weight';
const TEMP   = 'tempreature';
// length action types
const FROMMILLIMETER = 'fromMillimeter';
const FROMCENTIMETER = 'fromCentimeter';
const FROMINCH       = 'fromInch';
const FROMFEET       = 'fromFeet';
const FROMMETER      = 'fromMeter';
const FROMKILOMETER  = 'fromKilometer';

const TOMILLIMETER   = 'toMillimeter';
const TOCENTIMETER   = 'toCentimeter';
const TOINCH         = 'toInch';
const TOFEET         = 'toFeet';
const TOMETER        = 'toMeter';
const TOKILOMETER    = 'toKilometer';
// Temperature action types
const FROMFAHRENHEIT = 'fromFahrenheit';
const FROMCELSIUS    = 'fromCelsius';
const FROMKELVIN     = 'fromKelvin';

const TOFAHRENHEIT   = 'toFahrenheit';
const TOCELSIUS      = 'toCelsius';
const TOKELVIN       = 'toKelvin';
// Weight action Types
const FROMMILLIGRAM  = 'fromMilligram';
const FROMGRAM       = 'fromGram';
const FROMOUNCE      = 'fromOunce';
const FROMPOUND      = 'fromPound';
const FROMKILOGRAM   = 'fromKilogram';

const TOMILLIGRAM  = 'toMilligram';
const TOGRAM       = 'toGram';
const TOOUNCE      = 'toOunce';
const TOPOUND      = 'toPound';
const TOKILOGRAM   = 'toKilogram';

/*          ~~~ Action Creators ~~~          */
// Unit Action creators
export const lengthAction = ()=>{return {type:LENGTH}};
export const weigthAction = ()=>{return {type: WEIGHT}};
export const tempAction   = ()=>{return {type: TEMP}};
// Length Action Creators
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

// Temperature actions creators
export const fromFahrenheitAction = ()=>{return{type: FROMFAHRENHEIT, options:[FROMCELSIUS,FROMKELVIN]}};
export const fromCelsiusAction = ()=>{return{type: FROMCELSIUS, options:[FROMFAHRENHEIT,FROMKELVIN]}};
export const fromKelvinAction = ()=>{return{type: FROMKELVIN, options:[FROMFAHRENHEIT,FROMCELSIUS]}};

export const toFahrenheitAction = ()=>{return{type: TOFAHRENHEIT, options:[TOCELSIUS,TOKELVIN]}};
export const toCelsiusAction = ()=>{return{type: TOCELSIUS, options:[TOFAHRENHEIT,TOKELVIN]}};
export const toKelvinAction = ()=>{return{type: TOKELVIN, options:[TOFAHRENHEIT,TOCELSIUS]}};

// Weight actions creators
export const fromMilligramAction = ()=>{return {type:FROMMILLIGRAM, options: [FROMGRAM, FROMOUNCE, FROMPOUND, FROMKILOGRAM]}};
export const fromGramAction = ()=>{return {type:FROMGRAM, options: [FROMMILLIGRAM, FROMOUNCE, FROMPOUND, FROMKILOGRAM]}};
export const fromOunceAction = ()=>{return {type: FROMOUNCE, options: [FROMMILLIGRAM, FROMGRAM, FROMPOUND, FROMKILOGRAM]}};
export const fromPoundAction = ()=>{return {type: FROMPOUND,  options: [FROMMILLIGRAM, FROMGRAM, FROMOUNCE, FROMKILOGRAM]}};
export const fromKilogramAction = ()=>{return {type: FROMKILOGRAM,  options: [FROMMILLIGRAM, FROMGRAM, FROMOUNCE, FROMPOUND]}};

export const toMilligramAction = ()=>{return {type:TOMILLIGRAM, options: [TOGRAM, TOOUNCE, TOPOUND, TOKILOGRAM]}};
export const toGramAction = ()=>{return {type:TOGRAM, options: [TOMILLIGRAM, TOOUNCE, TOPOUND, TOKILOGRAM]}};
export const toOunceAction = ()=>{return {type: TOOUNCE, options: [TOMILLIGRAM, TOGRAM, TOPOUND, TOKILOGRAM]}};
export const toPoundAction = ()=>{return {type: TOPOUND,  options: [TOMILLIGRAM, TOGRAM, TOOUNCE, TOKILOGRAM]}};
export const toKilogramAction = ()=>{return {type: TOKILOGRAM,  options: [TOMILLIGRAM, TOGRAM, TOOUNCE, TOPOUND]}};
// Simpified setting state
const fromAssignState = (plate, game)=>{return Object.assign({},plate, {fromUnit: game.type, fromUnitOptions: game.options});};
const toAssignState = (plate, game)=>{return Object.assign({},plate, {toUnit: game.type, toUnitOptions: game.options});};

/*          ~~~ Reducer ~~~          */
export function unitSelectionReducer(state = defaultState, action){

  switch (action.type) {
    case LENGTH:
      return Object.assign({},state,{ unit: LENGTH,
                                      unitClass:['active','',''],
                                      fromUnit:FROMMILLIMETER,
                                      fromUnitOptions: [FROMCENTIMETER,FROMINCH,FROMFEET,FROMMETER,FROMKILOMETER],
                                      toUnit:TOCENTIMETER,
                                      toUnitOptions: [TOMILLIMETER ,TOINCH,TOFEET,TOMETER,TOKILOMETER],
                                      input:'0',
                                      output:'0'
                                    } );
    case WEIGHT:
      return Object.assign({},state,{ unit: WEIGHT,
                                      unitClass:['','active',''],
                                      fromUnit: FROMMILLIGRAM,
                                      fromUnitOptions: [FROMGRAM, FROMOUNCE, FROMPOUND, FROMKILOGRAM],
                                      toUnit:TOGRAM,
                                      toUnitOptions: [TOMILLIGRAM, TOOUNCE, TOPOUND, TOKILOGRAM],
                                      input:'0',
                                      output:'0'
                                    } );
      case TEMP:
        return Object.assign({},state,{ unit: TEMP,
                                        unitClass:['','','active'],
                                        fromUnit:FROMFAHRENHEIT,
                                        fromUnitOptions:[FROMCELSIUS,FROMKELVIN],
                                        toUnit:TOCELSIUS,
                                        toUnitOptions:[TOFAHRENHEIT,TOKELVIN],
                                        input:'0',
                                        output:'0'
                                      } );
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
    case FROMMILLIGRAM:
      return fromAssignState(state,action);
    case TOMILLIGRAM:
      return toAssignState(state,action);
    case FROMGRAM:
      return fromAssignState(state,action);
    case TOGRAM:
      return toAssignState(state,action);
    case FROMOUNCE:
      return fromAssignState(state,action);
    case TOOUNCE:
      return toAssignState(state,action);
    case FROMPOUND:
      return fromAssignState(state,action);
    case TOPOUND:
      return toAssignState(state,action);
      case FROMKILOGRAM:
        return fromAssignState(state,action);
      case TOKILOGRAM:
        return toAssignState(state,action);
    default:
      return state;
  }
}
