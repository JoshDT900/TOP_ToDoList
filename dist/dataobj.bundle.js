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
    if (locStor === null){
        return dataObjArr = [];
    } else {
        return dataObjArr = JSON.parse(locStor);
    }    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YW9iai5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHNEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvZGF0YWZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGRhdGFPYmpBcnIgPSBbXVxuXG5sZXQgbG9hZERhdGEgPSAobG9jU3RvcikgPT4ge1xuICAgIGlmIChsb2NTdG9yID09PSBudWxsKXtcbiAgICAgICAgcmV0dXJuIGRhdGFPYmpBcnIgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGF0YU9iakFyciA9IEpTT04ucGFyc2UobG9jU3Rvcik7XG4gICAgfSAgICBcbn1cblxubGV0IHNhdmVQcm9qTG9jID0gKG9iakFycikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcihcInByb2plY3RzXCIpO1xuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkob2JqQXJyKSk7XG5cbiAgICAvLyBSZWZyZXNoZXMgc2Vzc2lvbiBkYXRhIHdpdGggbmV3IGxvY2FsIHN0b3JhZ2VcbiAgICBsb2FkRGF0YShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgcHJvamVjdHNgKSlcbiAgIFxuICAgIHJldHVybjtcbn1cblxuXG5leHBvcnQgeyBkYXRhT2JqQXJyLCBzYXZlUHJvakxvYywgbG9hZERhdGEgfSAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=