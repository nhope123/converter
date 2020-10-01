import React from 'react';
import {Option} from './option.js'
import {Control} from './control.js';



export class Convert extends React.Component{
  constructor(props){
    super(props);
    this.state = {unit: 'length'};
    this.changeUnit = this.changeUnit.bind(this);
  }
  // Change the unit in the conversion dropdown
  changeUnit(text){
    this.setState(()=>{return {unit: text}});

  }
  render(){

    return(
      <div>
        <nav >
          {/* <i class="fa fa-rebel" aria-hidden="true"></i> */}
          <span>Rebel Conversion</span>
        </nav>
        <div id='main-container' >
          <Control callback={this.changeUnit} />
          <Option unit={this.state.unit} />
          <span>{this.state.unit}</span>
        </div>
      </div>
    );
  }
}
