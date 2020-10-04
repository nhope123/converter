import React from 'react';


//let lengthUnit = ['Millimeter','Centimeter','Inch','Feet','Meter','Kilometer'];
//let weightUnit = ['Milligram','Gram','Ounce','Pound','Kilogram'];
//let temperUnit = ['Fahrenheit','Celsius','Kelvin'];
//var link = <div id="test"> great life</div>;
class Dropdown extends React.Component{

  render(){
    return(
      <div className='dropdown'>
        <button className='dropdownBtn' > inches </button>
        <div className='content' >
          <a href="#main-container">Link 1</a>
          <a href="#main-container">Link 2</a>
          <a href="#main-container">Link 3</a>
        </div>

      </div>
    );
  }
}

export class Option extends React.Component {
  constructor(props){
    super(props);
    this.state = {convertForm: '', convertTo: ''};
    this.setConvert = this.setConvert.bind(this);
  }
  setConvert(val){
    //var conTo; var conFrom;
  var {conTo,conFrom} = (val === 'length')? ['Millimeter', 'Centimeter']:
      (val === 'weight')? ['Milligram', 'Gram']:
        (val === 'temperature')? ['Fahrenheit' ,'Celsius']: "";
    this.setState(()=>{return{convertTo: conTo ,convertForm: conFrom }});
  }
  render(){
    //this.setConvert(this.props.unit);
    return(
      <div id='conversion-unit'>
      <Dropdown />
      <button type='button' >&#8646;

      </button>
      <Dropdown />

      </div>
    );
  }
}
