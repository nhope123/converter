import React from 'react';

export const Button = (props)=>{
  return(
    <button type='button' onclick={this.props.callback} id={this.props.id} tabindex='0' value={this.props.id} >{this.props.label}</button>
  );
}


export class Unit extends React.Component{

  render(){
    var lengthProps = {};
    var weightProps = {};
    var temperProps = {};
    return(
      <div>
        {/* Drop-down menu */}
        <div id='input'>{this.props.inputValue}</div>
        <Button {...lengthProps} />
        <Button {...weightProps}/>
        <Button {...temperProps}/>
      </div>
    );
  }
}
