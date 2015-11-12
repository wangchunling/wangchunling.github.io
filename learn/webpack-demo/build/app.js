webpackJsonp([0],{

/***/ 0:
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! d:\wangchunling.github.io\webpack-demo\js\app.js */1);


/***/ },

/***/ 1:
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CouponlistJs = __webpack_require__(/*! ./Couponlist.js */ 158);
	
	var _CouponlistJs2 = _interopRequireDefault(_CouponlistJs);
	
	var App = _react2['default'].createClass({
	    displayName: 'App',
	
	    render: function render() {
	        return _react2['default'].createElement(_CouponlistJs2['default'], null);
	    }
	});
	_react2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 158:
/*!**************************!*\
  !*** ./js/Couponlist.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	/**
	 * Created by wcl_fxtrip on 2015/11/10.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CouponListTitle = __webpack_require__(/*! ./CouponListTitle */ 159);
	
	var _CouponListTitle2 = _interopRequireDefault(_CouponListTitle);
	
	var _CouponListBody = __webpack_require__(/*! ./CouponListBody */ 160);
	
	var _CouponListBody2 = _interopRequireDefault(_CouponListBody);
	
	var _CouponButton = __webpack_require__(/*! ./CouponButton */ 162);
	
	var _CouponButton2 = _interopRequireDefault(_CouponButton);
	
	var Couponlist = _react2['default'].createClass({
	    displayName: 'Couponlist',
	
	    getInitialState: function getInitialState() {
	        return {
	            chosen: {}
	        };
	    },
	    checkHandle: function checkHandle(oid) {
	        var chosen = this.state.chosen;
	        if (chosen[oid]) {
	            delete chosen[oid];
	        } else {
	            chosen[oid] = true;
	        }
	
	        this.setState({
	            chosen: chosen
	        });
	        console.log(this.state.chosen);
	    },
	    doPay: function doPay() {
	        console.log("should pay for", Object.keys(this.state.chosen));
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            data: [{
	                oid: 123456,
	                count: 20,
	                price: 30,
	                date: '2015-01-01'
	            }, {
	                oid: 123458,
	                count: 30,
	                price: 40,
	                date: '2015-01-02'
	            }, {
	                oid: 123457,
	                count: 40,
	                price: 50,
	                date: '2015-01-03'
	            }]
	        };
	    },
	    render: function render() {
	        return _react2['default'].createElement('div', { className: 'djq-list-box over-hide' }, _react2['default'].createElement(_CouponListTitle2['default'], null), _react2['default'].createElement(_CouponListBody2['default'], _extends({}, this.props, { checkHandle: this.checkHandle, chosen: this.state.chosen })), _react2['default'].createElement(_CouponButton2['default'], _extends({}, this.props, { formData: this.doPay })));
	    }
	});
	exports['default'] = Couponlist;
	module.exports = exports['default'];
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Couponlist.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 159:
/*!*******************************!*\
  !*** ./js/CouponListTitle.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	/**
	 * Created by wcl_fxtrip on 2015/11/10.
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { "default": obj };
	}
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var CouponListTitle = _react2["default"].createClass({
	    displayName: "CouponListTitle",
	
	    render: function render() {
	        return _react2["default"].createElement("div", { className: "djq-tit mt-04 mb-04" }, _react2["default"].createElement("div", { className: "bgc-blue white ta-c d-ib text" }, "代金券"));
	    }
	});
	exports["default"] = CouponListTitle;
	module.exports = exports["default"];
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CouponListTitle.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 160:
/*!******************************!*\
  !*** ./js/CouponListBody.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	/**
	 * Created by wcl_fxtrip on 2015/11/10.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CouponListBodyItem = __webpack_require__(/*! ./CouponListBodyItem */ 161);
	
	var _CouponListBodyItem2 = _interopRequireDefault(_CouponListBodyItem);
	
	var CouponListBody = _react2['default'].createClass({
	    displayName: 'CouponListBody',
	
	    render: function render() {
	        var items = [];
	        for (var i = 0; i < this.props.data.length; i++) {
	            var item = this.props.data[i];
	            items.push(_react2['default'].createElement(_CouponListBodyItem2['default'], _extends({ key: item.oid }, item, { checked: !!this.props.chosen[item.oid],
	                checkHandle: this.props.checkHandle })));
	        }
	
	        return _react2['default'].createElement('div', null, items);
	    }
	});
	exports['default'] = CouponListBody;
	module.exports = exports['default'];
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CouponListBody.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 161:
/*!**********************************!*\
  !*** ./js/CouponListBodyItem.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	/**
	 * Created by wcl_fxtrip on 2015/11/10.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var CouponListBodyItem = _react2['default'].createClass({
	    displayName: 'CouponListBodyItem',
	
	    checkHandle: function checkHandle() {
	        console.log('item checkhandle');
	        console.log(this.props.checked);
	        this.props.checkHandle(this.props.oid);
	    },
	
	    render: function render() {
	        return _react2['default'].createElement('div', { className: 'djq-list' }, _react2['default'].createElement('h2', { className: 'mt-04 mb-02 grey' }, '订单编号：', this.props.oid, _react2['default'].createElement('span', { className: 'fr d-ib w-25 ta-c' }, '订单状态')), _react2['default'].createElement('div', { className: 'list-item' }, _react2['default'].createElement('div', { className: 'w-75 d-ib' }, _react2['default'].createElement('img', { className: 'img', src: 'http://wangchunling.github.io/react-demo/demo1.jpg' }), _react2['default'].createElement('p', null, 'my demo '), _react2['default'].createElement('p', null, '数量：', _react2['default'].createElement('span', { className: 'orange' }, this.props.count), ' 金额：', _react2['default'].createElement('span', { className: 'orange' }, '￥', this.props.price)), _react2['default'].createElement('p', null, '有效期至 ', _react2['default'].createElement('span', { className: 'orange' }, this.props.date))), _react2['default'].createElement('div', { className: 'w-25 d-ib' }, _react2['default'].createElement('div', { className: 'btn-group' }, _react2['default'].createElement('p', null, _react2['default'].createElement('span', { onClick: this.checkHandle,
	            className: !this.props.checked ? 'span-radius d-ib' : 'span-radius d-ib on' }))))));
	    }
	});
	exports['default'] = CouponListBodyItem;
	module.exports = exports['default'];
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CouponListBodyItem.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 162:
/*!****************************!*\
  !*** ./js/CouponButton.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	/**
	 * Created by wcl_fxtrip on 2015/11/10.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CouponListBodyItem = __webpack_require__(/*! ./CouponListBodyItem */ 161);
	
	var _CouponListBodyItem2 = _interopRequireDefault(_CouponListBodyItem);
	
	var CouponButton = _react2['default'].createClass({
	    displayName: 'CouponButton',
	
	    formData: function formData() {
	        this.props.formData();
	    },
	    render: function render() {
	        return _react2['default'].createElement('div', { className: 'ta-c mb-04' }, _react2['default'].createElement('span', { onClick: this.formData, className: 'large-btn bgc-orange white' }, '支付'));
	    }
	});
	exports['default'] = CouponButton;
	module.exports = exports['default'];
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("d:\\wangchunling.github.io\\webpack-demo\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CouponButton.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});
//# sourceMappingURL=app.js.map