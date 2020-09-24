import React from 'react';
import {Button} from 'unit.js';

export class Control extends React.Component{

  render(){
    var clear = {callback:'', id:'clear', label:'C'}
    var backspace = {callback:'', id:'backspace', label:'2'}
    return(
      <div id='control'>
        <Button  />
        <Button  />
      </div>
    );
  }
}
