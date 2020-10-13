import React from 'react';
import Option from './options.js';
import Control from './control.js';
import Interact from './interact.js';

// Main application Component
export default class Convert extends React.Component{
  render(){
    return(
      <div>
        <nav >
          <i className="fa fa-rebel" aria-hidden="true"></i>
          <span>Rebel Conversion</span>
        </nav>
        <div id='main-container' >
          <div id='boundary'>
            <Control />
            <Option  />
            <Interact />
          </div>
        </div>
      </div>
    );
  }
}
