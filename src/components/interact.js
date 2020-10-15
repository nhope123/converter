import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {convertAction, resetAction} from './../actions/convertActions.js';

// Container component for conversion input vale and the converted display value
class Interact extends React.Component{
  render(){
    return(
      <div id='results'>
        <div id='begin'>
          <input id='input' type='text' min='0'  value={this.props.input} onChange={(event)=>this.props.convert(event, this.props.fromUnit,this.props.toUnit)} />
          <span>{this.props.fromSymbol}</span>
        </div>
        <div>
          <i className="fa fa-refresh" aria-hidden="true" onClick={this.props.reset}></i>
        </div>
        <div id='end'>
          <span> {this.props.toSymbol}</span>
          <div id='display' >{ this.props.output}</div>

        </div>
      </div>
    );
  }
}

// States needed for this component
const mapStateToProps = (state)=>{
  return{
    input: state.convert.input,
    output: state.convert.output,
    fromSymbol: state.convert.fromSymbol,
    toSymbol: state.convert.toSymbol,
    fromUnit: state.option.fromUnit,
    toUnit: state.option.toUnit
  }
};

// Dispatching actions needed for this component
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    convert: convertAction,
    reset: resetAction
  },dispatch);
}

// Connect the component to the store
export default connect(mapStateToProps, mapDispatchToProps)(Interact);
