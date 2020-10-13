
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
        options:[FROMCENTIMETER,FROMINCH,FROMFEET,FROMMETER,FROMKILOMETER]
      }};
export const fromCentimeterAction = (val)=>{return{
        counterUnit: val, type: FROMCENTIMETER,
        options:[FROMMILLIMETER,FROMINCH,FROMFEET,FROMMETER,FROMKILOMETER]
      }};
export const fromInchAction = (val)=>{return{ counterUnit: val, type: FROMINCH,
        options:[FROMMILLIMETER,FROMCENTIMETER,FROMFEET,FROMMETER,FROMKILOMETER]
      }};
export const fromFeetAction = (val)=>{return{ counterUnit: val, type: FROMFEET,
        options:[FROMMILLIMETER,FROMCENTIMETER,FROMINCH,FROMMETER,FROMKILOMETER]
      }};
export const fromMeterAction = (val)=>{return{ counterUnit: val, type: FROMMETER,
        options:[FROMMILLIMETER,FROMCENTIMETER,FROMINCH,FROMFEET,FROMKILOMETER]
      }};
export const fromKilometerAction = (val)=>{return{
        counterUnit: val, type: FROMKILOMETER,
        options:[FROMMILLIMETER,FROMCENTIMETER,FROMINCH,FROMFEET,FROMMETER]
      }};

export const toMillimeterAction = (val)=>{return{
        counterUnit: val, type: TOMILLIMETER,
        options:[TOCENTIMETER,TOINCH,TOFEET,TOMETER,TOKILOMETER]
      }};
export const toCentimeterAction = (val)=>{return{
        counterUnit: val, type: TOCENTIMETER,
        options:[TOMILLIMETER ,TOINCH,TOFEET,TOMETER,TOKILOMETER]
      }};
export const toInchAction = (val)=>{return{ counterUnit: val, type: TOINCH,
        options:[TOMILLIMETER ,TOCENTIMETER,TOFEET,TOMETER,TOKILOMETER]
      }};
export const toFeetAction = (val)=>{return{ counterUnit: val, type: TOFEET,
        options:[TOMILLIMETER ,TOCENTIMETER,TOINCH,TOMETER,TOKILOMETER]
      }};
export const toMeterAction = (val)=>{return{ counterUnit: val, type: TOMETER,
        options:[TOMILLIMETER ,TOCENTIMETER,TOINCH,TOFEET,TOKILOMETER]
      }};
export const toKilometerAction = (val)=>{return{
        counterUnit: val, type: TOKILOMETER,
        options:[TOMILLIMETER ,TOCENTIMETER,TOINCH,TOFEET,TOMETER]
      }};

// Temperature actions creators
export const fromFahrenheitAction = (val)=>{return{
        counterUnit: val, type: FROMFAHRENHEIT, options:[FROMCELSIUS,FROMKELVIN]
      }};
export const fromCelsiusAction = (val)=>{return{
        counterUnit: val, type: FROMCELSIUS, options:[FROMFAHRENHEIT,FROMKELVIN]
      }};
export const fromKelvinAction = (val)=>{return{
        counterUnit: val, type: FROMKELVIN, options:[FROMFAHRENHEIT,FROMCELSIUS]
      }};

export const toFahrenheitAction = (val)=>{return{
        counterUnit: val, type: TOFAHRENHEIT, options:[TOCELSIUS,TOKELVIN]
      }};
export const toCelsiusAction = (val)=>{return{
        counterUnit: val, type: TOCELSIUS, options:[TOFAHRENHEIT,TOKELVIN]
      }};
export const toKelvinAction = (val)=>{return{
        counterUnit: val, type: TOKELVIN, options:[TOFAHRENHEIT,TOCELSIUS]
      }};

// Weight actions creators
export const fromMilligramAction = (val)=>{return {
        counterUnit: val, type:FROMMILLIGRAM,
        options: [FROMGRAM, FROMOUNCE, FROMPOUND, FROMKILOGRAM]
      }};
export const fromGramAction = (val)=>{return { counterUnit: val, type:FROMGRAM,
        options: [FROMMILLIGRAM, FROMOUNCE, FROMPOUND, FROMKILOGRAM]
      }};
export const fromOunceAction = (val)=>{return { counterUnit: val, type: FROMOUNCE,
        options: [FROMMILLIGRAM, FROMGRAM, FROMPOUND, FROMKILOGRAM]
      }};
export const fromPoundAction = (val)=>{return { counterUnit: val, type: FROMPOUND,
        options: [FROMMILLIGRAM, FROMGRAM, FROMOUNCE, FROMKILOGRAM]
      }};
export const fromKilogramAction = (val)=>{return {
        counterUnit: val, type: FROMKILOGRAM,
        options: [FROMMILLIGRAM, FROMGRAM, FROMOUNCE, FROMPOUND]
      }};

export const toMilligramAction = (val)=>{return {
        counterUnit: val, type:TOMILLIGRAM,
        options: [TOGRAM, TOOUNCE, TOPOUND, TOKILOGRAM]
      }};
export const toGramAction = (val)=>{return { counterUnit: val, type:TOGRAM,
        options: [TOMILLIGRAM, TOOUNCE, TOPOUND, TOKILOGRAM]
      }};
export const toOunceAction = (val)=>{return { counterUnit: val, type: TOOUNCE,
        options: [TOMILLIGRAM, TOGRAM, TOPOUND, TOKILOGRAM]
      }};
export const toPoundAction = (val)=>{return { counterUnit: val, type: TOPOUND,
        options: [TOMILLIGRAM, TOGRAM, TOOUNCE, TOKILOGRAM]
      }};
export const toKilogramAction = (val)=>{return { counterUnit: val, type: TOKILOGRAM,
        options: [TOMILLIGRAM, TOGRAM, TOOUNCE, TOPOUND]
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
