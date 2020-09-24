import React from 'react';

const DisplayElement = (props)=>{
  return(
    <div >
      <span >{/* this.props.unit */} milli</span>
      <span >{/* this.props.value */}</span>
    </div>
  );
}

export class Display extends React.Component{

  render(){
    return(
      <div id='display'>
        <div>Conversion</div>
        <DisplayElement />
        <DisplayElement />
        <DisplayElement />
        <DisplayElement />
        <DisplayElement />
        <DisplayElement />
      </div>
    );
  }
}
