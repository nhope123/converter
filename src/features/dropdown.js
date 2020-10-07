import React from 'react';
import {connect} from 'react-redux';
import * as Act from './../store/controlActions.js';

// Dropdown menu component
class Dropdown extends React.Component{
  render(){
    const unitValues = {
      'fromMillimeter': ['Millimeter',this.props.convertFromMillimeter,'fmm'],
      'fromCentimeter': ['Centimeter', this.props.convertFromCentimeter,'fcm'],
      'fromInch': ['Inch', this.props.convertFromInch,'fin'],
      'fromFeet': ['Feet', this.props.convertFromFeet,'fft'],
      'fromMeter': ['Meter', this.props.convertFromMeter,'fmt'],
      'fromKilometer': ['Kilometer', this.props.convertFromKiloMeter,'fkm'],

      'toMillimeter': ['Millimeter',this.props.convertToMillimeter,'tmm'],
      'toCentimeter': ['Centimeter', this.props.convertToCentimeter,'tcm'],
      'toInch': ['Inch', this.props.convertToInch,'tin'],
      'toFeet': ['Feet', this.props.convertToFeet,'tft'],
      'toMeter': ['Meter', this.props.convertToMeter,'tmt'],
      'toKilometer': ['Kilometer', this.props.convertToKiloMeter,'tkm'],

      'fromFahrenheit': ['Fahrenheit',this.props.convertFromFahrenheit, 'ffh'],
      'fromCelsius': ['Celsius', this.props.convertFromCelsius, 'fcs'],
      'fromKelvin': ['Kelvin', this.props.convertFromKelvin, 'fkn'],

      'toFahrenheit': ['Fahrenheit',this.props.convertToFahrenheit, 'tfh'],
      'toCelsius': ['Celsius', this.props.convertToCelsius, 'tcs'],
      'toKelvin': ['Kelvin', this.props.convertToKelvin, 'tkn'],


      'fromMilligram': ['Milligram', this.props.convertFromMillgram, 'fmg'],
      'fromGram': ['Gram', this.props.convertFromGram, 'fg'],
      'fromOunce': ['Ounce', this.props.convertFromOunce, 'foz'],
      'fromPound': ['Pound', this.props.convertFromPound, 'flb'],
      'fromKilogram': ['Kilogram', this.props.convertFromKilogram, 'fkg'],

      'toMilligram': ['Milligram', this.props.convertToMillgram, 'tmg'],
      'toGram': ['Gram', this.props.convertToGram, 'tg'],
      'toOunce': ['Ounce', this.props.convertToOunce, 'toz'],
      'toPound': ['Pound', this.props.convertToPound, 'tlb'],
      'toKilogram': ['Kilogram', this.props.convertToKilogram, 'tkg']
    };
    //console.log('label: '+this.props.label+' ; Choice: '+ this.props.choice);
    return(
      <div className='dropdown'>
        <button className='dropdownBtn' > {unitValues[this.props.label][0]} </button>
        <div className='content' >
          {this.props.choice.map((item,id) => (
            <div key={unitValues[item][2]} id={unitValues[item][2]} onClick={unitValues[item][1]}>{unitValues[item][0]}</div>
          ))}
        </div>
      </div>
    );
  }
}

// Action to connect to this Component
const mapDispatchToProps = (dispatch)=>{
  return{
    convertFromMillimeter: ()=>{dispatch(Act.fromMillimeterAction())},
    convertFromCentimeter: ()=>{dispatch(Act.fromCentimeterAction())},
    convertFromInch: ()=>{dispatch(Act.fromInchAction())},
    convertFromFeet: ()=>{dispatch(Act.fromFeetAction())},
    convertFromMeter: ()=>{dispatch(Act.fromMeterAction())},
    convertFromKiloMeter: ()=>{dispatch(Act.fromKilometerAction())},

    convertToMillimeter: ()=>{dispatch(Act.toMillimeterAction())},
    convertToCentimeter: ()=>{dispatch(Act.toCentimeterAction())},
    convertToInch: ()=>{dispatch(Act.toInchAction())},
    convertToFeet: ()=>{dispatch(Act.toFeetAction())},
    convertToMeter: ()=>{dispatch(Act.toMeterAction())},
    convertToKiloMeter: ()=>{dispatch(Act.toKilometerAction())},

    convertFromFahrenheit:()=>{dispatch(Act.fromFahrenheitAction())},
    convertFromCelsius:()=>{dispatch(Act.fromCelsiusAction())},
    convertFromKelvin:()=>{dispatch(Act.fromKelvinAction())},

    convertToFahrenheit:()=>{dispatch(Act.toFahrenheitAction())},
    convertToCelsius:()=>{dispatch(Act.toCelsiusAction())},
    convertToKelvin:()=>{dispatch(Act.toKelvinAction())},

    convertToMillgram:()=>{dispatch(Act.toMilligramAction())},
    convertToGram:()=>{dispatch(Act.toGramAction())},
    convertToOunce:()=>{dispatch(Act.toOunceAction())},
    convertToPound:()=>{dispatch(Act.toPoundAction())},
    convertToKilogram:()=>{dispatch(Act.toKilogramAction())},

    convertFromMillgram:()=>{dispatch(Act.fromMilligramAction())},
    convertFromGram:()=>{dispatch(Act.fromGramAction())},
    convertFromOunce:()=>{dispatch(Act.fromOunceAction())},
    convertFromPound:()=>{dispatch(Act.fromPoundAction())},
    convertFromKilogram:()=>{dispatch(Act.fromKilogramAction())}
  }
}

export default connect(null, mapDispatchToProps)(Dropdown);
