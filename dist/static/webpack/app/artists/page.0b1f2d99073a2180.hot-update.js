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

/***/ "(app-pages-browser)/./src/components/home/ArtistCard.tsx":
/*!********************************************!*\
  !*** ./src/components/home/ArtistCard.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils_animationVariants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/animationVariants */ \"(app-pages-browser)/./src/utils/animationVariants.ts\");\n\n\n\n\nconst ArtistCard = (param)=>{\n    let { artist, index } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: \"artist-card lg:w-1/2 w-1/2 relative group\",\n        variants: _utils_animationVariants__WEBPACK_IMPORTED_MODULE_2__.fadeInUp,\n        initial: \"hidden\",\n        whileInView: \"visible\",\n        viewport: {\n            amount: 0.2\n        },\n        transition: {\n            duration: 0.5,\n            delay: index * 0.1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"artist-image\",\n                style: {\n                    backgroundImage: \"url(\".concat(artist.imageUrl, \")\")\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"artist-overlay flex flex-col lg:flex-row justify-start lg:justify-between w-full h-full z-[2] p-5 absolute top-0 left-0 opacity-0 group-hover:opacity-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: artist.website,\n                            className: \"text-primary text-base hover:text-white transition-colors duration-300 ease-in-out\",\n                            children: \"view website\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex items-center justify-center gap-2 mt-[15px] lg:mt-0 \",\n                            children: artist.socialLinks && Object.entries(artist.socialLinks).map((param)=>{\n                                let [key, { link, icon: Icon }] = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: link,\n                                        className: \"text-primary text-base hover:text-white transition-colors duration-300 ease-in-out\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, key, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 19\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-[20px] lg:text-[40px] absolute bottom-[10px] lg:bottom-5 lg:left-5 left-[10px] leading-none text-white artist-name\",\n                children: artist.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ArtistCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArtistCard);\nvar _c;\n$RefreshReg$(_c, \"ArtistCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvbWUvQXJ0aXN0Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzZCO0FBQ1U7QUFDYztBQUVyRCxNQUFNRyxhQUFhO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQXFDO0lBQ3RFLHFCQUNFLDhEQUFDSixpREFBTUEsQ0FBQ0ssR0FBRztRQUNUQyxXQUFVO1FBQ1ZDLFVBQVVOLDhEQUFRQTtRQUNsQk8sU0FBUTtRQUNSQyxhQUFZO1FBQ1pDLFVBQVU7WUFBRUMsUUFBUTtRQUFJO1FBQ3hCQyxZQUFZO1lBQUVDLFVBQVU7WUFBS0MsT0FBT1YsUUFBUTtRQUFJOzswQkFHaEQsOERBQUNDO2dCQUNDQyxXQUFVO2dCQUNWUyxPQUFPO29CQUFFQyxpQkFBaUIsT0FBdUIsT0FBaEJiLE9BQU9jLFFBQVEsRUFBQztnQkFBRzs7Ozs7OzBCQUd0RCw4REFBQ1o7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ1AsaURBQUlBOzRCQUNIbUIsTUFBTWYsT0FBT2dCLE9BQU87NEJBQ3BCYixXQUFVO3NDQUNYOzs7Ozs7Ozs7OztrQ0FJSCw4REFBQ0Q7a0NBQ0MsNEVBQUNlOzRCQUFHZCxXQUFVO3NDQUNYSCxPQUFPa0IsV0FBVyxJQUNqQkMsT0FBT0MsT0FBTyxDQUFDcEIsT0FBT2tCLFdBQVcsRUFBRUcsR0FBRyxDQUNwQztvQ0FBQyxDQUFDQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsTUFBTUMsSUFBSSxFQUFFLENBQUM7cURBQzFCLDhEQUFDQzs4Q0FDQyw0RUFBQzlCLGlEQUFJQTt3Q0FDSG1CLE1BQU1RO3dDQUNOcEIsV0FBVTtrREFFViw0RUFBQ3NCOzRDQUFLRSxNQUFNOzs7Ozs7Ozs7OzttQ0FMUEw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBYXJCLDhEQUFDTTtnQkFBR3pCLFdBQVU7MEJBQ1hILE9BQU82QixJQUFJOzs7Ozs7Ozs7Ozs7QUFJcEI7S0FoRE05QjtBQWtETixpRUFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUvQXJ0aXN0Q2FyZC50c3g/Y2JmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcnRpc3QgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL2FydGlzdC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBmYWRlSW5VcCB9IGZyb20gXCJAL3V0aWxzL2FuaW1hdGlvblZhcmlhbnRzXCI7XHJcblxyXG5jb25zdCBBcnRpc3RDYXJkID0gKHsgYXJ0aXN0LCBpbmRleCB9OiB7IGFydGlzdDogQXJ0aXN0OyBpbmRleDogbnVtYmVyIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgY2xhc3NOYW1lPVwiYXJ0aXN0LWNhcmQgbGc6dy0xLzIgdy0xLzIgcmVsYXRpdmUgZ3JvdXBcIlxyXG4gICAgICB2YXJpYW50cz17ZmFkZUluVXB9XHJcbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxyXG4gICAgICB2aWV3cG9ydD17eyBhbW91bnQ6IDAuMiB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiBpbmRleCAqIDAuMSB9fVxyXG4gICAgPlxyXG4gICAgICB7LyogYmcgaW1hZ2UgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJhcnRpc3QtaW1hZ2VcIlxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2FydGlzdC5pbWFnZVVybH0pYCB9fVxyXG4gICAgICA+PC9kaXY+XHJcbiAgICAgIHsvKiBvdmVybGF5ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1vdmVybGF5IGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cganVzdGlmeS1zdGFydCBsZzpqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIGgtZnVsbCB6LVsyXSBwLTUgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e2FydGlzdC53ZWJzaXRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdGV4dC1iYXNlIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgdmlldyB3ZWJzaXRlXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiBtdC1bMTVweF0gbGc6bXQtMCBcIj5cclxuICAgICAgICAgICAge2FydGlzdC5zb2NpYWxMaW5rcyAmJlxyXG4gICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGFydGlzdC5zb2NpYWxMaW5rcykubWFwKFxyXG4gICAgICAgICAgICAgICAgKFtrZXksIHsgbGluaywgaWNvbjogSWNvbiB9XSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHRleHQtYmFzZSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb24gc2l6ZT17MjB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtWzIwcHhdIGxnOnRleHQtWzQwcHhdIGFic29sdXRlIGJvdHRvbS1bMTBweF0gbGc6Ym90dG9tLTUgbGc6bGVmdC01IGxlZnQtWzEwcHhdIGxlYWRpbmctbm9uZSB0ZXh0LXdoaXRlIGFydGlzdC1uYW1lXCI+XHJcbiAgICAgICAge2FydGlzdC5uYW1lfVxyXG4gICAgICA8L2gzPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpc3RDYXJkO1xyXG4iXSwibmFtZXMiOlsiTGluayIsIm1vdGlvbiIsImZhZGVJblVwIiwiQXJ0aXN0Q2FyZCIsImFydGlzdCIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsImFtb3VudCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZVVybCIsImhyZWYiLCJ3ZWJzaXRlIiwidWwiLCJzb2NpYWxMaW5rcyIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJsaW5rIiwiaWNvbiIsIkljb24iLCJsaSIsInNpemUiLCJoMyIsIm5hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/home/ArtistCard.tsx\n"));

/***/ })

});