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

/***/ "./hooks/fetchRepos.tsx":
/*!******************************!*\
  !*** ./hooks/fetchRepos.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_adam_Desktop_Dcard_test_for_dcard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_adam_Desktop_Dcard_test_for_dcard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_adam_Desktop_Dcard_test_for_dcard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _libs_extract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/extract */ \"./libs/extract.ts\");\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar useFetchRepos = function(repoName) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), error = ref1[0], setError = ref1[1];\n    var sendRequest = function() {\n        var _ref = _asyncToGenerator(_Users_adam_Desktop_Dcard_test_for_dcard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(newPage, type, sort, direction) {\n            var url, response, data, newRepos;\n            return _Users_adam_Desktop_Dcard_test_for_dcard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setIsLoading(true);\n                        setError(null);\n                        url = \"https://api.hub.com/orgs/\".concat(repoName, \"/repos?per_page=3&page=\").concat(newPage, \"&type=\").concat(type, \"&sort=\").concat(sort, \"&direction=\").concat(direction);\n                        _ctx.prev = 3;\n                        _ctx.next = 6;\n                        return fetch(url);\n                    case 6:\n                        response = _ctx.sent;\n                        if (!response.ok) {\n                            setError(\"Failed to connect to Github.\");\n                        }\n                        _ctx.next = 10;\n                        return response.json();\n                    case 10:\n                        data = _ctx.sent;\n                        newRepos = (0,_libs_extract__WEBPACK_IMPORTED_MODULE_2__.extract)(data);\n                        setIsLoading(false);\n                        return _ctx.abrupt(\"return\", newRepos);\n                    case 16:\n                        _ctx.prev = 16;\n                        _ctx.t0 = _ctx[\"catch\"](3);\n                        setError(\"Something went wrong.\");\n                        setIsLoading(false);\n                    case 20:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    16\n                ]\n            ]);\n        }));\n        return function sendRequest(newPage, type, sort, direction) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        isLoading: isLoading,\n        error: error,\n        sendRequest: sendRequest\n    };\n};\n_s(useFetchRepos, \"Ixn/rjnjiGGrlNlqWcjofs19P5k=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFetchRepos);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9mZXRjaFJlcG9zLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBRVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsR0FBSyxDQUFDRSxhQUFhLEdBQUcsUUFBUSxDQUFQQyxRQUFnQixFQUFLLENBQUM7O0lBQzNDLEdBQUssQ0FBNkJILEdBQXdCLEdBQXhCQSwrQ0FBUSxDQUFVLEtBQUssR0FBbERJLFNBQVMsR0FBa0JKLEdBQXdCLEtBQXhDSyxZQUFZLEdBQUlMLEdBQXdCO0lBQzFELEdBQUssQ0FBcUJBLElBQTZCLEdBQTdCQSwrQ0FBUSxDQUFnQixJQUFJLEdBQS9DTSxLQUFLLEdBQWNOLElBQTZCLEtBQXpDTyxRQUFRLEdBQUlQLElBQTZCO0lBRXZELEdBQUssQ0FBQ1EsV0FBVzt5TEFBRyxRQUFRLFNBQURDLE9BQWUsRUFBRUMsSUFBWSxFQUFFQyxJQUFZLEVBQUVDLFNBQWlCLEVBQUssQ0FBQztnQkFHdkZDLEdBQUcsRUFFREMsUUFBUSxFQUlSQyxJQUFJLEVBQ0pDLFFBQVE7Ozs7d0JBVGhCWCxZQUFZLENBQUMsSUFBSTt3QkFDakJFLFFBQVEsQ0FBQyxJQUFJO3dCQUNQTSxHQUFHLEdBQUksQ0FBeUIsMkJBQW9DSixNQUFPLENBQXpDTixRQUFRLEVBQUMsQ0FBdUIsMEJBQWtCTyxNQUFJLENBQXBCRCxPQUFPLEVBQUMsQ0FBTSxTQUFlRSxNQUFJLENBQWpCRCxJQUFJLEVBQUMsQ0FBTSxTQUFvQkUsTUFBUyxDQUEzQkQsSUFBSSxFQUFDLENBQVcsY0FBWSxPQUFWQyxTQUFTOzs7K0JBRXpHSyxLQUFLLENBQUNKLEdBQUc7O3dCQUExQkMsUUFBUTt3QkFDZCxFQUFFLEdBQUdBLFFBQVEsQ0FBQ0ksRUFBRSxFQUFFLENBQUM7NEJBQ2pCWCxRQUFRLENBQUMsQ0FBOEI7d0JBQ3pDLENBQUM7OytCQUNrQk8sUUFBUSxDQUFDSyxJQUFJOzt3QkFBMUJKLElBQUk7d0JBQ0pDLFFBQVEsR0FBR2Ysc0RBQU8sQ0FBQ2MsSUFBSTt3QkFDN0JWLFlBQVksQ0FBQyxLQUFLO3FEQUNYVyxRQUFROzs7O3dCQUVmVCxRQUFRLENBQUMsQ0FBdUI7d0JBQ2hDRixZQUFZLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7UUFFdEIsQ0FBQzt3QkFqQktHLFdBQVcsQ0FBVUMsT0FBZSxFQUFFQyxJQUFZLEVBQUVDLElBQVksRUFBRUMsU0FBaUI7Ozs7SUFrQnpGLE1BQU0sQ0FBQyxDQUFDO1FBQ05SLFNBQVMsRUFBVEEsU0FBUztRQUNURSxLQUFLLEVBQUxBLEtBQUs7UUFDTEUsV0FBVyxFQUFYQSxXQUFXO0lBQ2IsQ0FBQztBQUNILENBQUM7R0EzQktOLGFBQWE7QUE2Qm5CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvZmV0Y2hSZXBvcy50c3g/Y2I5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBleHRyYWN0IH0gZnJvbSBcIi4uL2xpYnMvZXh0cmFjdFwiO1xuXG5jb25zdCB1c2VGZXRjaFJlcG9zID0gKHJlcG9OYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBzZW5kUmVxdWVzdCA9IGFzeW5jIChuZXdQYWdlOiBudW1iZXIsIHR5cGU6IHN0cmluZywgc29ydDogc3RyaW5nLCBkaXJlY3Rpb246IHN0cmluZykgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcihudWxsKTtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuaHViLmNvbS9vcmdzLyR7cmVwb05hbWV9L3JlcG9zP3Blcl9wYWdlPTMmcGFnZT0ke25ld1BhZ2V9JnR5cGU9JHt0eXBlfSZzb3J0PSR7c29ydH0mZGlyZWN0aW9uPSR7ZGlyZWN0aW9ufWA7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgc2V0RXJyb3IoXCJGYWlsZWQgdG8gY29ubmVjdCB0byBHaXRodWIuXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IG5ld1JlcG9zID0gZXh0cmFjdChkYXRhKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICByZXR1cm4gbmV3UmVwb3M7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIGlzTG9hZGluZyxcbiAgICBlcnJvcixcbiAgICBzZW5kUmVxdWVzdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUZldGNoUmVwb3M7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJleHRyYWN0IiwidXNlRmV0Y2hSZXBvcyIsInJlcG9OYW1lIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInNlbmRSZXF1ZXN0IiwibmV3UGFnZSIsInR5cGUiLCJzb3J0IiwiZGlyZWN0aW9uIiwidXJsIiwicmVzcG9uc2UiLCJkYXRhIiwibmV3UmVwb3MiLCJmZXRjaCIsIm9rIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/fetchRepos.tsx\n");

/***/ })

});