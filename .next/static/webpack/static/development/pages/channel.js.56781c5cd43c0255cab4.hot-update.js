webpackHotUpdate("static\\development\\pages\\channel.js",{

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "C:\\Users\\Jhurgen\\Desktop\\Repositories\\Podcast-platzi\\pages\\channel.js";





var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          channel = _this$props.channel,
          audioClips = _this$props.audioClips,
          series = _this$props.series;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3938680290",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "jsx-3938680290",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Podcasts"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(channel.urls.banner_image.original, ")")
        },
        className: "jsx-3938680290" + " " + "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-3938680290",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, channel.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-3938680290",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "\xDAltimos Podcasts"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3938680290" + " " + "podcasts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, audioClips.map(function (clip) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          key: clip.id,
          href: "/podcast?id=".concat(clip.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "jsx-3938680290" + " " + "podcast",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: clip.urls.image,
          alt: "",
          className: "jsx-3938680290",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
          className: "jsx-3938680290",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, clip.title)));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-3938680290",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Series"), series.map(function (serie) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: serie.id,
          className: "jsx-3938680290",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, serie.title);
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3695901768",
        __self: this
      }, "header.jsx-3938680290{color:#fff;background:#8756ca;padding:15px;text-align:center;}.podcasts.jsx-3938680290{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}a.podcast.jsx-3938680290{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}.podcast.jsx-3938680290 img.jsx-3938680290{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:170px;height:180px;}h2.jsx-3938680290{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}h1.jsx-3938680290{padding:15px;font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmh1cmdlblxcRGVza3RvcFxcUmVwb3NpdG9yaWVzXFxQb2RjYXN0LXBsYXR6aVxccGFnZXNcXGNoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRvQixBQUd3QixBQU1FLEFBTUMsQUFNSSxBQU1OLEFBT0MsV0E5Qk0sQ0F3QkgsQ0FsQkYsQUF5QkUsQ0FuQkksSUFNdUIsU0FYOUIsQ0FrQkcsQ0FPbEIsQ0EvQmUsSUFZRixNQUxpRCxHQU4xQyxDQXdCVCxDQVpZLFFBYUgsS0FSTixHQWhCZCxTQWlCZSxDQVFmLFlBUEEsWUFOQSxHQU5BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSmh1cmdlblxcRGVza3RvcFxcUmVwb3NpdG9yaWVzXFxQb2RjYXN0LXBsYXR6aVxccGFnZXNcXGNoYW5uZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xyXG4gICAgbGV0IGlkQ2hhbm5lbCA9IHF1ZXJ5LmlkO1xyXG5cclxuICAgIGxldCByZXFDaGFubmVsID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfWBcclxuICAgICk7XHJcbiAgICBsZXQgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKTtcclxuICAgIGxldCBjaGFubmVsID0gZGF0YUNoYW5uZWwuYm9keS5jaGFubmVsO1xyXG5cclxuICAgIGxldCByZXFBdWRpbyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vYXVkaW9fY2xpcHNgXHJcbiAgICApO1xyXG4gICAgbGV0IGRhdGFBdWRpb3MgPSBhd2FpdCByZXFBdWRpby5qc29uKCk7XHJcbiAgICBsZXQgYXVkaW9DbGlwcyA9IGRhdGFBdWRpb3MuYm9keS5hdWRpb19jbGlwcztcclxuXHJcbiAgICBsZXQgcmVxU2VyaWVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9jaGlsZF9jaGFubmVsc2BcclxuICAgICk7XHJcbiAgICBsZXQgZGF0YVNlcmllcyA9IGF3YWl0IHJlcVNlcmllcy5qc29uKCk7XHJcbiAgICBsZXQgc2VyaWVzID0gZGF0YVNlcmllcy5ib2R5LmNoYW5uZWxzO1xyXG5cclxuICAgIHJldHVybiB7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIHNlcmllcyB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoZWFkZXI+UG9kY2FzdHM8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmFubmVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2NoYW5uZWwudXJscy5iYW5uZXJfaW1hZ2Uub3JpZ2luYWx9KWBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGgxPntjaGFubmVsLnRpdGxlfTwvaDE+XHJcblxyXG4gICAgICAgIDxoMj7Dmmx0aW1vcyBQb2RjYXN0czwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2RjYXN0c1wiPlxyXG4gICAgICAgICAge2F1ZGlvQ2xpcHMubWFwKGNsaXAgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e2NsaXAuaWR9IGhyZWY9e2AvcG9kY2FzdD9pZD0ke2NsaXAuaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9kY2FzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2NsaXAudXJscy5pbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxoMj57Y2xpcC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgyPlNlcmllczwvaDI+XHJcbiAgICAgICAge3Nlcmllcy5tYXAoc2VyaWUgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3NlcmllLmlkfT57c2VyaWUudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucG9kY2FzdHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYS5wb2RjYXN0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBvZGNhc3QgaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Jhurgen\\Desktop\\Repositories\\Podcast-platzi\\pages\\channel.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "757424675",
        __self: this
      }, "body{background:white;margin:0;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmh1cmdlblxcRGVza3RvcFxcUmVwb3NpdG9yaWVzXFxQb2RjYXN0LXBsYXR6aVxccGFnZXNcXGNoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdXLEFBR2dDLGlCQUNSLFNBQ2Esc0JBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSmh1cmdlblxcRGVza3RvcFxcUmVwb3NpdG9yaWVzXFxQb2RjYXN0LXBsYXR6aVxccGFnZXNcXGNoYW5uZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xyXG4gICAgbGV0IGlkQ2hhbm5lbCA9IHF1ZXJ5LmlkO1xyXG5cclxuICAgIGxldCByZXFDaGFubmVsID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfWBcclxuICAgICk7XHJcbiAgICBsZXQgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKTtcclxuICAgIGxldCBjaGFubmVsID0gZGF0YUNoYW5uZWwuYm9keS5jaGFubmVsO1xyXG5cclxuICAgIGxldCByZXFBdWRpbyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vYXVkaW9fY2xpcHNgXHJcbiAgICApO1xyXG4gICAgbGV0IGRhdGFBdWRpb3MgPSBhd2FpdCByZXFBdWRpby5qc29uKCk7XHJcbiAgICBsZXQgYXVkaW9DbGlwcyA9IGRhdGFBdWRpb3MuYm9keS5hdWRpb19jbGlwcztcclxuXHJcbiAgICBsZXQgcmVxU2VyaWVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9jaGlsZF9jaGFubmVsc2BcclxuICAgICk7XHJcbiAgICBsZXQgZGF0YVNlcmllcyA9IGF3YWl0IHJlcVNlcmllcy5qc29uKCk7XHJcbiAgICBsZXQgc2VyaWVzID0gZGF0YVNlcmllcy5ib2R5LmNoYW5uZWxzO1xyXG5cclxuICAgIHJldHVybiB7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIHNlcmllcyB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoZWFkZXI+UG9kY2FzdHM8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmFubmVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2NoYW5uZWwudXJscy5iYW5uZXJfaW1hZ2Uub3JpZ2luYWx9KWBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGgxPntjaGFubmVsLnRpdGxlfTwvaDE+XHJcblxyXG4gICAgICAgIDxoMj7Dmmx0aW1vcyBQb2RjYXN0czwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2RjYXN0c1wiPlxyXG4gICAgICAgICAge2F1ZGlvQ2xpcHMubWFwKGNsaXAgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e2NsaXAuaWR9IGhyZWY9e2AvcG9kY2FzdD9pZD0ke2NsaXAuaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9kY2FzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2NsaXAudXJscy5pbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxoMj57Y2xpcC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgyPlNlcmllczwvaDI+XHJcbiAgICAgICAge3Nlcmllcy5tYXAoc2VyaWUgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3NlcmllLmlkfT57c2VyaWUudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucG9kY2FzdHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYS5wb2RjYXN0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBvZGNhc3QgaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Jhurgen\\Desktop\\Repositories\\Podcast-platzi\\pages\\channel.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, idChannel, reqChannel, dataChannel, channel, reqAudio, dataAudios, audioClips, reqSeries, dataSeries, series;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                idChannel = query.id;
                _context.next = 4;
                return fetch("https://api.audioboom.com/channels/".concat(idChannel));

              case 4:
                reqChannel = _context.sent;
                _context.next = 7;
                return reqChannel.json();

              case 7:
                dataChannel = _context.sent;
                channel = dataChannel.body.channel;
                _context.next = 11;
                return fetch("https://api.audioboom.com/channels/".concat(idChannel, "/audio_clips"));

              case 11:
                reqAudio = _context.sent;
                _context.next = 14;
                return reqAudio.json();

              case 14:
                dataAudios = _context.sent;
                audioClips = dataAudios.body.audio_clips;
                _context.next = 18;
                return fetch("https://api.audioboom.com/channels/".concat(idChannel, "/child_channels"));

              case 18:
                reqSeries = _context.sent;
                _context.next = 21;
                return reqSeries.json();

              case 21:
                dataSeries = _context.sent;
                series = dataSeries.body.channels;
                return _context.abrupt("return", {
                  channel: channel,
                  audioClips: audioClips,
                  series: series
                });

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.56781c5cd43c0255cab4.hot-update.js.map