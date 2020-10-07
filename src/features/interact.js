import React from 'react';
import * as interact from './../store/interactActions.js';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch)=>{ return{
  convertFromMillimeter: ()=>{dispatch(interact.millimeterConvertAction())},
  updateInput:(val)=>{dispatch(interact.updateInputAction(val))}
 }
};
const mapStateToProps = (state)=>{return{
  fromUint: state.fromUnit,
  results: state.output,
  input : state.input
  }
}


class Interact extends React.Component{
  constructor(props){
    super(props);
    this.update = this.update.bind(this);
  }
  update(event){
    //this.props.convertFromMillimeter;
    this.props.updateInput(event.value);
  }
  render(){
    const calculate = {
      'fromMillimeter': this.props.convertFromMillimeter
    }

    return(
      <div id='results'>
        <input id='input' type='number' placeholder='0' min='0' value={this.props.input} onInput={this.props.updateInput}/>
        <div id='display' >{this.props.results}</div>

      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Interact);
