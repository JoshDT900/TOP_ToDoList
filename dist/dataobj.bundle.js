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
    if (locStor.projects === undefined) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YW9iai5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU0QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9kYXRhZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZGF0YU9iakFyciA9IFtdXG5cbmxldCBsb2FkRGF0YSA9IChsb2NTdG9yKSA9PiB7XG4gICAgaWYgKGxvY1N0b3IucHJvamVjdHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZGF0YU9iakFyciA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkYXRhT2JqQXJyID0gSlNPTi5wYXJzZShsb2NTdG9yLnByb2plY3RzKTtcbiAgICB9XG59XG5cbmxldCBzYXZlUHJvakxvYyA9IChvYmpBcnIpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoXCJwcm9qZWN0c1wiKTtcbiAgICBcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShvYmpBcnIpKTtcbn1cblxuZXhwb3J0IHsgZGF0YU9iakFyciwgc2F2ZVByb2pMb2MsIGxvYWREYXRhIH0gIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9