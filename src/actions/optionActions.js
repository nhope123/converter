
// length action types
export const FROMMILLIMETER = 'fromMillimeter';
export const FROMCENTIMETER = 'fromCentimeter';
export const FROMINCH       = 'fromInch';
export const FROMFEET       = 'fromFeet';
export const FROMMETER      = 'fromMeter';
export const FROMKILOMETER  = 'fromKilometer';

export const TOMILLIMETER   = 'toMillimeter';
export const TOCENTIMETER   = 'toCentimeter';
export const TOINCH         = 'toInch';
export const TOFEET         = 'toFeet';
export const TOMETER        = 'toMeter';
export const TOKILOMETER    = 'toKilometer';
// Temperature action types
export const FROMFAHRENHEIT = 'fromFahrenheit';
export const FROMCELSIUS    = 'fromCelsius';
export const FROMKELVIN     = 'fromKelvin';

export const TOFAHRENHEIT   = 'toFahrenheit';
export const TOCELSIUS      = 'toCelsius';
export const TOKELVIN       = 'toKelvin';
// Weight action Types
export const FROMMILLIGRAM  = 'fromMilligram';
export const FROMGRAM       = 'fromGram';
export const FROMOUNCE      = 'fromOunce';
export const FROMPOUND      = 'fromPound';
export const FROMKILOGRAM   = 'fromKilogram';

export const TOMILLIGRAM  = 'toMilligram';
export const TOGRAM       = 'toGram';
export const TOOUNCE      = 'toOunce';
export const TOPOUND      = 'toPound';
export const TOKILOGRAM   = 'toKilogram';

// Length Action Creators
export const fromMillimeterAction = (val)=>{return{
        counterUnit: val, type: FROMMILLIMETER,
        options:[FROMCENTIMETER,FROMINCH,FROMFEET,FROMMETER,FROMKILOMETER],
        symbol: 'mm'
      }};
export const fromCentimeterAction = (val)=>{return{
        counterUnit: val, type: FROMCENTIMETER,
        options:[FROMMILLIMETER,FROMINCH,FROMFEET,FROMMETER,FROMKILOMETER],
        symbol: 'cm'
      }};
export const fromInchAction = (val)=>{return{ counterUnit: val, type: FROMINCH,
        options:[FROMMILLIMETER,FROMCENTIMETER,FROMFEET,FROMMETER,FROMKILOMETER],
        symbol: 'in'
      }};
export const fromFeetAction = (val)=>{return{ counterUnit: val, type: FROMFEET,
        options:[FROMMILLIMETER,FROMCENTIMETER,FROMINCH,FROMMETER,FROMKILOMETER],
        symbol: 'ft'
      }};
export const fromMeterAction = (val)=>{return{ counterUnit: val, type: FROMMETER,
        options:[FROMMILLIMETER,FROMCENTIMETER,FROMINCH,FROMFEET,FROMKILOMETER],
        symbol: 'm'
      }};
export const fromKilometerAction = (val)=>{return{
        counterUnit: val, type: FROMKILOMETER,
        options:[FROMMILLIMETER,FROMCENTIMETER,FROMINCH,FROMFEET,FROMMETER],
        symbol: 'km'
      }};

export const toMillimeterAction = (val)=>{return{
        counterUnit: val, type: TOMILLIMETER,
        options:[TOCENTIMETER,TOINCH,TOFEET,TOMETER,TOKILOMETER],
        symbol: 'mm'
      }};
export const toCentimeterAction = (val)=>{return{
        counterUnit: val, type: TOCENTIMETER,
        options:[TOMILLIMETER ,TOINCH,TOFEET,TOMETER,TOKILOMETER],
        symbol: 'cm'
      }};
export const toInchAction = (val)=>{return{ counterUnit: val, type: TOINCH,
        options:[TOMILLIMETER ,TOCENTIMETER,TOFEET,TOMETER,TOKILOMETER],
        symbol: 'in'
      }};
export const toFeetAction = (val)=>{return{ counterUnit: val, type: TOFEET,
        options:[TOMILLIMETER ,TOCENTIMETER,TOINCH,TOMETER,TOKILOMETER],
        symbol: 'ft'
      }};
export const toMeterAction = (val)=>{return{ counterUnit: val, type: TOMETER,
        options:[TOMILLIMETER ,TOCENTIMETER,TOINCH,TOFEET,TOKILOMETER],
        symbol: 'm'
      }};
export const toKilometerAction = (val)=>{return{
        counterUnit: val, type: TOKILOMETER,
        options:[TOMILLIMETER ,TOCENTIMETER,TOINCH,TOFEET,TOMETER],
        symbol: 'km'
      }};

// Temperature actions creators
export const fromFahrenheitAction = (val)=>{return{
        counterUnit: val, type: FROMFAHRENHEIT, options:[FROMCELSIUS,FROMKELVIN],
        symbol: '°F'
      }};
export const fromCelsiusAction = (val)=>{return{
        counterUnit: val, type: FROMCELSIUS, options:[FROMFAHRENHEIT,FROMKELVIN],
        symbol: '°C'
      }};
export const fromKelvinAction = (val)=>{return{
        counterUnit: val, type: FROMKELVIN, options:[FROMFAHRENHEIT,FROMCELSIUS],
        symbol: '°K'
      }};

export const toFahrenheitAction = (val)=>{return{
        counterUnit: val, type: TOFAHRENHEIT, options:[TOCELSIUS,TOKELVIN],
        symbol: '°F' 
      }};
export const toCelsiusAction = (val)=>{return{
        counterUnit: val, type: TOCELSIUS, options:[TOFAHRENHEIT,TOKELVIN],
        symbol: '°C'
      }};
export const toKelvinAction = (val)=>{return{
        counterUnit: val, type: TOKELVIN, options:[TOFAHRENHEIT,TOCELSIUS],
        symbol: '°K'
      }};

// Weight actions creators
export const fromMilligramAction = (val)=>{return {
        counterUnit: val, type:FROMMILLIGRAM,
        options: [FROMGRAM, FROMOUNCE, FROMPOUND, FROMKILOGRAM], symbol: 'mg'
      }};
export const fromGramAction = (val)=>{return { counterUnit: val, type:FROMGRAM,
        options: [FROMMILLIGRAM, FROMOUNCE, FROMPOUND, FROMKILOGRAM], symbol: 'g '
      }};
export const fromOunceAction = (val)=>{return { counterUnit: val, type: FROMOUNCE,
        options: [FROMMILLIGRAM, FROMGRAM, FROMPOUND, FROMKILOGRAM], symbol: 'oz'
      }};
export const fromPoundAction = (val)=>{return { counterUnit: val, type: FROMPOUND,
        options: [FROMMILLIGRAM, FROMGRAM, FROMOUNCE, FROMKILOGRAM], symbol: 'lb'
      }};
export const fromKilogramAction = (val)=>{return {
        counterUnit: val, type: FROMKILOGRAM,
        options: [FROMMILLIGRAM, FROMGRAM, FROMOUNCE, FROMPOUND], symbol: 'kg'
      }};

export const toMilligramAction = (val)=>{return {
        counterUnit: val, type:TOMILLIGRAM,
        options: [TOGRAM, TOOUNCE, TOPOUND, TOKILOGRAM], symbol: 'mg'
      }};
export const toGramAction = (val)=>{return { counterUnit: val, type:TOGRAM,
        options: [TOMILLIGRAM, TOOUNCE, TOPOUND, TOKILOGRAM], symbol: 'g '
      }};
export const toOunceAction = (val)=>{return { counterUnit: val, type: TOOUNCE,
        options: [TOMILLIGRAM, TOGRAM, TOPOUND, TOKILOGRAM], symbol: 'oz'
      }};
export const toPoundAction = (val)=>{return { counterUnit: val, type: TOPOUND,
        options: [TOMILLIGRAM, TOGRAM, TOOUNCE, TOKILOGRAM], symbol: 'lb'
      }};
export const toKilogramAction = (val)=>{return { counterUnit: val, type: TOKILOGRAM,
        options: [TOMILLIGRAM, TOGRAM, TOOUNCE, TOPOUND], symbol: 'kg'
      }};

// Option Length initial state value
export const initializeLength = {
    fromUnit: FROMMILLIMETER,
    fromUnitOptions: [FROMCENTIMETER, FROMINCH, FROMFEET, FROMMETER, FROMKILOMETER],
    toUnit: TOCENTIMETER,
    toUnitOptions: [TOMILLIMETER, TOINCH, TOFEET, TOMETER, TOKILOMETER]
};

// Option Weight initial state value
export const initializeWeight = {
    fromUnit: FROMMILLIGRAM,
    fromUnitOptions: [ FROMGRAM, FROMOUNCE, FROMPOUND, FROMKILOGRAM],
    toUnit: TOGRAM,
    toUnitOptions: [ TOMILLIGRAM, TOOUNCE, TOPOUND, TOKILOGRAM]
};
// Option Temperature initial state value
export const initializeTemp = {
    fromUnit: FROMFAHRENHEIT,
    fromUnitOptions: [ FROMCELSIUS, FROMKELVIN],
    toUnit: TOCELSIUS,
    toUnitOptions: [ TOFAHRENHEIT, TOKELVIN]
};
