import {defaultState} from './controlActions.js';


const conversionValues = {

  'fromCentimeter': {toMillimeter: 10, toCentimeter: 1, toInch:0.3937007874,
                      toFeet:0.032808399, toMeter:0.01, toKilometer:0.00001},
  'fromInch': {toMillimeter: 25.4, toCentimeter: 2.54, toInch: 1,
                toFeet: 0.0833333333, toMeter: 0.0254,toKilometer:0.0000254},
  'fromFeet': {toMillimeter: 304.8,  toCentimeter:30.48,toInch:12, toFeet:1,
                toMeter: 0.3048, toKilometer:0.0003048},
  'fromMeter': {toMillimeter: 1000, toCentimeter: 100, toInch: 39.3700787402,
                toFeet:3.280839895, toMeter: 1, toKilometer:0.001},
  'fromKilometer': {toMillimeter: 1000000, toCentimeter: 100000,
                    toInch: 39370.078740157, toFeet: 3280.8398950131,
                    toMeter: 1000, toKilometer: 1},
  'fromMilligram': {toMilligram: 1, toGram: 1.0e-3, toOunce: 3.5274e-5, toPound: 2.2046226218488e-6, toKilogram: 1.0e-6},
  'fromGram': {toMilligram:1.0e3 , toGram: 1, toOunce:3.52739619e-2, toPound: 2.2046226e-3, toKilogram:1.0e-3 },
  'fromOunce': {toMilligram: 28349.523125, toGram:28.349523125, toOunce: 1, toPound: 6.25e-2, toKilogram: 2.83495231e-2  },
  'fromPound': {toMilligram: 453592.37, toGram:4.5359237e2 , toOunce: 16, toPound: 1, toKilogram:4.5359237e-1},
  'fromKilogram': {toMilligram: 1.0e6, toGram:1.0e3 , toOunce:35.2739619496, toPound: 2.2046226218, toKilogram: 1},

  }


  const millimeterValues ={ toMillimeter: 1, toCentimeter: 0.01, toInch:0.0393700787,
                        toFeet:0.0032808399, toMeter:0.001, toKilometer:0.000001};
const MILLIMETERCONVERTOR = 'CONVERTFROMMILLIMETER';
const UPDATEINPUT = 'UPDATEINPUT';

export const millimeterConvertAction =()=>{return {type: MILLIMETERCONVERTOR}};
export const updateInputAction = (event)=>{
  console.log('nial : '+event[0]);
  return {type:UPDATEINPUT, value: event.value}};


let result;
let convertToUnit;
let number

const calculatedReducer = (state = defaultState, action)=>{
  convertToUnit = state['toUnit'];
  number = state['input'];
  switch (action.type) {
    case UPDATEINPUT:
      return Object.assign({},state,{input: action.value});

    case  MILLIMETERCONVERTOR:
      result = (convertToUnit === 'toCentimeter')? ((number * millimeterValues['toCentimeter'] )+' cm'):
          (convertToUnit === 'toInch')? ((number * millimeterValues['toInch'] )+' in'):
            (convertToUnit === 'toFeet')? ((number * millimeterValues['toFeet'] )+' ft'):
              (convertToUnit === 'toMeter')? ((number * millimeterValues['toMeter'] ) +' m'):
                (convertToUnit === 'toKilometer')? ((number * millimeterValues['toKilometer'] )+' km'):
                  ((number)+' mm');
      return Object.assign({},state,{output: result});

    default:
      return state;
  }




}
