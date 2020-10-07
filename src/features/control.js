import React from 'react';
import {lengthAction, weigthAction, tempAction} from './../store/controlActions.js';
import {connect} from 'react-redux';

// States needed for this component
const mapStateToProps = (state)=>{
  return {
    fromUnit: state.fromUnitOptions,
    toUnit: state.toUnitOptions,
    styleLength: state.unitClass[0],
    styleWeight: state.unitClass[1],
    styleTemp: state.unitClass[2]
  }
};

// Dispatching actions needed for this component
const mapDispatchToProps = (dispatch)=>{
  return{
    selectLength: ()=>{dispatch(lengthAction())},
    selectWeight: ()=>{dispatch(weigthAction())},
    selectTemp: ()=>{dispatch(tempAction())}
  }
};

// Buttons for selecting the units used in conversion
const Button = (props)=>{
  return(
    <div onClick={props.callback} id={props.id} tabIndex='0' className={props.style} value={props.id}>{props.label} </div>
  );
};

// Unit selection component containing 3 buttons for selecting measurement units
class Control extends React.Component{

  render(){
    var lengthValue = {callback: this.props.selectLength, id:'length',
                       label:'Length', style: this.props.styleLength};
    var weightValue = {callback:this.props.selectWeight, id:'weight',
                       label:'Weight', style: this.props.styleWeight};
    var tempValue = {callback:  this.props.selectTemp, id:'temperature',
                     label:'Temperature', style: this.props.styleTemp};

    //console.log('From Unit: '+ this.props.fromUnit);
    //console.log('To Unit: '+ this.props.toUnit);

    return(
      <div id='control'>
        <Button {...lengthValue}/>
        <Button {...weightValue}/>
        <Button {...tempValue}/>
      </div>
    );
  }
}

export  default connect(mapStateToProps,mapDispatchToProps)(Control);
