import React from 'react';
import ReactDOM from 'react-dom';
import {Display} from 'display.js';
import {Unit} from 'unit.js';
import {Numbers} from 'numbers.js';
import {Control} from 'control.js';


export class Convert extends React.Component{

  render(){

    return(
      <div id='main-container' >
        <Display />
        <Units    />
        <Numbers />
        <Control />
      </div>
    );
  }
}
