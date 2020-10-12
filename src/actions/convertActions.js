

export const CONVERT = 'CONVERT_INPUT';

export function convertAction(event){
   return {type: CONVERT, data: event.target.value}
 }
