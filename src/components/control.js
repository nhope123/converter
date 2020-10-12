import React from 'react';
import {lengthAction, weigthAction, tempAction} from './../actions/unitActions.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Buttons for selecting the units used in conversion
const Button = (props)=>{
  return(
    <div onClick={props.callback} id={props.id} tabIndex='0' className={props.style}
     value={props.id}>{props.label} </div>
  );
};

// Unit selection component containing 3 buttons for selecting measurement units
class Control extends React.Component{
  render(){
    var lengthValue = {callback: this.props.selectLength, id:'length',
                   label:'Length', style: this.props.style[0]};
    var weightValue = {callback:this.props.selectWeight, id:'weight',
                   label:'Weight', style: this.props.style[1]};
    var tempValue = {callback:  this.props.selectTemp, id:'temperature',
                 label:'Temperature', style: this.props.style[2]};
    return(
      <div id='control'>
        <Button {...lengthValue}/>
        <Button {...weightValue}/>
        <Button {...tempValue}/>
        </div>
    );
  }
}

// States needed for this component
const mapStateToProps = (state)=>{
  return {
    style: state.select.unitClass
  }
};

// Dispatching actions needed for this component
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    selectLength: lengthAction,
    selectWeight: weigthAction,
    selectTemp: tempAction
    }, dispatch);
};

export  default connect(mapStateToProps,mapDispatchToProps)(Control);
