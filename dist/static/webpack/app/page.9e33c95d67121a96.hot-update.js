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

/***/ "(app-pages-browser)/./src/data/banners.ts":
/*!*****************************!*\
  !*** ./src/data/banners.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   banners: () => (/* binding */ banners)\n/* harmony export */ });\nconst banners = [\n    {\n        title: \"Can Yaman\",\n        subtitle: \"New Album  Gel Bana Doğru is out now.\",\n        imageUrl: \"https://i.pinimg.com/736x/ce/70/80/ce7080c77c756e4577c4ee3690836809.jpg\",\n        // imageUrl: \"https://i.ytimg.com/vi/czjWmJnqvfA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCJtN5Fa4pbLvpVbnyeum0ICd1tZw\",\n        link: \"https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DbZ7PxFFTGng&psig=AOvVaw3jEvWX2vFi2c3cPrv4HfBS&ust=1731950988962000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLin1Jrz44kDFQAAAAAdAAAAABAE\"\n    },\n    {\n        title: \"Zayn Malik\",\n        subtitle: \"Latest Album Room Under the Stairs out.\",\n        imageUrl: \"https://i.ytimg.com/vi/Ja_OwUXosjM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAd_jY3d_phSRaCbIdJqyLNJSYHrQ\",\n        link: \"https://www.youtube.com/playlist?list=PLDhajrZgo0TLtbH650tocz9H6z8_lxtNS\"\n    },\n    {\n        title: \"Post Malone\",\n        subtitle: \"Who needs You from the album F-1 Trillion\",\n        // imageUrl: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDr2meTX-ilnMWSJnu5TeBnZ2E15FP_49rXg&s\",\n        imageUrl: \"https://www.rollingstone.com/wp-content/uploads/2023/04/GettyImages-1461622497.jpg?w=1024&h=683&crop=1\",\n        link: \"w\"\n    },\n    {\n        title: \"Playlists\",\n        subtitle: \"Handpicked playlists for every mood.\",\n        imageUrl: \"https://www.republicrecords.com/files/2024/05/PM-Banner-169.png\",\n        link: \"https://www.youtube.com/watch?v=4QIZE708gJ4\"\n    },\n    {\n        title: \"Jason Momoaw\",\n        subtitle: \"New music out now, aquaman / jason momoa.\",\n        imageUrl: \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Jason_Momoa_%2843055621224%29_%28cropped%29.jpg/330px-Jason_Momoa_%2843055621224%29_%28cropped%29.jpg\",\n        link: \"#\"\n    },\n    {\n        title: \"Playlists\",\n        subtitle: \"Handpicked playlists for every mood.\",\n        imageUrl: \"https://www.republicrecords.com/files/2024/05/PM-Banner-169.png\",\n        link: \"#\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9kYXRhL2Jhbm5lcnMudHMiLCJtYXBwaW5ncyI6Ijs7OztBQU9PLE1BQU1BLFVBQW9CO0lBQy9CO1FBQ0VDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxVQUFVO1FBQ1YsMkpBQTJKO1FBQzNKQyxNQUFNO0lBQ1I7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsVUFBUztRQUNUQyxNQUFNO0lBQ1I7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLFVBQVU7UUFDViw0R0FBNEc7UUFDNUdDLFVBQVU7UUFDVkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsTUFBTTtJQUNSO0NBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kYXRhL2Jhbm5lcnMudHM/NmJjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEJhbm5lciB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBzdWJ0aXRsZTogc3RyaW5nO1xyXG4gIGltYWdlVXJsOiBzdHJpbmc7XHJcbiAgbGluazogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYmFubmVyczogQmFubmVyW10gPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQ2FuIFlhbWFuXCIsXHJcbiAgICBzdWJ0aXRsZTogXCJOZXcgQWxidW0gIEdlbCBCYW5hIERvxJ9ydSBpcyBvdXQgbm93LlwiLFxyXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vNzM2eC9jZS83MC84MC9jZTcwODBjNzdjNzU2ZTQ1NzdjNGVlMzY5MDgzNjgwOS5qcGdcIixcclxuICAgIC8vIGltYWdlVXJsOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvY3pqV21KbnF2ZkEvaHE3MjAuanBnP3NxcD0tb2F5bXdFaENLNEZFSUlEU0ZyeXE0cXBBeE1JQVJVQUFBQUFHQUVsQUFESVFqMEFnS0pEJnJzPUFPbjRDTENKdE41RmE0cGJMdnBWYm55ZXVtMElDZDF0WndcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS91cmw/c2E9aSZ1cmw9aHR0cHMlM0ElMkYlMkZtLnlvdXR1YmUuY29tJTJGd2F0Y2glM0Z2JTNEYlo3UHhGRlRHbmcmcHNpZz1BT3ZWYXczakV2V1gydkZpMmMzY1BydjRIZkJTJnVzdD0xNzMxOTUwOTg4OTYyMDAwJnNvdXJjZT1pbWFnZXMmY2Q9dmZlJm9waT04OTk3ODQ0OSZ2ZWQ9MENCUVFqUnhxRndvVENMaW4xSnJ6NDRrREZRQUFBQUFkQUFBQUFCQUVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlpheW4gTWFsaWtcIixcclxuICAgIHN1YnRpdGxlOiBcIkxhdGVzdCBBbGJ1bSBSb29tIFVuZGVyIHRoZSBTdGFpcnMgb3V0LlwiLFxyXG4gICAgaW1hZ2VVcmw6XCJodHRwczovL2kueXRpbWcuY29tL3ZpL0phX093VVhvc2pNL2hxZGVmYXVsdC5qcGc/c3FwPS1vYXltd0VYQ05BQ0VMd0JTRnJ5cTRxcEF3a0lBUlVBQUloQ0dBRT0mcnM9QU9uNENMQWRfalkzZF9waFNSYUNiSWRKcXlMTkpTWUhyUVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9wbGF5bGlzdD9saXN0PVBMRGhhanJaZ28wVEx0Ykg2NTB0b2N6OUg2ejhfbHh0TlNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlBvc3QgTWFsb25lXCIsXHJcbiAgICBzdWJ0aXRsZTogXCJXaG8gbmVlZHMgWW91IGZyb20gdGhlIGFsYnVtIEYtMSBUcmlsbGlvblwiLFxyXG4gICAgLy8gaW1hZ2VVcmw6IFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkRyMm1lVFgtaWxuTVdTSm51NVRlQm5aMkUxNUZQXzQ5clhnJnNcIixcclxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vd3d3LnJvbGxpbmdzdG9uZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjMvMDQvR2V0dHlJbWFnZXMtMTQ2MTYyMjQ5Ny5qcGc/dz0xMDI0Jmg9NjgzJmNyb3A9MVwiLFxyXG4gICAgbGluazogXCJ3XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQbGF5bGlzdHNcIixcclxuICAgIHN1YnRpdGxlOiBcIkhhbmRwaWNrZWQgcGxheWxpc3RzIGZvciBldmVyeSBtb29kLlwiLFxyXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly93d3cucmVwdWJsaWNyZWNvcmRzLmNvbS9maWxlcy8yMDI0LzA1L1BNLUJhbm5lci0xNjkucG5nXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9NFFJWkU3MDhnSjRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkphc29uIE1vbW9hd1wiLFxyXG4gICAgc3VidGl0bGU6IFwiTmV3IG11c2ljIG91dCBub3csIGFxdWFtYW4gLyBqYXNvbiBtb21vYS5cIixcclxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMi8yMi9KYXNvbl9Nb21vYV8lMjg0MzA1NTYyMTIyNCUyOV8lMjhjcm9wcGVkJTI5LmpwZy8zMzBweC1KYXNvbl9Nb21vYV8lMjg0MzA1NTYyMTIyNCUyOV8lMjhjcm9wcGVkJTI5LmpwZ1wiLFxyXG4gICAgbGluazogXCIjXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQbGF5bGlzdHNcIixcclxuICAgIHN1YnRpdGxlOiBcIkhhbmRwaWNrZWQgcGxheWxpc3RzIGZvciBldmVyeSBtb29kLlwiLFxyXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly93d3cucmVwdWJsaWNyZWNvcmRzLmNvbS9maWxlcy8yMDI0LzA1L1BNLUJhbm5lci0xNjkucG5nXCIsXHJcbiAgICBsaW5rOiBcIiNcIixcclxuICB9LFxyXG5dO1xyXG4iXSwibmFtZXMiOlsiYmFubmVycyIsInRpdGxlIiwic3VidGl0bGUiLCJpbWFnZVVybCIsImxpbmsiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/data/banners.ts\n"));

/***/ })

});