



/*          ~~~ Action Types ~~~          */
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

/*          ~~~ Action Creators ~~~          */
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
export const fromCelsiusAction    = ()=>{return{type: FROMCELSIUS, options:[FROMFAHRENHEIT,FROMKELVIN]}};
export const fromKelvinAction     = ()=>{return{type: FROMKELVIN, options:[FROMFAHRENHEIT,FROMCELSIUS]}};

export const toFahrenheitAction = ()=>{return{type: TOFAHRENHEIT, options:[TOCELSIUS,TOKELVIN]}};
export const toCelsiusAction    = ()=>{return{type: TOCELSIUS, options:[TOFAHRENHEIT,TOKELVIN]}};
export const toKelvinAction     = ()=>{return{type: TOKELVIN, options:[TOFAHRENHEIT,TOCELSIUS]}};

// Weight actions creators
export const fromMilligramAction = ()=>{return {type:FROMMILLIGRAM, options: [FROMGRAM, FROMOUNCE, FROMPOUND, FROMKILOGRAM]}};
export const fromGramAction      = ()=>{return {type:FROMGRAM, options: [FROMMILLIGRAM, FROMOUNCE, FROMPOUND, FROMKILOGRAM]}};
export const fromOunceAction     = ()=>{return {type: FROMOUNCE, options: [FROMMILLIGRAM, FROMGRAM, FROMPOUND, FROMKILOGRAM]}};
export const fromPoundAction     = ()=>{return {type: FROMPOUND,  options: [FROMMILLIGRAM, FROMGRAM, FROMOUNCE, FROMKILOGRAM]}};
export const fromKilogramAction  = ()=>{return {type: FROMKILOGRAM,  options: [FROMMILLIGRAM, FROMGRAM, FROMOUNCE, FROMPOUND]}};

export const toMilligramAction = ()=>{return {type:TOMILLIGRAM, options: [TOGRAM, TOOUNCE, TOPOUND, TOKILOGRAM]}};
export const toGramAction      = ()=>{return {type:TOGRAM, options: [TOMILLIGRAM, TOOUNCE, TOPOUND, TOKILOGRAM]}};
export const toOunceAction     = ()=>{return {type: TOOUNCE, options: [TOMILLIGRAM, TOGRAM, TOPOUND, TOKILOGRAM]}};
export const toPoundAction     = ()=>{return {type: TOPOUND,  options: [TOMILLIGRAM, TOGRAM, TOOUNCE, TOKILOGRAM]}};
export const toKilogramAction  = ()=>{return {type: TOKILOGRAM,  options: [TOMILLIGRAM, TOGRAM, TOOUNCE, TOPOUND]}};

/*          ~~~ Initialize values ~~~          */
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
