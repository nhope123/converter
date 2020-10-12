import * as Unit from './../actions/unitActions.js';
//import {store} from './../store/store.js';
import {CONVERT} from './../actions/convertActions.js';

const conversionDefault = {input: 0, output: 0};

function evaluate(num){
  //console.log('type of num is: '+ (typeof num));
  var stringNum = num;
  //stringNum = (stringNum.length > 1 && stringNum[0] === '0' && stringNum[1] !== '.')? parseFloat(stringNum.slice(1)):
}

export default function convertReducer(state= conversionDefault, action){
  switch (action.type) {
    case Unit.LENGTH || Unit.WEIGHT || Unit.TEMP:
      return conversionDefault;
    case CONVERT:
      var conk = state;
      console.log('State is: '+conk);
      evaluate(action.data);

      return Object.assign({},state,{input: action.data});

    default:
      return state;
  }
}
