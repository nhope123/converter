import {convertAction} from './../convertActions'

test("Convert Action Creator", () => {
  const testValue = {target:{value: null}}
  const result1 = {type: 'CONVERT_INPUT', data: 0, fromUnit: 'fromGram',toUnit:'toOunce' }
  const testValue1 = {target:{value: 32}}
  const result = {type: 'CONVERT_INPUT', data: 32, fromUnit: 'fromGram',toUnit:'toOunce' }
  expect(convertAction(testValue1,'fromGram','toOunce')).toMatchObject(result);
});
