define(["./oav-app.js"],function(_oavApp){"use strict";function _templateObject_40f7525088b111e9978e8b611c85113f(){var data=babelHelpers.taggedTemplateLiteral(["\n      <section>\n        <h2>Oops! You hit a 404</h2>\n        <p>\n          The page you're looking for doesn't seem to exist. Head back\n          <a href=\"/\">home</a> and try again?\n        </p>\n      </section>\n    "]);_templateObject_40f7525088b111e9978e8b611c85113f=function _templateObject_40f7525088b111e9978e8b611c85113f(){return data};return data}//import { SharedStyles } from './shared-styles.js';
var OavView404=/*#__PURE__*/function(_PageViewElement){babelHelpers.inherits(OavView404,_PageViewElement);function OavView404(){babelHelpers.classCallCheck(this,OavView404);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(OavView404).apply(this,arguments))}babelHelpers.createClass(OavView404,[{key:"render",value:function render(){return(0,_oavApp.html$1)(_templateObject_40f7525088b111e9978e8b611c85113f())}}]);return OavView404}(_oavApp.PageViewElement);window.customElements.define("oav-view404",OavView404)});