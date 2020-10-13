import React from 'react';
import Dropdown from './dropdown.js';
import {connect} from 'react-redux';

// Container componnent for choosing the convert To unit and the convert From unit
class Option extends React.Component {
  render(){
    return(
      <div id='conversion-unit'>
      <Dropdown {...{label:this.props.fromUnit,
                     choice: this.props.fromUnitOptions,
                     counterUnit: this.props.toUnit
                   }}/>
      <Dropdown {...{label:this.props.toUnit,
                     choice: this.props.toUnitOptions,
                     counterUnit: this.props.fromUnit
                   }} />
      </div>
    );
  }
}

// States from optionReducer to connect to this component
const mapStateToProps = (state)=>{
  return {
    fromUnit: state.option.fromUnit,
    toUnit: state.option.toUnit,
    fromUnitOptions: state.option.fromUnitOptions,
    toUnitOptions: state.option.toUnitOptions
  }
}

export default connect(mapStateToProps, null)(Option);
