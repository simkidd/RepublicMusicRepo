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

/***/ "(app-pages-browser)/./src/components/home/ShopSection.tsx":
/*!*********************************************!*\
  !*** ./src/components/home/ShopSection.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Button */ \"(app-pages-browser)/./src/components/shared/Button.tsx\");\n/* harmony import */ var _data_shop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/data/shop */ \"(app-pages-browser)/./src/data/shop.ts\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css/effect-fade */ \"(app-pages-browser)/./node_modules/swiper/modules/effect-fade.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst ShopSection = ()=>{\n    _s();\n    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    // Split articles into chunks of 5 for Swiper slides\n    const chunkedArticles = [];\n    for(let i = 0; i < _data_shop__WEBPACK_IMPORTED_MODULE_4__[\"default\"].length; i += 5){\n        chunkedArticles.push(_data_shop__WEBPACK_IMPORTED_MODULE_4__[\"default\"].slice(i, i + 5));\n    }\n    // Function to navigate to the previous slide\n    const handlePrev = ()=>{\n        if (swiperRef.current) {\n            swiperRef.current.swiper.slidePrev();\n        }\n    };\n    // Function to navigate to the next slide\n    const handleNext = ()=>{\n        if (swiperRef.current) {\n            swiperRef.current.swiper.slideNext();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"pt-[50px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-auto w-[95%] block\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \" text-[160px] lowercase font-bold text-white -tracking-wider leading-none mx-auto w-[90%] translate-y-[55px] z-[2] relative pointer-events-none\",\n                    children: \"Shop\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full mx-auto \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative bg-blue-400 m-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handlePrev,\n                                className: \"slick-prev \",\n                                children: \"prev\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleNext,\n                                className: \"slick-next\",\n                                children: \"next\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.Swiper, {\n                        ref: swiperRef,\n                        modules: [\n                            swiper_modules__WEBPACK_IMPORTED_MODULE_6__.Navigation,\n                            swiper_modules__WEBPACK_IMPORTED_MODULE_6__.EffectFade\n                        ],\n                        spaceBetween: 10,\n                        slidesPerView: 1,\n                        effect: \"fade\",\n                        navigation: false,\n                        loop: true,\n                        className: \"w-full\",\n                        children: chunkedArticles.map((chunk, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full relative\",\n                                    children: chunk.map((article)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                                            className: \"article__card\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                                className: \"relative block\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"article_card__thumb pb-[100%] relative\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"article_card__thumb-overlay\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                                    href: article.link,\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                                        variant: \"outline\",\n                                                                        children: \"shop now\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                                                                        lineNumber: 81,\n                                                                        columnNumber: 29\n                                                                    }, undefined)\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                                                                    lineNumber: 80,\n                                                                    columnNumber: 27\n                                                                }, undefined)\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                                                                lineNumber: 79,\n                                                                columnNumber: 25\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"__thumb-bg-color\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                                                                lineNumber: 84,\n                                                                columnNumber: 25\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"__thumb-bg-image\",\n                                                                style: {\n                                                                    backgroundImage: \"url(\".concat(article.imageUrl, \")\")\n                                                                }\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                                                                lineNumber: 85,\n                                                                columnNumber: 25\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"article_card__footer\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"__footer-header\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                    children: article.title\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                                                                    lineNumber: 94,\n                                                                    columnNumber: 27\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                                    children: article.price\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                                                                    lineNumber: 95,\n                                                                    columnNumber: 27\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                                                            lineNumber: 93,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, article.id, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 19\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\folder\\\\nextjs-music-app\\\\src\\\\components\\\\home\\\\ShopSection.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShopSection, \"7rRnQCzUMwK497nz2pZRyPKpHOg=\");\n_c = ShopSection;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopSection);\nvar _c;\n$RefreshReg$(_c, \"ShopSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvbWUvU2hvcFNlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ1M7QUFDQTtBQUNIO0FBQzJCO0FBQ047QUFFcEM7QUFDVztBQUNDO0FBRWhDLE1BQU1TLGNBQWM7O0lBQ2xCLE1BQU1DLFlBQVlSLDZDQUFNQSxDQUFtQjtJQUUzQyxvREFBb0Q7SUFDcEQsTUFBTVMsa0JBQWtCLEVBQUU7SUFDMUIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlSLGtEQUFRQSxDQUFDUyxNQUFNLEVBQUVELEtBQUssRUFBRztRQUMzQ0QsZ0JBQWdCRyxJQUFJLENBQUNWLGtEQUFRQSxDQUFDVyxLQUFLLENBQUNILEdBQUdBLElBQUk7SUFDN0M7SUFFQSw2Q0FBNkM7SUFDN0MsTUFBTUksYUFBYTtRQUNqQixJQUFJTixVQUFVTyxPQUFPLEVBQUU7WUFDckJQLFVBQVVPLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTO1FBQ3BDO0lBQ0Y7SUFFQSx5Q0FBeUM7SUFDekMsTUFBTUMsYUFBYTtRQUNqQixJQUFJVixVQUFVTyxPQUFPLEVBQUU7WUFDckJQLFVBQVVPLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDRyxTQUFTO1FBQ3BDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQUdGLFdBQVU7OEJBQWtKOzs7Ozs7Ozs7OzswQkFNbEssOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FFYiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDRztnQ0FDQ0MsU0FBU1g7Z0NBQ1RPLFdBQVU7MENBQ1g7Ozs7OzswQ0FHRCw4REFBQ0c7Z0NBQ0NDLFNBQVNQO2dDQUNURyxXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7a0NBS0gsOERBQUNsQixnREFBTUE7d0JBQ0x1QixLQUFLbEI7d0JBQ0xtQixTQUFTOzRCQUFDdEIsc0RBQVVBOzRCQUFFQyxzREFBVUE7eUJBQUM7d0JBQ2pDc0IsY0FBYzt3QkFDZEMsZUFBZTt3QkFDZkMsUUFBUTt3QkFDUkMsWUFBWTt3QkFDWkMsSUFBSTt3QkFDSlgsV0FBVTtrQ0FFVFosZ0JBQWdCd0IsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUMzQiw4REFBQy9CLHFEQUFXQTswQ0FDViw0RUFBQ2tCO29DQUFJRCxXQUFVOzhDQUNaYSxNQUFNRCxHQUFHLENBQUMsQ0FBQ0csd0JBQ1YsOERBQUNBOzRDQUF5QmYsV0FBVTtzREFDbEMsNEVBQUNnQjtnREFBT2hCLFdBQVU7O2tFQUNoQiw4REFBQ0M7d0RBQUlELFdBQVU7OzBFQUNiLDhEQUFDQztnRUFBSUQsV0FBVTswRUFDYiw0RUFBQ3ZCLGlEQUFJQTtvRUFBQ3dDLE1BQU1GLFFBQVFHLElBQUk7OEVBQ3RCLDRFQUFDdEMsc0RBQU1BO3dFQUFDdUMsU0FBUTtrRkFBVTs7Ozs7Ozs7Ozs7Ozs7OzswRUFHOUIsOERBQUNsQjtnRUFBSUQsV0FBVTs7Ozs7OzBFQUNmLDhEQUFDQztnRUFDQ0QsV0FBVTtnRUFDVm9CLE9BQU87b0VBQ0xDLGlCQUFpQixPQUF3QixPQUFqQk4sUUFBUU8sUUFBUSxFQUFDO2dFQUMzQzs7Ozs7Ozs7Ozs7O2tFQUdKLDhEQUFDckI7d0RBQUlELFdBQVU7a0VBQ2IsNEVBQUNDOzREQUFJRCxXQUFVOzs4RUFDYiw4REFBQ3VCOzhFQUFJUixRQUFRUyxLQUFLOzs7Ozs7OEVBQ2xCLDhEQUFDQzs4RUFBSVYsUUFBUVcsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBbkJaWCxRQUFRWSxFQUFFOzs7Ozs7Ozs7OytCQUhaYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DOUI7R0EvRk01QjtLQUFBQTtBQWlHTixpRUFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUvU2hvcFNlY3Rpb24udHN4P2JiMWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9zaGFyZWQvQnV0dG9uXCI7XHJcbmltcG9ydCBhcnRpY2xlcyBmcm9tIFwiQC9kYXRhL3Nob3BcIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSwgU3dpcGVyUmVmIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uLCBFZmZlY3RGYWRlIH0gZnJvbSBcInN3aXBlci9tb2R1bGVzXCI7XHJcblxyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL2VmZmVjdC1mYWRlXCI7XHJcblxyXG5jb25zdCBTaG9wU2VjdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBzd2lwZXJSZWYgPSB1c2VSZWY8U3dpcGVyUmVmIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIC8vIFNwbGl0IGFydGljbGVzIGludG8gY2h1bmtzIG9mIDUgZm9yIFN3aXBlciBzbGlkZXNcclxuICBjb25zdCBjaHVua2VkQXJ0aWNsZXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFydGljbGVzLmxlbmd0aDsgaSArPSA1KSB7XHJcbiAgICBjaHVua2VkQXJ0aWNsZXMucHVzaChhcnRpY2xlcy5zbGljZShpLCBpICsgNSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gbmF2aWdhdGUgdG8gdGhlIHByZXZpb3VzIHNsaWRlXHJcbiAgY29uc3QgaGFuZGxlUHJldiA9ICgpID0+IHtcclxuICAgIGlmIChzd2lwZXJSZWYuY3VycmVudCkge1xyXG4gICAgICBzd2lwZXJSZWYuY3VycmVudC5zd2lwZXIuc2xpZGVQcmV2KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gbmF2aWdhdGUgdG8gdGhlIG5leHQgc2xpZGVcclxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHN3aXBlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHN3aXBlclJlZi5jdXJyZW50LnN3aXBlci5zbGlkZU5leHQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHQtWzUwcHhdXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIHctWzk1JV0gYmxvY2tcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiIHRleHQtWzE2MHB4XSBsb3dlcmNhc2UgZm9udC1ib2xkIHRleHQtd2hpdGUgLXRyYWNraW5nLXdpZGVyIGxlYWRpbmctbm9uZSBteC1hdXRvIHctWzkwJV0gdHJhbnNsYXRlLXktWzU1cHhdIHotWzJdIHJlbGF0aXZlIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cclxuICAgICAgICAgIFNob3BcclxuICAgICAgICA8L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiB2aWV3IGNvbnRlbnQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG8gXCI+XHJcbiAgICAgICAgey8qIGFycm93IGJ1dHRvbnMgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1ibHVlLTQwMCBtLTJcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpY2stcHJldiBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBwcmV2XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpY2stbmV4dFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIG5leHRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICByZWY9e3N3aXBlclJlZn1cclxuICAgICAgICAgIG1vZHVsZXM9e1tOYXZpZ2F0aW9uLCBFZmZlY3RGYWRlXX0gLy8gRW5hYmxlIHRoZSBOYXZpZ2F0aW9uIG1vZHVsZVxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuPXsxMH0gLy8gU3BhY2UgYmV0d2VlbiBzbGlkZXNcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9IC8vIFNob3cgb25lIHNsaWRlICh3aGljaCBjb250YWlucyBtdWx0aXBsZSBjYXJkcylcclxuICAgICAgICAgIGVmZmVjdD17XCJmYWRlXCJ9XHJcbiAgICAgICAgICBuYXZpZ2F0aW9uPXtmYWxzZX1cclxuICAgICAgICAgIGxvb3BcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2NodW5rZWRBcnRpY2xlcy5tYXAoKGNodW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIHtjaHVuay5tYXAoKGFydGljbGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGFydGljbGUga2V5PXthcnRpY2xlLmlkfSBjbGFzc05hbWU9XCJhcnRpY2xlX19jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlX2NhcmRfX3RodW1iIHBiLVsxMDAlXSByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVfY2FyZF9fdGh1bWItb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2FydGljbGUubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCI+c2hvcCBub3c8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIl9fdGh1bWItYmctY29sb3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIl9fdGh1bWItYmctaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHthcnRpY2xlLmltYWdlVXJsfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlX2NhcmRfX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIl9fZm9vdGVyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57YXJ0aWNsZS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57YXJ0aWNsZS5wcmljZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcFNlY3Rpb247XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VSZWYiLCJCdXR0b24iLCJhcnRpY2xlcyIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiTmF2aWdhdGlvbiIsIkVmZmVjdEZhZGUiLCJTaG9wU2VjdGlvbiIsInN3aXBlclJlZiIsImNodW5rZWRBcnRpY2xlcyIsImkiLCJsZW5ndGgiLCJwdXNoIiwic2xpY2UiLCJoYW5kbGVQcmV2IiwiY3VycmVudCIsInN3aXBlciIsInNsaWRlUHJldiIsImhhbmRsZU5leHQiLCJzbGlkZU5leHQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwicmVmIiwibW9kdWxlcyIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJlZmZlY3QiLCJuYXZpZ2F0aW9uIiwibG9vcCIsIm1hcCIsImNodW5rIiwiaW5kZXgiLCJhcnRpY2xlIiwiZmlndXJlIiwiaHJlZiIsImxpbmsiLCJ2YXJpYW50Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZVVybCIsImgzIiwidGl0bGUiLCJoNCIsInByaWNlIiwiaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/home/ShopSection.tsx\n"));

/***/ })

});