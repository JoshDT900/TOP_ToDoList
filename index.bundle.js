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
            return alert("First argument must be a valid HTML element in string format. Example: 'div' ")
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
                    return alert("The third argument must be a string");
                }
            }
        } else {
            return alert("The second argument accepts an array of arrays containing 2 strings or an array of 2 strings.");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxL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QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUM2Rjs7QUFFbEg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsVUFBVTs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxxSEFBUztBQUN6QztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmOztcXG4gICAgc3JjOiBsb2NhbCgnQmFybG93LVJlZ3VsYXIudHRmJyk7XFxuICB9XFxuICBcXG4gICoge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XFxuICB9XFxuICBcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGN0YwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgfVxcbiAgXFxuICAubWFpbl93cmFwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLmhlYWRfcGFnZSB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4QThGODtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IGJsYWNrO1xcbiAgfVxcbiAgXFxuICAuaGVhZF9wYWdlIGgxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuaGVhZF9wYWdlIC5wcm9maWxlX2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogNS82O1xcbiAgfVxcbiAgXFxuICAucHJvZmlsZV9ib3ggLmFkZF9wcm9qX2J0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgfVxcbiAgXFxuICAucHJvZmlsZV9ib3ggLmFkZF9wcm9qX2J0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YThkZTY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcbiAgfVxcbiAgXFxuICAucHJvZmlsZV9ib3ggLmFkZF9wcm9qX2J0biA+IGltZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgfVxcbiAgXFxuICAuc2lkZV9uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkNDRUY4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciA1ZnI7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgM3B4IGJsYWNrO1xcbiAgfVxcbiAgLnNpZGVfbmF2IC5zaWRlX25hdl9pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgXFxuICAuc2lkZV9uYXYgPiBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThBOEY4O1xcbiAgfVxcbiAgXFxuICAuc2lkZV9uYXYgLnNpZGVfbmF2X2Zvb3RlciB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggYmxhY2s7ICBcXG4gIH1cXG4gIFxcbiAgLnNpZGVfbmF2ID4gZGl2IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogZGFzaGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIH1cXG4gIFxcbiAgLnNpZGVfbmF2IC5zaWRlX25hdl9mb290ZXJfaXRlbSB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcbiAgXFxuICAubWFpbl9jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDVweCA2cHggM3B4IDJweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDREZDRjY7XFxuICAgIGZsZXgtYmFzaXM6IDUwcHg7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gLnRvZG9fdGFzayB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gLnRvZG9fdGltZSB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gLnRvZG9fYm9keSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gLnRvZG9fYnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtYmFzaXM6IDUwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGdyaWQtY29sdW1uOiA1LzY7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gaW1nLFxcbiAgLnRvZG9faXRlbV9mdWxsIGltZyB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gaW1nOmhvdmVyLFxcbiAgLnRvZG9faXRlbV9mdWxsIGltZzpob3ZlciB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW06aG92ZXIsXFxuICAudG9kb19pdGVtX2Z1bGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRkZmQ2O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtX2Z1bGwge1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogNXB4IDZweCAzcHggMnB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7ICovXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NERkNGNjtcXG4gICAgZmxleC1iYXNpczogMTc1cHg7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb190YXNrIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb190aW1lIHtcXG4gICAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb19idG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb19ib2R5IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbV9mdWxsIC50b2RvX2JvZHkgdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5ZnIgMWZyIDlmciAxZnIgOWZyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb19ib2R5IHVsIGlucHV0IHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9fYnRuc19mdWxsIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMzVweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9fYnRucyBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICB9XFxuICBcXG4gIC5mb3JtX3dyYXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg4LCAyMDYsIDI0OCwgMC43KTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fd3JhcCAuZm9ybV9ib3gge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCAuYWRkX3Rhc2tfZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUyLCAxNjgsIDI0OCk7XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDM5OXB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG4gIFxcbiAgLmFkZF90YXNrX2Zvcm0gLnByb2pfbmFtZV9ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgfVxcbiAgXFxuICAuYWRkX3Rhc2tfZm9ybSAuZGF0ZV9ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICB9XFxuICBcXG4gIC5hZGRfdGFza19mb3JtIC50aW1lX2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gIH1cXG4gIFxcbiAgLmFkZF90YXNrX2Zvcm0gLnRhc2tfbnVtX2JveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG4gIFxcbiAgLnRhc2tfbnVtX2JveCBsYWJlbCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICB9XFxuICBcXG4gIC50YXNrX251bV9ib3ggYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNDcsIDI0MCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBcXG4gIC5hZGRfdGFza19mb3JtIC50YXNrX2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuZm9ybV93cmFwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IGlucHV0IHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIH1cXG4gIFxcbiAgLnRhc2tfYm94IGlucHV0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IGlucHV0OmZvY3VzOmludmFsaWQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCBpbnB1dDpmb2N1czp2YWxpZCxcXG4gIC5mb3JtX2JveCBpbnB1dDp2YWxpZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbiAgfVxcbiAgXFxuICAuYWRkX3Rhc2tfZm9ybSAuc3VibWl0X2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogNS82O1xcbiAgfVxcbiAgXFxuICAuc3VibWl0X2JveCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI0NywgMjQwKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsU0FBUztJQUNULGFBQWE7SUFDYixxQ0FBcUM7SUFDckMscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCOztFQUVBOztJQUVFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7O0lBRUUsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsU0FBUztJQUNULGFBQWE7SUFDYjtzQ0FDa0M7SUFDbEMscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixTQUFTO0lBQ1QsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsU0FBUztJQUNULG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLFNBQVM7SUFDVCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7O0lBRUUsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmOztcXG4gICAgc3JjOiBsb2NhbCgnQmFybG93LVJlZ3VsYXIudHRmJyk7XFxuICB9XFxuICBcXG4gICoge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XFxuICB9XFxuICBcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGN0YwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgfVxcbiAgXFxuICAubWFpbl93cmFwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLmhlYWRfcGFnZSB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4QThGODtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IGJsYWNrO1xcbiAgfVxcbiAgXFxuICAuaGVhZF9wYWdlIGgxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuaGVhZF9wYWdlIC5wcm9maWxlX2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogNS82O1xcbiAgfVxcbiAgXFxuICAucHJvZmlsZV9ib3ggLmFkZF9wcm9qX2J0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgfVxcbiAgXFxuICAucHJvZmlsZV9ib3ggLmFkZF9wcm9qX2J0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YThkZTY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcbiAgfVxcbiAgXFxuICAucHJvZmlsZV9ib3ggLmFkZF9wcm9qX2J0biA+IGltZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgfVxcbiAgXFxuICAuc2lkZV9uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkNDRUY4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciA1ZnI7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgM3B4IGJsYWNrO1xcbiAgfVxcbiAgLnNpZGVfbmF2IC5zaWRlX25hdl9pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgXFxuICAuc2lkZV9uYXYgPiBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThBOEY4O1xcbiAgfVxcbiAgXFxuICAuc2lkZV9uYXYgLnNpZGVfbmF2X2Zvb3RlciB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggYmxhY2s7ICBcXG4gIH1cXG4gIFxcbiAgLnNpZGVfbmF2ID4gZGl2IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogZGFzaGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIH1cXG4gIFxcbiAgLnNpZGVfbmF2IC5zaWRlX25hdl9mb290ZXJfaXRlbSB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcbiAgXFxuICAubWFpbl9jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDVweCA2cHggM3B4IDJweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDREZDRjY7XFxuICAgIGZsZXgtYmFzaXM6IDUwcHg7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gLnRvZG9fdGFzayB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gLnRvZG9fdGltZSB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gLnRvZG9fYm9keSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gLnRvZG9fYnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtYmFzaXM6IDUwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGdyaWQtY29sdW1uOiA1LzY7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gaW1nLFxcbiAgLnRvZG9faXRlbV9mdWxsIGltZyB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gaW1nOmhvdmVyLFxcbiAgLnRvZG9faXRlbV9mdWxsIGltZzpob3ZlciB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW06aG92ZXIsXFxuICAudG9kb19pdGVtX2Z1bGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRkZmQ2O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtX2Z1bGwge1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogNXB4IDZweCAzcHggMnB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7ICovXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NERkNGNjtcXG4gICAgZmxleC1iYXNpczogMTc1cHg7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb190YXNrIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb190aW1lIHtcXG4gICAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb19idG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb19ib2R5IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbV9mdWxsIC50b2RvX2JvZHkgdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5ZnIgMWZyIDlmciAxZnIgOWZyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb19ib2R5IHVsIGlucHV0IHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9fYnRuc19mdWxsIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMzVweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9fYnRucyBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICB9XFxuICBcXG4gIC5mb3JtX3dyYXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg4LCAyMDYsIDI0OCwgMC43KTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fd3JhcCAuZm9ybV9ib3gge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCAuYWRkX3Rhc2tfZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUyLCAxNjgsIDI0OCk7XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDM5OXB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG4gIFxcbiAgLmFkZF90YXNrX2Zvcm0gLnByb2pfbmFtZV9ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgfVxcbiAgXFxuICAuYWRkX3Rhc2tfZm9ybSAuZGF0ZV9ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICB9XFxuICBcXG4gIC5hZGRfdGFza19mb3JtIC50aW1lX2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gIH1cXG4gIFxcbiAgLmFkZF90YXNrX2Zvcm0gLnRhc2tfbnVtX2JveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG4gIFxcbiAgLnRhc2tfbnVtX2JveCBsYWJlbCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICB9XFxuICBcXG4gIC50YXNrX251bV9ib3ggYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNDcsIDI0MCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBcXG4gIC5hZGRfdGFza19mb3JtIC50YXNrX2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuZm9ybV93cmFwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IGlucHV0IHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIH1cXG4gIFxcbiAgLnRhc2tfYm94IGlucHV0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IGlucHV0OmZvY3VzOmludmFsaWQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCBpbnB1dDpmb2N1czp2YWxpZCxcXG4gIC5mb3JtX2JveCBpbnB1dDp2YWxpZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbiAgfVxcbiAgXFxuICAuYWRkX3Rhc2tfZm9ybSAuc3VibWl0X2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogNS82O1xcbiAgfVxcbiAgXFxuICAuc3VibWl0X2JveCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI0NywgMjQwKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEhlYWRlckltZyBmcm9tIFwiL2hvbWUvam9zaC9Eb2N1bWVudHMvcmVwb3MvVE9QX1RvRG9MaXN0L3NyYy9kZXNjcmlwdGlvbl9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OCAoMSkuc3ZnXCJcblxuY29uc3QgZG9tR2VuTW9kdWxlID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcblxuICAgIGNvbnN0IG1ha2VFbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFyZ0FyciA9IFsuLi5hcmd1bWVudHNdXG5cbiAgICAgICAgaWYgKHR5cGVvZihhcmdBcnJbMF0pICE9ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgdmFsaWQgSFRNTCBlbGVtZW50IGluIHN0cmluZyBmb3JtYXQuIEV4YW1wbGU6ICdkaXYnIFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7YXJnQXJyWzBdfWApICAgICAgICBcblxuICAgICAgICBpZiAoYXJnQXJyLmxlbmd0aCA+PSAyICYmIHR5cGVvZihhcmdBcnJbMV0pID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBpZih0eXBlb2YoYXJnQXJyWzFdWzBdKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gYXJnQXJyWzFdKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBBcnIgPSBbLi4uYXJnQXJyWzFdW2ldXTtcblxuICAgICAgICAgICAgICAgICAgICBuZXdFbGUuc2V0QXR0cmlidXRlKC4uLnRlbXBBcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlLnNldEF0dHJpYnV0ZSguLi5hcmdBcnJbMV0pO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoYXJnQXJyLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoYXJnQXJyWzJdKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlLnRleHRDb250ZW50ID0gYXJnQXJyWzJdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGVydChcIlRoZSB0aGlyZCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlRoZSBzZWNvbmQgYXJndW1lbnQgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgY29udGFpbmluZyAyIHN0cmluZ3Mgb3IgYW4gYXJyYXkgb2YgMiBzdHJpbmdzLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdFbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbWFrZUVsZSwgYm9keSB9XG59KSgpO1xuXG5sZXQgZG9tR2VuTWFpbiA9ICgpID0+IHsgICBcblxuICAgIGxldCBtYWluV3JhcCA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtcImNsYXNzXCIsIFwibWFpbl93cmFwXCJdKVxuICAgIGRvbUdlbk1vZHVsZS5ib2R5LmFwcGVuZENoaWxkKG1haW5XcmFwKVxuXG4gICAgbGV0IGhlYWRlckVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiaGVhZGVyXCIsIFtcImNsYXNzXCIsIFwiaGVhZF9wYWdlXCJdKVxuICAgIG1haW5XcmFwLmFwcGVuZENoaWxkKGhlYWRlckVsZSlcblxuICAgIGxldCBzaWRlTmF2RWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJkaXZcIiwgW1wiY2xhc3NcIiwgXCJzaWRlX25hdlwiXSlcbiAgICBtYWluV3JhcC5hcHBlbmRDaGlsZChzaWRlTmF2RWxlKVxuXG4gICAgbGV0IG1haW5Db25FbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImRpdlwiLCBbXCJjbGFzc1wiLCBcIm1haW5fY29udGVudFwiXSlcbiAgICBtYWluV3JhcC5hcHBlbmRDaGlsZChtYWluQ29uRWxlKVxuXG4gICAgcmV0dXJuIG1haW5XcmFwO1xufTtcblxubGV0IGhlYWRlckVsZUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgbGV0IGhlYWRlckVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZF9wYWdlXCIpXG5cbiAgICBsZXQgaGVhZEltZyA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiaW1nXCIsIFtcImNsYXNzXCIsIFwibmF2X2xvZ29cIl0pXG4gICAgaGVhZEltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgSGVhZGVySW1nKVxuICAgIGhlYWRlckVsZS5hcHBlbmRDaGlsZChoZWFkSW1nKVxufVxuXG5cbihmdW5jdGlvbigpIHtcbiAgICBkb21HZW5NYWluKCk7XG4gICAgaGVhZGVyRWxlQ29udGVudCgpO1xuXG59KSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=