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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils_animationVariants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/animationVariants */ \"(app-pages-browser)/./src/utils/animationVariants.ts\");\n\n\n\n\nconst ArtistCard = (param)=>{\n    let { artist, index } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: \"artist-card lg:flex lg:flex-wrap relative group\",\n        // className=\"artist-card lg:w-1/4 w-1/2 relative group\"\n        variants: _utils_animationVariants__WEBPACK_IMPORTED_MODULE_2__.fadeInUp,\n        initial: \"hidden\",\n        whileInView: \"visible\",\n        viewport: {\n            amount: 0.2\n        },\n        transition: {\n            duration: 0.5,\n            delay: index * 0.1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                href: \"/artists/\".concat(artist.name.toLowerCase().replace(/\\s+/g, '-'))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"artist-image\",\n                style: {\n                    backgroundImage: \"url(\".concat(artist.imageUrl, \")\")\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                href: \"/artists/\".concat(artist.id),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"artist-overlay flex flex-col lg:flex-row justify-start lg:justify-between w-full h-full z-[2] p-5 absolute top-0 left-0 opacity-0 group-hover:opacity-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    href: artist.website,\n                                    className: \"text-primary text-base hover:text-white transition-colors duration-300 ease-in-out\",\n                                    children: \"view website\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"flex items-center justify-center gap-2 mt-[15px] lg:mt-0 \",\n                                    children: artist.socialLinks && Object.entries(artist.socialLinks).map((param)=>{\n                                        let [key, { link, icon: Icon }] = param;\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                href: link,\n                                                className: \"text-primary text-base hover:text-white transition-colors duration-300 ease-in-out\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                                                    size: 20\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, key, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 19\n                                        }, undefined);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-[20px] lg:text-[40px] absolute bottom-[10px] lg:bottom-5 lg:left-5 left-[10px] leading-none text-white artist-name\",\n                        children: artist.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ArtistCard.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ArtistCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArtistCard);\nvar _c;\n$RefreshReg$(_c, \"ArtistCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvbWUvQXJ0aXN0Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzZCO0FBQ1U7QUFDYztBQUVyRCxNQUFNRyxhQUFhO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQXFDO0lBQ3RFLHFCQUNFLDhEQUFDSixpREFBTUEsQ0FBQ0ssR0FBRztRQUNUQyxXQUFVO1FBQ0osd0RBQXdEO1FBQzlEQyxVQUFVTiw4REFBUUE7UUFDbEJPLFNBQVE7UUFDUkMsYUFBWTtRQUNaQyxVQUFVO1lBQUVDLFFBQVE7UUFBSTtRQUN4QkMsWUFBWTtZQUFFQyxVQUFVO1lBQUtDLE9BQU9WLFFBQVE7UUFBSTs7MEJBR2hELDhEQUFDTCxpREFBSUE7Z0JBQUNnQixNQUFNLFlBQTJELE9BQS9DWixPQUFPYSxJQUFJLENBQUNDLFdBQVcsR0FBR0MsT0FBTyxDQUFDLFFBQVE7Ozs7OzswQkFTbEUsOERBQUNiO2dCQUNDQyxXQUFVO2dCQUNWYSxPQUFPO29CQUFFQyxpQkFBaUIsT0FBdUIsT0FBaEJqQixPQUFPa0IsUUFBUSxFQUFDO2dCQUFHOzs7Ozs7MEJBR3RELDhEQUFDdEIsaURBQUlBO2dCQUFDZ0IsTUFBTSxZQUFzQixPQUFWWixPQUFPbUIsRUFBRTs7a0NBRWpDLDhEQUFDakI7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1AsaURBQUlBO29DQUNIZ0IsTUFBTVosT0FBT29CLE9BQU87b0NBQ3BCakIsV0FBVTs4Q0FDWDs7Ozs7Ozs7Ozs7MENBSUgsOERBQUNEOzBDQUNDLDRFQUFDbUI7b0NBQUdsQixXQUFVOzhDQUNYSCxPQUFPc0IsV0FBVyxJQUNqQkMsT0FBT0MsT0FBTyxDQUFDeEIsT0FBT3NCLFdBQVcsRUFBRUcsR0FBRyxDQUNwQzs0Q0FBQyxDQUFDQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsTUFBTUMsSUFBSSxFQUFFLENBQUM7NkRBQzFCLDhEQUFDQztzREFDQyw0RUFBQ2xDLGlEQUFJQTtnREFDSGdCLE1BQU1lO2dEQUNOeEIsV0FBVTswREFFViw0RUFBQzBCO29EQUFLRSxNQUFNOzs7Ozs7Ozs7OzsyQ0FMUEw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBYXJCLDhEQUFDTTt3QkFBRzdCLFdBQVU7a0NBQ1hILE9BQU9hLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQjtLQTlETWQ7QUFnRU4saUVBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0FydGlzdENhcmQudHN4P2NiZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXJ0aXN0IH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9hcnRpc3QuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgZmFkZUluVXAgfSBmcm9tIFwiQC91dGlscy9hbmltYXRpb25WYXJpYW50c1wiO1xyXG5cclxuY29uc3QgQXJ0aXN0Q2FyZCA9ICh7IGFydGlzdCwgaW5kZXggfTogeyBhcnRpc3Q6IEFydGlzdDsgaW5kZXg6IG51bWJlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImFydGlzdC1jYXJkIGxnOmZsZXggbGc6ZmxleC13cmFwIHJlbGF0aXZlIGdyb3VwXCJcclxuICAgICAgICAgICAgLy8gY2xhc3NOYW1lPVwiYXJ0aXN0LWNhcmQgbGc6dy0xLzQgdy0xLzIgcmVsYXRpdmUgZ3JvdXBcIlxyXG4gICAgICB2YXJpYW50cz17ZmFkZUluVXB9XHJcbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxyXG4gICAgICB2aWV3cG9ydD17eyBhbW91bnQ6IDAuMiB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiBpbmRleCAqIDAuMSB9fVxyXG4gICAgPlxyXG4gICAgICBcclxuICAgICAgPExpbmsgaHJlZj17YC9hcnRpc3RzLyR7YXJ0aXN0Lm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICctJyl9YH0+XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgey8qIGJnIGltYWdlICovfVxyXG4gICBcclxuICAgICAgXHJcbiAgICBcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImFydGlzdC1pbWFnZVwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YXJ0aXN0LmltYWdlVXJsfSlgIH19XHJcbiAgICAgID48L2Rpdj5cclxuICAgICAgey8qIG92ZXJsYXkgKi99XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvYXJ0aXN0cy8ke2FydGlzdC5pZH1gfSA+XHJcbiAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpc3Qtb3ZlcmxheSBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGp1c3RpZnktc3RhcnQgbGc6anVzdGlmeS1iZXR3ZWVuIHctZnVsbCBoLWZ1bGwgei1bMl0gcC01IGFic29sdXRlIHRvcC0wIGxlZnQtMCBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIiA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj17YXJ0aXN0LndlYnNpdGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB0ZXh0LWJhc2UgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB2aWV3IHdlYnNpdGVcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIG10LVsxNXB4XSBsZzptdC0wIFwiPlxyXG4gICAgICAgICAgICB7YXJ0aXN0LnNvY2lhbExpbmtzICYmXHJcbiAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoYXJ0aXN0LnNvY2lhbExpbmtzKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAoW2tleSwgeyBsaW5rLCBpY29uOiBJY29uIH1dKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdGV4dC1iYXNlIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBzaXplPXsyMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gbGc6dGV4dC1bNDBweF0gYWJzb2x1dGUgYm90dG9tLVsxMHB4XSBsZzpib3R0b20tNSBsZzpsZWZ0LTUgbGVmdC1bMTBweF0gbGVhZGluZy1ub25lIHRleHQtd2hpdGUgYXJ0aXN0LW5hbWVcIj5cclxuICAgICAgICB7YXJ0aXN0Lm5hbWV9XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGlzdENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwibW90aW9uIiwiZmFkZUluVXAiLCJBcnRpc3RDYXJkIiwiYXJ0aXN0IiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0IiwiYW1vdW50IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJocmVmIiwibmFtZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2VVcmwiLCJpZCIsIndlYnNpdGUiLCJ1bCIsInNvY2lhbExpbmtzIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImtleSIsImxpbmsiLCJpY29uIiwiSWNvbiIsImxpIiwic2l6ZSIsImgzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/home/ArtistCard.tsx\n"));

/***/ })

});