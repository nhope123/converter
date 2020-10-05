import React from 'react';
import {connect} from 'react-redux';
import * as Act from './../store/optionActions.js';

// Dropdown menu component
class Dropdown extends React.Component{
  render(){
    const unitValues = {
      'fromMillimeter': ['Millimeter',this.props.convertFromMillimeter],
      'fromCentimeter': ['Centimeter', this.props.convertFromCentimeter],
      'fromInch': ['Inch', this.props.convertFromInch],
      'fromFeet': ['Feet', this.props.convertFromFeet],
      'fromMeter': ['Meter', this.props.convertFromMeter],
      'fromKilometer': ['Kilometer', this.props.convertFromKiloMeter],
      'toMillimeter': ['Millimeter',this.props.convertToMillimeter],
      'toCentimeter': ['Centimeter', this.props.convertToCentimeter],
      'toInch': ['Inch', this.props.convertToInch],
      'toFeet': ['Feet', this.props.convertToFeet],
      'toMeter': ['Meter', this.props.convertToMeter],
      'toKilometer': ['Kilometer', this.props.convertToKiloMeter]
    };
    //console.log('soltyj: '+unitValues['fromInch'][1]);
    return(
      <div className='dropdown'>
        <button className='dropdownBtn' > {unitValues[this.props.label][0]} </button>
        <div className='content' >
          {this.props.choice.map((item,id) => (
            <div key={id} onClick={unitValues[item][1]}>{unitValues[item][0]}</div>
          ))}
        </div>
      </div>
    );
  }
}

// Action to connect to this Component
const mapDispatchToProps = (dispatch)=>{
  return{
    convertFromMillimeter: ()=>{dispatch(Act.fromMillimeterAction())},
    convertFromCentimeter: ()=>{dispatch(Act.fromCentimeterAction())},
    convertFromInch: ()=>{dispatch(Act.fromInchAction())},
    convertFromFeet: ()=>{dispatch(Act.fromFeetAction())},
    convertFromMeter: ()=>{dispatch(Act.fromMeterAction())},
    convertFromKiloMeter: ()=>{dispatch(Act.fromKilometerAction())},

    convertToMillimeter: ()=>{dispatch(Act.toMillimeterAction())},
    convertToCentimeter: ()=>{dispatch(Act.toCentimeterAction())},
    convertToInch: ()=>{dispatch(Act.toInchAction())},
    convertToFeet: ()=>{dispatch(Act.toFeetAction())},
    convertToMeter: ()=>{dispatch(Act.toMeterAction())},
    convertToKiloMeter: ()=>{dispatch(Act.toKilometerAction())},
  }
}

export default connect(null, mapDispatchToProps)(Dropdown);
