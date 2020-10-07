import React from 'react';
import {connect} from 'react-redux';
import Dropdown from './dropdown.js';






//['Millimeter','Centimeter','Inch','Feet','Meter','Kilometer'];
//let weightUnit = ['Milligram','Gram','Ounce','Pound','Kilogram'];
//let temperUnit = ['Fahrenheit','Celsius','Kelvin'];
//var link = <div id="test"> great life</div>;




class Option extends React.Component {
  render(){
    //console.log('From label: '+this.props.fromUnit +' ; FromList: '+this.props.fromUnitOptions);
    //console.log('To Label: '+this.props.toUnit +' ; To List: '+ this.props.toUnitOptions);
    return(
      <div id='conversion-unit'>
      <Dropdown {...{label:this.props.fromUnit, choice: this.props.fromUnitOptions}}/>
      <button type='button' >&#8646;
      </button>
      <Dropdown {...{label:this.props.toUnit, choice: this.props.toUnitOptions}} />
      </div>
    );
  }
}

// States to connect to this component
const mapStateToProps = (state)=>{
  return {
    fromUnit: state.fromUnit,
    toUnit: state.toUnit,
    fromUnitOptions: state.fromUnitOptions,
    toUnitOptions: state.toUnitOptions
  }
}


export default connect(mapStateToProps, null)(Option);
