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

/***/ "./src/components/searchBar.tsx":
/*!**************************************!*\
  !*** ./src/components/searchBar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var _api_api_connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/api_connection */ \"./src/api/api_connection.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// import styles from \"./searchBar.module.css\";\nvar SearchBar = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), query = ref[0], setQuery = ref[1];\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://localhost:8000/search/?q=\".concat(query), _api_api_connection__WEBPACK_IMPORTED_MODULE_3__.fetcher), data = ref1.data, error = ref1.error;\n    var handleInputChange = function(val) {\n        setQuery(function() {\n            return val;\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        __source: {\n            fileName: \"/Users/alfier/Documents/GitHub/MonoChat-FrontEnd/src/components/searchBar.tsx\",\n            lineNumber: 20,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                placeholder: \"Search for people you know...\",\n                value: query,\n                onChange: function(e) {\n                    handleInputChange(e.target.value);\n                },\n                className: \"SearchBarInputField\",\n                __source: {\n                    fileName: \"/Users/alfier/Documents/GitHub/MonoChat-FrontEnd/src/components/searchBar.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            data && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"SearchBarResultsField\",\n                __source: {\n                    fileName: \"/Users/alfier/Documents/GitHub/MonoChat-FrontEnd/src/components/searchBar.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: data.map(function(v) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: \"/users/\" + v.id,\n                        className: \"SearchBarResults\",\n                        __source: {\n                            fileName: \"/Users/alfier/Documents/GitHub/MonoChat-FrontEnd/src/components/searchBar.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        },\n                        __self: _this1,\n                        children: v.name\n                    });\n                })\n            })\n        ]\n    }));\n};\n_s(SearchBar, \"k36hWk1JVTz6Q8sPWejyMr6EKns=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWFyY2hCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0Q7QUFDMUI7QUFDdUI7QUFFRjs7O0FBQzdDLEVBQStDO0FBRS9DLEdBQUssQ0FBQ0ssU0FBUyxHQUFHLFFBQ2xCLEdBRHdCLENBQUM7OztJQUN2QixHQUFLLENBQXFCSixHQUFvQixHQUFwQkEsK0NBQVEsQ0FBUyxDQUFFLElBQXRDSyxLQUFLLEdBQWNMLEdBQW9CLEtBQWhDTSxRQUFRLEdBQUlOLEdBQW9CO0lBQzlDLEdBQUssQ0FBbUJDLElBR3ZCLEdBSHVCQSwrQ0FBTSxDQUMzQixDQUFnQyxrQ0FBUSxPQUFOSSxLQUFLLEdBQ3hDSCx3REFBTyxHQUZESyxJQUFJLEdBQVlOLElBR3ZCLENBSE9NLElBQUksRUFBRUMsS0FBSyxHQUFLUCxJQUd2QixDQUhhTyxLQUFLO0lBS25CLEdBQUssQ0FBQ0MsaUJBQWlCLEdBQUcsUUFBUSxDQUFQQyxHQUFXLEVBQUssQ0FBQztRQUMxQ0osUUFBUSxDQUFDLFFBQVE7WUFBRkksTUFDbkIsQ0FEbUJBLEdBQUc7O0lBQ3BCLENBQUM7SUFFRCxNQUFNLHVFQUNIUCxpREFBRzs7Ozs7Ozs7aUZBQ0RRLENBQUs7Z0JBQ0pDLFdBQVcsRUFBQyxDQUErQjtnQkFDM0NDLEtBQUssRUFBRVIsS0FBSztnQkFDWlMsUUFBUSxFQUFFQyxRQUNqQixDQURpQkEsQ0FBQyxFQUFJLENBQUM7b0JBQ2ROLGlCQUFpQixDQUFDTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSztnQkFDbEMsQ0FBQztnQkFDREksU0FBUyxFQUFDLENBQXFCOzs7Ozs7OztZQUVoQ1YsSUFBSSx5RUFDRlcsQ0FBRztnQkFBQ0QsU0FBUyxFQUFDLENBQXVCOzs7Ozs7OzBCQUNuQ1YsSUFBSSxDQUFDWSxHQUFHLENBQUNDLFFBQ25CLENBRG1CQSxDQUFDO2tDQUNULE1BQU0sd0RBQUxDLENBQUM7d0JBQUNDLElBQUksRUFBRSxDQUFTLFdBQUdGLENBQUMsQ0FBQ0csRUFBRTt3QkFBRU4sU0FBUyxFQUFDLENBQWtCOzs7Ozs7O2tDQUNwREcsQ0FBQyxDQUFDSSxJQUFJOzs7Ozs7QUFPckIsQ0FBQztHQWhDS3BCLFNBQVM7O1FBRVdILDJDQUFNOzs7S0FGMUJHLFNBQVM7QUFrQ2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZWFyY2hCYXIudHN4PzdmNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gXCIuLi9hcGkvYXBpX2Nvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uL2FwaS90eXBlc1wiO1xuaW1wb3J0IHsgQm94LCBJbnB1dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3NlYXJjaEJhci5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IFNlYXJjaEJhciA9ICgpID0+IHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1I8VXNlckluZm9bXT4oXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9zZWFyY2gvP3E9JHtxdWVyeX1gLFxuICAgIGZldGNoZXJcbiAgKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgIHNldFF1ZXJ5KCgpID0+IHZhbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPGlucHV0XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBwZW9wbGUgeW91IGtub3cuLi5cIlxuICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICBoYW5kbGVJbnB1dENoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cIlNlYXJjaEJhcklucHV0RmllbGRcIlxuICAgICAgLz5cbiAgICAgIHtkYXRhICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTZWFyY2hCYXJSZXN1bHRzRmllbGRcIj5cbiAgICAgICAgICB7ZGF0YS5tYXAodiA9PiAoXG4gICAgICAgICAgICA8YSBocmVmPXtcIi91c2Vycy9cIiArIHYuaWR9IGNsYXNzTmFtZT1cIlNlYXJjaEJhclJlc3VsdHNcIj5cbiAgICAgICAgICAgICAge3YubmFtZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTV1IiLCJmZXRjaGVyIiwiQm94IiwiU2VhcmNoQmFyIiwicXVlcnkiLCJzZXRRdWVyeSIsImRhdGEiLCJlcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwidmFsIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwidiIsImEiLCJocmVmIiwiaWQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/searchBar.tsx\n");

/***/ })

});