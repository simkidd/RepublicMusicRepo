"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/artists/page",{

/***/ "(app-pages-browser)/./src/components/artists/ArtistsGrid.tsx":
/*!************************************************!*\
  !*** ./src/components/artists/ArtistsGrid.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _data_artists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/artists */ \"(app-pages-browser)/./src/data/artists.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_ArtistCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/ArtistCard */ \"(app-pages-browser)/./src/components/home/ArtistCard.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst ArtistsGrid = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"lg:w-full  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-4 \",\n        children: _data_artists__WEBPACK_IMPORTED_MODULE_1__.artists.map((artist, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_ArtistCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                artist: artist,\n                index: i\n            }, i, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\artists\\\\ArtistsGrid.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\artists\\\\ArtistsGrid.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ArtistsGrid;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArtistsGrid);\nvar _c;\n$RefreshReg$(_c, \"ArtistsGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FydGlzdHMvQXJ0aXN0c0dyaWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDeUM7QUFDZjtBQUNrQjtBQUU1QyxNQUFNRyxjQUFjO0lBQ2xCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaTCxrREFBT0EsQ0FBQ00sR0FBRyxDQUFDLENBQUNDLFFBQVFDLGtCQUNwQiw4REFBQ04sd0RBQVVBO2dCQUFTSyxRQUFRQTtnQkFBUUUsT0FBT0Q7ZUFBMUJBOzs7Ozs7Ozs7O0FBSXpCO0tBUk1MO0FBVU4saUVBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcnRpc3RzL0FydGlzdHNHcmlkLnRzeD9jNzg3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IGFydGlzdHMgfSBmcm9tIFwiQC9kYXRhL2FydGlzdHNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXJ0aXN0Q2FyZCBmcm9tIFwiLi4vaG9tZS9BcnRpc3RDYXJkXCI7XHJcblxyXG5jb25zdCBBcnRpc3RzR3JpZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LWZ1bGwgIG14LWF1dG8gZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyAgZ2FwLTQgcC00IFwiPlxyXG4gICAgICB7YXJ0aXN0cy5tYXAoKGFydGlzdCwgaSkgPT4gKFxyXG4gICAgICAgIDxBcnRpc3RDYXJkIGtleT17aX0gYXJ0aXN0PXthcnRpc3R9IGluZGV4PXtpfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpc3RzR3JpZDtcclxuIl0sIm5hbWVzIjpbImFydGlzdHMiLCJSZWFjdCIsIkFydGlzdENhcmQiLCJBcnRpc3RzR3JpZCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImFydGlzdCIsImkiLCJpbmRleCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/artists/ArtistsGrid.tsx\n"));

/***/ })

});