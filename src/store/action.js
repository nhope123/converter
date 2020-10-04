
const defaultState = {
                      unit:'length',
                      unitClass:['active','',''],
                      fromUnit:'millimeter',
                      toUnit:'centimeter',
                      input:'0',
                      output:'0'
};






const LENGTH = 'length';
const WEIGHT = 'weight';
const TEMP   = 'tempreature';

// Action creators
export const lengthAction = ()=>{return {type:LENGTH}};
export const weigthAction = ()=>{return {type: WEIGHT}};
export const tempAction   = ()=>{return {type: TEMP}};


// Reducers
export function unitSelectionReducer(state = defaultState, action){
  switch (action.type) {
    case LENGTH:
      return Object.assign({},state,{ unit: LENGTH, unitClass:['active','',''],input:'0', output:'0' } );
    case WEIGHT:
      return Object.assign({},state,{ unit: WEIGHT, unitClass:['','active',''],input:'0', output:'0' } );
      case TEMP:
        return Object.assign({},state,{ unit: TEMP, unitClass:['','','active'],input:'0', output:'0' } );
    default:
      return state;
  }
}
