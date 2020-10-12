import * as Unit from './../actions/unitActions.js';
import {CONVERT} from './../actions/convertActions.js';
import {convertLength, convertWeight, convertTemp} from './../conversion/lengthConversion.js';

const conversionDefault = {input: 0, output: 0};
const lengthList = ['fromMillimeter', 'fromCentimeter','fromInch','fromFeet','fromMeter','fromKilometer'];
const weightList = ['fromMilligram', 'fromGram','fromOunce', 'fromPound','fromKilogram'];
const tempList = ['fromFahrenheit',  'fromCelsius','fromKelvin'];

function evaluate(anObject){
  var rawData = anObject.data;
  var unitFrom = anObject.fromUnit;
  var unitTo = anObject.toUnit;
  var inputValue = Math.abs(parseFloat(rawData));
  var outputReturn;
  var inputReturn =
    (rawData.endsWith('.') && (inputValue.toString()).length === (rawData.length -1) &&
      (rawData.match(/[.][0-9]*[.]/) === null)) ? rawData :
          (rawData.endsWith('0') && rawData.includes('.'))? rawData : inputValue ;

//console.log('From: '+unitFrom +', To: '+anObject.toUnit+', Num: '+inputValue);

  outputReturn = (lengthList.includes(unitFrom))? convertLength(inputValue, unitFrom, unitTo):
                    (weightList.includes(unitFrom))? convertWeight(inputValue, unitFrom, unitTo):
                        (tempList.includes(unitFrom))? convertTemp(inputValue, unitFrom, unitTo): '';


  console.log('Raw input: '+rawData +', change value: '+inputValue);
  return {input:inputReturn, output: outputReturn};
}

export default function convertReducer(state= conversionDefault, action){
  switch (action.type) {
    case Unit.LENGTH || Unit.WEIGHT || Unit.TEMP:
      return conversionDefault;
    case CONVERT:


      return Object.assign({}, state, evaluate(action));

    default:
      return state;
  }
}
