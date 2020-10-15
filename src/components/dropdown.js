import React from 'react';
import {connect} from 'react-redux';
import * as OA from './../actions/optionActions.js';
import {bindActionCreators} from 'redux';

// Dropdown menu component with unit option
class Dropdown extends React.Component{
  render(){
    const unitValues = {
      'fromMillimeter': ['Millimeter',()=>this.props.convertFromMillimeter(this.props.counterUnit),'fmm'],
      'fromCentimeter': ['Centimeter', ()=>this.props.convertFromCentimeter(this.props.counterUnit),'fcm'],
      'fromInch': ['Inch', ()=>this.props.convertFromInch(this.props.counterUnit),'fin'],
      'fromFeet': ['Feet', ()=>this.props.convertFromFeet(this.props.counterUnit),'fft'],
      'fromMeter': ['Meter', ()=>this.props.convertFromMeter(this.props.counterUnit),'fmt'],
      'fromKilometer': ['Kilometer', ()=>this.props.convertFromKiloMeter(this.props.counterUnit),'fkm'],

      'toMillimeter': ['Millimeter',()=>this.props.convertToMillimeter(this.props.counterUnit),'tmm'],
      'toCentimeter': ['Centimeter', ()=>this.props.convertToCentimeter(this.props.counterUnit),'tcm'],
      'toInch': ['Inch', ()=>this.props.convertToInch(this.props.counterUnit),'tin'],
      'toFeet': ['Feet', ()=>this.props.convertToFeet(this.props.counterUnit),'tft'],
      'toMeter': ['Meter', ()=>this.props.convertToMeter(this.props.counterUnit),'tmt'],
      'toKilometer': ['Kilometer', ()=>this.props.convertToKiloMeter(this.props.counterUnit),'tkm'],

      'fromFahrenheit': ['Fahrenheit',()=>this.props.convertFromFahrenheit(this.props.counterUnit), 'ffh'],
      'fromCelsius': ['Celsius', ()=>this.props.convertFromCelsius(this.props.counterUnit), 'fcs'],
      'fromKelvin': ['Kelvin', ()=>this.props.convertFromKelvin(this.props.counterUnit), 'fkn'],

      'toFahrenheit': ['Fahrenheit',()=>this.props.convertToFahrenheit(this.props.counterUnit), 'tfh'],
      'toCelsius': ['Celsius', ()=>this.props.convertToCelsius(this.props.counterUnit), 'tcs'],
      'toKelvin': ['Kelvin', ()=>this.props.convertToKelvin(this.props.counterUnit), 'tkn'],


      'fromMilligram': ['Milligram',()=> this.props.convertFromMillgram(this.props.counterUnit), 'fmg'],
      'fromGram': ['Gram', ()=>this.props.convertFromGram(this.props.counterUnit), 'fg'],
      'fromOunce': ['Ounce', ()=>this.props.convertFromOunce(this.props.counterUnit), 'foz'],
      'fromPound': ['Pound', ()=>this.props.convertFromPound(this.props.counterUnit), 'flb'],
      'fromKilogram': ['Kilogram', ()=>this.props.convertFromKilogram(this.props.counterUnit), 'fkg'],

      'toMilligram': ['Milligram', ()=>this.props.convertToMillgram(this.props.counterUnit), 'tmg'],
      'toGram': ['Gram', ()=>this.props.convertToGram(this.props.counterUnit), 'tg'],
      'toOunce': ['Ounce', ()=>this.props.convertToOunce(this.props.counterUnit), 'toz'],
      'toPound': ['Pound', ()=>this.props.convertToPound(this.props.counterUnit), 'tlb'],
      'toKilogram': ['Kilogram', ()=>this.props.convertToKilogram(this.props.counterUnit), 'tkg']
    };
    var classValue = 'content ' + this.props.side;

    return(
      <div className='dropdown'>
      <button className='dropdownBtn' > {unitValues[this.props.label][0]} </button>
    <div className={classValue} >
      {this.props.choice.map((item,id) => (
        <div key={unitValues[item][2]} id={unitValues[item][2]} onClick={unitValues[item][1]}>{unitValues[item][0]}</div>
      ))}
    </div>
      </div>
    );
  }
}

// Dispatching actions needed for this component
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    convertFromMillimeter: OA.fromMillimeterAction,
    convertFromCentimeter: OA.fromCentimeterAction,
    convertFromInch: OA.fromInchAction,
    convertFromFeet: OA.fromFeetAction,
    convertFromMeter: OA.fromMeterAction,
    convertFromKiloMeter: OA.fromKilometerAction,

    convertToMillimeter: OA.toMillimeterAction,
    convertToCentimeter: OA.toCentimeterAction,
    convertToInch: OA.toInchAction,
    convertToFeet: OA.toFeetAction,
    convertToMeter: OA.toMeterAction,
    convertToKiloMeter: OA.toKilometerAction,

    convertFromFahrenheit: OA.fromFahrenheitAction,
    convertFromCelsius: OA.fromCelsiusAction,
    convertFromKelvin: OA.fromKelvinAction,

    convertToFahrenheit: OA.toFahrenheitAction,
    convertToCelsius: OA.toCelsiusAction,
    convertToKelvin: OA.toKelvinAction,

    convertToMillgram: OA.toMilligramAction,
    convertToGram: OA.toGramAction,
    convertToOunce: OA.toOunceAction,
    convertToPound: OA.toPoundAction,
    convertToKilogram: OA.toKilogramAction,

    convertFromMillgram: OA.fromMilligramAction,
    convertFromGram: OA.fromGramAction,
    convertFromOunce: OA.fromOunceAction,
    convertFromPound: OA.fromPoundAction,
    convertFromKilogram: OA.fromKilogramAction
  }, dispatch);
}

// Connect the component to the store
export default connect(null, mapDispatchToProps)(Dropdown);
