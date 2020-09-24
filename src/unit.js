import React from 'react';

export const Button = (props)=>{
  return(
    <button type='button' onclick={props.callback} id={props.id} tabindex='0' value={props.id} >{props.label}</button>
  );
}


export class Unit extends React.Component{

  render(){
    var lengthProps = {callback:'', id:'length', label:'Length'};
    var weightProps = {callback:'', id:'weight', label:'Weight'};
    var temperProps = {callback:'', id:'temperature', label:'Temperature'};
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
