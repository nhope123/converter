import React from 'react';
import {Button} from './unit.js';

export class Numbers extends React.Component{

  render(){
    var one = {callback:'', id:'one', label:'1'}
    var two = {callback:'', id:'two', label:'2'}
    var three = {callback:'', id:'three', label:'3'}
    var four= {callback:'', id:'four', label:'4'}
    var five = {callback:'', id:'five', label:'5'}
    var six = {callback:'', id:'six', label:'6'}
    var seven = {callback:'', id:'seven', label:'7'}
    var eight = {callback:'', id:'eight', label:'8'}
    var nine = {callback:'', id:'nine', label:'9'}
    var zero = {callback:'', id:'zero', label:'0'}
    var digit = {callback:'', id:'digit', label:'.'}

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
