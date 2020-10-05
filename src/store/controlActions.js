
export const defaultState = {
                      unit:'length',
                      unitClass:['active','',''],
                      fromUnit:'fromMillimeter',
                      fromUnitOptions:['fromCentimeter','fromInch','fromFeet','fromMeter','fromKilometer'],
                      toUnit:'fromCentimeter',
                      toUnitOptions:['fromMillimeter','fromInch','fromFeet','fromMeter','fromKilometer'],
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
      return Object.assign({},state,{ unit: LENGTH,
                                      unitClass:['active','',''],
                                      fromUnit:'fromMillimeter',
                                      fromUnitOptions:['fromCentimeter','fromInch','fromFeet','fromMeter','fromKilometer'],
                                      toUnit:'fromCentimeter',
                                      toUnitOptions:['fromMillimeter','fromInch','fromFeet','fromMeter','fromKilometer'],
                                      input:'0',
                                      output:'0'
                                    } );
    case WEIGHT:
      return Object.assign({},state,{ unit: WEIGHT,
                                      unitClass:['','active',''],
                                      fromUnit:'Milligram',
                                      toUnit:'Gram',
                                      input:'0',
                                      output:'0'
                                    } );
      case TEMP:
        return Object.assign({},state,{ unit: TEMP,
                                        unitClass:['','','active'],
                                        fromUnit:'Fahrenheit',
                                        toUnit:'Celsius',
                                        input:'0',
                                        output:'0'
                                      } );
    default:
      return state;
  }
}
