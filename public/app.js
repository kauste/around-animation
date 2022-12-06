/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var item = document.querySelector(".item");
var itemW = item.offsetWidth;
var itemH = item.offsetHeight;
var itemStyle = window.getComputedStyle(item);
var toBottom = 0.5;
var toRight = 0.6;
var miliSec = 3;
var frame = 50;
var frameForTopLeft = frame - 2;
var frameForBottomRight = frame + 8;
var mainFunc = function mainFunc(props) {
  var containerBottom = document.querySelector(".container").offsetHeight - itemH;
  var containerRight = document.querySelector(".container").offsetWidth - itemW;
  var itemTop = Number(itemStyle.getPropertyValue("top").replace("px", ""));
  var itemLeft = Number(itemStyle.getPropertyValue("left").replace("px", ""));
  if (props.firstIf1(itemTop + toBottom, containerBottom) || props.firstIf2(itemLeft + toRight, containerRight)) {
    clearInterval(interval);
    if (props.isfirstIf1 ? props.firstIf1(itemTop + toBottom, containerBottom) : props.firstIf2(itemLeft + toRight, containerRight)) {
      props.secondIfFunc();
      interval = setInterval(props.secondIfFunc, miliSec);
    } else {
      props.secondElseFunc();
      interval = setInterval(props.secondElseFunc, miliSec);
    }
  } else {
    item.style.top = Number(itemTop) + props.plusOrMinus1 * toBottom + 'px';
    item.style.left = Number(itemLeft) + props.plusOrMinus2 * toRight + 'px';
  }
};
var bottom = function bottom() {
  props = {
    firstIf1: function firstIf1(a, b) {
      return a >= b + frameForBottomRight - 5 ? true : false;
    },
    firstIf2: function firstIf2(c, d) {
      return c >= d + frameForBottomRight - 5 ? true : false;
    },
    isfirstIf1: false,
    secondIfFunc: backBottom,
    secondElseFunc: right,
    plusOrMinus1: 1,
    plusOrMinus2: 1
  };
  mainFunc(props);
};
var backBottom = function backBottom() {
  props = {
    firstIf1: function firstIf1(a, b) {
      return a >= b + frameForBottomRight - 5 ? true : false;
    },
    firstIf2: function firstIf2(c) {
      return c <= frameForTopLeft ? true : false;
    },
    isfirstIf1: false,
    secondIfFunc: bottom,
    secondElseFunc: leftBack,
    plusOrMinus1: 1,
    plusOrMinus2: -1
  };
  mainFunc(props);
};
var left = function left() {
  props = {
    firstIf1: function firstIf1(a, b) {
      return a >= b + frameForBottomRight - 5 ? true : false;
    },
    firstIf2: function firstIf2(c) {
      return c <= frameForTopLeft ? true : false;
    },
    isfirstIf1: true,
    secondIfFunc: leftBack,
    secondElseFunc: bottom,
    plusOrMinus1: 1,
    plusOrMinus2: -1
  };
  mainFunc(props);
};
var leftBack = function leftBack() {
  props = {
    firstIf1: function firstIf1(a) {
      return a <= frameForTopLeft ? true : false;
    },
    firstIf2: function firstIf2(b) {
      return b <= frameForTopLeft ? true : false;
    },
    isfirstIf1: true,
    secondIfFunc: left,
    secondElseFunc: topBack,
    plusOrMinus1: -1,
    plusOrMinus2: -1
  };
  mainFunc(props);
};
var top = function top() {
  props = {
    firstIf1: function firstIf1(a) {
      return a <= frameForTopLeft ? true : false;
    },
    firstIf2: function firstIf2(b) {
      return b <= frameForTopLeft ? true : false;
    },
    isfirstIf1: false,
    secondIfFunc: topBack,
    secondElseFunc: left,
    plusOrMinus1: -1,
    plusOrMinus2: -1
  };
  mainFunc(props);
};
var topBack = function topBack() {
  props = {
    firstIf1: function firstIf1(a) {
      return a <= frameForTopLeft ? true : false;
    },
    firstIf2: function firstIf2(b, c) {
      return b >= c + frameForBottomRight - 5 ? true : false;
    },
    isfirstIf1: false,
    secondIfFunc: top,
    secondElseFunc: rightBack,
    plusOrMinus1: -1,
    plusOrMinus2: 1
  };
  mainFunc(props);
};
var right = function right() {
  props = {
    firstIf1: function firstIf1(a) {
      return a <= frameForTopLeft ? true : false;
    },
    firstIf2: function firstIf2(b, c) {
      return b >= c + frameForBottomRight - 5 ? true : false;
    },
    isfirstIf1: true,
    secondIfFunc: rightBack,
    secondElseFunc: top,
    plusOrMinus1: -1,
    plusOrMinus2: 1
  };
  mainFunc(props);
};
var rightBack = function rightBack() {
  props = {
    firstIf1: function firstIf1(a, b) {
      return a >= b + frameForBottomRight - 5 ? true : false;
    },
    firstIf2: function firstIf2(b, c) {
      return b >= c + frameForBottomRight - 5 ? true : false;
    },
    isfirstIf1: true,
    secondIfFunc: right,
    secondElseFunc: backBottom,
    plusOrMinus1: 1,
    plusOrMinus2: 1
  };
  mainFunc(props);
};
var bottomFirst = function bottomFirst() {
  props = {
    firstIf1: function firstIf1(a, b) {
      return a >= b + frameForBottomRight - 5 ? true : false;
    },
    firstIf2: function firstIf2(c, d) {
      return c >= d + frameForBottomRight - 5 ? true : false;
    },
    isfirstIf1: false,
    secondIfFunc: backBottom,
    secondElseFunc: right,
    plusOrMinus1: 1,
    plusOrMinus2: 1
  };
  mainFunc(props);
};
var interval = setInterval(bottomFirst, miliSec);
bottomFirst();

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/app": 0,
/******/ 			"public/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkaround_animation"] = self["webpackChunkaround_animation"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;