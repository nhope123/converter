import * as Unit from './../actions/unitActions.js';

// Reducer for the Control Component
export default function unitSelectionReducer(state ={unitClass: ['active','','']}, action){

  switch (action.type) {
    case Unit.LENGTH:
      return {unitClass: ['active','','']}
    case Unit.WEIGHT:
      return {unitClass: ['','active','']}
    case Unit.TEMP:
      return {unitClass: ['','','active']}
    default:
      return state;
  }
}
