import React from 'react';
import {Button} from './unit.js';

export class Control extends React.Component{

  render(){
    const funk = ()=>{return ''};
    var clear = {callback: funk(), id:'clear', label:'C'}
    return(
      <div id='control'>
        <Button {...clear} />
        <button id='backspace'value='backspace' tabIndex='0' onClick={this.props.callback}>
          <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}
