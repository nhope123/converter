
const lengthList = ['fromMillimeter', 'fromCentimeter','fromInch','fromFeet','fromMeter','fromKilometer'];
const weightList = ['fromMilligram', 'fromGram','fromOunce', 'fromPound','fromKilogram'];
const tempList = ['fromFahrenheit',  'fromCelsius','fromKelvin'];


// Conversion values for length units
const lengthConversionValues = {
  'fromMillimeter': { toMillimeter: 1, toCentimeter: 0.01, toInch:0.0393700787,
                      toFeet:0.0032808399, toMeter:0.001, toKilometer:0.000001
                    },
  'fromCentimeter': { toMillimeter: 10, toCentimeter: 1, toInch:0.3937007874,
                      toFeet:0.032808399, toMeter:0.01, toKilometer:0.00001
                    },
  'fromInch':       { toMillimeter: 25.4, toCentimeter: 2.54, toInch: 1,
                      toFeet: 0.0833333333, toMeter: 0.0254,toKilometer:0.0000254
                    },
  'fromFeet':       { toMillimeter: 304.8,  toCentimeter:30.48,toInch:12, toFeet:1,
                      toMeter: 0.3048, toKilometer:0.0003048
                    },
  'fromMeter':      { toMillimeter: 1000, toCentimeter: 100, toInch: 39.3700787402,
                      toFeet:3.280839895, toMeter: 1, toKilometer:0.001
                    },
  'fromKilometer':  { toMillimeter: 1000000, toCentimeter: 100000,
                      toInch: 39370.078740157, toFeet: 3280.8398950131,
                      toMeter: 1000, toKilometer: 1
                    }
};

// Conversion values for Weight units
const weightConversionValues = {
  'fromMilligram': { toMilligram: 1, toGram: 1.0e-3, toOunce: 3.5274e-5,
                     toPound: 2.2046226218488e-6, toKilogram: 1.0e-6
                   },
  'fromGram':      { toMilligram:1.0e3 , toGram: 1, toOunce:3.52739619e-2,
                     toPound: 2.2046226e-3, toKilogram:1.0e-3
                   },
  'fromOunce':     { toMilligram: 28349.523125, toGram:28.349523125, toOunce: 1,
                     toPound: 6.25e-2, toKilogram: 2.83495231e-2
                   },
  'fromPound':     { toMilligram: 453592.37, toGram:4.5359237e2 , toOunce: 16,
                     toPound: 1, toKilogram:4.5359237e-1
                   },
  'fromKilogram':  { toMilligram: 1.0e6, toGram:1.0e3 , toOunce:35.2739619496,
                     toPound: 2.2046226218, toKilogram: 1
                   }
};

// Convert length given a number, a Unit from and Unit to.
const convertLength = (number, unitFrom, unitTo)=>{
  return (number * lengthConversionValues[unitFrom][unitTo])
};

// Convert Weight given a number, a Unit from and Unit to.
const convertWeight = (number, unitFrom, unitTo)=>{
  return (number * weightConversionValues[unitFrom][unitTo])
};

// Convert Temperature given a number, a Unit from and Unit to.
function convertTemp(number, unitFrom, unitTo){
  var result ;
  switch (unitFrom) {
    case 'fromFahrenheit':
      result = (unitTo === 'toCelsius')? ((5/9) * (number - 32)):
                  (unitTo === 'toKelvin')? ((5/9) * (number + 459.67)):
                    (unitTo === 'toFahrenheit')? number : 'NAN';
      return result;
    case 'fromCelsius':
      result = (unitTo === 'toFahrenheit')? ((9/5) * number + 32):
                  (unitTo === 'toKelvin')? (273.15 +  number):
                      (unitTo === 'toCelsius')? number : 'NAN';
      return result;
    case 'fromKelvin':
      result = (unitTo === 'toFahrenheit')? ((9/5) * number - 459.67):
                  (unitTo === 'toCelsius')? (number - 273.15):
                      (unitTo === 'toKelvin')? number : 'NAN';

      return result;
    default:
      return 'NAN';
  }
}

// Validate input as an int or float number
export function validateInput(rawInput, changeInput){
 return (
   (rawInput.endsWith('.') && (changeInput.toString()).length === (rawInput.length -1) &&
    (rawInput.match(/[.][0-9]*[.]/) === null)) ? rawInput :
        (rawInput.endsWith('0') && rawInput.includes('.'))? rawInput :
            (rawInput === null)? 0 : changeInput
 )
}

// Convert all unit in application
export function convert(number, unitFrom, unitTo){
  return(
    (lengthList.includes(unitFrom))? convertLength(number, unitFrom, unitTo):
                    (weightList.includes(unitFrom))? convertWeight(number, unitFrom, unitTo):
                        (tempList.includes(unitFrom))? convertTemp(number, unitFrom, unitTo): ''
  )
}

// Evaluate, and validate input then convert to new unit
export function evaluate(anObject){
  var inputValue = Math.abs(parseFloat(anObject.data.toString()));
  return {
    input: validateInput( anObject.data.toString(), inputValue),
    output: convert(inputValue, anObject.fromUnit, anObject.toUnit )
  };
}
