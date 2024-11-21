"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/home/ArtistCard.tsx":
/*!********************************************!*\
  !*** ./src/components/home/ArtistCard.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils_animationVariants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/animationVariants */ \"(app-pages-browser)/./src/utils/animationVariants.ts\");\n\n\n\n\nconst ArtistCard = (param)=>{\n    let { artist, index } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: \"artist-card lg:flex   relative group\",\n        // className=\"artist-card lg:w-1/4 w-1/2 relative group\"\n        variants: _utils_animationVariants__WEBPACK_IMPORTED_MODULE_2__.fadeInUp,\n        initial: \"hidden\",\n        whileInView: \"visible\",\n        viewport: {\n            amount: 0.2\n        },\n        transition: {\n            duration: 0.5,\n            delay: index * 0.1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"artist-image\",\n                style: {\n                    backgroundImage: \"url(\".concat(artist.imageUrl, \")\")\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"artist-overlay flex flex-col lg:flex-row justify-start lg:justify-between w-full h-full z-[2] p-5 absolute top-0 left-0 opacity-0 group-hover:opacity-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: artist.website,\n                            className: \"text-primary text-base hover:text-white transition-colors duration-300 ease-in-out\",\n                            children: \"view website\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex items-center justify-center gap-2 mt-[15px] lg:mt-0 \",\n                            children: artist.socialLinks && Object.entries(artist.socialLinks).map((param)=>{\n                                let [key, { link, icon: Icon }] = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: link,\n                                        className: \"text-primary text-base hover:text-white transition-colors duration-300 ease-in-out\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, key, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 19\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-[20px] lg:text-[40px] absolute bottom-[10px] lg:bottom-5 lg:left-5 left-[10px] leading-none text-white artist-name\",\n                children: artist.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ArtistCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArtistCard);\nvar _c;\n$RefreshReg$(_c, \"ArtistCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvbWUvQXJ0aXN0Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzZCO0FBQ1U7QUFDYztBQUVyRCxNQUFNRyxhQUFhO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQXFDO0lBQ3RFLHFCQUNFLDhEQUFDSixpREFBTUEsQ0FBQ0ssR0FBRztRQUNUQyxXQUFVO1FBQ0osd0RBQXdEO1FBQzlEQyxVQUFVTiw4REFBUUE7UUFDbEJPLFNBQVE7UUFDUkMsYUFBWTtRQUNaQyxVQUFVO1lBQUVDLFFBQVE7UUFBSTtRQUN4QkMsWUFBWTtZQUFFQyxVQUFVO1lBQUtDLE9BQU9WLFFBQVE7UUFBSTs7MEJBR2hELDhEQUFDQztnQkFDQ0MsV0FBVTtnQkFDVlMsT0FBTztvQkFBRUMsaUJBQWlCLE9BQXVCLE9BQWhCYixPQUFPYyxRQUFRLEVBQUM7Z0JBQUc7Ozs7OzswQkFHdEQsOERBQUNaO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNQLGlEQUFJQTs0QkFDSG1CLE1BQU1mLE9BQU9nQixPQUFPOzRCQUNwQmIsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUNEO2tDQUNDLDRFQUFDZTs0QkFBR2QsV0FBVTtzQ0FDWEgsT0FBT2tCLFdBQVcsSUFDakJDLE9BQU9DLE9BQU8sQ0FBQ3BCLE9BQU9rQixXQUFXLEVBQUVHLEdBQUcsQ0FDcEM7b0NBQUMsQ0FBQ0MsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLE1BQU1DLElBQUksRUFBRSxDQUFDO3FEQUMxQiw4REFBQ0M7OENBQ0MsNEVBQUM5QixpREFBSUE7d0NBQ0htQixNQUFNUTt3Q0FDTnBCLFdBQVU7a0RBRVYsNEVBQUNzQjs0Q0FBS0UsTUFBTTs7Ozs7Ozs7Ozs7bUNBTFBMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWFyQiw4REFBQ007Z0JBQUd6QixXQUFVOzBCQUNYSCxPQUFPNkIsSUFBSTs7Ozs7Ozs7Ozs7O0FBSXBCO0tBakRNOUI7QUFtRE4saUVBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0FydGlzdENhcmQudHN4P2NiZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXJ0aXN0IH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9hcnRpc3QuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgZmFkZUluVXAgfSBmcm9tIFwiQC91dGlscy9hbmltYXRpb25WYXJpYW50c1wiO1xyXG5cclxuY29uc3QgQXJ0aXN0Q2FyZCA9ICh7IGFydGlzdCwgaW5kZXggfTogeyBhcnRpc3Q6IEFydGlzdDsgaW5kZXg6IG51bWJlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImFydGlzdC1jYXJkIGxnOmZsZXggICByZWxhdGl2ZSBncm91cFwiXHJcbiAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cImFydGlzdC1jYXJkIGxnOnctMS80IHctMS8yIHJlbGF0aXZlIGdyb3VwXCJcclxuICAgICAgdmFyaWFudHM9e2ZhZGVJblVwfVxyXG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCJcclxuICAgICAgdmlld3BvcnQ9e3sgYW1vdW50OiAwLjIgfX1cclxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41LCBkZWxheTogaW5kZXggKiAwLjEgfX1cclxuICAgID5cclxuICAgICAgey8qIGJnIGltYWdlICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYXJ0aXN0LWltYWdlXCJcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHthcnRpc3QuaW1hZ2VVcmx9KWAgfX1cclxuICAgICAgPjwvZGl2PlxyXG4gICAgICB7Lyogb3ZlcmxheSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtb3ZlcmxheSBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGp1c3RpZnktc3RhcnQgbGc6anVzdGlmeS1iZXR3ZWVuIHctZnVsbCBoLWZ1bGwgei1bMl0gcC01IGFic29sdXRlIHRvcC0wIGxlZnQtMCBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXthcnRpc3Qud2Vic2l0ZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHRleHQtYmFzZSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHZpZXcgd2Vic2l0ZVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgbXQtWzE1cHhdIGxnOm10LTAgXCI+XHJcbiAgICAgICAgICAgIHthcnRpc3Quc29jaWFsTGlua3MgJiZcclxuICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhhcnRpc3Quc29jaWFsTGlua3MpLm1hcChcclxuICAgICAgICAgICAgICAgIChba2V5LCB7IGxpbmssIGljb246IEljb24gfV0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGlua31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB0ZXh0LWJhc2UgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHNpemU9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBsZzp0ZXh0LVs0MHB4XSBhYnNvbHV0ZSBib3R0b20tWzEwcHhdIGxnOmJvdHRvbS01IGxnOmxlZnQtNSBsZWZ0LVsxMHB4XSBsZWFkaW5nLW5vbmUgdGV4dC13aGl0ZSBhcnRpc3QtbmFtZVwiPlxyXG4gICAgICAgIHthcnRpc3QubmFtZX1cclxuICAgICAgPC9oMz5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aXN0Q2FyZDtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJtb3Rpb24iLCJmYWRlSW5VcCIsIkFydGlzdENhcmQiLCJhcnRpc3QiLCJpbmRleCIsImRpdiIsImNsYXNzTmFtZSIsInZhcmlhbnRzIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJhbW91bnQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2VVcmwiLCJocmVmIiwid2Vic2l0ZSIsInVsIiwic29jaWFsTGlua3MiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwibGluayIsImljb24iLCJJY29uIiwibGkiLCJzaXplIiwiaDMiLCJuYW1lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/home/ArtistCard.tsx\n"));

/***/ })

});