"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_searchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/searchBar */ \"./src/components/searchBar.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction App() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        bg: \"#222222\",\n        minH: \"100vh\",\n        display: \"flex\",\n        flexDir: \"column\",\n        alignItems: \"center\",\n        color: \"white\",\n        __source: {\n            fileName: \"/Users/alfier/Documents/GitHub/MonoChat-FrontEnd/src/pages/index.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                as: \"h1\",\n                size: \"10min\",\n                __source: {\n                    fileName: \"/Users/alfier/Documents/GitHub/MonoChat-FrontEnd/src/pages/index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: \"MonoChat\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                noOfLines: 1,\n                __source: {\n                    fileName: \"/Users/alfier/Documents/GitHub/MonoChat-FrontEnd/src/pages/index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: \"Find the People you know by name, and chat to them!\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_searchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/alfier/Documents/GitHub/MonoChat-FrontEnd/src/pages/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QjtBQUc0QjtBQUVOO1NBRXRDSyxHQUFHLEdBQUcsQ0FBQztJQUNkLE1BQU0sdUVBQ0RKLGlEQUFHO1FBQ0FLLEVBQUUsRUFBQyxDQUFTO1FBQ2RDLElBQUksRUFBQyxDQUFPO1FBQ1pDLE9BQU8sRUFBQyxDQUFNO1FBQ2RDLE9BQU8sRUFBQyxDQUFRO1FBQ2hCQyxVQUFVLEVBQUMsQ0FBUTtRQUNuQkMsS0FBSyxFQUFDLENBQU87Ozs7Ozs7O2lGQUVaUixxREFBTztnQkFBQ1MsRUFBRSxFQUFDLENBQUk7Z0JBQUNDLElBQUksRUFBQyxDQUFPOzs7Ozs7OzBCQUFDLENBRTlCOztpRkFDQ1gsa0RBQUk7Z0JBQUNZLFNBQVMsRUFBRSxDQUFDOzs7Ozs7OzBCQUFFLENBRXBCOztpRkFDQ1YsNkRBQVM7Ozs7Ozs7Ozs7QUFHbEIsQ0FBQztLQW5CUUMsR0FBRztBQXFCWiwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcblxuaW1wb3J0IHsgQm94LCBUZXh0LCBIZWFkaW5nIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWFyY2hCYXJcIjtcblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICAgIGJnPVwiIzIyMjIyMlwiXG4gICAgICAgIG1pbkg9XCIxMDB2aFwiXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgID5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCIxMG1pblwiPlxuICAgICAgICAgIE1vbm9DaGF0XG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPFRleHQgbm9PZkxpbmVzPXsxfT5cbiAgICAgICAgICBGaW5kIHRoZSBQZW9wbGUgeW91IGtub3cgYnkgbmFtZSwgYW5kIGNoYXQgdG8gdGhlbSFcbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8U2VhcmNoQmFyIC8+XG4gICAgICA8L0JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiVGV4dCIsIkhlYWRpbmciLCJTZWFyY2hCYXIiLCJBcHAiLCJiZyIsIm1pbkgiLCJkaXNwbGF5IiwiZmxleERpciIsImFsaWduSXRlbXMiLCJjb2xvciIsImFzIiwic2l6ZSIsIm5vT2ZMaW5lcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});