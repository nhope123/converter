

export const CONVERT = 'CONVERT_INPUT';

export function convertAction(event,from_Unit,to_Unit){
//  console.log('To value: '+to_Unit);
   return {
     type: CONVERT,
     data: event.target.value,
     fromUnit: from_Unit,
     toUnit: to_Unit
   }
 }
