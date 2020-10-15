
// Convert Action type
export const CONVERT = 'CONVERT_INPUT';
export const RESET   = 'RESET';


// Possible Error values list
const errorValues = ['', null, NaN, 'na', 'nan','Na'];

// Convert Action Creator
export function convertAction(event,from_Unit,to_Unit){
    var inputValue = ( errorValues.includes(event.target.value))? 0 : event.target.value;
   return {
     type: CONVERT,
     data: inputValue,
     fromUnit: from_Unit,
     toUnit: to_Unit
   }
 }

export const resetAction = ()=>{ return {type: RESET }};
