import React from 'react';


export class Interact extends React.Component{
  render(){
    return(
      <div id='results'>
        <input id='input' type='number' placeholder='0' min='0' />
        <div id='display' >{/* display value */}Display</div>

      </div>
    );
  }
}
