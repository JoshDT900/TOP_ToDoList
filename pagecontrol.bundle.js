"use strict";
(self["webpackChunktop_todolist"] = self["webpackChunktop_todolist"] || []).push([["pagecontrol"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Barlow', sans-serif;;\n    src: local('Barlow-Regular.ttf');\n  }\n  \n  * {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Barlow', sans-serif;\n  }\n  \n  body {\n    background-color: #FAF7F0;\n    height: 100vh;\n  }\n  \n  .main_wrap {\n    display: grid;\n    grid-template-rows: 1fr 9fr;\n    grid-template-columns: 1fr 4fr;\n    height: 100%;\n  }\n  \n  .head_page {\n    padding: 15px;\n    display: grid;\n    grid-column: 1/3;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    align-items: center;\n    background-color: #98A8F8;\n    border-bottom: solid 3px black;\n  }\n  \n  .head_page h1 {\n    grid-column: 3/4;\n    text-align: center;\n  }\n  \n  .head_page .profile_box {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    grid-column: 5/6;\n  }\n  \n  .profile_box .add_proj_btn {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 15px;\n  }\n  \n  .profile_box .add_proj_btn:hover {\n    background-color: #6a8de6;\n    border-radius: 50px;\n    position: inherit;\n  }\n  \n  .profile_box .add_proj_btn > img {\n    width: 20px;\n  }\n  \n  .side_nav {\n    background-color: #BCCEF8;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 5fr;\n    border-right: solid 3px black;\n  }\n  .side_nav .side_nav_item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-left: 20px;\n    padding-right: 10px;\n    width: 100%;\n  }\n  \n  .side_nav > div:hover {\n    background-color: #98A8F8;\n  }\n  \n  .side_nav .side_nav_footer {\n    align-self: flex-end;\n    border-bottom: none;\n    border-top: solid 1px black;  \n  }\n  \n  .side_nav > div {\n    padding: 10px;\n    border-bottom: dashed;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-start;\n  }\n  \n  .side_nav .side_nav_footer_item {\n    justify-content: space-evenly;\n  }\n  \n  .main_content {\n    display: flex;\n    flex-direction: column;\n    grid-column: 2/3;\n    grid-row: 2/3;\n    padding: 25px;\n    gap: 1rem;\n    overflow: scroll;\n  }\n  \n  .todo_item {\n    border: solid 2px black;\n    box-shadow: 5px 6px 3px 2px black;\n    border-radius: 8px;\n    padding: 5px 20px;\n    gap: 10px;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    justify-items: center;\n    align-items: center;\n    background-color: #CDFCF6;\n    flex-basis: 50px;\n    min-width: fit-content;\n  }\n  \n  .todo_item .todo_task {\n    grid-row: 1/2;\n    justify-self: flex-start;\n    font-weight: bold;\n  }\n  \n  .todo_item .todo_time {\n    grid-column: 3/4;\n  }\n  \n  .todo_item .todo_body {\n    display: none;\n  }\n  \n  .todo_item .todo_btns {\n    display: flex;\n    flex-basis: 50px;\n    justify-self: flex-end;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 20px;\n    grid-column: 5/6;\n  }\n  \n  .todo_item img,\n  .todo_item_full img {\n    width: 30px;\n    height: 30px;\n  }\n  \n  .todo_item img:hover,\n  .todo_item_full img:hover {\n    width: 35px;\n    height: 35px;\n  }\n  \n  .todo_item:hover,\n  .todo_item_full:hover {\n    background-color: #9ddfd6;\n  }\n  \n  .todo_item_full {\n    border: solid 2px black;\n    box-shadow: 5px 6px 3px 2px black;\n    border-radius: 8px;\n    padding: 5px 20px;\n    gap: 10px;\n    display: grid;\n    /* grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: 1fr 2fr 1fr; */\n    justify-items: center;\n    align-items: center;\n    background-color: #CDFCF6;\n    flex-basis: 175px;\n    min-width: fit-content;\n  }\n  \n  .todo_item_full .todo_task {\n    grid-column: 1/2;\n    grid-row: 1/2;\n    justify-self: flex-start;\n    align-self: flex-start;\n    padding-top: 10px;\n    font-weight: bold;\n  }\n  \n  .todo_item_full .todo_time {\n    grid-column: 5/6;\n    grid-row: 1/2;\n    justify-self: flex-end;\n    align-self: flex-start;\n    padding-top: 10px;\n  }\n  \n  .todo_item_full .todo_btns {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    align-self: end;\n    justify-self: flex-end;\n    grid-column: 5/6;\n    grid-row: 3/4;\n    gap: 20px;\n    height: 50px;\n  }\n  \n  .todo_item_full .todo_body {\n    grid-column: 1/5;\n    grid-row: 2/4;\n    justify-self: start;\n    align-self: end;\n    padding-bottom: 10px;\n  }\n  \n  .todo_item_full .todo_body ul {\n    display: grid;\n    grid-template-columns: 1fr 9fr 1fr 9fr 1fr 9fr;\n    gap: 15px;\n    align-items: center;\n  }\n  \n  .todo_item_full .todo_body ul input {\n    width: 15px;\n    height: 15px;\n  }\n  \n  .todo_btns_full div {\n    display: flex;\n    justify-content: center;\n    width: 35px;\n  }\n  \n  .todo_btns div {\n    display: flex;\n    justify-content: center;\n    width: 35px;\n  }\n  \n  .form_wrap {\n    position: absolute;\n    display: flex;\n    background-color: rgba(188, 206, 248, 0.7);\n    justify-self: center;\n    align-self: center;\n    width: 100%;\n    height: 100%;\n  }\n  \n  .form_wrap .form_box {\n    margin: auto;\n  }\n  \n  .form_box .add_task_form {\n    display: grid;\n    align-items: center;\n    justify-items: start;\n    background-color: rgb(152, 168, 248);\n    gap: 15px;\n    width: 399px;\n    border: 5px solid black;\n    border-radius: 15px;\n    padding: 20px;\n  }\n  \n  .add_task_form .proj_name_box {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 10px;\n    grid-column: 1/6;\n    grid-row: 1/2;\n  }\n  \n  .add_task_form .date_box {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    grid-column: 1/3;\n    grid-row: 2/3;\n  }\n  \n  .add_task_form .time_box {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    grid-column: 4/6;\n    grid-row: 2/3;\n  }\n  \n  .add_task_form .task_num_box {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n    grid-column: 1/2;\n    grid-row: 3/4;\n    margin-bottom: 20px;\n  }\n  \n  .task_num_box label {\n    grid-column: 1/3;\n  }\n  \n  .task_num_box button {\n    padding: 5px;\n    background-color: rgb(250, 247, 240);\n    font-weight: bold;\n    font-size: 14px;\n    border-style: none;\n    border-radius: 5px;\n    border: 2px solid black;\n    width: 100%;\n  }\n  \n  .add_task_form .task_box {\n    display: grid;\n    grid-template-columns: 0.5fr 1fr;\n    gap: 10px;\n    width: 100%;\n    grid-column: 1/6;\n    grid-row: 4/5;\n    align-items: center;\n  }\n  \n  .form_wrap {\n    display: none;\n  }\n  \n  .form_box input {\n    padding: 5px;\n    border-style: none;\n    border: 2px solid grey;\n    outline: none;\n  }\n  \n  .form_box button:hover {\n    background-color: black;\n    color: white;\n    border: 2px solid white;\n  }\n  \n  .form_box label {\n    font-weight: 600;\n  }\n  \n  .task_box input {\n    margin-left: auto;\n    width: 75%;\n    padding: 5px;\n  }\n  \n  .form_box input:focus:invalid {\n    border: 2px solid red;\n  }\n  \n  .form_box input:focus:valid,\n  .form_box input:valid {\n    border: 2px solid green;\n  }\n  \n  .add_task_form .submit_box {\n    display: flex;\n    justify-content: center;\n    margin-top: 25px;\n    gap: 20px;\n    width: 100%;\n    grid-column: 1/6;\n    grid-row: 5/6;\n  }\n  \n  .submit_box button {\n    padding: 5px;\n    background-color: rgb(250, 247, 240);\n    font-weight: bold;\n    font-size: 14px;\n    border-style: none;\n    border-radius: 5px;\n    border: 2px solid black;\n    width: 100%;\n  }  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Barlow', sans-serif;;\n    src: local('Barlow-Regular.ttf');\n  }\n  \n  * {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Barlow', sans-serif;\n  }\n  \n  body {\n    background-color: #FAF7F0;\n    height: 100vh;\n  }\n  \n  .main_wrap {\n    display: grid;\n    grid-template-rows: 1fr 9fr;\n    grid-template-columns: 1fr 4fr;\n    height: 100%;\n  }\n  \n  .head_page {\n    padding: 15px;\n    display: grid;\n    grid-column: 1/3;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    align-items: center;\n    background-color: #98A8F8;\n    border-bottom: solid 3px black;\n  }\n  \n  .head_page h1 {\n    grid-column: 3/4;\n    text-align: center;\n  }\n  \n  .head_page .profile_box {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    grid-column: 5/6;\n  }\n  \n  .profile_box .add_proj_btn {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 15px;\n  }\n  \n  .profile_box .add_proj_btn:hover {\n    background-color: #6a8de6;\n    border-radius: 50px;\n    position: inherit;\n  }\n  \n  .profile_box .add_proj_btn > img {\n    width: 20px;\n  }\n  \n  .side_nav {\n    background-color: #BCCEF8;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 5fr;\n    border-right: solid 3px black;\n  }\n  .side_nav .side_nav_item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-left: 20px;\n    padding-right: 10px;\n    width: 100%;\n  }\n  \n  .side_nav > div:hover {\n    background-color: #98A8F8;\n  }\n  \n  .side_nav .side_nav_footer {\n    align-self: flex-end;\n    border-bottom: none;\n    border-top: solid 1px black;  \n  }\n  \n  .side_nav > div {\n    padding: 10px;\n    border-bottom: dashed;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-start;\n  }\n  \n  .side_nav .side_nav_footer_item {\n    justify-content: space-evenly;\n  }\n  \n  .main_content {\n    display: flex;\n    flex-direction: column;\n    grid-column: 2/3;\n    grid-row: 2/3;\n    padding: 25px;\n    gap: 1rem;\n    overflow: scroll;\n  }\n  \n  .todo_item {\n    border: solid 2px black;\n    box-shadow: 5px 6px 3px 2px black;\n    border-radius: 8px;\n    padding: 5px 20px;\n    gap: 10px;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    justify-items: center;\n    align-items: center;\n    background-color: #CDFCF6;\n    flex-basis: 50px;\n    min-width: fit-content;\n  }\n  \n  .todo_item .todo_task {\n    grid-row: 1/2;\n    justify-self: flex-start;\n    font-weight: bold;\n  }\n  \n  .todo_item .todo_time {\n    grid-column: 3/4;\n  }\n  \n  .todo_item .todo_body {\n    display: none;\n  }\n  \n  .todo_item .todo_btns {\n    display: flex;\n    flex-basis: 50px;\n    justify-self: flex-end;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 20px;\n    grid-column: 5/6;\n  }\n  \n  .todo_item img,\n  .todo_item_full img {\n    width: 30px;\n    height: 30px;\n  }\n  \n  .todo_item img:hover,\n  .todo_item_full img:hover {\n    width: 35px;\n    height: 35px;\n  }\n  \n  .todo_item:hover,\n  .todo_item_full:hover {\n    background-color: #9ddfd6;\n  }\n  \n  .todo_item_full {\n    border: solid 2px black;\n    box-shadow: 5px 6px 3px 2px black;\n    border-radius: 8px;\n    padding: 5px 20px;\n    gap: 10px;\n    display: grid;\n    /* grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: 1fr 2fr 1fr; */\n    justify-items: center;\n    align-items: center;\n    background-color: #CDFCF6;\n    flex-basis: 175px;\n    min-width: fit-content;\n  }\n  \n  .todo_item_full .todo_task {\n    grid-column: 1/2;\n    grid-row: 1/2;\n    justify-self: flex-start;\n    align-self: flex-start;\n    padding-top: 10px;\n    font-weight: bold;\n  }\n  \n  .todo_item_full .todo_time {\n    grid-column: 5/6;\n    grid-row: 1/2;\n    justify-self: flex-end;\n    align-self: flex-start;\n    padding-top: 10px;\n  }\n  \n  .todo_item_full .todo_btns {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    align-self: end;\n    justify-self: flex-end;\n    grid-column: 5/6;\n    grid-row: 3/4;\n    gap: 20px;\n    height: 50px;\n  }\n  \n  .todo_item_full .todo_body {\n    grid-column: 1/5;\n    grid-row: 2/4;\n    justify-self: start;\n    align-self: end;\n    padding-bottom: 10px;\n  }\n  \n  .todo_item_full .todo_body ul {\n    display: grid;\n    grid-template-columns: 1fr 9fr 1fr 9fr 1fr 9fr;\n    gap: 15px;\n    align-items: center;\n  }\n  \n  .todo_item_full .todo_body ul input {\n    width: 15px;\n    height: 15px;\n  }\n  \n  .todo_btns_full div {\n    display: flex;\n    justify-content: center;\n    width: 35px;\n  }\n  \n  .todo_btns div {\n    display: flex;\n    justify-content: center;\n    width: 35px;\n  }\n  \n  .form_wrap {\n    position: absolute;\n    display: flex;\n    background-color: rgba(188, 206, 248, 0.7);\n    justify-self: center;\n    align-self: center;\n    width: 100%;\n    height: 100%;\n  }\n  \n  .form_wrap .form_box {\n    margin: auto;\n  }\n  \n  .form_box .add_task_form {\n    display: grid;\n    align-items: center;\n    justify-items: start;\n    background-color: rgb(152, 168, 248);\n    gap: 15px;\n    width: 399px;\n    border: 5px solid black;\n    border-radius: 15px;\n    padding: 20px;\n  }\n  \n  .add_task_form .proj_name_box {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 10px;\n    grid-column: 1/6;\n    grid-row: 1/2;\n  }\n  \n  .add_task_form .date_box {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    grid-column: 1/3;\n    grid-row: 2/3;\n  }\n  \n  .add_task_form .time_box {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    grid-column: 4/6;\n    grid-row: 2/3;\n  }\n  \n  .add_task_form .task_num_box {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n    grid-column: 1/2;\n    grid-row: 3/4;\n    margin-bottom: 20px;\n  }\n  \n  .task_num_box label {\n    grid-column: 1/3;\n  }\n  \n  .task_num_box button {\n    padding: 5px;\n    background-color: rgb(250, 247, 240);\n    font-weight: bold;\n    font-size: 14px;\n    border-style: none;\n    border-radius: 5px;\n    border: 2px solid black;\n    width: 100%;\n  }\n  \n  .add_task_form .task_box {\n    display: grid;\n    grid-template-columns: 0.5fr 1fr;\n    gap: 10px;\n    width: 100%;\n    grid-column: 1/6;\n    grid-row: 4/5;\n    align-items: center;\n  }\n  \n  .form_wrap {\n    display: none;\n  }\n  \n  .form_box input {\n    padding: 5px;\n    border-style: none;\n    border: 2px solid grey;\n    outline: none;\n  }\n  \n  .form_box button:hover {\n    background-color: black;\n    color: white;\n    border: 2px solid white;\n  }\n  \n  .form_box label {\n    font-weight: 600;\n  }\n  \n  .task_box input {\n    margin-left: auto;\n    width: 75%;\n    padding: 5px;\n  }\n  \n  .form_box input:focus:invalid {\n    border: 2px solid red;\n  }\n  \n  .form_box input:focus:valid,\n  .form_box input:valid {\n    border: 2px solid green;\n  }\n  \n  .add_task_form .submit_box {\n    display: flex;\n    justify-content: center;\n    margin-top: 25px;\n    gap: 20px;\n    width: 100%;\n    grid-column: 1/6;\n    grid-row: 5/6;\n  }\n  \n  .submit_box button {\n    padding: 5px;\n    background-color: rgb(250, 247, 240);\n    font-weight: bold;\n    font-size: 14px;\n    border-style: none;\n    border-radius: 5px;\n    border: 2px solid black;\n    width: 100%;\n  }  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images.js":
/*!***********************!*\
  !*** ./src/images.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calendarAllImg": () => (/* reexport default export from named module */ _src_imgs_event_note_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "calendarMonthImg": () => (/* reexport default export from named module */ _src_imgs_calendar_month_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "calendarTodayImg": () => (/* reexport default export from named module */ _src_imgs_calendar_today_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "calendarWeekImg": () => (/* reexport default export from named module */ _src_imgs_date_range_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "completedTaskImg": () => (/* reexport default export from named module */ _src_imgs_check_circle_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   "completedTaskImgFilled": () => (/* reexport default export from named module */ _src_imgs_check_circle_FILL1_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   "delTaskImg": () => (/* reexport default export from named module */ _src_imgs_delete_FILL1_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   "editTaskImg": () => (/* reexport default export from named module */ _src_imgs_edit_note_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   "gitLogoImg": () => (/* reexport default export from named module */ _src_imgs_GitHub_Mark_32px_png__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   "headerImgFile": () => (/* reexport default export from named module */ _src_imgs_description_FILL0_wght400_GRAD0_opsz48_1_svg__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "profileImageFile": () => (/* reexport default export from named module */ _src_imgs_person_FILL0_wght400_GRAD0_opsz48_2_svg__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "projBtnImageFile": () => (/* reexport default export from named module */ _src_imgs_add_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _src_imgs_description_FILL0_wght400_GRAD0_opsz48_1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/imgs/description_FILL0_wght400_GRAD0_opsz48 (1).svg */ "./src/imgs/description_FILL0_wght400_GRAD0_opsz48 (1).svg");
/* harmony import */ var _src_imgs_add_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/imgs/add_FILL0_wght400_GRAD0_opsz48.svg */ "./src/imgs/add_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _src_imgs_person_FILL0_wght400_GRAD0_opsz48_2_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/imgs/person_FILL0_wght400_GRAD0_opsz48 (2).svg */ "./src/imgs/person_FILL0_wght400_GRAD0_opsz48 (2).svg");
/* harmony import */ var _src_imgs_calendar_today_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/imgs/calendar_today_FILL0_wght400_GRAD0_opsz48.svg */ "./src/imgs/calendar_today_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _src_imgs_date_range_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/imgs/date_range_FILL0_wght400_GRAD0_opsz48.svg */ "./src/imgs/date_range_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _src_imgs_calendar_month_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/imgs/calendar_month_FILL0_wght400_GRAD0_opsz48.svg */ "./src/imgs/calendar_month_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _src_imgs_event_note_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/imgs/event_note_FILL0_wght400_GRAD0_opsz48.svg */ "./src/imgs/event_note_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _src_imgs_GitHub_Mark_32px_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/imgs/GitHub-Mark-32px.png */ "./src/imgs/GitHub-Mark-32px.png");
/* harmony import */ var _src_imgs_delete_FILL1_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/imgs/delete_FILL1_wght400_GRAD0_opsz48.svg */ "./src/imgs/delete_FILL1_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _src_imgs_check_circle_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/imgs/check_circle_FILL0_wght400_GRAD0_opsz48.svg */ "./src/imgs/check_circle_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _src_imgs_check_circle_FILL1_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/imgs/check_circle_FILL1_wght400_GRAD0_opsz48.svg */ "./src/imgs/check_circle_FILL1_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _src_imgs_edit_note_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/imgs/edit_note_FILL0_wght400_GRAD0_opsz48.svg */ "./src/imgs/edit_note_FILL0_wght400_GRAD0_opsz48.svg");

















/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domGenModule": () => (/* binding */ domGenModule),
/* harmony export */   "mainContBox": () => (/* binding */ mainContBox),
/* harmony export */   "testObjArr": () => (/* reexport safe */ _pagecontrol_js__WEBPACK_IMPORTED_MODULE_1__.testObjArr)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pagecontrol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagecontrol.js */ "./src/pagecontrol.js");
/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images.js */ "./src/images.js");





const domGenModule = (function() {
    let body = document.querySelector("body");

    //Method for making new elements. Accepts 3 args. First accepts a string, 2nd is either an Array, Nested Array, or String, and 3rd accepts a string.
    //2nd arg sets attributes for elements if an array or nested array, or text content if it's a string.
    //Accepts a 3rd argument only if 2nd argument isn't an array or nested array.
    const makeEle = function() {
        let argArr = [...arguments];

        if (typeof(argArr[0]) != 'string') {
            return alert("First argument must be a valid HTML element in string format. Example: 'div' ");
        }

        let newEle = document.createElement(`${argArr[0]}`)        

        if (argArr.length >= 2 && typeof(argArr[1]) === "object") {
            if(typeof(argArr[1][0]) === "object") {
                for (let i in argArr[1]){
                    let tempArr = [...argArr[1][i]];

                    newEle.setAttribute(...tempArr);
                }
            } else {
                newEle.setAttribute(...argArr[1]);
            }            
            
            if (argArr.length === 3) {
                if (typeof(argArr[2]) === 'string') {
                    newEle.textContent = argArr[2];
                } else {
                    return alert("Invalid Argument Type. The third argument must be a string");
                }
            }
        } else if (argArr.length === 2 && typeof(argArr[1]) === "string") {
            newEle.textContent = argArr[1];
            return newEle; 
        } else if (argArr.length === 1) {
            return newEle;
        } else {
            return alert("The second argument accepts an array of arrays containing 2 strings or an array of 2 strings.");
        }

        return newEle;   
    }

    return { makeEle, body };
})();

let domGenMain = () => {
    let mainWrap = domGenModule.makeEle("div", ["class", "main_wrap"]);
    domGenModule.body.appendChild(mainWrap);

    let headerEle = domGenModule.makeEle("header", ["class", "head_page"]);
    mainWrap.appendChild(headerEle);

    let sideNavEle = domGenModule.makeEle("div", ["class", "side_nav"]);
    mainWrap.appendChild(sideNavEle);

    let mainConEle = domGenModule.makeEle("div", ["class", "main_content"]);
    mainWrap.appendChild(mainConEle);

    let formWrapEle = domGenModule.makeEle("div", ["class", "form_wrap"]);
    mainWrap.appendChild(formWrapEle);    

    return mainWrap;
};

let headerEleBox= () => {
    let headerEle = document.querySelector(".head_page");

    let headImg = domGenModule.makeEle("img", [["class", "nav_logo"], ["src", _images_js__WEBPACK_IMPORTED_MODULE_2__.headerImgFile]]);
    headerEle.appendChild(headImg);

    let h1Ele = domGenModule.makeEle("h1", "My To Do List");
    headerEle.appendChild(h1Ele);

    let profBoxEle = domGenModule.makeEle("div", ["class", "profile_box"]);
    headerEle.appendChild(profBoxEle);

    return headerEle;
}

let profileBox = () => {
    let profBoxEle = document.querySelector(".profile_box");

    let projBtnEle = domGenModule.makeEle("div", ["class", "add_proj_btn"]);
    profBoxEle.appendChild(projBtnEle);

    let projBtnDiv = domGenModule.makeEle("div", "Add a new project");
    projBtnEle.appendChild(projBtnDiv);
    
    projBtnEle.addEventListener("click", _pagecontrol_js__WEBPACK_IMPORTED_MODULE_1__.formShow)
    projBtnEle.addEventListener("click", formBox)

    let projBtnImg = domGenModule.makeEle("img", [["src", _images_js__WEBPACK_IMPORTED_MODULE_2__.projBtnImageFile], ["alt", "add note icon"]]);
    projBtnEle.appendChild(projBtnImg);

    let projBtnProfile = domGenModule.makeEle("img", [["src", _images_js__WEBPACK_IMPORTED_MODULE_2__.profileImageFile], ["alt", "profile icon"]]);
    profBoxEle.appendChild(projBtnProfile);

    return profBoxEle;
}

let sideNavBox = () => {
    let sideNav = document.querySelector(".side_nav");

    let navClassArr = ["today_item", "week_item", "month_item", "all_item"];
    let navPText = ["Today's Projects", "Projects for the next 7 days", "Projects for the next 30 days", "All Projects"];
    let imgArr = [_images_js__WEBPACK_IMPORTED_MODULE_2__.calendarTodayImg, _images_js__WEBPACK_IMPORTED_MODULE_2__.calendarWeekImg, _images_js__WEBPACK_IMPORTED_MODULE_2__.calendarMonthImg, _images_js__WEBPACK_IMPORTED_MODULE_2__.calendarAllImg];

    for (let i in navClassArr) {
        let newEle = domGenModule.makeEle("div", ["class", navClassArr[i]]);

        let sideNavEle = domGenModule.makeEle("div", ["class", "side_nav_item"]);
        newEle.appendChild(sideNavEle);

        let pEle = domGenModule.makeEle("p", navPText[i]);
        sideNavEle.appendChild(pEle);

        let imgEle = domGenModule.makeEle("img", ["src", imgArr[i]]);
        sideNavEle.appendChild(imgEle);

        sideNav.appendChild(newEle);
    }

    let sideFootEle = domGenModule.makeEle("div", ["class", "side_nav_footer"]);
    let footEleItem = domGenModule.makeEle("div", ["class", "side_nav_item side_nav_footer_item"]);
    let aFootEle =  domGenModule.makeEle("a", [["href", "https://github.com/JoshDT900"], ["target", "#"]]);
    let imgFootEle = domGenModule.makeEle("img", [["src", _images_js__WEBPACK_IMPORTED_MODULE_2__.gitLogoImg], ["alt", "GitHub logo of Mark the cat"]]);
    let pFootEle = domGenModule.makeEle("p", "Created by - David T.");

    aFootEle.appendChild(imgFootEle);
    footEleItem.appendChild(aFootEle);
    footEleItem.appendChild(pFootEle);
    sideFootEle.appendChild(footEleItem);
    sideNav.appendChild(sideFootEle);

    return sideNav;
}

let formBox = () => {
    let formWrap = document.querySelector(".form_wrap")

    let formBoxEle = domGenModule.makeEle("div", ["class", "form_box"])
    let formEle = domGenModule.makeEle("form", [["class", "add_task_form"],["action", " "],["method", "post"]])    
    
    let formEleClassArr = ["proj_name_box", "date_box", "time_box", "task_num_box", "task_box", "submit_box"]

    for (let i = 0; i < formEleClassArr.length; i++) {
        let newEle = domGenModule.makeEle("div", ["class", formEleClassArr[i]])
        

        if (formEleClassArr[i] === "proj_name_box"){
            let labelEle = domGenModule.makeEle("label", ["for", "project_name"], "Project Name *")
            let inpEle = domGenModule.makeEle("input", [["type", "text"], ["id", "project_name"], ["name", "project_name"],
             ["placeholder", "My New Project"], ["minlength", "4"], ["maxlength", "30"],["required", ""]]);

            newEle.appendChild(labelEle);
            newEle.appendChild(inpEle);
                                                        
        } else if (formEleClassArr[i] === "date_box") {
            let labelEle = domGenModule.makeEle("label", ["for", "date_entry"], "Date *")
            let inpEle = domGenModule.makeEle("input", [["type", "date"], ["name", "date_entry"], ["id", "date_entry"], ["required", ""]])

            newEle.appendChild(labelEle)
            newEle.appendChild(inpEle)
        } else if (formEleClassArr[i] === "time_box") {
            let labelEle = domGenModule.makeEle("label", ["for", "time_entry"], "Time *")
            let inpEle = domGenModule.makeEle("input", [["type", "time"], ["name", "time_entry"], ["id", "time_entry"], ["required", ""]])

            newEle.appendChild(labelEle)
            newEle.appendChild(inpEle)
        } else if (formEleClassArr[i] === "task_num_box") {
            let labelEle = domGenModule.makeEle("label", ["for", "task_num"], "Number of tasks *")
            let inpEle = domGenModule.makeEle("input", [["type", "number"], ["name", "task_num"], ["id", "task_num"], ["min", "1"], ["max", "10"], ["value", "1"]])
            let btnEle = domGenModule.makeEle("button", ["type", "button"], "Confirm")

            btnEle.addEventListener("click", _pagecontrol_js__WEBPACK_IMPORTED_MODULE_1__.taskNum)

            newEle.appendChild(labelEle)
            newEle.appendChild(inpEle)
            newEle.appendChild(btnEle)
        } else if (formEleClassArr[i] === "submit_box") {
            let subBtnEle = domGenModule.makeEle("button", ["type", "submit"], "Add Project")
            let cancelBtnEle = domGenModule.makeEle("button", ["type", "button"], "Cancel")

            subBtnEle.addEventListener("click", _pagecontrol_js__WEBPACK_IMPORTED_MODULE_1__.formController)
            cancelBtnEle.addEventListener("click", () => {
                ;(0,_pagecontrol_js__WEBPACK_IMPORTED_MODULE_1__.formHide)()
                ;(0,_pagecontrol_js__WEBPACK_IMPORTED_MODULE_1__.formRemove)()
            })

            newEle.appendChild(subBtnEle)
            newEle.appendChild(cancelBtnEle)
        } else if (formEleClassArr[i] === "task_box") {
            let newTaskLabel = domGenModule.makeEle("label", `Task 1`)
            let newTaskInput = domGenModule.makeEle("input", [["type", "text"], ["name", `task_1`], ["id", `task_1`], ["required", ""]])

            newEle.appendChild(newTaskLabel)
            newEle.appendChild(newTaskInput)
        }
        
        formEle.appendChild(newEle)
    }

    formBoxEle.appendChild(formEle)
    formWrap.appendChild(formBoxEle)

    return formBoxEle;
}

//Generates DOM tasks from an array of Objects.
let mainContBox = (arr) => {
    let mainContEle = document.querySelector(".main_content");

    for (let obj of arr) {
        let todoItem = domGenModule.makeEle("div", [["class", "todo_item"], ["id", `${obj.id}`]]);
        mainContEle.appendChild(todoItem);

        (0,_pagecontrol_js__WEBPACK_IMPORTED_MODULE_1__.switchClass)(todoItem, "todo_item", "todo_item_full")
        
        let taskEle = domGenModule.makeEle("div", [["class", "todo_task"]], obj.project_name);
        todoItem.appendChild(taskEle);

        let todoBody = domGenModule.makeEle("div", ["class", "todo_body"]);
        let todoBodyList = domGenModule.makeEle("ul");

        for (let j = 0; j < obj.task_num; j++){                   
            let taskInputEle = domGenModule.makeEle("input", [["type", "checkbox"], ["name", `task_${j}`], ["id", `task_id_${j}`]]);
            let taskLabelEle =  domGenModule.makeEle("label", ["for", `task_${j}`], obj.tasks[j]);

            todoBodyList.appendChild(taskInputEle);
            todoBodyList.appendChild(taskLabelEle);
        }

        todoBody.appendChild(todoBodyList);
        todoItem.appendChild(todoBody);

        let timeEle = domGenModule.makeEle("div", ["class", "todo_time"], obj.time_entry);
        todoItem.appendChild(timeEle);

        let taskBtnBoxEle = domGenModule.makeEle("div", ["class", "todo_btns"]);
        todoItem.appendChild(taskBtnBoxEle);

        let btnImgArr = [_images_js__WEBPACK_IMPORTED_MODULE_2__.completedTaskImg, _images_js__WEBPACK_IMPORTED_MODULE_2__.editTaskImg, _images_js__WEBPACK_IMPORTED_MODULE_2__.delTaskImg];
        let btnImgAlt = ["task done button", "edit task button", "remove task button"];
        let btnClassArr = ["todo_completed", "todo_edit", "todo_delete"];
        for (let i = 0; i < btnImgArr.length; i++) {
            let newBtn = domGenModule.makeEle("div", ["class", btnClassArr[i]]);
            let btnImgEle = domGenModule.makeEle("img", [["src", btnImgArr[i]], ["alt", btnImgAlt[i]], ["class", `task_image${i}`]]);

            if (btnClassArr[i] === "todo_delete") {
                (0,_pagecontrol_js__WEBPACK_IMPORTED_MODULE_1__.taskControl)(newBtn)
            }

            (0,_pagecontrol_js__WEBPACK_IMPORTED_MODULE_1__.swapImg)(btnImgEle, _images_js__WEBPACK_IMPORTED_MODULE_2__.completedTaskImg, _images_js__WEBPACK_IMPORTED_MODULE_2__.completedTaskImgFilled)

            newBtn.appendChild(btnImgEle);
            taskBtnBoxEle.appendChild(newBtn);
        };
        
    }    

    return mainContEle;
}

(function() {    
    domGenMain();
    headerEleBox();
    profileBox();
    sideNavBox();

    mainContBox(_pagecontrol_js__WEBPACK_IMPORTED_MODULE_1__.testObjArr);
})();






/***/ }),

/***/ "./src/pagecontrol.js":
/*!****************************!*\
  !*** ./src/pagecontrol.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formController": () => (/* binding */ formController),
/* harmony export */   "formHide": () => (/* binding */ formHide),
/* harmony export */   "formRemove": () => (/* binding */ formRemove),
/* harmony export */   "formShow": () => (/* binding */ formShow),
/* harmony export */   "swapImg": () => (/* binding */ swapImg),
/* harmony export */   "switchClass": () => (/* binding */ switchClass),
/* harmony export */   "taskControl": () => (/* binding */ taskControl),
/* harmony export */   "taskNum": () => (/* binding */ taskNum),
/* harmony export */   "testObjArr": () => (/* binding */ testObjArr)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


let testObjArr = [{
    project_name: "Test Project",
    date_entry: "12/30/2022",
    time_entry: "07:30",
    task_num: "2",
    tasks: {
        0: "Take the trash out test",
        1: "Brush Teeth"
    },
    prio: 0,
    id: 0
},
{
    project_name: "Test Project",
    date_entry: "11/10/2022",
    time_entry: "07:30",
    task_num: "2",
    tasks: {
        0: "Take the trash out test",
        1: "Brush Teeth"
    },
    prio: 0,
    id: 1
}
]

const taskFactory = (formData) => {
    let project_name = formData.project_name.value;
    let date_entry = formData.date_entry.value;
    let time_entry = formData.time_entry.value;
    let task_num = formData.task_num.value;
    let tasks = {};
    let prio = 0;    
    let id = idGen(testObjArr);

    taskArr(task_num, tasks, formData)

    return { project_name, date_entry, time_entry, task_num, tasks, prio, id }
}

let taskNum = () => {
    let taskBox = document.querySelector(".task_box");
    let valueEle = document.querySelector("#task_num");

    let taskNum = valueEle.value;
    taskBox.textContent = "";

    for (let i = 0; i < taskNum; i++){
        let newTaskLabel = _index_js__WEBPACK_IMPORTED_MODULE_0__.domGenModule.makeEle("label", `Task ${i + 1}`);
        let newTaskInput = _index_js__WEBPACK_IMPORTED_MODULE_0__.domGenModule.makeEle("input", [["type", "text"], ["name", `task_${i + 1}`], ["id", `task_${i + 1}`], ["required", ""]]);

        taskBox.appendChild(newTaskLabel);
        taskBox.appendChild(newTaskInput);
    }

    return;
}

let formController = () => {
    let form = document.querySelector(".add_task_form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        newDomTask(form);
        console.log(testObjArr);
        
        formHide();
        formRemove();
    });

    return;
}

let taskControl = (taskEle) => {
    taskEle.addEventListener("click", (event) => {
        let mainElement = event.target.parentElement.parentElement.parentElement;

        removeTaskObj(mainElement.id);
        mainElement.remove();
    })

    return;
}

let taskArr = (taskNum, tasks, data) => {
    for (let i = 0; i < taskNum; i++) {
        tasks[i] = data[`task_${i + 1}`].value;
    }

    return;
}

let dateDiffInDays = (dateA, dateB) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
    const utc2 = Date.UTC(dateB.getFullYear(), dateB.getMonth(), dateB.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

let filterTasksDays = (objDate) => {
    let today = new Date();
    let compareDate = new Date(objDate);

    return dateDiffInDays(today, compareDate);
}

console.log(filterTasksDays(testObjArr[0].date_entry));

let showTasksByDate = (objArr) => {
    let newArr = objArr.filter(obj => {
        filterTasksDays(obj.date_entry) > 1;
    });
    console.log(newArr);
}

showTasksByDate(testObjArr)

let idGen = (objArr) => {
    let lastObj = objArr.slice(-1);
    
    return lastObj[0].id + 1;
}

let newDomTask = (obj) => {
    let newObj = taskFactory(obj);

    testObjArr.push(newObj);        
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.mainContBox)(testObjArr.slice(-1));

    return;
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

let removeTaskObj = (eleId) => {    
    return testObjArr = testObjArr.filter(test => test.id != eleId)   
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

let switchClass = (element, classA, classB) => {
    let switchClass = (t) => {
        if (t.srcElement.classList[0] === classA){
            t.srcElement.classList.remove(classA);
            t.srcElement.classList.add(classB);
        } else if (t.srcElement.classList[0] === classB) {
            t.srcElement.classList.remove(classB);
            t.srcElement.classList.add(classA);
        }
    }

    return element.addEventListener("click", switchClass);
}




/***/ }),

/***/ "./src/imgs/GitHub-Mark-32px.png":
/*!***************************************!*\
  !*** ./src/imgs/GitHub-Mark-32px.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0035c307a36c17babb8d.png";

/***/ }),

/***/ "./src/imgs/add_FILL0_wght400_GRAD0_opsz48.svg":
/*!*****************************************************!*\
  !*** ./src/imgs/add_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46ae0e09d1132337aa92.svg";

/***/ }),

/***/ "./src/imgs/calendar_month_FILL0_wght400_GRAD0_opsz48.svg":
/*!****************************************************************!*\
  !*** ./src/imgs/calendar_month_FILL0_wght400_GRAD0_opsz48.svg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5307428124670cee616e.svg";

/***/ }),

/***/ "./src/imgs/calendar_today_FILL0_wght400_GRAD0_opsz48.svg":
/*!****************************************************************!*\
  !*** ./src/imgs/calendar_today_FILL0_wght400_GRAD0_opsz48.svg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7bb1b24db0b61c55b8ff.svg";

/***/ }),

/***/ "./src/imgs/check_circle_FILL0_wght400_GRAD0_opsz48.svg":
/*!**************************************************************!*\
  !*** ./src/imgs/check_circle_FILL0_wght400_GRAD0_opsz48.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14bbc5f5696b9b261bfc.svg";

/***/ }),

/***/ "./src/imgs/check_circle_FILL1_wght400_GRAD0_opsz48.svg":
/*!**************************************************************!*\
  !*** ./src/imgs/check_circle_FILL1_wght400_GRAD0_opsz48.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "756d8a26e3bc5c96a2e0.svg";

/***/ }),

/***/ "./src/imgs/date_range_FILL0_wght400_GRAD0_opsz48.svg":
/*!************************************************************!*\
  !*** ./src/imgs/date_range_FILL0_wght400_GRAD0_opsz48.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7fbf4b82de02c03c144.svg";

/***/ }),

/***/ "./src/imgs/delete_FILL1_wght400_GRAD0_opsz48.svg":
/*!********************************************************!*\
  !*** ./src/imgs/delete_FILL1_wght400_GRAD0_opsz48.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "762bf58cf42fbafef635.svg";

/***/ }),

/***/ "./src/imgs/description_FILL0_wght400_GRAD0_opsz48 (1).svg":
/*!*****************************************************************!*\
  !*** ./src/imgs/description_FILL0_wght400_GRAD0_opsz48 (1).svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0de75bea90bc7148a1c1.svg";

/***/ }),

/***/ "./src/imgs/edit_note_FILL0_wght400_GRAD0_opsz48.svg":
/*!***********************************************************!*\
  !*** ./src/imgs/edit_note_FILL0_wght400_GRAD0_opsz48.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c84a8f3d534fd6301860.svg";

/***/ }),

/***/ "./src/imgs/event_note_FILL0_wght400_GRAD0_opsz48.svg":
/*!************************************************************!*\
  !*** ./src/imgs/event_note_FILL0_wght400_GRAD0_opsz48.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22de37a895c6cf7406b8.svg";

/***/ }),

/***/ "./src/imgs/person_FILL0_wght400_GRAD0_opsz48 (2).svg":
/*!************************************************************!*\
  !*** ./src/imgs/person_FILL0_wght400_GRAD0_opsz48 (2).svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "122b5faf1085d00ea03d.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pagecontrol.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZ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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNEQUFXOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9wYWdlY29udHJvbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7O1xcbiAgICBzcmM6IGxvY2FsKCdCYXJsb3ctUmVndWxhci50dGYnKTtcXG4gIH1cXG4gIFxcbiAgKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcXG4gIH1cXG4gIFxcbiAgYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUY3RjA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICB9XFxuICBcXG4gIC5tYWluX3dyYXAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgXFxuICAuaGVhZF9wYWdlIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThBOEY4O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggYmxhY2s7XFxuICB9XFxuICBcXG4gIC5oZWFkX3BhZ2UgaDEge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5oZWFkX3BhZ2UgLnByb2ZpbGVfYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiA1LzY7XFxuICB9XFxuICBcXG4gIC5wcm9maWxlX2JveCAuYWRkX3Byb2pfYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICB9XFxuICBcXG4gIC5wcm9maWxlX2JveCAuYWRkX3Byb2pfYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhOGRlNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XFxuICB9XFxuICBcXG4gIC5wcm9maWxlX2JveCAuYWRkX3Byb2pfYnRuID4gaW1nIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICB9XFxuICBcXG4gIC5zaWRlX25hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQ0NFRjg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDVmcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAzcHggYmxhY2s7XFxuICB9XFxuICAuc2lkZV9uYXYgLnNpZGVfbmF2X2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBcXG4gIC5zaWRlX25hdiA+IGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OEE4Rjg7XFxuICB9XFxuICBcXG4gIC5zaWRlX25hdiAuc2lkZV9uYXZfZm9vdGVyIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCBibGFjazsgIFxcbiAgfVxcbiAgXFxuICAuc2lkZV9uYXYgPiBkaXYge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiBkYXNoZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgfVxcbiAgXFxuICAuc2lkZV9uYXYgLnNpZGVfbmF2X2Zvb3Rlcl9pdGVtIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuICBcXG4gIC5tYWluX2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0ge1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogNXB4IDZweCAzcHggMnB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NERkNGNjtcXG4gICAgZmxleC1iYXNpczogNTBweDtcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbSAudG9kb190YXNrIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbSAudG9kb190aW1lIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbSAudG9kb19ib2R5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbSAudG9kb19idG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1iYXNpczogNTBweDtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbSBpbWcsXFxuICAudG9kb19pdGVtX2Z1bGwgaW1nIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbSBpbWc6aG92ZXIsXFxuICAudG9kb19pdGVtX2Z1bGwgaW1nOmhvdmVyIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbTpob3ZlcixcXG4gIC50b2RvX2l0ZW1fZnVsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZGRmZDY7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCB7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiA1cHggNnB4IDNweCAycHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjsgKi9cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RGQ0Y2O1xcbiAgICBmbGV4LWJhc2lzOiAxNzVweDtcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbV9mdWxsIC50b2RvX3Rhc2sge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbV9mdWxsIC50b2RvX3RpbWUge1xcbiAgICBncmlkLWNvbHVtbjogNS82O1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbV9mdWxsIC50b2RvX2J0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICBncmlkLWNvbHVtbjogNS82O1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbV9mdWxsIC50b2RvX2JvZHkge1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICBncmlkLXJvdzogMi80O1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtX2Z1bGwgLnRvZG9fYm9keSB1bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDlmciAxZnIgOWZyIDFmciA5ZnI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbV9mdWxsIC50b2RvX2JvZHkgdWwgaW5wdXQge1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgfVxcbiAgXFxuICAudG9kb19idG5zX2Z1bGwgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgfVxcbiAgXFxuICAudG9kb19idG5zIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMzVweDtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fd3JhcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODgsIDIwNiwgMjQ4LCAwLjcpO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgXFxuICAuZm9ybV93cmFwIC5mb3JtX2JveCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IC5hZGRfdGFza19mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTIsIDE2OCwgMjQ4KTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMzk5cHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgfVxcbiAgXFxuICAuYWRkX3Rhc2tfZm9ybSAucHJval9uYW1lX2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzY7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICB9XFxuICBcXG4gIC5hZGRfdGFza19mb3JtIC5kYXRlX2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gIH1cXG4gIFxcbiAgLmFkZF90YXNrX2Zvcm0gLnRpbWVfYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLWNvbHVtbjogNC82O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgfVxcbiAgXFxuICAuYWRkX3Rhc2tfZm9ybSAudGFza19udW1fYm94IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcbiAgXFxuICAudGFza19udW1fYm94IGxhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIH1cXG4gIFxcbiAgLnRhc2tfbnVtX2JveCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI0NywgMjQwKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLmFkZF90YXNrX2Zvcm0gLnRhc2tfYm94IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtY29sdW1uOiAxLzY7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5mb3JtX3dyYXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAuZm9ybV9ib3ggaW5wdXQge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgfVxcbiAgXFxuICAuZm9ybV9ib3ggbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgfVxcbiAgXFxuICAudGFza19ib3ggaW5wdXQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcbiAgXFxuICAuZm9ybV9ib3ggaW5wdXQ6Zm9jdXM6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IGlucHV0OmZvY3VzOnZhbGlkLFxcbiAgLmZvcm1fYm94IGlucHV0OnZhbGlkIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxuICB9XFxuICBcXG4gIC5hZGRfdGFza19mb3JtIC5zdWJtaXRfYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtY29sdW1uOiAxLzY7XFxuICAgIGdyaWQtcm93OiA1LzY7XFxuICB9XFxuICBcXG4gIC5zdWJtaXRfYm94IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjQ3LCAyNDApO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfSAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDhCQUE4QjtJ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Q1osdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7O0lBRUUsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmOztcXG4gICAgc3JjOiBsb2NhbCgnQmFybG93LVJlZ3VsYXIudHRmJyk7XFxuICB9XFxuICBcXG4gICoge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XFxuICB9XFxuICBcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGN0YwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgfVxcbiAgXFxuICAubWFpbl93cmFwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLmhlYWRfcGFnZSB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4QThGODtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IGJsYWNrO1xcbiAgfVxcbiAgXFxuICAuaGVhZF9wYWdlIGgxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuaGVhZF9wYWdlIC5wcm9maWxlX2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogNS82O1xcbiAgfVxcbiAgXFxuICAucHJvZmlsZV9ib3ggLmFkZF9wcm9qX2J0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgfVxcbiAgXFxuICAucHJvZmlsZV9ib3ggLmFkZF9wcm9qX2J0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YThkZTY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcbiAgfVxcbiAgXFxuICAucHJvZmlsZV9ib3ggLmFkZF9wcm9qX2J0biA+IGltZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgfVxcbiAgXFxuICAuc2lkZV9uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkNDRUY4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciA1ZnI7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgM3B4IGJsYWNrO1xcbiAgfVxcbiAgLnNpZGVfbmF2IC5zaWRlX25hdl9pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgXFxuICAuc2lkZV9uYXYgPiBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThBOEY4O1xcbiAgfVxcbiAgXFxuICAuc2lkZV9uYXYgLnNpZGVfbmF2X2Zvb3RlciB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggYmxhY2s7ICBcXG4gIH1cXG4gIFxcbiAgLnNpZGVfbmF2ID4gZGl2IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogZGFzaGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIH1cXG4gIFxcbiAgLnNpZGVfbmF2IC5zaWRlX25hdl9mb290ZXJfaXRlbSB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcbiAgXFxuICAubWFpbl9jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDVweCA2cHggM3B4IDJweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDREZDRjY7XFxuICAgIGZsZXgtYmFzaXM6IDUwcHg7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gLnRvZG9fdGFzayB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gLnRvZG9fdGltZSB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gLnRvZG9fYm9keSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gLnRvZG9fYnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtYmFzaXM6IDUwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGdyaWQtY29sdW1uOiA1LzY7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gaW1nLFxcbiAgLnRvZG9faXRlbV9mdWxsIGltZyB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gaW1nOmhvdmVyLFxcbiAgLnRvZG9faXRlbV9mdWxsIGltZzpob3ZlciB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW06aG92ZXIsXFxuICAudG9kb19pdGVtX2Z1bGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRkZmQ2O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtX2Z1bGwge1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogNXB4IDZweCAzcHggMnB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7ICovXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NERkNGNjtcXG4gICAgZmxleC1iYXNpczogMTc1cHg7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb190YXNrIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb190aW1lIHtcXG4gICAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb19idG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb19ib2R5IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbV9mdWxsIC50b2RvX2JvZHkgdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5ZnIgMWZyIDlmciAxZnIgOWZyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb19ib2R5IHVsIGlucHV0IHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9fYnRuc19mdWxsIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMzVweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9fYnRucyBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICB9XFxuICBcXG4gIC5mb3JtX3dyYXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg4LCAyMDYsIDI0OCwgMC43KTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fd3JhcCAuZm9ybV9ib3gge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCAuYWRkX3Rhc2tfZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUyLCAxNjgsIDI0OCk7XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDM5OXB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG4gIFxcbiAgLmFkZF90YXNrX2Zvcm0gLnByb2pfbmFtZV9ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgfVxcbiAgXFxuICAuYWRkX3Rhc2tfZm9ybSAuZGF0ZV9ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICB9XFxuICBcXG4gIC5hZGRfdGFza19mb3JtIC50aW1lX2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gIH1cXG4gIFxcbiAgLmFkZF90YXNrX2Zvcm0gLnRhc2tfbnVtX2JveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG4gIFxcbiAgLnRhc2tfbnVtX2JveCBsYWJlbCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICB9XFxuICBcXG4gIC50YXNrX251bV9ib3ggYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNDcsIDI0MCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBcXG4gIC5hZGRfdGFza19mb3JtIC50YXNrX2JveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuZm9ybV93cmFwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IGlucHV0IHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIH1cXG4gIFxcbiAgLnRhc2tfYm94IGlucHV0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IGlucHV0OmZvY3VzOmludmFsaWQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCBpbnB1dDpmb2N1czp2YWxpZCxcXG4gIC5mb3JtX2JveCBpbnB1dDp2YWxpZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbiAgfVxcbiAgXFxuICAuYWRkX3Rhc2tfZm9ybSAuc3VibWl0X2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogNS82O1xcbiAgfVxcbiAgXFxuICAuc3VibWl0X2JveCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI0NywgMjQwKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH0gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGhlYWRlckltZ0ZpbGUgZnJvbSBcIi4uL3NyYy9pbWdzL2Rlc2NyaXB0aW9uX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4ICgxKS5zdmdcIlxuaW1wb3J0IHByb2pCdG5JbWFnZUZpbGUgZnJvbSBcIi4uL3NyYy9pbWdzL2FkZF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmdcIlxuaW1wb3J0IHByb2ZpbGVJbWFnZUZpbGUgZnJvbSBcIi4uL3NyYy9pbWdzL3BlcnNvbl9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OCAoMikuc3ZnXCJcbmltcG9ydCBjYWxlbmRhclRvZGF5SW1nIGZyb20gXCIuLi9zcmMvaW1ncy9jYWxlbmRhcl90b2RheV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmdcIlxuaW1wb3J0IGNhbGVuZGFyV2Vla0ltZyBmcm9tIFwiLi4vc3JjL2ltZ3MvZGF0ZV9yYW5nZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmdcIlxuaW1wb3J0IGNhbGVuZGFyTW9udGhJbWcgZnJvbSBcIi4uL3NyYy9pbWdzL2NhbGVuZGFyX21vbnRoX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Z1wiXG5pbXBvcnQgY2FsZW5kYXJBbGxJbWcgZnJvbSBcIi4uL3NyYy9pbWdzL2V2ZW50X25vdGVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnXCJcbmltcG9ydCBnaXRMb2dvSW1nIGZyb20gXCIuLi9zcmMvaW1ncy9HaXRIdWItTWFyay0zMnB4LnBuZ1wiXG5pbXBvcnQgZGVsVGFza0ltZyBmcm9tIFwiLi4vc3JjL2ltZ3MvZGVsZXRlX0ZJTEwxX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Z1wiXG5pbXBvcnQgY29tcGxldGVkVGFza0ltZyBmcm9tIFwiLi4vc3JjL2ltZ3MvY2hlY2tfY2lyY2xlX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Z1wiXG5pbXBvcnQgY29tcGxldGVkVGFza0ltZ0ZpbGxlZCBmcm9tIFwiLi4vc3JjL2ltZ3MvY2hlY2tfY2lyY2xlX0ZJTEwxX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Z1wiXG5pbXBvcnQgZWRpdFRhc2tJbWcgZnJvbSBcIi4uL3NyYy9pbWdzL2VkaXRfbm90ZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmdcIlxuXG5leHBvcnQgeyBoZWFkZXJJbWdGaWxlLCBwcm9qQnRuSW1hZ2VGaWxlLCBwcm9maWxlSW1hZ2VGaWxlLCBjYWxlbmRhckFsbEltZyxcbiAgICAgICAgIGNhbGVuZGFyTW9udGhJbWcsIGNhbGVuZGFyVG9kYXlJbWcsIGNhbGVuZGFyV2Vla0ltZywgZ2l0TG9nb0ltZyxcbiAgICAgICAgZGVsVGFza0ltZywgY29tcGxldGVkVGFza0ltZywgZWRpdFRhc2tJbWcsIGNvbXBsZXRlZFRhc2tJbWdGaWxsZWQgfVxuXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGZvcm1Db250cm9sbGVyLCBzd2FwSW1nLCBzd2l0Y2hDbGFzcywgZm9ybVNob3csIGZvcm1IaWRlLCBmb3JtUmVtb3ZlLCB0YXNrTnVtLCB0YXNrQ29udHJvbCwgdGVzdE9iakFyciB9IGZyb20gJy4vcGFnZWNvbnRyb2wuanMnO1xuaW1wb3J0IHsgaGVhZGVySW1nRmlsZSwgcHJvZmlsZUltYWdlRmlsZSwgcHJvakJ0bkltYWdlRmlsZSwgY2FsZW5kYXJBbGxJbWcsXG4gICAgICAgICBjYWxlbmRhck1vbnRoSW1nLCBjYWxlbmRhclRvZGF5SW1nLCBjYWxlbmRhcldlZWtJbWcsIGdpdExvZ29JbWcsXG4gICAgICAgICBkZWxUYXNrSW1nLCBjb21wbGV0ZWRUYXNrSW1nLCBlZGl0VGFza0ltZywgY29tcGxldGVkVGFza0ltZ0ZpbGxlZCB9IGZyb20gJy4vaW1hZ2VzLmpzJ1xuXG5cbmNvbnN0IGRvbUdlbk1vZHVsZSA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gICAgLy9NZXRob2QgZm9yIG1ha2luZyBuZXcgZWxlbWVudHMuIEFjY2VwdHMgMyBhcmdzLiBGaXJzdCBhY2NlcHRzIGEgc3RyaW5nLCAybmQgaXMgZWl0aGVyIGFuIEFycmF5LCBOZXN0ZWQgQXJyYXksIG9yIFN0cmluZywgYW5kIDNyZCBhY2NlcHRzIGEgc3RyaW5nLlxuICAgIC8vMm5kIGFyZyBzZXRzIGF0dHJpYnV0ZXMgZm9yIGVsZW1lbnRzIGlmIGFuIGFycmF5IG9yIG5lc3RlZCBhcnJheSwgb3IgdGV4dCBjb250ZW50IGlmIGl0J3MgYSBzdHJpbmcuXG4gICAgLy9BY2NlcHRzIGEgM3JkIGFyZ3VtZW50IG9ubHkgaWYgMm5kIGFyZ3VtZW50IGlzbid0IGFuIGFycmF5IG9yIG5lc3RlZCBhcnJheS5cbiAgICBjb25zdCBtYWtlRWxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhcmdBcnIgPSBbLi4uYXJndW1lbnRzXTtcblxuICAgICAgICBpZiAodHlwZW9mKGFyZ0FyclswXSkgIT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIkZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSB2YWxpZCBIVE1MIGVsZW1lbnQgaW4gc3RyaW5nIGZvcm1hdC4gRXhhbXBsZTogJ2RpdicgXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7YXJnQXJyWzBdfWApICAgICAgICBcblxuICAgICAgICBpZiAoYXJnQXJyLmxlbmd0aCA+PSAyICYmIHR5cGVvZihhcmdBcnJbMV0pID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpZih0eXBlb2YoYXJnQXJyWzFdWzBdKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gYXJnQXJyWzFdKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBBcnIgPSBbLi4uYXJnQXJyWzFdW2ldXTtcblxuICAgICAgICAgICAgICAgICAgICBuZXdFbGUuc2V0QXR0cmlidXRlKC4uLnRlbXBBcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlLnNldEF0dHJpYnV0ZSguLi5hcmdBcnJbMV0pO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoYXJnQXJyLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoYXJnQXJyWzJdKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlLnRleHRDb250ZW50ID0gYXJnQXJyWzJdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGVydChcIkludmFsaWQgQXJndW1lbnQgVHlwZS4gVGhlIHRoaXJkIGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmdcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGFyZ0Fyci5sZW5ndGggPT09IDIgJiYgdHlwZW9mKGFyZ0FyclsxXSkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG5ld0VsZS50ZXh0Q29udGVudCA9IGFyZ0FyclsxXTtcbiAgICAgICAgICAgIHJldHVybiBuZXdFbGU7IFxuICAgICAgICB9IGVsc2UgaWYgKGFyZ0Fyci5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXdFbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJUaGUgc2Vjb25kIGFyZ3VtZW50IGFjY2VwdHMgYW4gYXJyYXkgb2YgYXJyYXlzIGNvbnRhaW5pbmcgMiBzdHJpbmdzIG9yIGFuIGFycmF5IG9mIDIgc3RyaW5ncy5cIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3RWxlOyAgIFxuICAgIH1cblxuICAgIHJldHVybiB7IG1ha2VFbGUsIGJvZHkgfTtcbn0pKCk7XG5cbmxldCBkb21HZW5NYWluID0gKCkgPT4ge1xuICAgIGxldCBtYWluV3JhcCA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtcImNsYXNzXCIsIFwibWFpbl93cmFwXCJdKTtcbiAgICBkb21HZW5Nb2R1bGUuYm9keS5hcHBlbmRDaGlsZChtYWluV3JhcCk7XG5cbiAgICBsZXQgaGVhZGVyRWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJoZWFkZXJcIiwgW1wiY2xhc3NcIiwgXCJoZWFkX3BhZ2VcIl0pO1xuICAgIG1haW5XcmFwLmFwcGVuZENoaWxkKGhlYWRlckVsZSk7XG5cbiAgICBsZXQgc2lkZU5hdkVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtcImNsYXNzXCIsIFwic2lkZV9uYXZcIl0pO1xuICAgIG1haW5XcmFwLmFwcGVuZENoaWxkKHNpZGVOYXZFbGUpO1xuXG4gICAgbGV0IG1haW5Db25FbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImRpdlwiLCBbXCJjbGFzc1wiLCBcIm1haW5fY29udGVudFwiXSk7XG4gICAgbWFpbldyYXAuYXBwZW5kQ2hpbGQobWFpbkNvbkVsZSk7XG5cbiAgICBsZXQgZm9ybVdyYXBFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImRpdlwiLCBbXCJjbGFzc1wiLCBcImZvcm1fd3JhcFwiXSk7XG4gICAgbWFpbldyYXAuYXBwZW5kQ2hpbGQoZm9ybVdyYXBFbGUpOyAgICBcblxuICAgIHJldHVybiBtYWluV3JhcDtcbn07XG5cbmxldCBoZWFkZXJFbGVCb3g9ICgpID0+IHtcbiAgICBsZXQgaGVhZGVyRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkX3BhZ2VcIik7XG5cbiAgICBsZXQgaGVhZEltZyA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiaW1nXCIsIFtbXCJjbGFzc1wiLCBcIm5hdl9sb2dvXCJdLCBbXCJzcmNcIiwgaGVhZGVySW1nRmlsZV1dKTtcbiAgICBoZWFkZXJFbGUuYXBwZW5kQ2hpbGQoaGVhZEltZyk7XG5cbiAgICBsZXQgaDFFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImgxXCIsIFwiTXkgVG8gRG8gTGlzdFwiKTtcbiAgICBoZWFkZXJFbGUuYXBwZW5kQ2hpbGQoaDFFbGUpO1xuXG4gICAgbGV0IHByb2ZCb3hFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImRpdlwiLCBbXCJjbGFzc1wiLCBcInByb2ZpbGVfYm94XCJdKTtcbiAgICBoZWFkZXJFbGUuYXBwZW5kQ2hpbGQocHJvZkJveEVsZSk7XG5cbiAgICByZXR1cm4gaGVhZGVyRWxlO1xufVxuXG5sZXQgcHJvZmlsZUJveCA9ICgpID0+IHtcbiAgICBsZXQgcHJvZkJveEVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9ib3hcIik7XG5cbiAgICBsZXQgcHJvakJ0bkVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtcImNsYXNzXCIsIFwiYWRkX3Byb2pfYnRuXCJdKTtcbiAgICBwcm9mQm94RWxlLmFwcGVuZENoaWxkKHByb2pCdG5FbGUpO1xuXG4gICAgbGV0IHByb2pCdG5EaXYgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImRpdlwiLCBcIkFkZCBhIG5ldyBwcm9qZWN0XCIpO1xuICAgIHByb2pCdG5FbGUuYXBwZW5kQ2hpbGQocHJvakJ0bkRpdik7XG4gICAgXG4gICAgcHJvakJ0bkVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZm9ybVNob3cpXG4gICAgcHJvakJ0bkVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZm9ybUJveClcblxuICAgIGxldCBwcm9qQnRuSW1nID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJpbWdcIiwgW1tcInNyY1wiLCBwcm9qQnRuSW1hZ2VGaWxlXSwgW1wiYWx0XCIsIFwiYWRkIG5vdGUgaWNvblwiXV0pO1xuICAgIHByb2pCdG5FbGUuYXBwZW5kQ2hpbGQocHJvakJ0bkltZyk7XG5cbiAgICBsZXQgcHJvakJ0blByb2ZpbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImltZ1wiLCBbW1wic3JjXCIsIHByb2ZpbGVJbWFnZUZpbGVdLCBbXCJhbHRcIiwgXCJwcm9maWxlIGljb25cIl1dKTtcbiAgICBwcm9mQm94RWxlLmFwcGVuZENoaWxkKHByb2pCdG5Qcm9maWxlKTtcblxuICAgIHJldHVybiBwcm9mQm94RWxlO1xufVxuXG5sZXQgc2lkZU5hdkJveCA9ICgpID0+IHtcbiAgICBsZXQgc2lkZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZV9uYXZcIik7XG5cbiAgICBsZXQgbmF2Q2xhc3NBcnIgPSBbXCJ0b2RheV9pdGVtXCIsIFwid2Vla19pdGVtXCIsIFwibW9udGhfaXRlbVwiLCBcImFsbF9pdGVtXCJdO1xuICAgIGxldCBuYXZQVGV4dCA9IFtcIlRvZGF5J3MgUHJvamVjdHNcIiwgXCJQcm9qZWN0cyBmb3IgdGhlIG5leHQgNyBkYXlzXCIsIFwiUHJvamVjdHMgZm9yIHRoZSBuZXh0IDMwIGRheXNcIiwgXCJBbGwgUHJvamVjdHNcIl07XG4gICAgbGV0IGltZ0FyciA9IFtjYWxlbmRhclRvZGF5SW1nLCBjYWxlbmRhcldlZWtJbWcsIGNhbGVuZGFyTW9udGhJbWcsIGNhbGVuZGFyQWxsSW1nXTtcblxuICAgIGZvciAobGV0IGkgaW4gbmF2Q2xhc3NBcnIpIHtcbiAgICAgICAgbGV0IG5ld0VsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtcImNsYXNzXCIsIG5hdkNsYXNzQXJyW2ldXSk7XG5cbiAgICAgICAgbGV0IHNpZGVOYXZFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImRpdlwiLCBbXCJjbGFzc1wiLCBcInNpZGVfbmF2X2l0ZW1cIl0pO1xuICAgICAgICBuZXdFbGUuYXBwZW5kQ2hpbGQoc2lkZU5hdkVsZSk7XG5cbiAgICAgICAgbGV0IHBFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcInBcIiwgbmF2UFRleHRbaV0pO1xuICAgICAgICBzaWRlTmF2RWxlLmFwcGVuZENoaWxkKHBFbGUpO1xuXG4gICAgICAgIGxldCBpbWdFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImltZ1wiLCBbXCJzcmNcIiwgaW1nQXJyW2ldXSk7XG4gICAgICAgIHNpZGVOYXZFbGUuYXBwZW5kQ2hpbGQoaW1nRWxlKTtcblxuICAgICAgICBzaWRlTmF2LmFwcGVuZENoaWxkKG5ld0VsZSk7XG4gICAgfVxuXG4gICAgbGV0IHNpZGVGb290RWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJkaXZcIiwgW1wiY2xhc3NcIiwgXCJzaWRlX25hdl9mb290ZXJcIl0pO1xuICAgIGxldCBmb290RWxlSXRlbSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtcImNsYXNzXCIsIFwic2lkZV9uYXZfaXRlbSBzaWRlX25hdl9mb290ZXJfaXRlbVwiXSk7XG4gICAgbGV0IGFGb290RWxlID0gIGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiYVwiLCBbW1wiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NoRFQ5MDBcIl0sIFtcInRhcmdldFwiLCBcIiNcIl1dKTtcbiAgICBsZXQgaW1nRm9vdEVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiaW1nXCIsIFtbXCJzcmNcIiwgZ2l0TG9nb0ltZ10sIFtcImFsdFwiLCBcIkdpdEh1YiBsb2dvIG9mIE1hcmsgdGhlIGNhdFwiXV0pO1xuICAgIGxldCBwRm9vdEVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwicFwiLCBcIkNyZWF0ZWQgYnkgLSBEYXZpZCBULlwiKTtcblxuICAgIGFGb290RWxlLmFwcGVuZENoaWxkKGltZ0Zvb3RFbGUpO1xuICAgIGZvb3RFbGVJdGVtLmFwcGVuZENoaWxkKGFGb290RWxlKTtcbiAgICBmb290RWxlSXRlbS5hcHBlbmRDaGlsZChwRm9vdEVsZSk7XG4gICAgc2lkZUZvb3RFbGUuYXBwZW5kQ2hpbGQoZm9vdEVsZUl0ZW0pO1xuICAgIHNpZGVOYXYuYXBwZW5kQ2hpbGQoc2lkZUZvb3RFbGUpO1xuXG4gICAgcmV0dXJuIHNpZGVOYXY7XG59XG5cbmxldCBmb3JtQm94ID0gKCkgPT4ge1xuICAgIGxldCBmb3JtV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV93cmFwXCIpXG5cbiAgICBsZXQgZm9ybUJveEVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtcImNsYXNzXCIsIFwiZm9ybV9ib3hcIl0pXG4gICAgbGV0IGZvcm1FbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImZvcm1cIiwgW1tcImNsYXNzXCIsIFwiYWRkX3Rhc2tfZm9ybVwiXSxbXCJhY3Rpb25cIiwgXCIgXCJdLFtcIm1ldGhvZFwiLCBcInBvc3RcIl1dKSAgICBcbiAgICBcbiAgICBsZXQgZm9ybUVsZUNsYXNzQXJyID0gW1wicHJval9uYW1lX2JveFwiLCBcImRhdGVfYm94XCIsIFwidGltZV9ib3hcIiwgXCJ0YXNrX251bV9ib3hcIiwgXCJ0YXNrX2JveFwiLCBcInN1Ym1pdF9ib3hcIl1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUVsZUNsYXNzQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuZXdFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImRpdlwiLCBbXCJjbGFzc1wiLCBmb3JtRWxlQ2xhc3NBcnJbaV1dKVxuICAgICAgICBcblxuICAgICAgICBpZiAoZm9ybUVsZUNsYXNzQXJyW2ldID09PSBcInByb2pfbmFtZV9ib3hcIil7XG4gICAgICAgICAgICBsZXQgbGFiZWxFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImxhYmVsXCIsIFtcImZvclwiLCBcInByb2plY3RfbmFtZVwiXSwgXCJQcm9qZWN0IE5hbWUgKlwiKVxuICAgICAgICAgICAgbGV0IGlucEVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiaW5wdXRcIiwgW1tcInR5cGVcIiwgXCJ0ZXh0XCJdLCBbXCJpZFwiLCBcInByb2plY3RfbmFtZVwiXSwgW1wibmFtZVwiLCBcInByb2plY3RfbmFtZVwiXSxcbiAgICAgICAgICAgICBbXCJwbGFjZWhvbGRlclwiLCBcIk15IE5ldyBQcm9qZWN0XCJdLCBbXCJtaW5sZW5ndGhcIiwgXCI0XCJdLCBbXCJtYXhsZW5ndGhcIiwgXCIzMFwiXSxbXCJyZXF1aXJlZFwiLCBcIlwiXV0pO1xuXG4gICAgICAgICAgICBuZXdFbGUuYXBwZW5kQ2hpbGQobGFiZWxFbGUpO1xuICAgICAgICAgICAgbmV3RWxlLmFwcGVuZENoaWxkKGlucEVsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKGZvcm1FbGVDbGFzc0FycltpXSA9PT0gXCJkYXRlX2JveFwiKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImxhYmVsXCIsIFtcImZvclwiLCBcImRhdGVfZW50cnlcIl0sIFwiRGF0ZSAqXCIpXG4gICAgICAgICAgICBsZXQgaW5wRWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJpbnB1dFwiLCBbW1widHlwZVwiLCBcImRhdGVcIl0sIFtcIm5hbWVcIiwgXCJkYXRlX2VudHJ5XCJdLCBbXCJpZFwiLCBcImRhdGVfZW50cnlcIl0sIFtcInJlcXVpcmVkXCIsIFwiXCJdXSlcblxuICAgICAgICAgICAgbmV3RWxlLmFwcGVuZENoaWxkKGxhYmVsRWxlKVxuICAgICAgICAgICAgbmV3RWxlLmFwcGVuZENoaWxkKGlucEVsZSlcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtRWxlQ2xhc3NBcnJbaV0gPT09IFwidGltZV9ib3hcIikge1xuICAgICAgICAgICAgbGV0IGxhYmVsRWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJsYWJlbFwiLCBbXCJmb3JcIiwgXCJ0aW1lX2VudHJ5XCJdLCBcIlRpbWUgKlwiKVxuICAgICAgICAgICAgbGV0IGlucEVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiaW5wdXRcIiwgW1tcInR5cGVcIiwgXCJ0aW1lXCJdLCBbXCJuYW1lXCIsIFwidGltZV9lbnRyeVwiXSwgW1wiaWRcIiwgXCJ0aW1lX2VudHJ5XCJdLCBbXCJyZXF1aXJlZFwiLCBcIlwiXV0pXG5cbiAgICAgICAgICAgIG5ld0VsZS5hcHBlbmRDaGlsZChsYWJlbEVsZSlcbiAgICAgICAgICAgIG5ld0VsZS5hcHBlbmRDaGlsZChpbnBFbGUpXG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybUVsZUNsYXNzQXJyW2ldID09PSBcInRhc2tfbnVtX2JveFwiKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImxhYmVsXCIsIFtcImZvclwiLCBcInRhc2tfbnVtXCJdLCBcIk51bWJlciBvZiB0YXNrcyAqXCIpXG4gICAgICAgICAgICBsZXQgaW5wRWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJpbnB1dFwiLCBbW1widHlwZVwiLCBcIm51bWJlclwiXSwgW1wibmFtZVwiLCBcInRhc2tfbnVtXCJdLCBbXCJpZFwiLCBcInRhc2tfbnVtXCJdLCBbXCJtaW5cIiwgXCIxXCJdLCBbXCJtYXhcIiwgXCIxMFwiXSwgW1widmFsdWVcIiwgXCIxXCJdXSlcbiAgICAgICAgICAgIGxldCBidG5FbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImJ1dHRvblwiLCBbXCJ0eXBlXCIsIFwiYnV0dG9uXCJdLCBcIkNvbmZpcm1cIilcblxuICAgICAgICAgICAgYnRuRWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrTnVtKVxuXG4gICAgICAgICAgICBuZXdFbGUuYXBwZW5kQ2hpbGQobGFiZWxFbGUpXG4gICAgICAgICAgICBuZXdFbGUuYXBwZW5kQ2hpbGQoaW5wRWxlKVxuICAgICAgICAgICAgbmV3RWxlLmFwcGVuZENoaWxkKGJ0bkVsZSlcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtRWxlQ2xhc3NBcnJbaV0gPT09IFwic3VibWl0X2JveFwiKSB7XG4gICAgICAgICAgICBsZXQgc3ViQnRuRWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJidXR0b25cIiwgW1widHlwZVwiLCBcInN1Ym1pdFwiXSwgXCJBZGQgUHJvamVjdFwiKVxuICAgICAgICAgICAgbGV0IGNhbmNlbEJ0bkVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiYnV0dG9uXCIsIFtcInR5cGVcIiwgXCJidXR0b25cIl0sIFwiQ2FuY2VsXCIpXG5cbiAgICAgICAgICAgIHN1YkJ0bkVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZm9ybUNvbnRyb2xsZXIpXG4gICAgICAgICAgICBjYW5jZWxCdG5FbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtSGlkZSgpXG4gICAgICAgICAgICAgICAgZm9ybVJlbW92ZSgpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBuZXdFbGUuYXBwZW5kQ2hpbGQoc3ViQnRuRWxlKVxuICAgICAgICAgICAgbmV3RWxlLmFwcGVuZENoaWxkKGNhbmNlbEJ0bkVsZSlcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtRWxlQ2xhc3NBcnJbaV0gPT09IFwidGFza19ib3hcIikge1xuICAgICAgICAgICAgbGV0IG5ld1Rhc2tMYWJlbCA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwibGFiZWxcIiwgYFRhc2sgMWApXG4gICAgICAgICAgICBsZXQgbmV3VGFza0lucHV0ID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJpbnB1dFwiLCBbW1widHlwZVwiLCBcInRleHRcIl0sIFtcIm5hbWVcIiwgYHRhc2tfMWBdLCBbXCJpZFwiLCBgdGFza18xYF0sIFtcInJlcXVpcmVkXCIsIFwiXCJdXSlcblxuICAgICAgICAgICAgbmV3RWxlLmFwcGVuZENoaWxkKG5ld1Rhc2tMYWJlbClcbiAgICAgICAgICAgIG5ld0VsZS5hcHBlbmRDaGlsZChuZXdUYXNrSW5wdXQpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvcm1FbGUuYXBwZW5kQ2hpbGQobmV3RWxlKVxuICAgIH1cblxuICAgIGZvcm1Cb3hFbGUuYXBwZW5kQ2hpbGQoZm9ybUVsZSlcbiAgICBmb3JtV3JhcC5hcHBlbmRDaGlsZChmb3JtQm94RWxlKVxuXG4gICAgcmV0dXJuIGZvcm1Cb3hFbGU7XG59XG5cbi8vR2VuZXJhdGVzIERPTSB0YXNrcyBmcm9tIGFuIGFycmF5IG9mIE9iamVjdHMuXG5sZXQgbWFpbkNvbnRCb3ggPSAoYXJyKSA9PiB7XG4gICAgbGV0IG1haW5Db250RWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX2NvbnRlbnRcIik7XG5cbiAgICBmb3IgKGxldCBvYmogb2YgYXJyKSB7XG4gICAgICAgIGxldCB0b2RvSXRlbSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtbXCJjbGFzc1wiLCBcInRvZG9faXRlbVwiXSwgW1wiaWRcIiwgYCR7b2JqLmlkfWBdXSk7XG4gICAgICAgIG1haW5Db250RWxlLmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcblxuICAgICAgICBzd2l0Y2hDbGFzcyh0b2RvSXRlbSwgXCJ0b2RvX2l0ZW1cIiwgXCJ0b2RvX2l0ZW1fZnVsbFwiKVxuICAgICAgICBcbiAgICAgICAgbGV0IHRhc2tFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImRpdlwiLCBbW1wiY2xhc3NcIiwgXCJ0b2RvX3Rhc2tcIl1dLCBvYmoucHJvamVjdF9uYW1lKTtcbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodGFza0VsZSk7XG5cbiAgICAgICAgbGV0IHRvZG9Cb2R5ID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJkaXZcIiwgW1wiY2xhc3NcIiwgXCJ0b2RvX2JvZHlcIl0pO1xuICAgICAgICBsZXQgdG9kb0JvZHlMaXN0ID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJ1bFwiKTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9iai50YXNrX251bTsgaisrKXsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdGFza0lucHV0RWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJpbnB1dFwiLCBbW1widHlwZVwiLCBcImNoZWNrYm94XCJdLCBbXCJuYW1lXCIsIGB0YXNrXyR7an1gXSwgW1wiaWRcIiwgYHRhc2tfaWRfJHtqfWBdXSk7XG4gICAgICAgICAgICBsZXQgdGFza0xhYmVsRWxlID0gIGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwibGFiZWxcIiwgW1wiZm9yXCIsIGB0YXNrXyR7an1gXSwgb2JqLnRhc2tzW2pdKTtcblxuICAgICAgICAgICAgdG9kb0JvZHlMaXN0LmFwcGVuZENoaWxkKHRhc2tJbnB1dEVsZSk7XG4gICAgICAgICAgICB0b2RvQm9keUxpc3QuYXBwZW5kQ2hpbGQodGFza0xhYmVsRWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZG9Cb2R5LmFwcGVuZENoaWxkKHRvZG9Cb2R5TGlzdCk7XG4gICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9Cb2R5KTtcblxuICAgICAgICBsZXQgdGltZUVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtcImNsYXNzXCIsIFwidG9kb190aW1lXCJdLCBvYmoudGltZV9lbnRyeSk7XG4gICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRpbWVFbGUpO1xuXG4gICAgICAgIGxldCB0YXNrQnRuQm94RWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJkaXZcIiwgW1wiY2xhc3NcIiwgXCJ0b2RvX2J0bnNcIl0pO1xuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0YXNrQnRuQm94RWxlKTtcblxuICAgICAgICBsZXQgYnRuSW1nQXJyID0gW2NvbXBsZXRlZFRhc2tJbWcsIGVkaXRUYXNrSW1nLCBkZWxUYXNrSW1nXTtcbiAgICAgICAgbGV0IGJ0bkltZ0FsdCA9IFtcInRhc2sgZG9uZSBidXR0b25cIiwgXCJlZGl0IHRhc2sgYnV0dG9uXCIsIFwicmVtb3ZlIHRhc2sgYnV0dG9uXCJdO1xuICAgICAgICBsZXQgYnRuQ2xhc3NBcnIgPSBbXCJ0b2RvX2NvbXBsZXRlZFwiLCBcInRvZG9fZWRpdFwiLCBcInRvZG9fZGVsZXRlXCJdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ0bkltZ0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5ld0J0biA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtcImNsYXNzXCIsIGJ0bkNsYXNzQXJyW2ldXSk7XG4gICAgICAgICAgICBsZXQgYnRuSW1nRWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJpbWdcIiwgW1tcInNyY1wiLCBidG5JbWdBcnJbaV1dLCBbXCJhbHRcIiwgYnRuSW1nQWx0W2ldXSwgW1wiY2xhc3NcIiwgYHRhc2tfaW1hZ2Uke2l9YF1dKTtcblxuICAgICAgICAgICAgaWYgKGJ0bkNsYXNzQXJyW2ldID09PSBcInRvZG9fZGVsZXRlXCIpIHtcbiAgICAgICAgICAgICAgICB0YXNrQ29udHJvbChuZXdCdG4pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3YXBJbWcoYnRuSW1nRWxlLCBjb21wbGV0ZWRUYXNrSW1nLCBjb21wbGV0ZWRUYXNrSW1nRmlsbGVkKVxuXG4gICAgICAgICAgICBuZXdCdG4uYXBwZW5kQ2hpbGQoYnRuSW1nRWxlKTtcbiAgICAgICAgICAgIHRhc2tCdG5Cb3hFbGUuYXBwZW5kQ2hpbGQobmV3QnRuKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfSAgICBcblxuICAgIHJldHVybiBtYWluQ29udEVsZTtcbn1cblxuKGZ1bmN0aW9uKCkgeyAgICBcbiAgICBkb21HZW5NYWluKCk7XG4gICAgaGVhZGVyRWxlQm94KCk7XG4gICAgcHJvZmlsZUJveCgpO1xuICAgIHNpZGVOYXZCb3goKTtcblxuICAgIG1haW5Db250Qm94KHRlc3RPYmpBcnIpO1xufSkoKTtcblxuXG5leHBvcnQgeyBkb21HZW5Nb2R1bGUsIHRlc3RPYmpBcnIsIG1haW5Db250Qm94IH1cblxuIiwiaW1wb3J0IHsgZG9tR2VuTW9kdWxlLCBtYWluQ29udEJveCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmxldCB0ZXN0T2JqQXJyID0gW3tcbiAgICBwcm9qZWN0X25hbWU6IFwiVGVzdCBQcm9qZWN0XCIsXG4gICAgZGF0ZV9lbnRyeTogXCIxMi8zMC8yMDIyXCIsXG4gICAgdGltZV9lbnRyeTogXCIwNzozMFwiLFxuICAgIHRhc2tfbnVtOiBcIjJcIixcbiAgICB0YXNrczoge1xuICAgICAgICAwOiBcIlRha2UgdGhlIHRyYXNoIG91dCB0ZXN0XCIsXG4gICAgICAgIDE6IFwiQnJ1c2ggVGVldGhcIlxuICAgIH0sXG4gICAgcHJpbzogMCxcbiAgICBpZDogMFxufSxcbntcbiAgICBwcm9qZWN0X25hbWU6IFwiVGVzdCBQcm9qZWN0XCIsXG4gICAgZGF0ZV9lbnRyeTogXCIxMS8xMC8yMDIyXCIsXG4gICAgdGltZV9lbnRyeTogXCIwNzozMFwiLFxuICAgIHRhc2tfbnVtOiBcIjJcIixcbiAgICB0YXNrczoge1xuICAgICAgICAwOiBcIlRha2UgdGhlIHRyYXNoIG91dCB0ZXN0XCIsXG4gICAgICAgIDE6IFwiQnJ1c2ggVGVldGhcIlxuICAgIH0sXG4gICAgcHJpbzogMCxcbiAgICBpZDogMVxufVxuXVxuXG5jb25zdCB0YXNrRmFjdG9yeSA9IChmb3JtRGF0YSkgPT4ge1xuICAgIGxldCBwcm9qZWN0X25hbWUgPSBmb3JtRGF0YS5wcm9qZWN0X25hbWUudmFsdWU7XG4gICAgbGV0IGRhdGVfZW50cnkgPSBmb3JtRGF0YS5kYXRlX2VudHJ5LnZhbHVlO1xuICAgIGxldCB0aW1lX2VudHJ5ID0gZm9ybURhdGEudGltZV9lbnRyeS52YWx1ZTtcbiAgICBsZXQgdGFza19udW0gPSBmb3JtRGF0YS50YXNrX251bS52YWx1ZTtcbiAgICBsZXQgdGFza3MgPSB7fTtcbiAgICBsZXQgcHJpbyA9IDA7ICAgIFxuICAgIGxldCBpZCA9IGlkR2VuKHRlc3RPYmpBcnIpO1xuXG4gICAgdGFza0Fycih0YXNrX251bSwgdGFza3MsIGZvcm1EYXRhKVxuXG4gICAgcmV0dXJuIHsgcHJvamVjdF9uYW1lLCBkYXRlX2VudHJ5LCB0aW1lX2VudHJ5LCB0YXNrX251bSwgdGFza3MsIHByaW8sIGlkIH1cbn1cblxubGV0IHRhc2tOdW0gPSAoKSA9PiB7XG4gICAgbGV0IHRhc2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tfYm94XCIpO1xuICAgIGxldCB2YWx1ZUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza19udW1cIik7XG5cbiAgICBsZXQgdGFza051bSA9IHZhbHVlRWxlLnZhbHVlO1xuICAgIHRhc2tCb3gudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTnVtOyBpKyspe1xuICAgICAgICBsZXQgbmV3VGFza0xhYmVsID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJsYWJlbFwiLCBgVGFzayAke2kgKyAxfWApO1xuICAgICAgICBsZXQgbmV3VGFza0lucHV0ID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJpbnB1dFwiLCBbW1widHlwZVwiLCBcInRleHRcIl0sIFtcIm5hbWVcIiwgYHRhc2tfJHtpICsgMX1gXSwgW1wiaWRcIiwgYHRhc2tfJHtpICsgMX1gXSwgW1wicmVxdWlyZWRcIiwgXCJcIl1dKTtcblxuICAgICAgICB0YXNrQm94LmFwcGVuZENoaWxkKG5ld1Rhc2tMYWJlbCk7XG4gICAgICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQobmV3VGFza0lucHV0KTtcbiAgICB9XG5cbiAgICByZXR1cm47XG59XG5cbmxldCBmb3JtQ29udHJvbGxlciA9ICgpID0+IHtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkX3Rhc2tfZm9ybVwiKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBuZXdEb21UYXNrKGZvcm0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZXN0T2JqQXJyKTtcbiAgICAgICAgXG4gICAgICAgIGZvcm1IaWRlKCk7XG4gICAgICAgIGZvcm1SZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybjtcbn1cblxubGV0IHRhc2tDb250cm9sID0gKHRhc2tFbGUpID0+IHtcbiAgICB0YXNrRWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IG1haW5FbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIHJlbW92ZVRhc2tPYmoobWFpbkVsZW1lbnQuaWQpO1xuICAgICAgICBtYWluRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuO1xufVxuXG5sZXQgdGFza0FyciA9ICh0YXNrTnVtLCB0YXNrcywgZGF0YSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza051bTsgaSsrKSB7XG4gICAgICAgIHRhc2tzW2ldID0gZGF0YVtgdGFza18ke2kgKyAxfWBdLnZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybjtcbn1cblxubGV0IGRhdGVEaWZmSW5EYXlzID0gKGRhdGVBLCBkYXRlQikgPT4ge1xuICAgIGNvbnN0IF9NU19QRVJfREFZID0gMTAwMCAqIDYwICogNjAgKiAyNDtcbiAgICAvLyBEaXNjYXJkIHRoZSB0aW1lIGFuZCB0aW1lLXpvbmUgaW5mb3JtYXRpb24uXG4gICAgY29uc3QgdXRjMSA9IERhdGUuVVRDKGRhdGVBLmdldEZ1bGxZZWFyKCksIGRhdGVBLmdldE1vbnRoKCksIGRhdGVBLmdldERhdGUoKSk7XG4gICAgY29uc3QgdXRjMiA9IERhdGUuVVRDKGRhdGVCLmdldEZ1bGxZZWFyKCksIGRhdGVCLmdldE1vbnRoKCksIGRhdGVCLmdldERhdGUoKSk7XG4gIFxuICAgIHJldHVybiBNYXRoLmZsb29yKCh1dGMyIC0gdXRjMSkgLyBfTVNfUEVSX0RBWSk7XG59XG5cbmxldCBmaWx0ZXJUYXNrc0RheXMgPSAob2JqRGF0ZSkgPT4ge1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGNvbXBhcmVEYXRlID0gbmV3IERhdGUob2JqRGF0ZSk7XG5cbiAgICByZXR1cm4gZGF0ZURpZmZJbkRheXModG9kYXksIGNvbXBhcmVEYXRlKTtcbn1cblxuY29uc29sZS5sb2coZmlsdGVyVGFza3NEYXlzKHRlc3RPYmpBcnJbMF0uZGF0ZV9lbnRyeSkpO1xuXG5sZXQgc2hvd1Rhc2tzQnlEYXRlID0gKG9iakFycikgPT4ge1xuICAgIGxldCBuZXdBcnIgPSBvYmpBcnIuZmlsdGVyKG9iaiA9PiB7XG4gICAgICAgIGZpbHRlclRhc2tzRGF5cyhvYmouZGF0ZV9lbnRyeSkgPiAxO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKG5ld0Fycik7XG59XG5cbnNob3dUYXNrc0J5RGF0ZSh0ZXN0T2JqQXJyKVxuXG5sZXQgaWRHZW4gPSAob2JqQXJyKSA9PiB7XG4gICAgbGV0IGxhc3RPYmogPSBvYmpBcnIuc2xpY2UoLTEpO1xuICAgIFxuICAgIHJldHVybiBsYXN0T2JqWzBdLmlkICsgMTtcbn1cblxubGV0IG5ld0RvbVRhc2sgPSAob2JqKSA9PiB7XG4gICAgbGV0IG5ld09iaiA9IHRhc2tGYWN0b3J5KG9iaik7XG5cbiAgICB0ZXN0T2JqQXJyLnB1c2gobmV3T2JqKTsgICAgICAgIFxuICAgIG1haW5Db250Qm94KHRlc3RPYmpBcnIuc2xpY2UoLTEpKTtcblxuICAgIHJldHVybjtcbn1cblxubGV0IGZvcm1TaG93ID0gKCkgPT4ge1xuICAgIGxldCBmb3JtRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV93cmFwXCIpO1xuXG4gICAgZm9ybURpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIFxuICAgIHJldHVybjtcbn1cblxubGV0IGZvcm1IaWRlID0gKCkgPT4ge1xuICAgIGxldCBmb3JtRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV93cmFwXCIpO1xuXG4gICAgZm9ybURpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgcmV0dXJuO1xufVxuXG5sZXQgZm9ybVJlbW92ZSA9ICgpID0+IHtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9ib3hcIik7XG5cbiAgICBmb3JtLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuO1xufVxuXG5sZXQgcmVtb3ZlVGFza09iaiA9IChlbGVJZCkgPT4geyAgICBcbiAgICByZXR1cm4gdGVzdE9iakFyciA9IHRlc3RPYmpBcnIuZmlsdGVyKHRlc3QgPT4gdGVzdC5pZCAhPSBlbGVJZCkgICBcbn1cblxubGV0IHN3YXBJbWcgPSAoZWxlbWVudCwgaW1nT25lLCBpbWdUd28pID0+IHtcbiAgICBsZXQgc3dhcEltZ0Z1biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCB0YXJFbGUgPSBlLnNyY0VsZW1lbnQ7XG4gICAgICAgIFxuICAgICAgICBpZiAodGFyRWxlLnNyYyA9PT0gaW1nT25lKSB7XG4gICAgICAgICAgICB0YXJFbGUuc3JjID0gaW1nVHdvO1xuICAgICAgICB9IGVsc2UgaWYgKHRhckVsZS5zcmMgPT09IGltZ1R3bykge1xuICAgICAgICAgICAgdGFyRWxlLnNyYyA9IGltZ09uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2FwSW1nRnVuKTtcbn1cblxubGV0IHN3aXRjaENsYXNzID0gKGVsZW1lbnQsIGNsYXNzQSwgY2xhc3NCKSA9PiB7XG4gICAgbGV0IHN3aXRjaENsYXNzID0gKHQpID0+IHtcbiAgICAgICAgaWYgKHQuc3JjRWxlbWVudC5jbGFzc0xpc3RbMF0gPT09IGNsYXNzQSl7XG4gICAgICAgICAgICB0LnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc0EpO1xuICAgICAgICAgICAgdC5zcmNFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NCKTtcbiAgICAgICAgfSBlbHNlIGlmICh0LnNyY0VsZW1lbnQuY2xhc3NMaXN0WzBdID09PSBjbGFzc0IpIHtcbiAgICAgICAgICAgIHQuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzQik7XG4gICAgICAgICAgICB0LnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc0EpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaENsYXNzKTtcbn1cblxuXG5leHBvcnQgeyBmb3JtQ29udHJvbGxlciwgc3dhcEltZywgc3dpdGNoQ2xhc3MsIGZvcm1TaG93LCBmb3JtSGlkZSwgZm9ybVJlbW92ZSwgdGFza051bSwgdGFza0NvbnRyb2wsIHRlc3RPYmpBcnIgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=