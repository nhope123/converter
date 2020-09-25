import React from 'react';
import {Button} from './unit.js';

export class Numbers extends React.Component{

  render(){
    const funk = ()=>{return ''};
    var one = {callback:funk(), id:'one', label:'1'}
    var two = {callback:funk(), id:'two', label:'2'}
    var three = {callback:funk(), id:'three', label:'3'}
    var four= {callback:funk(), id:'four', label:'4'}
    var five = {callback:funk(), id:'five', label:'5'}
    var six = {callback:funk(), id:'six', label:'6'}
    var seven = {callback:funk(), id:'seven', label:'7'}
    var eight = {callback:funk(), id:'eight', label:'8'}
    var nine = {callback:funk(), id:'nine', label:'9'}
    var zero = {callback:funk(), id:'zero', label:'0'}
    var digit = {callback:funk(), id:'digit', label:'.'}

    return(
      <div id='numbers' >
        <Button {...one} />
        <Button {...two} />
        <Button {...three} />
        <Button {...four} />
        <Button {...five} />
        <Button {...six} />
        <Button {...seven} />
        <Button {...eight} />
        <Button {...nine} />
        <Button {...zero} />
        <Button {...digit} />
      </div>
    );
  }
}
