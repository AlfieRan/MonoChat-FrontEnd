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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var _api_api_connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/api_connection */ \"./src/api/api_connection.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// import styles from \"./searchBar.module.css\";\nvar SearchBar = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), query = ref[0], setQuery = ref[1];\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://localhost:8000/search/?q=\".concat(query), _api_api_connection__WEBPACK_IMPORTED_MODULE_3__.fetcher), data = ref1.data, error = ref1.error;\n    var handleInputChange = function(val) {\n        setQuery(function() {\n            return val;\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        __source: {\n            fileName: \"/Users/alfier/Documents/GitHub/MonoChat-FrontEnd/src/components/searchBar.tsx\",\n            lineNumber: 20,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                placeholder: \"Search for people you know...\",\n                value: query,\n                onChange: function(e) {\n                    handleInputChange(e.target.value);\n                },\n                /* styling stuff */ marginTop: [\n                    -10\n                ],\n                height: [\n                    75\n                ],\n                width: [\n                    750\n                ],\n                fontSize: [\n                    35\n                ],\n                borderRadius: [\n                    50\n                ],\n                __source: {\n                    fileName: \"/Users/alfier/Documents/GitHub/MonoChat-FrontEnd/src/components/searchBar.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            data && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                marginLeft: 10,\n                fontSize: [\n                    40\n                ],\n                __source: {\n                    fileName: \"/Users/alfier/Documents/GitHub/MonoChat-FrontEnd/src/components/searchBar.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: data.map(function(v) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        href: \"/users/\" + v.id,\n                        className: \"SearchBarResults\",\n                        __source: {\n                            fileName: \"/Users/alfier/Documents/GitHub/MonoChat-FrontEnd/src/components/searchBar.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        },\n                        __self: _this1,\n                        children: v.name\n                    });\n                })\n            })\n        ]\n    }));\n};\n_s(SearchBar, \"k36hWk1JVTz6Q8sPWejyMr6EKns=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWFyY2hCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0Q7QUFDMUI7QUFDdUI7QUFFRjs7O0FBQzdDLEVBQStDO0FBRS9DLEdBQUssQ0FBQ00sU0FBUyxHQUFHLFFBQ2xCLEdBRHdCLENBQUM7OztJQUN2QixHQUFLLENBQXFCTCxHQUFvQixHQUFwQkEsK0NBQVEsQ0FBUyxDQUFFLElBQXRDTSxLQUFLLEdBQWNOLEdBQW9CLEtBQWhDTyxRQUFRLEdBQUlQLEdBQW9CO0lBQzlDLEdBQUssQ0FBbUJDLElBR3ZCLEdBSHVCQSwrQ0FBTSxDQUMzQixDQUFnQyxrQ0FBUSxPQUFOSyxLQUFLLEdBQ3hDSix3REFBTyxHQUZETSxJQUFJLEdBQVlQLElBR3ZCLENBSE9PLElBQUksRUFBRUMsS0FBSyxHQUFLUixJQUd2QixDQUhhUSxLQUFLO0lBS25CLEdBQUssQ0FBQ0MsaUJBQWlCLEdBQUcsUUFBUSxDQUFQQyxHQUFXLEVBQUssQ0FBQztRQUMxQ0osUUFBUSxDQUFDLFFBQVE7WUFBRkksTUFDbkIsQ0FEbUJBLEdBQUc7O0lBQ3BCLENBQUM7SUFFRCxNQUFNLHVFQUNIUixpREFBRzs7Ozs7Ozs7aUZBQ0RDLG1EQUFLO2dCQUNKUSxXQUFXLEVBQUMsQ0FBK0I7Z0JBQzNDQyxLQUFLLEVBQUVQLEtBQUs7Z0JBQ1pRLFFBQVEsRUFBRUMsUUFDakIsQ0FEaUJBLENBQUMsRUFBSSxDQUFDO29CQUNkTCxpQkFBaUIsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7Z0JBQ2xDLENBQUM7Z0JBQ0QsRUFBbUIsa0JBQ25CSSxTQUFTLEVBQUUsQ0FBQztxQkFBQyxFQUFFO2dCQUFBLENBQUM7Z0JBQ2hCQyxNQUFNLEVBQUUsQ0FBQztvQkFBQSxFQUFFO2dCQUFBLENBQUM7Z0JBQ1pDLEtBQUssRUFBRSxDQUFDO29CQUFBLEdBQUc7Z0JBQUEsQ0FBQztnQkFDWkMsUUFBUSxFQUFFLENBQUM7b0JBQUEsRUFBRTtnQkFBQSxDQUFDO2dCQUNkQyxZQUFZLEVBQUUsQ0FBQztvQkFBQSxFQUFFO2dCQUFBLENBQUM7Ozs7Ozs7O1lBRW5CYixJQUFJLHlFQUNGTCxpREFBRztnQkFBQ21CLFVBQVUsRUFBRSxFQUFFO2dCQUFFRixRQUFRLEVBQUUsQ0FBQztvQkFBQSxFQUFFO2dCQUFBLENBQUM7Ozs7Ozs7MEJBQ2hDWixJQUFJLENBQUNlLEdBQUcsQ0FBQ0MsUUFDbkIsQ0FEbUJBLENBQUM7a0NBQ1QsTUFBTSx3REFBTEMsQ0FBQzt3QkFBQ0MsSUFBSSxFQUFFLENBQVMsV0FBR0YsQ0FBQyxDQUFDRyxFQUFFO3dCQUFFQyxTQUFTLEVBQUMsQ0FBa0I7Ozs7Ozs7a0NBQ3BESixDQUFDLENBQUNLLElBQUk7Ozs7OztBQU9yQixDQUFDO0dBckNLeEIsU0FBUzs7UUFFV0osMkNBQU07OztLQUYxQkksU0FBUztBQXVDZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NlYXJjaEJhci50c3g/N2Y1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSBcIi4uL2FwaS9hcGlfY29ubmVjdGlvblwiO1xuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vYXBpL3R5cGVzXCI7XG5pbXBvcnQgeyBCb3gsIElucHV0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc2VhcmNoQmFyLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgU2VhcmNoQmFyID0gKCkgPT4ge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUjxVc2VySW5mb1tdPihcbiAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3NlYXJjaC8/cT0ke3F1ZXJ5fWAsXG4gICAgZmV0Y2hlclxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgc2V0UXVlcnkoKCkgPT4gdmFsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8SW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHBlb3BsZSB5b3Uga25vdy4uLlwiXG4gICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgLyogc3R5bGluZyBzdHVmZiAqL1xuICAgICAgICBtYXJnaW5Ub3A9e1stMTBdfVxuICAgICAgICBoZWlnaHQ9e1s3NV19XG4gICAgICAgIHdpZHRoPXtbNzUwXX1cbiAgICAgICAgZm9udFNpemU9e1szNV19XG4gICAgICAgIGJvcmRlclJhZGl1cz17WzUwXX1cbiAgICAgIC8+XG4gICAgICB7ZGF0YSAmJiAoXG4gICAgICAgIDxCb3ggbWFyZ2luTGVmdD17MTB9IGZvbnRTaXplPXtbNDBdfSA+XG4gICAgICAgICAge2RhdGEubWFwKHYgPT4gKFxuICAgICAgICAgICAgPGEgaHJlZj17XCIvdXNlcnMvXCIgKyB2LmlkfSBjbGFzc05hbWU9XCJTZWFyY2hCYXJSZXN1bHRzXCI+XG4gICAgICAgICAgICAgIHt2Lm5hbWV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlU1dSIiwiZmV0Y2hlciIsIkJveCIsIklucHV0IiwiU2VhcmNoQmFyIiwicXVlcnkiLCJzZXRRdWVyeSIsImRhdGEiLCJlcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwidmFsIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm1hcmdpblRvcCIsImhlaWdodCIsIndpZHRoIiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5MZWZ0IiwibWFwIiwidiIsImEiLCJocmVmIiwiaWQiLCJjbGFzc05hbWUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/searchBar.tsx\n");

/***/ })

});