(this.webpackJsonpconverter=this.webpackJsonpconverter||[]).push([[0],{13:function(t,e,o){t.exports=o(29)},15:function(t,e,o){},16:function(t,e,o){},17:function(t,e,o){},18:function(t,e,o){},19:function(t,e,o){},29:function(t,e,o){"use strict";o.r(e);var r=o(0),n=o.n(r),i=(o(15),o(16),o(17),o(18),o(19),o(7)),m=o.n(i),c=o(1),l="tempreature",s=function(){return{type:"length"}},u=function(){return{type:"weight"}},a=function(){return{type:l}},f={unitClass:["active","",""]};var p="fromInch",b="fromFeet",v="toInch",h="toFeet",y="toMeter",g="toGram",d="toOunce",U="toPound",O=function(t){return{counterUnit:t,type:"fromMillimeter",options:["fromCentimeter",p,b,"fromMeter","fromKilometer"],symbol:"mm"}},M=function(t){return{counterUnit:t,type:"fromCentimeter",options:["fromMillimeter",p,b,"fromMeter","fromKilometer"],symbol:"cm"}},K=function(t){return{counterUnit:t,type:p,options:["fromMillimeter","fromCentimeter",b,"fromMeter","fromKilometer"],symbol:"in"}},C=function(t){return{counterUnit:t,type:b,options:["fromMillimeter","fromCentimeter",p,"fromMeter","fromKilometer"],symbol:"ft"}},F=function(t){return{counterUnit:t,type:"fromMeter",options:["fromMillimeter","fromCentimeter",p,b,"fromKilometer"],symbol:"m"}},j=function(t){return{counterUnit:t,type:"fromKilometer",options:["fromMillimeter","fromCentimeter",p,b,"fromMeter"],symbol:"km"}},S=function(t){return{counterUnit:t,type:"toMillimeter",options:["toCentimeter",v,h,y,"toKilometer"],symbol:"mm"}},E=function(t){return{counterUnit:t,type:"toCentimeter",options:["toMillimeter",v,h,y,"toKilometer"],symbol:"cm"}},T=function(t){return{counterUnit:t,type:v,options:["toMillimeter","toCentimeter",h,y,"toKilometer"],symbol:"in"}},w=function(t){return{counterUnit:t,type:h,options:["toMillimeter","toCentimeter",v,y,"toKilometer"],symbol:"ft"}},k=function(t){return{counterUnit:t,type:y,options:["toMillimeter","toCentimeter",v,h,"toKilometer"],symbol:"m"}},P=function(t){return{counterUnit:t,type:"toKilometer",options:["toMillimeter","toCentimeter",v,h,y],symbol:"km"}},N=function(t){return{counterUnit:t,type:"fromFahrenheit",options:["fromCelsius","fromKelvin"],symbol:"\xb0F"}},G=function(t){return{counterUnit:t,type:"fromCelsius",options:["fromFahrenheit","fromKelvin"],symbol:"\xb0C"}},I=function(t){return{counterUnit:t,type:"fromKelvin",options:["fromFahrenheit","fromCelsius"],symbol:"\xb0K"}},_=function(t){return{counterUnit:t,type:"toFahrenheit",options:["toCelsius","toKelvin"],symbol:"\xb0F"}},W=function(t){return{counterUnit:t,type:"toCelsius",options:["toFahrenheit","toKelvin"],symbol:"\xb0C"}},A=function(t){return{counterUnit:t,type:"toKelvin",options:["toFahrenheit","toCelsius"],symbol:"\xb0K"}},R=function(t){return{counterUnit:t,type:"fromMilligram",options:["fromGram","fromOunce","fromPound","fromKilogram"],symbol:"mg"}},L=function(t){return{counterUnit:t,type:"fromGram",options:["fromMilligram","fromOunce","fromPound","fromKilogram"],symbol:"g "}},x=function(t){return{counterUnit:t,type:"fromOunce",options:["fromMilligram","fromGram","fromPound","fromKilogram"],symbol:"oz"}},z=function(t){return{counterUnit:t,type:"fromPound",options:["fromMilligram","fromGram","fromOunce","fromKilogram"],symbol:"lb"}},D=function(t){return{counterUnit:t,type:"fromKilogram",options:["fromMilligram","fromGram","fromOunce","fromPound"],symbol:"kg"}},V=function(t){return{counterUnit:t,type:"toMilligram",options:[g,d,U,"toKilogram"],symbol:"mg"}},X=function(t){return{counterUnit:t,type:g,options:["toMilligram",d,U,"toKilogram"],symbol:"g "}},B=function(t){return{counterUnit:t,type:d,options:["toMilligram",g,U,"toKilogram"],symbol:"oz"}},J=function(t){return{counterUnit:t,type:U,options:["toMilligram",g,d,"toKilogram"],symbol:"lb"}},$=function(t){return{counterUnit:t,type:"toKilogram",options:["toMilligram",g,d,U],symbol:"kg"}},q={fromUnit:"fromMillimeter",fromUnitOptions:["fromCentimeter",p,b,"fromMeter","fromKilometer"],toUnit:"toCentimeter",toUnitOptions:["toMillimeter",v,h,y,"toKilometer"]},H={fromUnit:"fromMilligram",fromUnitOptions:["fromGram","fromOunce","fromPound","fromKilogram"],toUnit:g,toUnitOptions:["toMilligram",d,U,"toKilogram"]},Q={fromUnit:"fromFahrenheit",fromUnitOptions:["fromCelsius","fromKelvin"],toUnit:"toCelsius",toUnitOptions:["toFahrenheit","toKelvin"]},Y=function(t,e){return Object.assign({},t,{fromUnit:e.type,fromUnitOptions:e.options})},Z=function(t,e){return Object.assign({},t,{toUnit:e.type,toUnitOptions:e.options})};var tt=["",null,NaN,"na","nan","Na"];function et(t,e,o){return{type:"CONVERT_INPUT",data:tt.includes(t.target.value)?0:t.target.value,fromUnit:e,toUnit:o}}var ot=["fromMillimeter","fromCentimeter","fromInch","fromFeet","fromMeter","fromKilometer"],rt=["fromMilligram","fromGram","fromOunce","fromPound","fromKilogram"],nt=["fromFahrenheit","fromCelsius","fromKelvin"],it={fromMillimeter:{toMillimeter:1,toCentimeter:.01,toInch:.0393700787,toFeet:.0032808399,toMeter:.001,toKilometer:1e-6},fromCentimeter:{toMillimeter:10,toCentimeter:1,toInch:.3937007874,toFeet:.032808399,toMeter:.01,toKilometer:1e-5},fromInch:{toMillimeter:25.4,toCentimeter:2.54,toInch:1,toFeet:.0833333333,toMeter:.0254,toKilometer:254e-7},fromFeet:{toMillimeter:304.8,toCentimeter:30.48,toInch:12,toFeet:1,toMeter:.3048,toKilometer:3048e-7},fromMeter:{toMillimeter:1e3,toCentimeter:100,toInch:39.3700787402,toFeet:3.280839895,toMeter:1,toKilometer:.001},fromKilometer:{toMillimeter:1e6,toCentimeter:1e5,toInch:39370.078740157,toFeet:3280.8398950131,toMeter:1e3,toKilometer:1}},mt={fromMilligram:{toMilligram:1,toGram:.001,toOunce:35274e-9,toPound:22046226218488e-19,toKilogram:1e-6},fromGram:{toMilligram:1e3,toGram:1,toOunce:.0352739619,toPound:.0022046226,toKilogram:.001},fromOunce:{toMilligram:28349.523125,toGram:28.349523125,toOunce:1,toPound:.0625,toKilogram:.0283495231},fromPound:{toMilligram:453592.37,toGram:453.59237,toOunce:16,toPound:1,toKilogram:.45359237},fromKilogram:{toMilligram:1e6,toGram:1e3,toOunce:35.2739619496,toPound:2.2046226218,toKilogram:1}};function ct(t,e,o){return ot.includes(e)?function(t,e,o){return t*it[e][o]}(t,e,o):rt.includes(e)?function(t,e,o){return t*mt[e][o]}(t,e,o):nt.includes(e)?function(t,e,o){switch(e){case"fromFahrenheit":return"toCelsius"===o?5/9*(t-32):"toKelvin"===o?5/9*(t+459.67):"toFahrenheit"===o?t:"NAN";case"fromCelsius":return"toFahrenheit"===o?1.8*t+32:"toKelvin"===o?273.15+t:"toCelsius"===o?t:"NAN";case"fromKelvin":return"toFahrenheit"===o?1.8*t-459.67:"toCelsius"===o?t-273.15:"toKelvin"===o?t:"NAN";default:return"NAN"}}(t,e,o):""}function lt(t){var e,o,r=Math.abs(parseFloat(t.data.toString()));return{input:(e=t.data.toString(),o=r,e.endsWith(".")&&o.toString().length===e.length-1&&null===e.match(/[.][0-9]*[.]/)||e.endsWith("0")&&e.includes(".")?e:null===e?0:o),output:ct(r,t.fromUnit,t.toUnit)}}var st={input:0,output:0,fromSymbol:"mm",toSymbol:"cm"};var ut=Object(c.c)(Object(c.b)({select:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"length":return{unitClass:["active","",""]};case"weight":return{unitClass:["","active",""]};case l:return{unitClass:["","","active"]};default:return t}},option:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"length":return q;case"weight":return H;case l:return Q;case"fromMillimeter":return Y(t,e);case"toMillimeter":return Z(t,e);case"fromCentimeter":return Y(t,e);case"toCentimeter":return Z(t,e);case p:return Y(t,e);case v:return Z(t,e);case b:return Y(t,e);case h:return Z(t,e);case"fromMeter":return Y(t,e);case y:return Z(t,e);case"fromKilometer":return Y(t,e);case"toKilometer":return Z(t,e);case"fromFahrenheit":return Y(t,e);case"toFahrenheit":return Z(t,e);case"fromCelsius":return Y(t,e);case"toCelsius":return Z(t,e);case"fromKelvin":return Y(t,e);case"toKelvin":return Z(t,e);case"fromMilligram":return Y(t,e);case"toMilligram":return Z(t,e);case"fromGram":return Y(t,e);case g:return Z(t,e);case"fromOunce":return Y(t,e);case d:return Z(t,e);case"fromPound":return Y(t,e);case U:return Z(t,e);case"fromKilogram":return Y(t,e);case"toKilogram":return Z(t,e);default:return t}},convert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,e=arguments.length>1?arguments[1]:void 0,o={data:t.input,fromUnit:e.type,toUnit:e.counterUnit},r={data:t.input,fromUnit:e.counterUnit,toUnit:e.type};switch(e.type){case"length":return{input:0,output:0,fromSymbol:"mm",toSymbol:"cm"};case"weight":return{input:0,output:0,fromSymbol:"mg",toSymbol:"g "};case l:return{input:0,output:0,fromSymbol:"\xb0F",toSymbol:"\xb0C"};case"CONVERT_INPUT":return lt(e);case"fromMillimeter":return Object.assign({},lt(o),{fromSymbol:e.symbol});case"toMillimeter":return Object.assign({},lt(r),{toSymbol:e.symbol});case"fromCentimeter":return Object.assign({},lt(o),{fromSymbol:e.symbol});case"toCentimeter":return Object.assign({},lt(r),{toSymbol:e.symbol});case p:return Object.assign({},lt(o),{fromSymbol:e.symbol});case v:return Object.assign({},lt(r),{toSymbol:e.symbol});case b:return Object.assign({},lt(o),{fromSymbol:e.symbol});case h:return Object.assign({},lt(r),{toSymbol:e.symbol});case"fromMeter":return Object.assign({},lt(o),{fromSymbol:e.symbol});case y:return Object.assign({},lt(r),{toSymbol:e.symbol});case"fromKilometer":return Object.assign({},lt(o),{fromSymbol:e.symbol});case"toKilometer":return Object.assign({},lt(r),{toSymbol:e.symbol});case"fromFahrenheit":return Object.assign({},lt(o),{fromSymbol:e.symbol});case"toFahrenheit":return Object.assign({},lt(r),{toSymbol:e.symbol});case"fromCelsius":return Object.assign({},lt(o),{fromSymbol:e.symbol});case"toCelsius":return Object.assign({},lt(r),{toSymbol:e.symbol});case"fromKelvin":return Object.assign({},lt(o),{fromSymbol:e.symbol});case"toKelvin":return Object.assign({},lt(r),{toSymbol:e.symbol});case"fromMilligram":return Object.assign({},lt(o),{fromSymbol:e.symbol});case"toMilligram":return Object.assign({},lt(r),{toSymbol:e.symbol});case"fromGram":return Object.assign({},lt(o),{fromSymbol:e.symbol});case g:return Object.assign({},lt(r),{toSymbol:e.symbol});case"fromOunce":return Object.assign({},lt(o),{fromSymbol:e.symbol});case d:return Object.assign({},lt(r),{toSymbol:e.symbol});case"fromPound":return Object.assign({},lt(o),{fromSymbol:e.symbol});case U:return Object.assign({},lt(r),{toSymbol:e.symbol});case"fromKilogram":return Object.assign({},lt(o),{fromSymbol:e.symbol});case"toKilogram":return Object.assign({},lt(r),{toSymbol:e.symbol});default:return t}}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),at=o(4),ft=o(2),pt=o(3),bt=o(6),vt=o(5),ht=function(t){Object(bt.a)(o,t);var e=Object(vt.a)(o);function o(){return Object(ft.a)(this,o),e.apply(this,arguments)}return Object(pt.a)(o,[{key:"render",value:function(){var t=this,e={fromMillimeter:["Millimeter",function(){return t.props.convertFromMillimeter(t.props.counterUnit)},"fmm"],fromCentimeter:["Centimeter",function(){return t.props.convertFromCentimeter(t.props.counterUnit)},"fcm"],fromInch:["Inch",function(){return t.props.convertFromInch(t.props.counterUnit)},"fin"],fromFeet:["Feet",function(){return t.props.convertFromFeet(t.props.counterUnit)},"fft"],fromMeter:["Meter",function(){return t.props.convertFromMeter(t.props.counterUnit)},"fmt"],fromKilometer:["Kilometer",function(){return t.props.convertFromKiloMeter(t.props.counterUnit)},"fkm"],toMillimeter:["Millimeter",function(){return t.props.convertToMillimeter(t.props.counterUnit)},"tmm"],toCentimeter:["Centimeter",function(){return t.props.convertToCentimeter(t.props.counterUnit)},"tcm"],toInch:["Inch",function(){return t.props.convertToInch(t.props.counterUnit)},"tin"],toFeet:["Feet",function(){return t.props.convertToFeet(t.props.counterUnit)},"tft"],toMeter:["Meter",function(){return t.props.convertToMeter(t.props.counterUnit)},"tmt"],toKilometer:["Kilometer",function(){return t.props.convertToKiloMeter(t.props.counterUnit)},"tkm"],fromFahrenheit:["Fahrenheit",function(){return t.props.convertFromFahrenheit(t.props.counterUnit)},"ffh"],fromCelsius:["Celsius",function(){return t.props.convertFromCelsius(t.props.counterUnit)},"fcs"],fromKelvin:["Kelvin",function(){return t.props.convertFromKelvin(t.props.counterUnit)},"fkn"],toFahrenheit:["Fahrenheit",function(){return t.props.convertToFahrenheit(t.props.counterUnit)},"tfh"],toCelsius:["Celsius",function(){return t.props.convertToCelsius(t.props.counterUnit)},"tcs"],toKelvin:["Kelvin",function(){return t.props.convertToKelvin(t.props.counterUnit)},"tkn"],fromMilligram:["Milligram",function(){return t.props.convertFromMillgram(t.props.counterUnit)},"fmg"],fromGram:["Gram",function(){return t.props.convertFromGram(t.props.counterUnit)},"fg"],fromOunce:["Ounce",function(){return t.props.convertFromOunce(t.props.counterUnit)},"foz"],fromPound:["Pound",function(){return t.props.convertFromPound(t.props.counterUnit)},"flb"],fromKilogram:["Kilogram",function(){return t.props.convertFromKilogram(t.props.counterUnit)},"fkg"],toMilligram:["Milligram",function(){return t.props.convertToMillgram(t.props.counterUnit)},"tmg"],toGram:["Gram",function(){return t.props.convertToGram(t.props.counterUnit)},"tg"],toOunce:["Ounce",function(){return t.props.convertToOunce(t.props.counterUnit)},"toz"],toPound:["Pound",function(){return t.props.convertToPound(t.props.counterUnit)},"tlb"],toKilogram:["Kilogram",function(){return t.props.convertToKilogram(t.props.counterUnit)},"tkg"]};return n.a.createElement("div",{className:"dropdown"},n.a.createElement("button",{className:"dropdownBtn"}," ",e[this.props.label][0]," "),n.a.createElement("div",{className:"content"},this.props.choice.map((function(t,o){return n.a.createElement("div",{key:e[t][2],id:e[t][2],onClick:e[t][1]},e[t][0])}))))}}]),o}(n.a.Component),yt=Object(at.b)(null,(function(t){return Object(c.a)({convertFromMillimeter:O,convertFromCentimeter:M,convertFromInch:K,convertFromFeet:C,convertFromMeter:F,convertFromKiloMeter:j,convertToMillimeter:S,convertToCentimeter:E,convertToInch:T,convertToFeet:w,convertToMeter:k,convertToKiloMeter:P,convertFromFahrenheit:N,convertFromCelsius:G,convertFromKelvin:I,convertToFahrenheit:_,convertToCelsius:W,convertToKelvin:A,convertToMillgram:V,convertToGram:X,convertToOunce:B,convertToPound:J,convertToKilogram:$,convertFromMillgram:R,convertFromGram:L,convertFromOunce:x,convertFromPound:z,convertFromKilogram:D},t)}))(ht),gt=function(t){Object(bt.a)(o,t);var e=Object(vt.a)(o);function o(){return Object(ft.a)(this,o),e.apply(this,arguments)}return Object(pt.a)(o,[{key:"render",value:function(){return n.a.createElement("div",{id:"conversion-unit"},n.a.createElement(yt,{label:this.props.fromUnit,choice:this.props.fromUnitOptions,counterUnit:this.props.toUnit}),n.a.createElement("div",{id:"direction"},n.a.createElement("i",{class:"fa fa-arrow-circle-right","aria-hidden":"true"})),n.a.createElement(yt,{label:this.props.toUnit,choice:this.props.toUnitOptions,counterUnit:this.props.fromUnit}))}}]),o}(n.a.Component),dt=Object(at.b)((function(t){return{fromUnit:t.option.fromUnit,toUnit:t.option.toUnit,fromUnitOptions:t.option.fromUnitOptions,toUnitOptions:t.option.toUnitOptions}}),null)(gt),Ut=function(t){return n.a.createElement("div",{onClick:t.callback,id:t.id,tabIndex:"0",className:t.style,value:t.id},t.label," ")},Ot=function(t){Object(bt.a)(o,t);var e=Object(vt.a)(o);function o(){return Object(ft.a)(this,o),e.apply(this,arguments)}return Object(pt.a)(o,[{key:"render",value:function(){var t={callback:this.props.selectLength,id:"length",label:"Length",style:this.props.style[0]},e={callback:this.props.selectWeight,id:"weight",label:"Weight",style:this.props.style[1]},o={callback:this.props.selectTemp,id:"temperature",label:"Temperature",style:this.props.style[2]};return n.a.createElement("div",{id:"control"},n.a.createElement(Ut,t),n.a.createElement(Ut,e),n.a.createElement(Ut,o))}}]),o}(n.a.Component),Mt=Object(at.b)((function(t){return{style:t.select.unitClass}}),(function(t){return Object(c.a)({selectLength:s,selectWeight:u,selectTemp:a},t)}))(Ot),Kt=function(t){Object(bt.a)(o,t);var e=Object(vt.a)(o);function o(){return Object(ft.a)(this,o),e.apply(this,arguments)}return Object(pt.a)(o,[{key:"render",value:function(){var t=this;return n.a.createElement("div",{id:"results"},n.a.createElement("div",null,n.a.createElement("input",{id:"input",type:"text",min:"0",value:this.props.input,onChange:function(e){return t.props.convert(e,t.props.fromUnit,t.props.toUnit)}}),n.a.createElement("span",null,this.props.fromSymbol)),n.a.createElement("div",{id:"display"},this.props.output,n.a.createElement("span",null," ",this.props.toSymbol)))}}]),o}(n.a.Component),Ct=Object(at.b)((function(t){return{input:t.convert.input,output:t.convert.output,fromSymbol:t.convert.fromSymbol,toSymbol:t.convert.toSymbol,fromUnit:t.option.fromUnit,toUnit:t.option.toUnit}}),(function(t){return Object(c.a)({convert:et},t)}))(Kt),Ft=function(t){Object(bt.a)(o,t);var e=Object(vt.a)(o);function o(){return Object(ft.a)(this,o),e.apply(this,arguments)}return Object(pt.a)(o,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("nav",null,n.a.createElement("i",{className:"fa fa-rebel","aria-hidden":"true"}),n.a.createElement("span",null,"Rebel Conversion")),n.a.createElement("div",{id:"main-container"},n.a.createElement("div",{id:"boundary"},n.a.createElement(Mt,null),n.a.createElement(dt,null),n.a.createElement(Ct,null))))}}]),o}(n.a.Component),jt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function St(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var o=t.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}m.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(at.a,{store:ut},n.a.createElement(Ft,null))),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/converter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/converter","/service-worker.js");jt?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(o){var r=o.headers.get("content-type");404===o.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):St(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):St(e,t)}))}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.ce4c17cd.chunk.js.map