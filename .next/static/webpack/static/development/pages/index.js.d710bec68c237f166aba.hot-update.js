webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/TextBox.js":
/*!*******************************!*\
  !*** ./components/TextBox.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);









var _jsxFileName = "C:\\Users\\dylan\\Desktop\\movie-spinner\\components\\TextBox.js";


var sleep = function sleep(milliseconds) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_8___default.a(function (resolve) {
    return setTimeout(resolve, milliseconds);
  });
};

var buttonStyle = {
  backgroundColor: "rgb(255, 87, 51)",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px"
};

var TextBox =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TextBox, _React$Component);

  function TextBox(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TextBox);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(TextBox).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "wheelSpun", false);

    _this.state = {
      count: '',
      movies: [],
      chosenMovie: "",
      movie: "",
      imgsrc: ""
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.spinWheel = _this.spinWheel.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.clear = _this.clear.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TextBox, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        count: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      this.setState({
        movies: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.state.movies), [this.state.count + " "])
      }); //this.setState({movie: "Successfuly entered {this.state.count} !"});

      event.preventDefault();
    }
  }, {
    key: "spinWheel",
    value: function spinWheel() {
      if (this.state.movies.length > 0 && !this.wheelSpun) {
        //console.log(this.state.movies[Math.floor(Math.random()*this.state.movies.length)]);
        var randMovie = this.state.movies[Math.floor(Math.random() * this.state.movies.length)];
        this.setState({
          chosenMovie: randMovie
        });
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + randMovie + "&callback=?", false); // false for synchronous request

        xmlHttp.send(null);
        var JSONString = xmlHttp.responseText.substring(2, xmlHttp.responseText.length - 1); //console.log(JSONString);

        var movieJSON = JSON.parse(JSONString);
        console.log(movieJSON.results[0].poster_path); //this.setState({imgsrc: "http://image.tmdb.org/t/p/w500/" + movieJSON.results[0].poster_path +  "class=img-responsive"});

        this.wheelSpun = true;
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.setState({
        movies: []
      });
      this.setState({
        chosenMovie: ""
      });
      this.wheelSpun = false;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        style: {
          fontSize: "3em",
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Type in a movie: ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        placeholder: "",
        type: "text",
        name: "movieChoice",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ol", {
        style: {
          textAlign: "center",
          listStylePosition: "inside",
          fontSize: "2em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, this.state.movies.map(function (movie) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          style: {
            textAlign: "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, movie));
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        onClick: this.spinWheel,
        style: buttonStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Spin! That! Wheel!"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        onClick: this.clear,
        style: buttonStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Clear Choices"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "You will be watching: ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, this.state.chosenMovie)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: this.imgsrc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }));
    }
  }]);

  return TextBox;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TextBox);

/***/ })

})
//# sourceMappingURL=index.js.d710bec68c237f166aba.hot-update.js.map