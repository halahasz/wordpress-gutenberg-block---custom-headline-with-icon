/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons__ = __webpack_require__(/*! ./icons */ 4);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Component = wp.element.Component;\n\n\n\n\n\n\n\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorControls = _wp$editor.InspectorControls,\n    PanelColorSettings = _wp$editor.PanelColorSettings,\n    MediaUpload = _wp$editor.MediaUpload;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    PanelBody = _wp$components.PanelBody;\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n\nvar Inspector = function (_Component) {\n\t_inherits(Inspector, _Component);\n\n\tfunction Inspector(props) {\n\t\t_classCallCheck(this, Inspector);\n\n\t\treturn _possibleConstructorReturn(this, (Inspector.__proto__ || Object.getPrototypeOf(Inspector)).apply(this, arguments));\n\t}\n\n\t_createClass(Inspector, [{\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\tvar backgroundColors = [{ color: \"#00d1b2\", name: \"teal\" }, { color: \"#3373dc\", name: \"royal blue\" }, { color: \"#209cef\", name: \"sky blue\" }, { color: \"#22d25f\", name: \"green\" }, { color: \"#ffdd57\", name: \"yellow\" }, { color: \"#ff3860\", name: \"pink\" }, { color: \"#7941b6\", name: \"purple\" }, { color: \"#392F43\", name: \"black\" }];\n\t\t\tvar _props = this.props,\n\t\t\t    setAttributes = _props.setAttributes,\n\t\t\t    text_color = _props.attributes.text_color;\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\t{ key: \"inspector\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelBody,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(PanelColorSettings, {\n\t\t\t\t\t\ttitle: __(\"Text Color\"),\n\t\t\t\t\t\tinitialOpen: true,\n\t\t\t\t\t\tcolorSettings: [{\n\t\t\t\t\t\t\tvalue: text_color,\n\t\t\t\t\t\t\tcolors: backgroundColors,\n\t\t\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\t\t\treturn setAttributes({ text_color: value });\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tlabel: __(\"Text Color\")\n\t\t\t\t\t\t}]\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Inspector;\n}(Component);\n\nvar HeadlineBlock = function (_Component2) {\n\t_inherits(HeadlineBlock, _Component2);\n\n\tfunction HeadlineBlock() {\n\t\t_classCallCheck(this, HeadlineBlock);\n\n\t\treturn _possibleConstructorReturn(this, (HeadlineBlock.__proto__ || Object.getPrototypeOf(HeadlineBlock)).apply(this, arguments));\n\t}\n\n\t_createClass(HeadlineBlock, [{\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\tvar _props2 = this.props,\n\t\t\t    _props2$attributes = _props2.attributes,\n\t\t\t    headline = _props2$attributes.headline,\n\t\t\t    avatarUrl = _props2$attributes.avatarUrl,\n\t\t\t    avatarId = _props2$attributes.avatarId,\n\t\t\t    text_color = _props2$attributes.text_color,\n\t\t\t    setAttributes = _props2.setAttributes;\n\n\n\t\t\treturn [wp.element.createElement(Inspector, Object.assign({ setAttributes: setAttributes }, this.props)), wp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{\n\t\t\t\t\tid: \"custom-headline\",\n\t\t\t\t\tclassName: \"custom-headline\",\n\t\t\t\t\tstyle: {\n\t\t\t\t\t\tcolor: text_color,\n\t\t\t\t\t\tpadding: \"20px\"\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"custom-headline-info\" },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t{ className: \"custom-headline-avatar-wrap\" },\n\t\t\t\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\t\t\t\tbuttonProps: {\n\t\t\t\t\t\t\t\tclassName: \"change-image\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\tonSelect: function onSelect(img) {\n\t\t\t\t\t\t\t\treturn setAttributes({\n\t\t\t\t\t\t\t\t\tavatarUrl: img.url,\n\t\t\t\t\t\t\t\t\tavatarId: img.id\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\ttype: \"image\",\n\t\t\t\t\t\t\tvalue: avatarId,\n\t\t\t\t\t\t\trender: function render(_ref) {\n\t\t\t\t\t\t\t\tvar open = _ref.open;\n\t\t\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t\t\tButton,\n\t\t\t\t\t\t\t\t\t{ onClick: open },\n\t\t\t\t\t\t\t\t\t!avatarId ? wp.element.createElement(\n\t\t\t\t\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t\t\t\t\t{ className: \"icon\" },\n\t\t\t\t\t\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_2__icons__[\"a\" /* default */].upload\n\t\t\t\t\t\t\t\t\t) : wp.element.createElement(\"img\", {\n\t\t\t\t\t\t\t\t\t\tclassName: \"custom-headline-icon\",\n\t\t\t\t\t\t\t\t\t\tsrc: avatarUrl,\n\t\t\t\t\t\t\t\t\t\talt: \"avatar\"\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\ttagName: \"div\",\n\t\t\t\t\tmultiline: \"p\",\n\t\t\t\t\tplaceholder: __(\"Add testimonial text...\"),\n\t\t\t\t\tkeepPlaceholderOnFocus: true,\n\t\t\t\t\tvalue: headline,\n\t\t\t\t\tformattingControls: [\"bold\", \"italic\", \"strikethrough\", \"link\"],\n\t\t\t\t\tclassName: \"custom-headline-text\",\n\t\t\t\t\tstyle: {\n\t\t\t\t\t\tcolor: text_color\n\t\t\t\t\t},\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn setAttributes({ headline: value });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)];\n\t\t}\n\t}]);\n\n\treturn HeadlineBlock;\n}(Component);\n\nregisterBlockType(\"custom-headline\", {\n\ttitle: __(\"Custom Headline with Icon\"),\n\ticon: \"shield\",\n\tcategory: \"common\",\n\tkeywords: [__(\"testimonial\"), __(\"create guten block Example\"), __(\"cgb\")],\n\tattributes: {\n\t\tHeadlineBlock: {\n\t\t\ttype: \"string\"\n\t\t},\n\t\tavatarUrl: {\n\t\t\ttype: \"string\",\n\t\t\tdefault: \"https://placehold.it/100x100\"\n\t\t},\n\t\tavatarId: {\n\t\t\ttype: \"int\",\n\t\t\tdefault: null\n\t\t},\n\t\ttext_color: {\n\t\t\ttype: \"string\",\n\t\t\tdefault: \"black\"\n\t\t}\n\t},\n\tedit: HeadlineBlock,\n\tsave: function save(props) {\n\t\tvar _props$attributes = props.attributes,\n\t\t    headline = _props$attributes.headline,\n\t\t    avatarUrl = _props$attributes.avatarUrl,\n\t\t    text_color = _props$attributes.text_color;\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{\n\t\t\t\tid: \"custom-headline\",\n\t\t\t\tclassName: \"custom-headline\",\n\t\t\t\tstyle: {\n\t\t\t\t\tcolor: text_color\n\t\t\t\t}\n\t\t\t},\n\t\t\ttestimonial && !!testimonial.length && wp.element.createElement(RichText.Content, {\n\t\t\t\ttagName: \"div\",\n\t\t\t\tclassName: \"custom-headline-text\",\n\t\t\t\tstyle: {\n\t\t\t\t\tcolor: text_color\n\t\t\t\t},\n\t\t\t\tvalue: headline\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"custom-headline-info\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"custom-headline-icon-wrap\" },\n\t\t\t\t\twp.element.createElement(\"img\", { src: avatarUrl })\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENvbXBvbmVudCA9IHdwLmVsZW1lbnQuQ29tcG9uZW50O1xuXG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuXG5pbXBvcnQgaWNvbnMgZnJvbSBcIi4vaWNvbnNcIjtcblxudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkZWRpdG9yLlJpY2hUZXh0LFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGVkaXRvci5JbnNwZWN0b3JDb250cm9scyxcbiAgICBQYW5lbENvbG9yU2V0dGluZ3MgPSBfd3AkZWRpdG9yLlBhbmVsQ29sb3JTZXR0aW5ncyxcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRlZGl0b3IuTWVkaWFVcGxvYWQ7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIEJ1dHRvbiA9IF93cCRjb21wb25lbnRzLkJ1dHRvbixcbiAgICBQYW5lbEJvZHkgPSBfd3AkY29tcG9uZW50cy5QYW5lbEJvZHk7XG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xuXG52YXIgSW5zcGVjdG9yID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcblx0X2luaGVyaXRzKEluc3BlY3RvciwgX0NvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gSW5zcGVjdG9yKHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluc3BlY3Rvcik7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEluc3BlY3Rvci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEluc3BlY3RvcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEluc3BlY3RvciwgW3tcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBiYWNrZ3JvdW5kQ29sb3JzID0gW3sgY29sb3I6IFwiIzAwZDFiMlwiLCBuYW1lOiBcInRlYWxcIiB9LCB7IGNvbG9yOiBcIiMzMzczZGNcIiwgbmFtZTogXCJyb3lhbCBibHVlXCIgfSwgeyBjb2xvcjogXCIjMjA5Y2VmXCIsIG5hbWU6IFwic2t5IGJsdWVcIiB9LCB7IGNvbG9yOiBcIiMyMmQyNWZcIiwgbmFtZTogXCJncmVlblwiIH0sIHsgY29sb3I6IFwiI2ZmZGQ1N1wiLCBuYW1lOiBcInllbGxvd1wiIH0sIHsgY29sb3I6IFwiI2ZmMzg2MFwiLCBuYW1lOiBcInBpbmtcIiB9LCB7IGNvbG9yOiBcIiM3OTQxYjZcIiwgbmFtZTogXCJwdXJwbGVcIiB9LCB7IGNvbG9yOiBcIiMzOTJGNDNcIiwgbmFtZTogXCJibGFja1wiIH1dO1xuXHRcdFx0dmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG5cdFx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9wcm9wcy5zZXRBdHRyaWJ1dGVzLFxuXHRcdFx0ICAgIHRleHRfY29sb3IgPSBfcHJvcHMuYXR0cmlidXRlcy50ZXh0X2NvbG9yO1xuXG5cdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdFx0eyBrZXk6IFwiaW5zcGVjdG9yXCIgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFBhbmVsQm9keSxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQYW5lbENvbG9yU2V0dGluZ3MsIHtcblx0XHRcdFx0XHRcdHRpdGxlOiBfXyhcIlRleHQgQ29sb3JcIiksXG5cdFx0XHRcdFx0XHRpbml0aWFsT3BlbjogdHJ1ZSxcblx0XHRcdFx0XHRcdGNvbG9yU2V0dGluZ3M6IFt7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiB0ZXh0X2NvbG9yLFxuXHRcdFx0XHRcdFx0XHRjb2xvcnM6IGJhY2tncm91bmRDb2xvcnMsXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGV4dF9jb2xvcjogdmFsdWUgfSk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyhcIlRleHQgQ29sb3JcIilcblx0XHRcdFx0XHRcdH1dXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gSW5zcGVjdG9yO1xufShDb21wb25lbnQpO1xuXG52YXIgSGVhZGxpbmVCbG9jayA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuXHRfaW5oZXJpdHMoSGVhZGxpbmVCbG9jaywgX0NvbXBvbmVudDIpO1xuXG5cdGZ1bmN0aW9uIEhlYWRsaW5lQmxvY2soKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhlYWRsaW5lQmxvY2spO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChIZWFkbGluZUJsb2NrLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSGVhZGxpbmVCbG9jaykpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEhlYWRsaW5lQmxvY2ssIFt7XG5cdFx0a2V5OiBcInJlbmRlclwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG5cdFx0XHQgICAgX3Byb3BzMiRhdHRyaWJ1dGVzID0gX3Byb3BzMi5hdHRyaWJ1dGVzLFxuXHRcdFx0ICAgIGhlYWRsaW5lID0gX3Byb3BzMiRhdHRyaWJ1dGVzLmhlYWRsaW5lLFxuXHRcdFx0ICAgIGF2YXRhclVybCA9IF9wcm9wczIkYXR0cmlidXRlcy5hdmF0YXJVcmwsXG5cdFx0XHQgICAgYXZhdGFySWQgPSBfcHJvcHMyJGF0dHJpYnV0ZXMuYXZhdGFySWQsXG5cdFx0XHQgICAgdGV4dF9jb2xvciA9IF9wcm9wczIkYXR0cmlidXRlcy50ZXh0X2NvbG9yLFxuXHRcdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBfcHJvcHMyLnNldEF0dHJpYnV0ZXM7XG5cblxuXHRcdFx0cmV0dXJuIFt3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5zcGVjdG9yLCBPYmplY3QuYXNzaWduKHsgc2V0QXR0cmlidXRlczogc2V0QXR0cmlidXRlcyB9LCB0aGlzLnByb3BzKSksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiBcImN1c3RvbS1oZWFkbGluZVwiLFxuXHRcdFx0XHRcdGNsYXNzTmFtZTogXCJjdXN0b20taGVhZGxpbmVcIixcblx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0Y29sb3I6IHRleHRfY29sb3IsXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjIwcHhcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwiY3VzdG9tLWhlYWRsaW5lLWluZm9cIiB9LFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJjdXN0b20taGVhZGxpbmUtYXZhdGFyLXdyYXBcIiB9LFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG5cdFx0XHRcdFx0XHRcdGJ1dHRvblByb3BzOiB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBcImNoYW5nZS1pbWFnZVwiXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChpbWcpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRhdmF0YXJVcmw6IGltZy51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRhdmF0YXJJZDogaW1nLmlkXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHR5cGU6IFwiaW1hZ2VcIixcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGF2YXRhcklkLFxuXHRcdFx0XHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIG9wZW4gPSBfcmVmLm9wZW47XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHRcdEJ1dHRvbixcblx0XHRcdFx0XHRcdFx0XHRcdHsgb25DbGljazogb3BlbiB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0IWF2YXRhcklkID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJpY29uXCIgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbnMudXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBcImN1c3RvbS1oZWFkbGluZS1pY29uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYzogYXZhdGFyVXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ6IFwiYXZhdGFyXCJcblx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuXHRcdFx0XHRcdHRhZ05hbWU6IFwiZGl2XCIsXG5cdFx0XHRcdFx0bXVsdGlsaW5lOiBcInBcIixcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogX18oXCJBZGQgdGVzdGltb25pYWwgdGV4dC4uLlwiKSxcblx0XHRcdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzOiB0cnVlLFxuXHRcdFx0XHRcdHZhbHVlOiBoZWFkbGluZSxcblx0XHRcdFx0XHRmb3JtYXR0aW5nQ29udHJvbHM6IFtcImJvbGRcIiwgXCJpdGFsaWNcIiwgXCJzdHJpa2V0aHJvdWdoXCIsIFwibGlua1wiXSxcblx0XHRcdFx0XHRjbGFzc05hbWU6IFwiY3VzdG9tLWhlYWRsaW5lLXRleHRcIixcblx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0Y29sb3I6IHRleHRfY29sb3Jcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBoZWFkbGluZTogdmFsdWUgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0KV07XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEhlYWRsaW5lQmxvY2s7XG59KENvbXBvbmVudCk7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKFwiY3VzdG9tLWhlYWRsaW5lXCIsIHtcblx0dGl0bGU6IF9fKFwiQ3VzdG9tIEhlYWRsaW5lIHdpdGggSWNvblwiKSxcblx0aWNvbjogXCJzaGllbGRcIixcblx0Y2F0ZWdvcnk6IFwiY29tbW9uXCIsXG5cdGtleXdvcmRzOiBbX18oXCJ0ZXN0aW1vbmlhbFwiKSwgX18oXCJjcmVhdGUgZ3V0ZW4gYmxvY2sgRXhhbXBsZVwiKSwgX18oXCJjZ2JcIildLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0SGVhZGxpbmVCbG9jazoge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIlxuXHRcdH0sXG5cdFx0YXZhdGFyVXJsOiB7XG5cdFx0XHR0eXBlOiBcInN0cmluZ1wiLFxuXHRcdFx0ZGVmYXVsdDogXCJodHRwczovL3BsYWNlaG9sZC5pdC8xMDB4MTAwXCJcblx0XHR9LFxuXHRcdGF2YXRhcklkOiB7XG5cdFx0XHR0eXBlOiBcImludFwiLFxuXHRcdFx0ZGVmYXVsdDogbnVsbFxuXHRcdH0sXG5cdFx0dGV4dF9jb2xvcjoge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdGRlZmF1bHQ6IFwiYmxhY2tcIlxuXHRcdH1cblx0fSxcblx0ZWRpdDogSGVhZGxpbmVCbG9jayxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHZhciBfcHJvcHMkYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIGhlYWRsaW5lID0gX3Byb3BzJGF0dHJpYnV0ZXMuaGVhZGxpbmUsXG5cdFx0ICAgIGF2YXRhclVybCA9IF9wcm9wcyRhdHRyaWJ1dGVzLmF2YXRhclVybCxcblx0XHQgICAgdGV4dF9jb2xvciA9IF9wcm9wcyRhdHRyaWJ1dGVzLnRleHRfY29sb3I7XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XCJkaXZcIixcblx0XHRcdHtcblx0XHRcdFx0aWQ6IFwiY3VzdG9tLWhlYWRsaW5lXCIsXG5cdFx0XHRcdGNsYXNzTmFtZTogXCJjdXN0b20taGVhZGxpbmVcIixcblx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRjb2xvcjogdGV4dF9jb2xvclxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dGVzdGltb25pYWwgJiYgISF0ZXN0aW1vbmlhbC5sZW5ndGggJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LkNvbnRlbnQsIHtcblx0XHRcdFx0dGFnTmFtZTogXCJkaXZcIixcblx0XHRcdFx0Y2xhc3NOYW1lOiBcImN1c3RvbS1oZWFkbGluZS10ZXh0XCIsXG5cdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0Y29sb3I6IHRleHRfY29sb3Jcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsdWU6IGhlYWRsaW5lXG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0eyBjbGFzc05hbWU6IFwiY3VzdG9tLWhlYWRsaW5lLWluZm9cIiB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJjdXN0b20taGVhZGxpbmUtaWNvbi13cmFwXCIgfSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGF2YXRhclVybCB9KVxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!****************************!*\
  !*** ./src/block/icons.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var icons = {};\n\nicons.upload = wp.element.createElement(\n    'svg',\n    { width: '20px', height: '20px', viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg' },\n    wp.element.createElement('path', { d: 'm77.945 91.453h-72.371c-3.3711 0-5.5742-2.3633-5.5742-5.2422v-55.719c0-3.457 2.1172-6.0703 5.5742-6.0703h44.453v11.051l-38.98-0.003906v45.008h60.977v-17.133l11.988-0.007812v22.875c0 2.8789-2.7812 5.2422-6.0664 5.2422z'\n    }),\n    wp.element.createElement('path', { d: 'm16.543 75.48l23.25-22.324 10.441 9.7773 11.234-14.766 5.5039 10.539 0.039063 16.773z'\n    }),\n    wp.element.createElement('path', { d: 'm28.047 52.992c-3.168 0-5.7422-2.5742-5.7422-5.7461 0-3.1758 2.5742-5.75 5.7422-5.75 3.1797 0 5.7539 2.5742 5.7539 5.75 0 3.1719-2.5742 5.7461-5.7539 5.7461z'\n    }),\n    wp.element.createElement('path', { d: 'm84.043 30.492v22.02h-12.059l-0.015625-22.02h-15.852l21.941-21.945 21.941 21.945z'\n    })\n);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (icons);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9pY29ucy5qcz9lZWQzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBpY29ucyA9IHt9O1xuXG5pY29ucy51cGxvYWQgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ3N2ZycsXG4gICAgeyB3aWR0aDogJzIwcHgnLCBoZWlnaHQ6ICcyMHB4Jywgdmlld0JveDogJzAgMCAxMDAgMTAwJywgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgfSxcbiAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtNzcuOTQ1IDkxLjQ1M2gtNzIuMzcxYy0zLjM3MTEgMC01LjU3NDItMi4zNjMzLTUuNTc0Mi01LjI0MjJ2LTU1LjcxOWMwLTMuNDU3IDIuMTE3Mi02LjA3MDMgNS41NzQyLTYuMDcwM2g0NC40NTN2MTEuMDUxbC0zOC45OC0wLjAwMzkwNnY0NS4wMDhoNjAuOTc3di0xNy4xMzNsMTEuOTg4LTAuMDA3ODEydjIyLjg3NWMwIDIuODc4OS0yLjc4MTIgNS4yNDIyLTYuMDY2NCA1LjI0MjJ6J1xuICAgIH0pLFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20xNi41NDMgNzUuNDhsMjMuMjUtMjIuMzI0IDEwLjQ0MSA5Ljc3NzMgMTEuMjM0LTE0Ljc2NiA1LjUwMzkgMTAuNTM5IDAuMDM5MDYzIDE2Ljc3M3onXG4gICAgfSksXG4gICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTI4LjA0NyA1Mi45OTJjLTMuMTY4IDAtNS43NDIyLTIuNTc0Mi01Ljc0MjItNS43NDYxIDAtMy4xNzU4IDIuNTc0Mi01Ljc1IDUuNzQyMi01Ljc1IDMuMTc5NyAwIDUuNzUzOSAyLjU3NDIgNS43NTM5IDUuNzUgMCAzLjE3MTktMi41NzQyIDUuNzQ2MS01Ljc1MzkgNS43NDYxeidcbiAgICB9KSxcbiAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtODQuMDQzIDMwLjQ5MnYyMi4wMmgtMTIuMDU5bC0wLjAxNTYyNS0yMi4wMmgtMTUuODUybDIxLjk0MS0yMS45NDUgMjEuOTQxIDIxLjk0NXonXG4gICAgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGljb25zO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2ljb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);