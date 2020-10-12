import React from 'react';
import {connect} from 'react-redux';
import * as OA from './../actions/optionActions.js';
import {bindActionCreators} from 'redux';

// Dropdown menu component with unit option
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
export default connect(null, mapDispatchToProps)(Dropdown);
