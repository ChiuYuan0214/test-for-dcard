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

/***/ "./components/CardList/Card/Card.tsx":
/*!*******************************************!*\
  !*** ./components/CardList/Card/Card.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.module.css */ \"./components/CardList/Card/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _this = undefined;\nvar Card = function(param) {\n    var repo = param.repo;\n    var url = repo.url, id = repo.id, name = repo.name, date = repo.date, downloadsUrl = repo.downloadsUrl;\n    // to add some readability.\n    var displayedDate = date.replace(\"T\", \" \").replace(\"Z\", \"\");\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().repo),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"ID: \",\n                    id\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adam/Desktop/面試/公司/Dcard/test-for-dcard/components/CardList/Card/Card.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"NAME: \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adam/Desktop/面試/公司/Dcard/test-for-dcard/components/CardList/Card/Card.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"DATE: \",\n                    displayedDate\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adam/Desktop/面試/公司/Dcard/test-for-dcard/components/CardList/Card/Card.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().links),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        target: \"_blank\",\n                        href: url,\n                        children: \"REPO_URL\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adam/Desktop/面試/公司/Dcard/test-for-dcard/components/CardList/Card/Card.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        target: \"_blank\",\n                        href: downloadsUrl,\n                        children: \"DOWNLOADS_URL\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adam/Desktop/面試/公司/Dcard/test-for-dcard/components/CardList/Card/Card.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adam/Desktop/面試/公司/Dcard/test-for-dcard/components/CardList/Card/Card.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adam/Desktop/面試/公司/Dcard/test-for-dcard/components/CardList/Card/Card.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this));\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRMaXN0L0NhcmQvQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFJYTs7QUFFdEMsR0FBSyxDQUFDRSxJQUFJLEdBQTZCLFFBQVEsUUFBTSxDQUFDO1FBQVpDLElBQUksU0FBSkEsSUFBSTtJQUM1QyxHQUFLLENBQUdDLEdBQUcsR0FBbUNELElBQUksQ0FBMUNDLEdBQUcsRUFBRUMsRUFBRSxHQUErQkYsSUFBSSxDQUFyQ0UsRUFBRSxFQUFFQyxJQUFJLEdBQXlCSCxJQUFJLENBQWpDRyxJQUFJLEVBQUVDLElBQUksR0FBbUJKLElBQUksQ0FBM0JJLElBQUksRUFBRUMsWUFBWSxHQUFLTCxJQUFJLENBQXJCSyxZQUFZO0lBRXpDLEVBQTJCO0lBQzNCLEdBQUssQ0FBQ0MsYUFBYSxHQUFHRixJQUFJLENBQUNHLE9BQU8sQ0FBQyxDQUFHLElBQUUsQ0FBRyxJQUFFQSxPQUFPLENBQUMsQ0FBRyxJQUFFLENBQUU7SUFFNUQsTUFBTSw2RUFDSEMsQ0FBRTtRQUFDQyxTQUFTLEVBQUVYLDhEQUFXOzt3RkFDdkJZLENBQUM7O29CQUFDLENBQUk7b0JBQUNSLEVBQUU7Ozs7Ozs7d0ZBQ1RRLENBQUM7O29CQUFDLENBQU07b0JBQUNQLElBQUk7Ozs7Ozs7d0ZBQ2JPLENBQUM7O29CQUFDLENBQU07b0JBQUNKLGFBQWE7Ozs7Ozs7d0ZBQ3RCSyxDQUFHO2dCQUFDRixTQUFTLEVBQUVYLCtEQUFZOztnR0FDekJlLENBQUM7d0JBQUNDLE1BQU0sRUFBQyxDQUFRO3dCQUFDQyxJQUFJLEVBQUVkLEdBQUc7a0NBQUUsQ0FFOUI7Ozs7OztnR0FDQ1ksQ0FBQzt3QkFBQ0MsTUFBTSxFQUFDLENBQVE7d0JBQUNDLElBQUksRUFBRVYsWUFBWTtrQ0FBRSxDQUV2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVIsQ0FBQztLQXJCS04sSUFBSTtBQXVCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FyZExpc3QvQ2FyZC9DYXJkLnRzeD85YjNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFJlcG8gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9yZXBvXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2FyZC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IENhcmQ6IFJlYWN0LkZDPHsgcmVwbzogUmVwbyB9PiA9ICh7IHJlcG8gfSkgPT4ge1xuICBjb25zdCB7IHVybCwgaWQsIG5hbWUsIGRhdGUsIGRvd25sb2Fkc1VybCB9ID0gcmVwbztcblxuICAvLyB0byBhZGQgc29tZSByZWFkYWJpbGl0eS5cbiAgY29uc3QgZGlzcGxheWVkRGF0ZSA9IGRhdGUucmVwbGFjZShcIlRcIiwgXCIgXCIpLnJlcGxhY2UoXCJaXCIsIFwiXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLnJlcG99PlxuICAgICAgPHA+SUQ6IHtpZH08L3A+XG4gICAgICA8cD5OQU1FOiB7bmFtZX08L3A+XG4gICAgICA8cD5EQVRFOiB7ZGlzcGxheWVkRGF0ZX08L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT5cbiAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17dXJsfT5cbiAgICAgICAgICBSRVBPX1VSTFxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2Rvd25sb2Fkc1VybH0+XG4gICAgICAgICAgRE9XTkxPQURTX1VSTFxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkNhcmQiLCJyZXBvIiwidXJsIiwiaWQiLCJuYW1lIiwiZGF0ZSIsImRvd25sb2Fkc1VybCIsImRpc3BsYXllZERhdGUiLCJyZXBsYWNlIiwibGkiLCJjbGFzc05hbWUiLCJwIiwiZGl2IiwibGlua3MiLCJhIiwidGFyZ2V0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CardList/Card/Card.tsx\n");

/***/ })

});