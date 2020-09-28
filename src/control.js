import React from 'react';

export const Button = (props)=>{
  var id = props.id;
  return(
    <div onClick={props.callback} id={props.id} tabIndex='0' className={props.style} value={props.id}>{props.label} </div>
  );
}

export class Control extends React.Component{
  constructor(props){
    super(props);

    this.setUnits = this.setUnits.bind(this);    
  }

  // Set the active button style
  setUnits(event){
    var element = document.getElementById('control').children;
    for(var i =0 ; i < element.length; i++){
      element[i].classList.remove('active');
    }
    event.currentTarget.classList.add('active');

  }
  render(){
    var lengthValue = {callback: (event)=>{this.setUnits(event);this.props.callback('length')}, id:'length', label:'Length', style: 'active'};
    var weightValue = {callback: (event)=>{this.setUnits(event);this.props.callback('weight')}, id:'weight', label:'Weight', style: ''};
    var tempValue = {callback: (event)=>{this.setUnits(event);this.props.callback('temperature')}, id:'temperature', label:'Temperature', style: ''};

    return(
      <div id='control'>
        <Button {...lengthValue}/>
        <Button {...weightValue}/>
        <Button {...tempValue}/>
      </div>
    );
  }
}
