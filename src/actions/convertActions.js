

export const CONVERT = 'CONVERT_INPUT';
const errorValues = ['', null, NaN, 'na', 'nan','Na'];
export function convertAction(event,from_Unit,to_Unit){
    var inputValue = ( errorValues.includes(event.target.value))? 0 : event.target.value;
    console.log('input Value: '+inputValue);
   return {
     type: CONVERT,
     data: inputValue,
     fromUnit: from_Unit,
     toUnit: to_Unit
   }
 }
