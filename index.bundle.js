"use strict";
(self["webpackChunktop_todolist"] = self["webpackChunktop_todolist"] || []).push([["index"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Barlow', sans-serif;;\n    src: local('Barlow-Regular.ttf');\n  }\n  \n  * {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Barlow', sans-serif;\n  }\n  \n  body {\n    background-color: #FAF7F0;\n    height: 100vh;\n  }\n  \n  .main_wrap {\n    display: grid;\n    grid-template-rows: 1fr 9fr;\n    grid-template-columns: 1fr 4fr;\n    height: 100%;\n  }\n  \n  .head_page {\n    padding: 15px;\n    display: grid;\n    grid-column: 1/3;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    align-items: center;\n    background-color: #98A8F8;\n    border-bottom: solid 3px black;\n  }\n  \n  .head_page h1 {\n    grid-column: 3/4;\n    text-align: center;\n  }\n  \n  .head_page .profile_box {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    grid-column: 5/6;\n  }\n  \n  .profile_box .add_proj_btn {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 15px;\n  }\n  \n  .profile_box .add_proj_btn:hover {\n    background-color: #6a8de6;\n    border-radius: 50px;\n    position: inherit;\n  }\n  \n  .profile_box .add_proj_btn > img {\n    width: 20px;\n  }\n  \n  .side_nav {\n    background-color: #BCCEF8;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 5fr;\n    border-right: solid 3px black;\n  }\n  .side_nav .side_nav_item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-left: 20px;\n    padding-right: 10px;\n    width: 100%;\n  }\n  \n  .side_nav > div:hover {\n    background-color: #98A8F8;\n  }\n  \n  .side_nav .side_nav_footer {\n    align-self: flex-end;\n    border-bottom: none;\n    border-top: solid 1px black;  \n  }\n  \n  .side_nav > div {\n    padding: 10px;\n    border-bottom: dashed;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-start;\n  }\n  \n  .side_nav .side_nav_footer_item {\n    justify-content: space-evenly;\n  }\n  \n  .main_content {\n    display: flex;\n    flex-direction: column;\n    grid-column: 2/3;\n    grid-row: 2/3;\n    padding: 25px;\n    gap: 1rem;\n    overflow: scroll;\n  }\n  \n  .todo_item {\n    border: solid 2px black;\n    box-shadow: 5px 6px 3px 2px black;\n    border-radius: 8px;\n    padding: 5px 20px;\n    gap: 10px;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    justify-items: center;\n    align-items: center;\n    background-color: #CDFCF6;\n    flex-basis: 50px;\n    min-width: fit-content;\n  }\n  \n  .todo_item .todo_task {\n    grid-row: 1/2;\n    justify-self: flex-start;\n    font-weight: bold;\n  }\n  \n  .todo_item .todo_time {\n    grid-column: 3/4;\n  }\n  \n  .todo_item .todo_body {\n    display: none;\n  }\n  \n  .todo_item .todo_btns {\n    display: flex;\n    flex-basis: 50px;\n    justify-self: flex-end;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 20px;\n    grid-column: 5/6;\n  }\n  \n  .todo_item img,\n  .todo_item_full img {\n    width: 30px;\n    height: 30px;\n  }\n  \n  .todo_item img:hover,\n  .todo_item_full img:hover {\n    width: 35px;\n    height: 35px;\n  }\n  \n  .todo_item:hover,\n  .todo_item_full:hover {\n    background-color: #9ddfd6;\n  }\n  \n  .todo_item_full {\n    border: solid 2px black;\n    box-shadow: 5px 6px 3px 2px black;\n    border-radius: 8px;\n    padding: 5px 20px;\n    gap: 10px;\n    display: grid;\n    /* grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: 1fr 2fr 1fr; */\n    justify-items: center;\n    align-items: center;\n    background-color: #CDFCF6;\n    flex-basis: 175px;\n    min-width: fit-content;\n  }\n  \n  .todo_item_full .todo_task {\n    grid-column: 1/2;\n    grid-row: 1/2;\n    justify-self: flex-start;\n    align-self: flex-start;\n    padding-top: 10px;\n    font-weight: bold;\n  }\n  \n  .todo_item_full .todo_time {\n    grid-column: 5/6;\n    grid-row: 1/2;\n    justify-self: flex-end;\n    align-self: flex-start;\n    padding-top: 10px;\n  }\n  \n  .todo_item_full .todo_btns {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    align-self: end;\n    justify-self: flex-end;\n    grid-column: 5/6;\n    grid-row: 3/4;\n    gap: 20px;\n    height: 50px;\n  }\n  \n  .todo_item_full .todo_body {\n    grid-column: 1/5;\n    grid-row: 2/4;\n    justify-self: start;\n    align-self: end;\n    padding-bottom: 10px;\n  }\n  \n  .todo_item_full .todo_body ul {\n    display: grid;\n    grid-template-columns: 1fr 9fr 1fr 9fr 1fr 9fr;\n    gap: 15px;\n    align-items: center;\n  }\n  \n  .todo_item_full .todo_body ul input {\n    width: 15px;\n    height: 15px;\n  }\n  \n  .todo_btns_full div {\n    display: flex;\n    justify-content: center;\n    width: 35px;\n  }\n  \n  .todo_btns div {\n    display: flex;\n    justify-content: center;\n    width: 35px;\n  }\n  \n  .form_wrap {\n    position: absolute;\n    display: flex;\n    background-color: rgba(188, 206, 248, 0.7);\n    justify-self: center;\n    align-self: center;\n    width: 100%;\n    height: 100%;\n  }\n  \n  .form_wrap .form_box {\n    margin: auto;\n  }\n  \n  .form_box .add_task_form {\n    display: grid;\n    align-items: center;\n    justify-items: start;\n    background-color: rgb(152, 168, 248);\n    gap: 15px;\n    width: 399px;\n    border: 5px solid black;\n    border-radius: 15px;\n    padding: 20px;\n  }\n  \n  .add_task_form .proj_name_box {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 10px;\n    grid-column: 1/6;\n    grid-row: 1/2;\n  }\n  \n  .add_task_form .date_box {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    grid-column: 1/3;\n    grid-row: 2/3;\n  }\n  \n  .add_task_form .time_box {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    grid-column: 4/6;\n    grid-row: 2/3;\n  }\n  \n  .add_task_form .task_num_box {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n    grid-column: 1/2;\n    grid-row: 3/4;\n    margin-bottom: 20px;\n  }\n  \n  .task_num_box label {\n    grid-column: 1/3;\n  }\n  \n  .task_num_box button {\n    padding: 5px;\n    background-color: rgb(250, 247, 240);\n    font-weight: bold;\n    font-size: 14px;\n    border-style: none;\n    border-radius: 5px;\n    border: 2px solid black;\n    width: 100%;\n  }\n  \n  .add_task_form .task_box {\n    display: flex;\n    width: 100%;\n    grid-column: 1/6;\n    grid-row: 4/5;\n    align-items: center;\n  }\n  \n  .form_wrap {\n    display: none;\n  }\n  \n  .form_box input {\n    padding: 5px;\n    border-style: none;\n    border: 2px solid grey;\n    outline: none;\n  }\n  \n  .form_box button:hover {\n    background-color: black;\n    color: white;\n    border: 2px solid white;\n  }\n  \n  .form_box label {\n    font-weight: 600;\n  }\n  \n  .task_box input {\n    margin-left: auto;\n    width: 75%;\n    padding: 5px;\n  }\n  \n  .form_box input:focus:invalid {\n    border: 2px solid red;\n  }\n  \n  .form_box input:focus:valid,\n  .form_box input:valid {\n    border: 2px solid green;\n  }\n  \n  .add_task_form .submit_box {\n    display: flex;\n    justify-content: center;\n    margin-top: 25px;\n    gap: 20px;\n    width: 100%;\n    grid-column: 1/6;\n    grid-row: 5/6;\n  }\n  \n  .submit_box button {\n    padding: 5px;\n    background-color: rgb(250, 247, 240);\n    font-weight: bold;\n    font-size: 14px;\n    border-style: none;\n    border-radius: 5px;\n    border: 2px solid black;\n    width: 100%;\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Barlow', sans-serif;;\n    src: local('Barlow-Regular.ttf');\n  }\n  \n  * {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Barlow', sans-serif;\n  }\n  \n  body {\n    background-color: #FAF7F0;\n    height: 100vh;\n  }\n  \n  .main_wrap {\n    display: grid;\n    grid-template-rows: 1fr 9fr;\n    grid-template-columns: 1fr 4fr;\n    height: 100%;\n  }\n  \n  .head_page {\n    padding: 15px;\n    display: grid;\n    grid-column: 1/3;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    align-items: center;\n    background-color: #98A8F8;\n    border-bottom: solid 3px black;\n  }\n  \n  .head_page h1 {\n    grid-column: 3/4;\n    text-align: center;\n  }\n  \n  .head_page .profile_box {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    grid-column: 5/6;\n  }\n  \n  .profile_box .add_proj_btn {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 15px;\n  }\n  \n  .profile_box .add_proj_btn:hover {\n    background-color: #6a8de6;\n    border-radius: 50px;\n    position: inherit;\n  }\n  \n  .profile_box .add_proj_btn > img {\n    width: 20px;\n  }\n  \n  .side_nav {\n    background-color: #BCCEF8;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 5fr;\n    border-right: solid 3px black;\n  }\n  .side_nav .side_nav_item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-left: 20px;\n    padding-right: 10px;\n    width: 100%;\n  }\n  \n  .side_nav > div:hover {\n    background-color: #98A8F8;\n  }\n  \n  .side_nav .side_nav_footer {\n    align-self: flex-end;\n    border-bottom: none;\n    border-top: solid 1px black;  \n  }\n  \n  .side_nav > div {\n    padding: 10px;\n    border-bottom: dashed;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-start;\n  }\n  \n  .side_nav .side_nav_footer_item {\n    justify-content: space-evenly;\n  }\n  \n  .main_content {\n    display: flex;\n    flex-direction: column;\n    grid-column: 2/3;\n    grid-row: 2/3;\n    padding: 25px;\n    gap: 1rem;\n    overflow: scroll;\n  }\n  \n  .todo_item {\n    border: solid 2px black;\n    box-shadow: 5px 6px 3px 2px black;\n    border-radius: 8px;\n    padding: 5px 20px;\n    gap: 10px;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    justify-items: center;\n    align-items: center;\n    background-color: #CDFCF6;\n    flex-basis: 50px;\n    min-width: fit-content;\n  }\n  \n  .todo_item .todo_task {\n    grid-row: 1/2;\n    justify-self: flex-start;\n    font-weight: bold;\n  }\n  \n  .todo_item .todo_time {\n    grid-column: 3/4;\n  }\n  \n  .todo_item .todo_body {\n    display: none;\n  }\n  \n  .todo_item .todo_btns {\n    display: flex;\n    flex-basis: 50px;\n    justify-self: flex-end;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 20px;\n    grid-column: 5/6;\n  }\n  \n  .todo_item img,\n  .todo_item_full img {\n    width: 30px;\n    height: 30px;\n  }\n  \n  .todo_item img:hover,\n  .todo_item_full img:hover {\n    width: 35px;\n    height: 35px;\n  }\n  \n  .todo_item:hover,\n  .todo_item_full:hover {\n    background-color: #9ddfd6;\n  }\n  \n  .todo_item_full {\n    border: solid 2px black;\n    box-shadow: 5px 6px 3px 2px black;\n    border-radius: 8px;\n    padding: 5px 20px;\n    gap: 10px;\n    display: grid;\n    /* grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: 1fr 2fr 1fr; */\n    justify-items: center;\n    align-items: center;\n    background-color: #CDFCF6;\n    flex-basis: 175px;\n    min-width: fit-content;\n  }\n  \n  .todo_item_full .todo_task {\n    grid-column: 1/2;\n    grid-row: 1/2;\n    justify-self: flex-start;\n    align-self: flex-start;\n    padding-top: 10px;\n    font-weight: bold;\n  }\n  \n  .todo_item_full .todo_time {\n    grid-column: 5/6;\n    grid-row: 1/2;\n    justify-self: flex-end;\n    align-self: flex-start;\n    padding-top: 10px;\n  }\n  \n  .todo_item_full .todo_btns {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    align-self: end;\n    justify-self: flex-end;\n    grid-column: 5/6;\n    grid-row: 3/4;\n    gap: 20px;\n    height: 50px;\n  }\n  \n  .todo_item_full .todo_body {\n    grid-column: 1/5;\n    grid-row: 2/4;\n    justify-self: start;\n    align-self: end;\n    padding-bottom: 10px;\n  }\n  \n  .todo_item_full .todo_body ul {\n    display: grid;\n    grid-template-columns: 1fr 9fr 1fr 9fr 1fr 9fr;\n    gap: 15px;\n    align-items: center;\n  }\n  \n  .todo_item_full .todo_body ul input {\n    width: 15px;\n    height: 15px;\n  }\n  \n  .todo_btns_full div {\n    display: flex;\n    justify-content: center;\n    width: 35px;\n  }\n  \n  .todo_btns div {\n    display: flex;\n    justify-content: center;\n    width: 35px;\n  }\n  \n  .form_wrap {\n    position: absolute;\n    display: flex;\n    background-color: rgba(188, 206, 248, 0.7);\n    justify-self: center;\n    align-self: center;\n    width: 100%;\n    height: 100%;\n  }\n  \n  .form_wrap .form_box {\n    margin: auto;\n  }\n  \n  .form_box .add_task_form {\n    display: grid;\n    align-items: center;\n    justify-items: start;\n    background-color: rgb(152, 168, 248);\n    gap: 15px;\n    width: 399px;\n    border: 5px solid black;\n    border-radius: 15px;\n    padding: 20px;\n  }\n  \n  .add_task_form .proj_name_box {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 10px;\n    grid-column: 1/6;\n    grid-row: 1/2;\n  }\n  \n  .add_task_form .date_box {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    grid-column: 1/3;\n    grid-row: 2/3;\n  }\n  \n  .add_task_form .time_box {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    grid-column: 4/6;\n    grid-row: 2/3;\n  }\n  \n  .add_task_form .task_num_box {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n    grid-column: 1/2;\n    grid-row: 3/4;\n    margin-bottom: 20px;\n  }\n  \n  .task_num_box label {\n    grid-column: 1/3;\n  }\n  \n  .task_num_box button {\n    padding: 5px;\n    background-color: rgb(250, 247, 240);\n    font-weight: bold;\n    font-size: 14px;\n    border-style: none;\n    border-radius: 5px;\n    border: 2px solid black;\n    width: 100%;\n  }\n  \n  .add_task_form .task_box {\n    display: flex;\n    width: 100%;\n    grid-column: 1/6;\n    grid-row: 4/5;\n    align-items: center;\n  }\n  \n  .form_wrap {\n    display: none;\n  }\n  \n  .form_box input {\n    padding: 5px;\n    border-style: none;\n    border: 2px solid grey;\n    outline: none;\n  }\n  \n  .form_box button:hover {\n    background-color: black;\n    color: white;\n    border: 2px solid white;\n  }\n  \n  .form_box label {\n    font-weight: 600;\n  }\n  \n  .task_box input {\n    margin-left: auto;\n    width: 75%;\n    padding: 5px;\n  }\n  \n  .form_box input:focus:invalid {\n    border: 2px solid red;\n  }\n  \n  .form_box input:focus:valid,\n  .form_box input:valid {\n    border: 2px solid green;\n  }\n  \n  .add_task_form .submit_box {\n    display: flex;\n    justify-content: center;\n    margin-top: 25px;\n    gap: 20px;\n    width: 100%;\n    grid-column: 1/6;\n    grid-row: 5/6;\n  }\n  \n  .submit_box button {\n    padding: 5px;\n    background-color: rgb(250, 247, 240);\n    font-weight: bold;\n    font-size: 14px;\n    border-style: none;\n    border-radius: 5px;\n    border: 2px solid black;\n    width: 100%;\n  }"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_josh_Documents_repos_TOP_ToDoList_src_description_FILL0_wght400_GRAD0_opsz48_1_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/description_FILL0_wght400_GRAD0_opsz48 (1).svg */ "./src/description_FILL0_wght400_GRAD0_opsz48 (1).svg");



const domGenModule = (function() {
    let body = document.querySelector("body")

    const makeEle = function() {
        let argArr = [...arguments]

        if (typeof(argArr[0]) != 'string') {
            return alert("First argument must be a valid HTML element in string format. Example: makeEle('div') ")
        }

        let newEle = document.createElement(`${argArr[0]}`)        

        if (argArr.length >= 2 && argArr[1].length === 2) {
            newEle.setAttribute(...argArr[1]);
            
            if (argArr.length === 3) {
                if (typeof(argArr[2]) === 'string') {
                    newEle.textContent = argArr[2];
                } else {
                    return alert("The third argument must be a string")
                }
            }
        } else {
            return alert("The second argument must be an array of 2 strings.")
        }

        return newEle;
    }

    return { makeEle, body }
})();

let domGenMain = () => {   

    let mainWrap = domGenModule.makeEle("div", ["class", "main_wrap"])
    domGenModule.body.appendChild(mainWrap)

    let headerEle = domGenModule.makeEle("header", ["class", "head_page"])
    mainWrap.appendChild(headerEle)

    let sideNavEle = domGenModule.makeEle("div", ["class", "side_nav"])
    mainWrap.appendChild(sideNavEle)

    let mainConEle = domGenModule.makeEle("div", ["class", "main_content"])
    mainWrap.appendChild(mainConEle)

    return mainWrap;
};

let headerEleContent = () => {
    let headerEle = document.querySelector(".head_page")

    let headImg = domGenModule.makeEle("img", ["class", "nav_logo"])
    headImg.setAttribute("src", _home_josh_Documents_repos_TOP_ToDoList_src_description_FILL0_wght400_GRAD0_opsz48_1_svg__WEBPACK_IMPORTED_MODULE_1__)
    headerEle.appendChild(headImg)
}


(function() {
    domGenMain();
    headerEleContent();

})();



/***/ }),

/***/ "./src/description_FILL0_wght400_GRAD0_opsz48 (1).svg":
/*!************************************************************!*\
  !*** ./src/description_FILL0_wght400_GRAD0_opsz48 (1).svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0de75bea90bc7148a1c1.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxL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QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUM2Rjs7QUFFbEg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsVUFBVTs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MscUhBQVM7QUFDekM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjs7XFxuICAgIHNyYzogbG9jYWwoJ0Jhcmxvdy1SZWd1bGFyLnR0ZicpO1xcbiAgfVxcbiAgXFxuICAqIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xcbiAgfVxcbiAgXFxuICBib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjdGMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG4gIFxcbiAgLm1haW5fd3JhcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICBcXG4gIC5oZWFkX3BhZ2Uge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OEE4Rjg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCBibGFjaztcXG4gIH1cXG4gIFxcbiAgLmhlYWRfcGFnZSBoMSB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmhlYWRfcGFnZSAucHJvZmlsZV9ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIH1cXG4gIFxcbiAgLnByb2ZpbGVfYm94IC5hZGRfcHJval9idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gIH1cXG4gIFxcbiAgLnByb2ZpbGVfYm94IC5hZGRfcHJval9idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmE4ZGU2O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcXG4gIH1cXG4gIFxcbiAgLnByb2ZpbGVfYm94IC5hZGRfcHJval9idG4gPiBpbWcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gIH1cXG4gIFxcbiAgLnNpZGVfbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JDQ0VGODtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgNWZyO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDNweCBibGFjaztcXG4gIH1cXG4gIC5zaWRlX25hdiAuc2lkZV9uYXZfaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLnNpZGVfbmF2ID4gZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4QThGODtcXG4gIH1cXG4gIFxcbiAgLnNpZGVfbmF2IC5zaWRlX25hdl9mb290ZXIge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IGJsYWNrOyAgXFxuICB9XFxuICBcXG4gIC5zaWRlX25hdiA+IGRpdiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IGRhc2hlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB9XFxuICBcXG4gIC5zaWRlX25hdiAuc2lkZV9uYXZfZm9vdGVyX2l0ZW0ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG4gIFxcbiAgLm1haW5fY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbSB7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiA1cHggNnB4IDNweCAycHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RGQ0Y2O1xcbiAgICBmbGV4LWJhc2lzOiA1MHB4O1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtIC50b2RvX3Rhc2sge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtIC50b2RvX3RpbWUge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtIC50b2RvX2JvZHkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtIC50b2RvX2J0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWJhc2lzOiA1MHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBncmlkLWNvbHVtbjogNS82O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtIGltZyxcXG4gIC50b2RvX2l0ZW1fZnVsbCBpbWcge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtIGltZzpob3ZlcixcXG4gIC50b2RvX2l0ZW1fZnVsbCBpbWc6aG92ZXIge1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtOmhvdmVyLFxcbiAgLnRvZG9faXRlbV9mdWxsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlkZGZkNjtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbV9mdWxsIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDVweCA2cHggM3B4IDJweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyOyAqL1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDREZDRjY7XFxuICAgIGZsZXgtYmFzaXM6IDE3NXB4O1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtX2Z1bGwgLnRvZG9fdGFzayB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtX2Z1bGwgLnRvZG9fdGltZSB7XFxuICAgIGdyaWQtY29sdW1uOiA1LzY7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtX2Z1bGwgLnRvZG9fYnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIGdyaWQtY29sdW1uOiA1LzY7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtX2Z1bGwgLnRvZG9fYm9keSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb19ib2R5IHVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOWZyIDFmciA5ZnIgMWZyIDlmcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtX2Z1bGwgLnRvZG9fYm9keSB1bCBpbnB1dCB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2J0bnNfZnVsbCBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2J0bnMgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgfVxcbiAgXFxuICAuZm9ybV93cmFwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4OCwgMjA2LCAyNDgsIDAuNyk7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICBcXG4gIC5mb3JtX3dyYXAgLmZvcm1fYm94IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcbiAgXFxuICAuZm9ybV9ib3ggLmFkZF90YXNrX2Zvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MiwgMTY4LCAyNDgpO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHdpZHRoOiAzOTlweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICB9XFxuICBcXG4gIC5hZGRfdGFza19mb3JtIC5wcm9qX25hbWVfYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gIH1cXG4gIFxcbiAgLmFkZF90YXNrX2Zvcm0gLmRhdGVfYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgfVxcbiAgXFxuICAuYWRkX3Rhc2tfZm9ybSAudGltZV9ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtY29sdW1uOiA0LzY7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICB9XFxuICBcXG4gIC5hZGRfdGFza19mb3JtIC50YXNrX251bV9ib3gge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuICBcXG4gIC50YXNrX251bV9ib3ggbGFiZWwge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgfVxcbiAgXFxuICAudGFza19udW1fYm94IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjQ3LCAyNDApO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgXFxuICAuYWRkX3Rhc2tfZm9ybSAudGFza19ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNjtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fd3JhcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbiAgXFxuICAuZm9ybV9ib3ggYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCBsYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB9XFxuICBcXG4gIC50YXNrX2JveCBpbnB1dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCBpbnB1dDpmb2N1czppbnZhbGlkIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgfVxcbiAgXFxuICAuZm9ybV9ib3ggaW5wdXQ6Zm9jdXM6dmFsaWQsXFxuICAuZm9ybV9ib3ggaW5wdXQ6dmFsaWQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG4gIH1cXG4gIFxcbiAgLmFkZF90YXNrX2Zvcm0gLnN1Ym1pdF9ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNjtcXG4gICAgZ3JpZC1yb3c6IDUvNjtcXG4gIH1cXG4gIFxcbiAgLnN1Ym1pdF9ib3ggYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNDcsIDI0MCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxZQUFZO0lB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RSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtFQUNkOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBOztJQUVFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixXQUFXO0VBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjs7XFxuICAgIHNyYzogbG9jYWwoJ0Jhcmxvdy1SZWd1bGFyLnR0ZicpO1xcbiAgfVxcbiAgXFxuICAqIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xcbiAgfVxcbiAgXFxuICBib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjdGMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG4gIFxcbiAgLm1haW5fd3JhcCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICBcXG4gIC5oZWFkX3BhZ2Uge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OEE4Rjg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCBibGFjaztcXG4gIH1cXG4gIFxcbiAgLmhlYWRfcGFnZSBoMSB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmhlYWRfcGFnZSAucHJvZmlsZV9ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIH1cXG4gIFxcbiAgLnByb2ZpbGVfYm94IC5hZGRfcHJval9idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gIH1cXG4gIFxcbiAgLnByb2ZpbGVfYm94IC5hZGRfcHJval9idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmE4ZGU2O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcXG4gIH1cXG4gIFxcbiAgLnByb2ZpbGVfYm94IC5hZGRfcHJval9idG4gPiBpbWcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gIH1cXG4gIFxcbiAgLnNpZGVfbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JDQ0VGODtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgNWZyO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDNweCBibGFjaztcXG4gIH1cXG4gIC5zaWRlX25hdiAuc2lkZV9uYXZfaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLnNpZGVfbmF2ID4gZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4QThGODtcXG4gIH1cXG4gIFxcbiAgLnNpZGVfbmF2IC5zaWRlX25hdl9mb290ZXIge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IGJsYWNrOyAgXFxuICB9XFxuICBcXG4gIC5zaWRlX25hdiA+IGRpdiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IGRhc2hlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB9XFxuICBcXG4gIC5zaWRlX25hdiAuc2lkZV9uYXZfZm9vdGVyX2l0ZW0ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG4gIFxcbiAgLm1haW5fY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbSB7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiA1cHggNnB4IDNweCAycHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RGQ0Y2O1xcbiAgICBmbGV4LWJhc2lzOiA1MHB4O1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtIC50b2RvX3Rhc2sge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtIC50b2RvX3RpbWUge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtIC50b2RvX2JvZHkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtIC50b2RvX2J0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWJhc2lzOiA1MHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBncmlkLWNvbHVtbjogNS82O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtIGltZyxcXG4gIC50b2RvX2l0ZW1fZnVsbCBpbWcge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtIGltZzpob3ZlcixcXG4gIC50b2RvX2l0ZW1fZnVsbCBpbWc6aG92ZXIge1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtOmhvdmVyLFxcbiAgLnRvZG9faXRlbV9mdWxsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlkZGZkNjtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbV9mdWxsIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDVweCA2cHggM3B4IDJweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyOyAqL1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDREZDRjY7XFxuICAgIGZsZXgtYmFzaXM6IDE3NXB4O1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtX2Z1bGwgLnRvZG9fdGFzayB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtX2Z1bGwgLnRvZG9fdGltZSB7XFxuICAgIGdyaWQtY29sdW1uOiA1LzY7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtX2Z1bGwgLnRvZG9fYnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIGdyaWQtY29sdW1uOiA1LzY7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtX2Z1bGwgLnRvZG9fYm9keSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb19ib2R5IHVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOWZyIDFmciA5ZnIgMWZyIDlmcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtX2Z1bGwgLnRvZG9fYm9keSB1bCBpbnB1dCB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2J0bnNfZnVsbCBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2J0bnMgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgfVxcbiAgXFxuICAuZm9ybV93cmFwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4OCwgMjA2LCAyNDgsIDAuNyk7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICBcXG4gIC5mb3JtX3dyYXAgLmZvcm1fYm94IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcbiAgXFxuICAuZm9ybV9ib3ggLmFkZF90YXNrX2Zvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MiwgMTY4LCAyNDgpO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHdpZHRoOiAzOTlweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICB9XFxuICBcXG4gIC5hZGRfdGFza19mb3JtIC5wcm9qX25hbWVfYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gIH1cXG4gIFxcbiAgLmFkZF90YXNrX2Zvcm0gLmRhdGVfYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgfVxcbiAgXFxuICAuYWRkX3Rhc2tfZm9ybSAudGltZV9ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtY29sdW1uOiA0LzY7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICB9XFxuICBcXG4gIC5hZGRfdGFza19mb3JtIC50YXNrX251bV9ib3gge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuICBcXG4gIC50YXNrX251bV9ib3ggbGFiZWwge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgfVxcbiAgXFxuICAudGFza19udW1fYm94IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjQ3LCAyNDApO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgXFxuICAuYWRkX3Rhc2tfZm9ybSAudGFza19ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNjtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fd3JhcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbiAgXFxuICAuZm9ybV9ib3ggYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCBsYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB9XFxuICBcXG4gIC50YXNrX2JveCBpbnB1dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCBpbnB1dDpmb2N1czppbnZhbGlkIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgfVxcbiAgXFxuICAuZm9ybV9ib3ggaW5wdXQ6Zm9jdXM6dmFsaWQsXFxuICAuZm9ybV9ib3ggaW5wdXQ6dmFsaWQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG4gIH1cXG4gIFxcbiAgLmFkZF90YXNrX2Zvcm0gLnN1Ym1pdF9ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNjtcXG4gICAgZ3JpZC1yb3c6IDUvNjtcXG4gIH1cXG4gIFxcbiAgLnN1Ym1pdF9ib3ggYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNDcsIDI0MCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBoZWFkZXJJbWcgZnJvbSBcIi9ob21lL2pvc2gvRG9jdW1lbnRzL3JlcG9zL1RPUF9Ub0RvTGlzdC9zcmMvZGVzY3JpcHRpb25fRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDggKDEpLnN2Z1wiXG5cbmNvbnN0IGRvbUdlbk1vZHVsZSA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG5cbiAgICBjb25zdCBtYWtlRWxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhcmdBcnIgPSBbLi4uYXJndW1lbnRzXVxuXG4gICAgICAgIGlmICh0eXBlb2YoYXJnQXJyWzBdKSAhPSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHZhbGlkIEhUTUwgZWxlbWVudCBpbiBzdHJpbmcgZm9ybWF0LiBFeGFtcGxlOiBtYWtlRWxlKCdkaXYnKSBcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXdFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2FyZ0FyclswXX1gKSAgICAgICAgXG5cbiAgICAgICAgaWYgKGFyZ0Fyci5sZW5ndGggPj0gMiAmJiBhcmdBcnJbMV0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBuZXdFbGUuc2V0QXR0cmlidXRlKC4uLmFyZ0FyclsxXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChhcmdBcnIubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZihhcmdBcnJbMl0pID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBuZXdFbGUudGV4dENvbnRlbnQgPSBhcmdBcnJbMl07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiVGhlIHRoaXJkIGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmdcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJUaGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXkgb2YgMiBzdHJpbmdzLlwiKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld0VsZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBtYWtlRWxlLCBib2R5IH1cbn0pKCk7XG5cbmxldCBkb21HZW5NYWluID0gKCkgPT4geyAgIFxuXG4gICAgbGV0IG1haW5XcmFwID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJkaXZcIiwgW1wiY2xhc3NcIiwgXCJtYWluX3dyYXBcIl0pXG4gICAgZG9tR2VuTW9kdWxlLmJvZHkuYXBwZW5kQ2hpbGQobWFpbldyYXApXG5cbiAgICBsZXQgaGVhZGVyRWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJoZWFkZXJcIiwgW1wiY2xhc3NcIiwgXCJoZWFkX3BhZ2VcIl0pXG4gICAgbWFpbldyYXAuYXBwZW5kQ2hpbGQoaGVhZGVyRWxlKVxuXG4gICAgbGV0IHNpZGVOYXZFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImRpdlwiLCBbXCJjbGFzc1wiLCBcInNpZGVfbmF2XCJdKVxuICAgIG1haW5XcmFwLmFwcGVuZENoaWxkKHNpZGVOYXZFbGUpXG5cbiAgICBsZXQgbWFpbkNvbkVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtcImNsYXNzXCIsIFwibWFpbl9jb250ZW50XCJdKVxuICAgIG1haW5XcmFwLmFwcGVuZENoaWxkKG1haW5Db25FbGUpXG5cbiAgICByZXR1cm4gbWFpbldyYXA7XG59O1xuXG5sZXQgaGVhZGVyRWxlQ29udGVudCA9ICgpID0+IHtcbiAgICBsZXQgaGVhZGVyRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkX3BhZ2VcIilcblxuICAgIGxldCBoZWFkSW1nID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJpbWdcIiwgW1wiY2xhc3NcIiwgXCJuYXZfbG9nb1wiXSlcbiAgICBoZWFkSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBoZWFkZXJJbWcpXG4gICAgaGVhZGVyRWxlLmFwcGVuZENoaWxkKGhlYWRJbWcpXG59XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgIGRvbUdlbk1haW4oKTtcbiAgICBoZWFkZXJFbGVDb250ZW50KCk7XG5cbn0pKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==