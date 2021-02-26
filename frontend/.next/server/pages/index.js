module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CourseTable.tsx":
/*!************************************!*\
  !*** ./components/CourseTable.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CourseTable; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bs_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bs-datatable */ "react-bs-datatable");
/* harmony import */ var react_bs_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bs_datatable__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\kissm\\Desktop\\sipcourse\\frontend\\components\\CourseTable.tsx";


function CourseTable({
  courses
}) {
  const header = [{
    title: "Course code",
    prop: "code",
    sortable: true,
    filterable: true
  }, {
    title: "Course Title",
    prop: "title",
    sortable: true
  }, {
    title: "Department code",
    prop: "depCode"
  }, {
    title: "Instructor code",
    prop: "insId"
  }, {
    title: "Faculty code",
    prop: "facCode"
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bs_datatable__WEBPACK_IMPORTED_MODULE_2___default.a, {
    tableHeaders: header,
    tableBody: courses,
    rowsPerPage: 15,
    rowsPerPageOption: [5, 10, 15, 20],
    initialSort: {
      prop: "code",
      isAscending: true
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/InstructorTable.tsx":
/*!****************************************!*\
  !*** ./components/InstructorTable.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InstructorTable; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bs_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bs-datatable */ "react-bs-datatable");
/* harmony import */ var react_bs_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bs_datatable__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\kissm\\Desktop\\sipcourse\\frontend\\components\\InstructorTable.tsx";


function InstructorTable({
  instructors
}) {
  const header = [{
    title: "Instructor code",
    prop: "id",
    sortable: true,
    filterable: true
  }, {
    title: "First Name",
    prop: "firstName",
    sortable: true
  }, {
    title: "Last Name",
    prop: "lastName"
  }, {
    title: "Department code",
    prop: "depCode"
  }, {
    title: "Faculty code",
    prop: "facCode"
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bs_datatable__WEBPACK_IMPORTED_MODULE_2___default.a, {
    tableHeaders: header,
    tableBody: instructors,
    rowsPerPage: 15,
    rowsPerPageOption: [5, 10, 15, 20],
    initialSort: {
      prop: "id",
      isAscending: true
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./config/axios-config.ts":
/*!********************************!*\
  !*** ./config/axios-config.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const globalAxios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:3500"
});
/* harmony default export */ __webpack_exports__["default"] = (globalAxios);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CourseTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CourseTable */ "./components/CourseTable.tsx");
/* harmony import */ var _components_InstructorTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InstructorTable */ "./components/InstructorTable.tsx");
/* harmony import */ var _services_courseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/courseService */ "./services/courseService.ts");
/* harmony import */ var _services_instructorService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/instructorService */ "./services/instructorService.ts");

var _jsxFileName = "C:\\Users\\kissm\\Desktop\\sipcourse\\frontend\\pages\\index.tsx";






function Home({
  instructors,
  courses
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: "12",
      lg: "8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_InstructorTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
        instructors: instructors
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: "12",
      lg: "8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CourseTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
        courses: courses
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
async function getStaticProps() {
  const res = await Object(_services_instructorService__WEBPACK_IMPORTED_MODULE_6__["fetchInstructors"])();
  const {
    data: instructors
  } = res;
  const res2 = await Object(_services_courseService__WEBPACK_IMPORTED_MODULE_5__["fetchCourses"])();
  const {
    data: courses
  } = res2;
  return {
    props: {
      instructors,
      courses
    }
  };
}

/***/ }),

/***/ "./services/courseService.ts":
/*!***********************************!*\
  !*** ./services/courseService.ts ***!
  \***********************************/
/*! exports provided: fetchCourses, fetchInstructorById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCourses", function() { return fetchCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInstructorById", function() { return fetchInstructorById; });
/* harmony import */ var _config_axios_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/axios-config */ "./config/axios-config.ts");

const fetchCourses = async () => {
  try {
    return await _config_axios_config__WEBPACK_IMPORTED_MODULE_0__["default"].get("/courses");
  } catch (err) {
    console.log(err);
  }
};
const fetchInstructorById = async id => {
  try {
    return await _config_axios_config__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/courses/${id}`);
  } catch (err) {
    console.log(err);
  }
};

/***/ }),

/***/ "./services/instructorService.ts":
/*!***************************************!*\
  !*** ./services/instructorService.ts ***!
  \***************************************/
/*! exports provided: fetchInstructors, fetchInstructorById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInstructors", function() { return fetchInstructors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInstructorById", function() { return fetchInstructorById; });
/* harmony import */ var _config_axios_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/axios-config */ "./config/axios-config.ts");

const fetchInstructors = async () => {
  try {
    return await _config_axios_config__WEBPACK_IMPORTED_MODULE_0__["default"].get("/instructors");
  } catch (err) {
    console.log(err);
  }
};
const fetchInstructorById = async id => {
  try {
    return await _config_axios_config__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/instructors/${id}`);
  } catch (err) {
    console.log(err);
  }
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bs-datatable":
/*!*************************************!*\
  !*** external "react-bs-datatable" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bs-datatable");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db3Vyc2VUYWJsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbnN0cnVjdG9yVGFibGUudHN4Iiwid2VicGFjazovLy8uL2NvbmZpZy9heGlvcy1jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NlcnZpY2VzL2NvdXJzZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvaW5zdHJ1Y3RvclNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJzLWRhdGF0YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNvdXJzZVRhYmxlIiwiY291cnNlcyIsImhlYWRlciIsInRpdGxlIiwicHJvcCIsInNvcnRhYmxlIiwiZmlsdGVyYWJsZSIsImlzQXNjZW5kaW5nIiwiSW5zdHJ1Y3RvclRhYmxlIiwiaW5zdHJ1Y3RvcnMiLCJnbG9iYWxBeGlvcyIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJORVhUX1BVQkxJQ19CQUNLRU5EX1VSTCIsIkhvbWUiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoSW5zdHJ1Y3RvcnMiLCJkYXRhIiwicmVzMiIsImZldGNoQ291cnNlcyIsInByb3BzIiwiZ2V0IiwiZXJyIiwiY29uc29sZSIsImxvZyIsImZldGNoSW5zdHJ1Y3RvckJ5SWQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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QSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGF0YXRhYmxlIGZyb20gXCJyZWFjdC1icy1kYXRhdGFibGVcIjtcclxuaW1wb3J0IENvdXJzZSBmcm9tIFwiLi4vbW9kZWxzL2NvdXJzZVwiO1xyXG5cclxuaW50ZXJmYWNlIENvdXJzZVRhYmxlUHJvcHMge1xyXG4gIGNvdXJzZXM6IENvdXJzZVtdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VUYWJsZSh7IGNvdXJzZXMgfTogQ291cnNlVGFibGVQcm9wcykge1xyXG4gIGNvbnN0IGhlYWRlciA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQ291cnNlIGNvZGVcIixcclxuICAgICAgcHJvcDogXCJjb2RlXCIsXHJcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHsgdGl0bGU6IFwiQ291cnNlIFRpdGxlXCIsIHByb3A6IFwidGl0bGVcIiwgc29ydGFibGU6IHRydWUgfSxcclxuICAgIHsgdGl0bGU6IFwiRGVwYXJ0bWVudCBjb2RlXCIsIHByb3A6IFwiZGVwQ29kZVwiIH0sXHJcbiAgICB7IHRpdGxlOiBcIkluc3RydWN0b3IgY29kZVwiLCBwcm9wOiBcImluc0lkXCIgfSxcclxuICAgIHsgdGl0bGU6IFwiRmFjdWx0eSBjb2RlXCIsIHByb3A6IFwiZmFjQ29kZVwiIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEYXRhdGFibGVcclxuICAgICAgdGFibGVIZWFkZXJzPXtoZWFkZXJ9XHJcbiAgICAgIHRhYmxlQm9keT17Y291cnNlc31cclxuICAgICAgcm93c1BlclBhZ2U9ezE1fVxyXG4gICAgICByb3dzUGVyUGFnZU9wdGlvbj17WzUsIDEwLCAxNSwgMjBdfVxyXG4gICAgICBpbml0aWFsU29ydD17eyBwcm9wOiBcImNvZGVcIiwgaXNBc2NlbmRpbmc6IHRydWUgfX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEYXRhdGFibGUgZnJvbSBcInJlYWN0LWJzLWRhdGF0YWJsZVwiO1xyXG5pbXBvcnQgSW5zdHJ1Y3RvciBmcm9tIFwiLi4vbW9kZWxzL2luc3RydWN0b3JcIjtcclxuXHJcbmludGVyZmFjZSBJbnN0cnVjdG9yVGFibGVQcm9wcyB7XHJcbiAgaW5zdHJ1Y3RvcnM6IEluc3RydWN0b3JbXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5zdHJ1Y3RvclRhYmxlKHsgaW5zdHJ1Y3RvcnMgfTogSW5zdHJ1Y3RvclRhYmxlUHJvcHMpIHtcclxuICBjb25zdCBoZWFkZXIgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkluc3RydWN0b3IgY29kZVwiLFxyXG4gICAgICBwcm9wOiBcImlkXCIsXHJcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHsgdGl0bGU6IFwiRmlyc3QgTmFtZVwiLCBwcm9wOiBcImZpcnN0TmFtZVwiLCBzb3J0YWJsZTogdHJ1ZSB9LFxyXG4gICAgeyB0aXRsZTogXCJMYXN0IE5hbWVcIiwgcHJvcDogXCJsYXN0TmFtZVwiIH0sXHJcbiAgICB7IHRpdGxlOiBcIkRlcGFydG1lbnQgY29kZVwiLCBwcm9wOiBcImRlcENvZGVcIiB9LFxyXG4gICAgeyB0aXRsZTogXCJGYWN1bHR5IGNvZGVcIiwgcHJvcDogXCJmYWNDb2RlXCIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERhdGF0YWJsZVxyXG4gICAgICB0YWJsZUhlYWRlcnM9e2hlYWRlcn1cclxuICAgICAgdGFibGVCb2R5PXtpbnN0cnVjdG9yc31cclxuICAgICAgcm93c1BlclBhZ2U9ezE1fVxyXG4gICAgICByb3dzUGVyUGFnZU9wdGlvbj17WzUsIDEwLCAxNSwgMjBdfVxyXG4gICAgICBpbml0aWFsU29ydD17eyBwcm9wOiBcImlkXCIsIGlzQXNjZW5kaW5nOiB0cnVlIH19XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBnbG9iYWxBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbEF4aW9zO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgQ291cnNlVGFibGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291cnNlVGFibGVcIjtcbmltcG9ydCBJbnN0cnVjdG9yVGFibGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5zdHJ1Y3RvclRhYmxlXCI7XG5pbXBvcnQgQ291cnNlIGZyb20gXCIuLi9tb2RlbHMvY291cnNlXCI7XG5pbXBvcnQgSW5zdHJ1Y3RvciBmcm9tIFwiLi4vbW9kZWxzL2luc3RydWN0b3JcIjtcbmltcG9ydCB7IGZldGNoQ291cnNlcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb3Vyc2VTZXJ2aWNlXCI7XG5pbXBvcnQgeyBmZXRjaEluc3RydWN0b3JzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2luc3RydWN0b3JTZXJ2aWNlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgRGF0YVByb3BzIHtcbiAgaW5zdHJ1Y3RvcnM6IEluc3RydWN0b3JbXTtcbiAgY291cnNlczogQ291cnNlW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBpbnN0cnVjdG9ycywgY291cnNlcyB9OiBEYXRhUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Um93PlxuICAgICAgPENvbCB4cz0nMTInIGxnPSc4Jz5cbiAgICAgICAgPEluc3RydWN0b3JUYWJsZSBpbnN0cnVjdG9ycz17aW5zdHJ1Y3RvcnN9IC8+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgeHM9JzEyJyBsZz0nOCc+XG4gICAgICAgIDxDb3Vyc2VUYWJsZSBjb3Vyc2VzPXtjb3Vyc2VzfSAvPlxuICAgICAgPC9Db2w+XG4gICAgPC9Sb3c+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hJbnN0cnVjdG9ycygpO1xuICBjb25zdCB7IGRhdGE6IGluc3RydWN0b3JzIH0gPSByZXM7XG5cbiAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoQ291cnNlcygpO1xuICBjb25zdCB7IGRhdGE6IGNvdXJzZXMgfSA9IHJlczI7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaW5zdHJ1Y3RvcnMsXG4gICAgICBjb3Vyc2VzLFxuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgZ2xvYmFsQXhpb3MgZnJvbSBcIi4uL2NvbmZpZy9heGlvcy1jb25maWdcIjtcclxuaW1wb3J0IENvdXJzZSBmcm9tIFwiLi4vbW9kZWxzL2NvdXJzZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ291cnNlcyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGdsb2JhbEF4aW9zLmdldDxDb3Vyc2VbXT4oXCIvY291cnNlc1wiKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoSW5zdHJ1Y3RvckJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZ2xvYmFsQXhpb3MuZ2V0PENvdXJzZT4oYC9jb3Vyc2VzLyR7aWR9YCk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IGdsb2JhbEF4aW9zIGZyb20gXCIuLi9jb25maWcvYXhpb3MtY29uZmlnXCI7XHJcbmltcG9ydCBJbnN0cnVjdG9yIGZyb20gXCIuLi9tb2RlbHMvaW5zdHJ1Y3RvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoSW5zdHJ1Y3RvcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBhd2FpdCBnbG9iYWxBeGlvcy5nZXQ8SW5zdHJ1Y3RvcltdPihcIi9pbnN0cnVjdG9yc1wiKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoSW5zdHJ1Y3RvckJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZ2xvYmFsQXhpb3MuZ2V0PEluc3RydWN0b3I+KGAvaW5zdHJ1Y3RvcnMvJHtpZH1gKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYnMtZGF0YXRhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9