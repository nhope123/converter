import React from 'react';
import {Button} from './unit.js';

export class Control extends React.Component{

  render(){
    var clear = {callback:'', id:'clear', label:'C'}
    return(
      <div id='control'>
        <Button {...clear} />
        <button id='backspace'value='backspace' tabindex='0' onClick={this.props.callback}>
          <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}
