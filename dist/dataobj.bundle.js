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
    return dataObjArr = JSON.parse(locStor);
}

let saveProjLoc = (objArr) => {
    localStorage.clear("projects");
    
    localStorage.setItem("projects", JSON.stringify(objArr));

    // Refreshes session data with new local storage
    loadData(localStorage.getItem(`projects`))
   
    return;
}


 

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/datafile.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YW9iai5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUc0QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9kYXRhZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZGF0YU9iakFyciA9IFtdXG5cbmxldCBsb2FkRGF0YSA9IChsb2NTdG9yKSA9PiB7ICAgXG4gICAgcmV0dXJuIGRhdGFPYmpBcnIgPSBKU09OLnBhcnNlKGxvY1N0b3IpO1xufVxuXG5sZXQgc2F2ZVByb2pMb2MgPSAob2JqQXJyKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKFwicHJvamVjdHNcIik7XG4gICAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShvYmpBcnIpKTtcblxuICAgIC8vIFJlZnJlc2hlcyBzZXNzaW9uIGRhdGEgd2l0aCBuZXcgbG9jYWwgc3RvcmFnZVxuICAgIGxvYWREYXRhKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcm9qZWN0c2ApKVxuICAgXG4gICAgcmV0dXJuO1xufVxuXG5cbmV4cG9ydCB7IGRhdGFPYmpBcnIsIHNhdmVQcm9qTG9jLCBsb2FkRGF0YSB9ICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==