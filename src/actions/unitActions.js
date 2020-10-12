

/*          ~~~ Action Types ~~~          */
// Unit Action types
export const LENGTH = 'length';
export const WEIGHT = 'weight';
export const TEMP   = 'tempreature';

/*          ~~~ Action Creators ~~~          */
// Unit Action creators
export const lengthAction = ()=>{return {type:LENGTH}};
export const weigthAction = ()=>{return {type: WEIGHT}};
export const tempAction   = ()=>{return {type: TEMP}};
