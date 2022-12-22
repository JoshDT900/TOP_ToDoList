"use strict";
(self["webpackChunktop_todolist"] = self["webpackChunktop_todolist"] || []).push([["dataobj"],{

/***/ "./src/datafile.js":
/*!*************************!*\
  !*** ./src/datafile.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataObjArr": () => (/* binding */ dataObjArr),
/* harmony export */   "loadData": () => (/* binding */ loadData),
/* harmony export */   "saveProjLoc": () => (/* binding */ saveProjLoc)
/* harmony export */ });
let dataObjArr = []

let loadData = (locStor) => {
    if (!locStor.projects) {
        return dataObjArr = [];
    } else {
        return dataObjArr = JSON.parse(locStor.projects);
    }
}

let saveProjLoc = (objArr) => {
    localStorage.clear("projects");
    
    return localStorage.setItem("projects", JSON.stringify(objArr));
}

 

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/datafile.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YW9iai5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU0QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9kYXRhZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZGF0YU9iakFyciA9IFtdXG5cbmxldCBsb2FkRGF0YSA9IChsb2NTdG9yKSA9PiB7XG4gICAgaWYgKCFsb2NTdG9yLnByb2plY3RzKSB7XG4gICAgICAgIHJldHVybiBkYXRhT2JqQXJyID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRhdGFPYmpBcnIgPSBKU09OLnBhcnNlKGxvY1N0b3IucHJvamVjdHMpO1xuICAgIH1cbn1cblxubGV0IHNhdmVQcm9qTG9jID0gKG9iakFycikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcihcInByb2plY3RzXCIpO1xuICAgIFxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KG9iakFycikpO1xufVxuXG5leHBvcnQgeyBkYXRhT2JqQXJyLCBzYXZlUHJvakxvYywgbG9hZERhdGEgfSAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=