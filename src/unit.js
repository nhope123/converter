import React from 'react';

export const Button = (props)=>{
  return(
    <button type='button' onClick={props.callback} id={props.id} tabIndex='0' value={props.id} >{props.label}</button>
  );
}


export class Unit extends React.Component{

  render(){
    const funk = ()=>{return ''};
    var lengthProps = {callback:funk(), id:'length', label:'Length'};
    var weightProps = {callback:funk(), id:'weight', label:'Weight'};
    var temperProps = {callback:funk(), id:'temperature', label:'Temperature'};
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
