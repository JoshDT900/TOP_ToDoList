"use strict";
(self["webpackChunktop_todolist"] = self["webpackChunktop_todolist"] || []).push([["displayfuncs"],{

/***/ "./src/displayfuncs.js":
/*!*****************************!*\
  !*** ./src/displayfuncs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearTasks": () => (/* binding */ clearTasks),
/* harmony export */   "formHide": () => (/* binding */ formHide),
/* harmony export */   "formRemove": () => (/* binding */ formRemove),
/* harmony export */   "formShow": () => (/* binding */ formShow),
/* harmony export */   "showAllTasks": () => (/* binding */ showAllTasks),
/* harmony export */   "showMonthTasks": () => (/* binding */ showMonthTasks),
/* harmony export */   "showTodaysTasks": () => (/* binding */ showTodaysTasks),
/* harmony export */   "showWeekTasks": () => (/* binding */ showWeekTasks),
/* harmony export */   "swapImg": () => (/* binding */ swapImg)
/* harmony export */ });


let clearTasks = () => {
    let taskBox = document.querySelector(".main_content");
    
    return taskBox.innerHTML = "";
}

let dateDiffInDays = (dateA, dateB) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
    const utc2 = Date.UTC(dateB.getFullYear(), dateB.getMonth(), dateB.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

let filterTasksDays = (objDate, objTime) => {
    let today = new Date();
    let compareDate = new Date(`${objDate} ${objTime}`);

    return dateDiffInDays(today, compareDate);
}

let showTodaysTasks = (objArr) => {
    let newArr = [...objArr];

    newArr = newArr.filter(obj => filterTasksDays(obj.date_entry, obj.time_entry) < 1 && filterTasksDays(obj.date_entry, obj.time_entry) == 0);

    return newArr;
}

let showWeekTasks = (objArr) => {
    let newArr = [...objArr];
    
    
    newArr = newArr.filter(obj => filterTasksDays(obj.date_entry, obj.time_entry) >= 0 && filterTasksDays(obj.date_entry, obj.time_entry) < 7);

    return newArr;
}

let showMonthTasks = (objArr) => {
    let newArr = [...objArr];
    
    newArr = newArr.filter(obj => filterTasksDays(obj.date_entry, obj.time_entry) < 30 && filterTasksDays(obj.date_entry, obj.time_entry) >= 0);

    return newArr;
}

let showAllTasks = (objArr) => {
    return objArr
}

let formShow = () => {
    let formDisplay = document.querySelector(".form_wrap");

    formDisplay.style.display = "flex";
    
    return;
}

let formHide = () => {
    let formDisplay = document.querySelector(".form_wrap");

    formDisplay.style.display = "none";

    return;
}

let formRemove = () => {
    let form = document.querySelector(".form_box");

    form.remove();

    return;
}

let swapImg = (element, imgOne, imgTwo) => {
    let swapImgFun = function (e) {
        let tarEle = e.srcElement;
        
        if (tarEle.src === imgOne) {
            tarEle.src = imgTwo;
        } else if (tarEle.src === imgTwo) {
            tarEle.src = imgOne;
        }
    }

    return element.addEventListener("click", swapImgFun);
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/displayfuncs.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheWZ1bmNzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLFNBQVMsRUFBRSxRQUFROztBQUVyRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9kaXNwbGF5ZnVuY3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmxldCBjbGVhclRhc2tzID0gKCkgPT4ge1xuICAgIGxldCB0YXNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX2NvbnRlbnRcIik7XG4gICAgXG4gICAgcmV0dXJuIHRhc2tCb3guaW5uZXJIVE1MID0gXCJcIjtcbn1cblxubGV0IGRhdGVEaWZmSW5EYXlzID0gKGRhdGVBLCBkYXRlQikgPT4ge1xuICAgIGNvbnN0IF9NU19QRVJfREFZID0gMTAwMCAqIDYwICogNjAgKiAyNDtcbiAgICAvLyBEaXNjYXJkIHRoZSB0aW1lIGFuZCB0aW1lLXpvbmUgaW5mb3JtYXRpb24uXG4gICAgY29uc3QgdXRjMSA9IERhdGUuVVRDKGRhdGVBLmdldEZ1bGxZZWFyKCksIGRhdGVBLmdldE1vbnRoKCksIGRhdGVBLmdldERhdGUoKSk7XG4gICAgY29uc3QgdXRjMiA9IERhdGUuVVRDKGRhdGVCLmdldEZ1bGxZZWFyKCksIGRhdGVCLmdldE1vbnRoKCksIGRhdGVCLmdldERhdGUoKSk7XG4gIFxuICAgIHJldHVybiBNYXRoLmZsb29yKCh1dGMyIC0gdXRjMSkgLyBfTVNfUEVSX0RBWSk7XG59XG5cbmxldCBmaWx0ZXJUYXNrc0RheXMgPSAob2JqRGF0ZSwgb2JqVGltZSkgPT4ge1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGNvbXBhcmVEYXRlID0gbmV3IERhdGUoYCR7b2JqRGF0ZX0gJHtvYmpUaW1lfWApO1xuXG4gICAgcmV0dXJuIGRhdGVEaWZmSW5EYXlzKHRvZGF5LCBjb21wYXJlRGF0ZSk7XG59XG5cbmxldCBzaG93VG9kYXlzVGFza3MgPSAob2JqQXJyKSA9PiB7XG4gICAgbGV0IG5ld0FyciA9IFsuLi5vYmpBcnJdO1xuXG4gICAgbmV3QXJyID0gbmV3QXJyLmZpbHRlcihvYmogPT4gZmlsdGVyVGFza3NEYXlzKG9iai5kYXRlX2VudHJ5LCBvYmoudGltZV9lbnRyeSkgPCAxICYmIGZpbHRlclRhc2tzRGF5cyhvYmouZGF0ZV9lbnRyeSwgb2JqLnRpbWVfZW50cnkpID09IDApO1xuXG4gICAgcmV0dXJuIG5ld0Fycjtcbn1cblxubGV0IHNob3dXZWVrVGFza3MgPSAob2JqQXJyKSA9PiB7XG4gICAgbGV0IG5ld0FyciA9IFsuLi5vYmpBcnJdO1xuICAgIFxuICAgIFxuICAgIG5ld0FyciA9IG5ld0Fyci5maWx0ZXIob2JqID0+IGZpbHRlclRhc2tzRGF5cyhvYmouZGF0ZV9lbnRyeSwgb2JqLnRpbWVfZW50cnkpID49IDAgJiYgZmlsdGVyVGFza3NEYXlzKG9iai5kYXRlX2VudHJ5LCBvYmoudGltZV9lbnRyeSkgPCA3KTtcblxuICAgIHJldHVybiBuZXdBcnI7XG59XG5cbmxldCBzaG93TW9udGhUYXNrcyA9IChvYmpBcnIpID0+IHtcbiAgICBsZXQgbmV3QXJyID0gWy4uLm9iakFycl07XG4gICAgXG4gICAgbmV3QXJyID0gbmV3QXJyLmZpbHRlcihvYmogPT4gZmlsdGVyVGFza3NEYXlzKG9iai5kYXRlX2VudHJ5LCBvYmoudGltZV9lbnRyeSkgPCAzMCAmJiBmaWx0ZXJUYXNrc0RheXMob2JqLmRhdGVfZW50cnksIG9iai50aW1lX2VudHJ5KSA+PSAwKTtcblxuICAgIHJldHVybiBuZXdBcnI7XG59XG5cbmxldCBzaG93QWxsVGFza3MgPSAob2JqQXJyKSA9PiB7XG4gICAgcmV0dXJuIG9iakFyclxufVxuXG5sZXQgZm9ybVNob3cgPSAoKSA9PiB7XG4gICAgbGV0IGZvcm1EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX3dyYXBcIik7XG5cbiAgICBmb3JtRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgXG4gICAgcmV0dXJuO1xufVxuXG5sZXQgZm9ybUhpZGUgPSAoKSA9PiB7XG4gICAgbGV0IGZvcm1EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX3dyYXBcIik7XG5cbiAgICBmb3JtRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICByZXR1cm47XG59XG5cbmxldCBmb3JtUmVtb3ZlID0gKCkgPT4ge1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX2JveFwiKTtcblxuICAgIGZvcm0ucmVtb3ZlKCk7XG5cbiAgICByZXR1cm47XG59XG5cbmxldCBzd2FwSW1nID0gKGVsZW1lbnQsIGltZ09uZSwgaW1nVHdvKSA9PiB7XG4gICAgbGV0IHN3YXBJbWdGdW4gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgdGFyRWxlID0gZS5zcmNFbGVtZW50O1xuICAgICAgICBcbiAgICAgICAgaWYgKHRhckVsZS5zcmMgPT09IGltZ09uZSkge1xuICAgICAgICAgICAgdGFyRWxlLnNyYyA9IGltZ1R3bztcbiAgICAgICAgfSBlbHNlIGlmICh0YXJFbGUuc3JjID09PSBpbWdUd28pIHtcbiAgICAgICAgICAgIHRhckVsZS5zcmMgPSBpbWdPbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3dhcEltZ0Z1bik7XG59XG5cbmV4cG9ydCB7c3dhcEltZywgZm9ybVJlbW92ZSwgZm9ybUhpZGUsIGZvcm1TaG93LCBzaG93QWxsVGFza3MsIHNob3dNb250aFRhc2tzLCBzaG93V2Vla1Rhc2tzLCBzaG93VG9kYXlzVGFza3MsXG4gICAgY2xlYXJUYXNrcyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9