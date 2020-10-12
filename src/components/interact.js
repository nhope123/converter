import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {convertAction} from './../actions/convertActions.js';

// Container component for conversion input vale and the converted display value
class Interact extends React.Component{
  render(){
    return(
      <div id='results'>
        <input id='input' type='text' min='0'  value={this.props.input} onChange={(event)=>this.props.convert(event)} />
        <div id='display' >{ this.props.output}</div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    input: state.convert.input,
    output: state.convert.output
  }
};

const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    convert: convertAction
  },dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Interact);
