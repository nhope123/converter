import * as UCon from './../unitConversion'

test('Convert Temperature Units',()=>{
  // Convert From Fahrenheit
  expect(UCon.convertTemp(77, 'fromFahrenheit', 'toCelsius')).toBe(25);
  expect(UCon.convertTemp(72, 'fromFahrenheit', 'toCelsius')).toBe(22.22);
  expect(UCon.convertTemp(77, 'fromFahrenheit', 'toKelvin')).toBe(298.15);
  expect(UCon.convertTemp(67.73, 'fromFahrenheit', 'toKelvin')).toBe(293);
  expect(UCon.convertTemp(67, 'fromFahrenheit', 'toFahrenheit')).toBe(67);
  // Convert from Celsius
  expect(UCon.convertTemp(22,'fromCelsius','toFahrenheit')).toBe(71.6);
  expect(UCon.convertTemp(20,'fromCelsius','toFahrenheit')).toBe(68);
  expect(UCon.convertTemp(34,'fromCelsius','toKelvin')).toBe(307.15);
  expect(UCon.convertTemp(20.85,'fromCelsius','toKelvin')).toBe(294);
  expect(UCon.convertTemp(20,'fromCelsius','toCelsius')).toBe(20);
  // Convert from Kelvin
  expect(UCon.convertTemp(34,'fromKelvin','toCelsius')).toBe(-239.15);
  expect(UCon.convertTemp(340,'fromKelvin','toCelsius')).toBe(66.85);
  expect(UCon.convertTemp(20.85,'fromKelvin','toFahrenheit')).toBe(-422.14);
  expect(UCon.convertTemp(293,'fromKelvin','toFahrenheit')).toBe(67.73);
  expect(UCon.convertTemp(293,'fromKelvin','toKelvin')).toBe(293);
});

test('Convert Length Units',()=>{
  // Convert Millimeter
  expect(UCon.convertLength(1,'fromMillimeter','toMillimeter')).toBe(1);
  expect(UCon.convertLength(291,'fromMillimeter','toCentimeter')).toBe(29.1);
  expect(UCon.convertLength(291,'fromMillimeter','toInch')).toBe(11.456693);
  expect(UCon.convertLength(291,'fromMillimeter','toFeet')).toBe(0.954724);
  expect(UCon.convertLength(991,'fromMillimeter','toMeter')).toBe(0.991);
  expect(UCon.convertLength(837991,'fromMillimeter','toKilometer')).toBe(0.837991);
  // Convert Centimeter
  expect(UCon.convertLength(1,'fromCentimeter','toMillimeter')).toBe(10);
  expect(UCon.convertLength(291,'fromCentimeter','toCentimeter')).toBe(291);
  expect(UCon.convertLength(291,'fromCentimeter','toInch')).toBe(114.566929);
  expect(UCon.convertLength(291,'fromCentimeter','toFeet')).toBe(9.547244);
  expect(UCon.convertLength(991,'fromCentimeter','toMeter')).toBe(9.91);
  expect(UCon.convertLength(837991,'fromCentimeter','toKilometer')).toBe(8.37991);
  // Convert Inches
  expect(UCon.convertLength(1,'fromInch','toMillimeter')).toBe(25.4);
  expect(UCon.convertLength(291,'fromInch','toCentimeter')).toBe(739.14);
  expect(UCon.convertLength(291,'fromInch','toInch')).toBe(291);
  expect(UCon.convertLength(291,'fromInch','toFeet')).toBe(24.25);
  expect(UCon.convertLength(991,'fromInch','toMeter')).toBe(25.1714);
  expect(UCon.convertLength(837991,'fromInch','toKilometer')).toBe(21.284971);
  // Convert Feet
  expect(UCon.convertLength(1,'fromFeet','toMillimeter')).toBe(304.8);
  expect(UCon.convertLength(291,'fromFeet','toCentimeter')).toBe(8869.68);
  expect(UCon.convertLength(291,'fromFeet','toInch')).toBe(3492);
  expect(UCon.convertLength(291,'fromFeet','toFeet')).toBe(291);
  expect(UCon.convertLength(991,'fromFeet','toMeter')).toBe(302.0568);
  expect(UCon.convertLength(837991,'fromFeet','toKilometer')).toBe(255.419657);
  // Convert Meter
  expect(UCon.convertLength(1,'fromMeter','toMillimeter')).toBe(1000);
  expect(UCon.convertLength(291,'fromMeter','toCentimeter')).toBe(29100);
  expect(UCon.convertLength(291,'fromMeter','toInch')).toBe(11456.692913);
  expect(UCon.convertLength(291,'fromMeter','toFeet')).toBe(954.724409);
  expect(UCon.convertLength(991,'fromMeter','toMeter')).toBe(991);
  expect(UCon.convertLength(837991,'fromMeter','toKilometer')).toBe(837.991);
  // Convert Kilometer
  expect(UCon.convertLength(1,'fromKilometer','toMillimeter')).toBe(1000000);
  expect(UCon.convertLength(21,'fromKilometer','toCentimeter')).toBe(2100000);
  expect(UCon.convertLength(9,'fromKilometer','toInch')).toBe(354330.708661);
  expect(UCon.convertLength(91,'fromKilometer','toFeet')).toBe(298556.430446);
  expect(UCon.convertLength(91,'fromKilometer','toMeter')).toBe(91000);
  expect(UCon.convertLength(837,'fromKilometer','toKilometer')).toBe(837);
});

test('Convert Weight Units',()=>{
  // Convert Milligrams
  expect(UCon.convertWeight(21,'fromMilligram','toMilligram')).toBe(21);
  expect(UCon.convertWeight(21,'fromMilligram','toGram')).toBe(0.021);
  expect(UCon.convertWeight(210724,'fromMilligram','toOunce')).toBe(7.433078);
  expect(UCon.convertWeight(38555351.45,'fromMilligram','toPound')).toBe(85);
  expect(UCon.convertWeight(230030000,'fromMilligram','toKilogram')).toBe(230.03);
  // Convert Grams
  expect(UCon.convertWeight(21,'fromGram','toMilligram')).toBe(21000);
  expect(UCon.convertWeight(21,'fromGram','toGram')).toBe(21);
  expect(UCon.convertWeight(2107,'fromGram','toOunce')).toBe(74.322238);
  expect(UCon.convertWeight(38555,'fromGram','toPound')).toBe(84.999224);
  expect(UCon.convertWeight(15000,'fromGram','toKilogram')).toBe(15);
  // Convert Ounce
  expect(UCon.convertWeight(1,'fromOunce','toMilligram')).toBe(28349.523125);
  expect(UCon.convertWeight(21,'fromOunce','toGram')).toBe(595.339986);
  expect(UCon.convertWeight(2107,'fromOunce','toOunce')).toBe(2107);
  expect(UCon.convertWeight(385,'fromOunce','toPound')).toBe(24.0625);
  expect(UCon.convertWeight(1500,'fromOunce','toKilogram')).toBe(42.524285);
  // Convert Pound
  expect(UCon.convertWeight(1,'fromPound','toMilligram')).toBe(453592.37);
  expect(UCon.convertWeight(1.9,'fromPound','toGram')).toBe(861.825503);
  expect(UCon.convertWeight(21,'fromPound','toOunce')).toBe(336);
  expect(UCon.convertWeight(385,'fromPound','toPound')).toBe(385);
  expect(UCon.convertWeight(1500,'fromPound','toKilogram')).toBe(680.388555);
  // Convert Kilograms
  expect(UCon.convertWeight(1,'fromKilogram','toMilligram')).toBe(1000000);
  expect(UCon.convertWeight(1.9,'fromKilogram','toGram')).toBe(1900);
  expect(UCon.convertWeight(2,'fromKilogram','toOunce')).toBe(70.547924);
  expect(UCon.convertWeight(3,'fromKilogram','toPound')).toBe(6.613868);
  expect(UCon.convertWeight(15,'fromKilogram','toKilogram')).toBe(15);
});

test('Validate Input Number',()=>{
  expect(UCon.validateInput('null',0)).toBe(0);
  expect(UCon.validateInput('12.00',12)).toBe('12.00');
  expect(UCon.validateInput('12.001.',12.001)).toBe(12.001);
  expect(UCon.validateInput('12.',12)).toBe('12.');
  expect(UCon.validateInput('1234567890123456',1234567890123456)).toBe('1234567890123');
});

test("Convert Any Unit", () => {
  expect(UCon.convert(23,'fromMillimeter','toCentimeter')).toBe(2.3);
  expect(UCon.convert(23,'fromCelsius','toKelvin')).toBe(296.15);
});

test("Evaluate Conversion", () => {
  var obj1 = {data:23,fromUnit: 'fromMillimeter',toUnit:'toCentimeter'};
  var res1 ={input: 23, output: 2.3, fromSymbol: 'mm', toSymbol: 'cm'};
  var obj2 = {data:23,fromUnit: 'fromCentimeter',toUnit:'toCentimeter'};
  var res2 ={input: 23, output: 23, fromSymbol: 'cm', toSymbol: 'cm'};
  expect(UCon.evaluate(obj1)).toMatchObject(res1);
  expect(UCon.evaluate(obj2)).toMatchObject(res2);
});


/*
   testing Functions:
     evaluate(anObject)  input object -->  {data: number, fromUnit: fromString , toUnit: toString}
                         output object --> {input: cleanNumber, output: number, fromSymbol: sym, toSymbol: sym}

     convert()           input  --> ( number,  fromString , toString )
                         output  --> convertedNumber




*/
