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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Barlow', sans-serif;;\n    src: local('Barlow-Regular.ttf');\n  }\n  \n  * {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Barlow', sans-serif;\n  }\n  \n  body {\n    background-color: #FAF7F0;\n    height: 100vh;\n  }\n  \n  .main_wrap {\n    display: grid;\n    grid-template-rows: 1fr 9fr;\n    grid-template-columns: 1fr 4fr;\n    height: 100%;\n  }\n  \n  .head_page {\n    padding: 15px;\n    display: grid;\n    grid-column: 1/3;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    align-items: center;\n    background-color: #98A8F8;\n    border-bottom: solid 3px black;\n  }\n  \n  .head_page h1 {\n    grid-column: 3/4;\n    text-align: center;\n  }\n  \n  .head_page .profile_box {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    grid-column: 5/6;\n  }\n  \n  .profile_box .add_proj_btn {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 15px;\n  }\n  \n  .profile_box .add_proj_btn:hover {\n    background-color: #6a8de6;\n    border-radius: 50px;\n    position: inherit;\n  }\n  \n  .profile_box .add_proj_btn > img {\n    width: 20px;\n  }\n  \n  .side_nav {\n    background-color: #BCCEF8;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 5fr;\n    border-right: solid 3px black;\n  }\n  .side_nav .side_nav_item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-left: 20px;\n    padding-right: 10px;\n    width: 100%;\n  }\n  \n  .side_nav > div:hover {\n    background-color: #98A8F8;\n  }\n  \n  .side_nav .side_nav_footer {\n    align-self: flex-end;\n    border-bottom: none;\n    border-top: solid 1px black;  \n  }\n  \n  .side_nav > div {\n    padding: 10px;\n    border-bottom: dashed;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-start;\n  }\n  \n  .side_nav .side_nav_footer_item {\n    justify-content: space-evenly;\n  }\n  \n  .main_content {\n    display: flex;\n    flex-direction: column;\n    grid-column: 2/3;\n    grid-row: 2/3;\n    padding: 25px;\n    gap: 1rem;\n    overflow: scroll;\n  }\n  \n  .todo_item {\n    border: solid 2px black;\n    box-shadow: 5px 6px 3px 2px black;\n    border-radius: 8px;\n    padding: 5px 20px;\n    gap: 10px;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    justify-items: center;\n    align-items: center;\n    background-color: #CDFCF6;\n    flex-basis: 50px;\n    min-width: fit-content;\n  }\n  \n  .todo_item .todo_task {\n    grid-row: 1/2;\n    justify-self: flex-start;\n    font-weight: bold;\n  }\n  \n  .todo_item .todo_time {\n    grid-column: 3/4;\n  }\n  \n  .todo_item .todo_body {\n    display: none;\n  }\n  \n  .todo_item .todo_btns {\n    display: flex;\n    flex-basis: 50px;\n    justify-self: flex-end;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 20px;\n    grid-column: 5/6;\n  }\n  \n  .todo_item img,\n  .todo_item_full img {\n    width: 30px;\n    height: 30px;\n  }\n  \n  .todo_item img:hover,\n  .todo_item_full img:hover {\n    width: 35px;\n    height: 35px;\n  }\n  \n  .todo_item:hover,\n  .todo_item_full:hover {\n    background-color: #9ddfd6;\n  }\n  \n  .todo_item_full {\n    border: solid 2px black;\n    box-shadow: 5px 6px 3px 2px black;\n    border-radius: 8px;\n    padding: 5px 20px;\n    gap: 10px;\n    display: grid;\n    /* grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: 1fr 2fr 1fr; */\n    justify-items: center;\n    align-items: center;\n    background-color: #CDFCF6;\n    flex-basis: 175px;\n    min-width: fit-content;\n  }\n  \n  .todo_item_full .todo_task {\n    grid-column: 1/2;\n    grid-row: 1/2;\n    justify-self: flex-start;\n    align-self: flex-start;\n    padding-top: 10px;\n    font-weight: bold;\n  }\n  \n  .todo_item_full .todo_time {\n    grid-column: 5/6;\n    grid-row: 1/2;\n    justify-self: flex-end;\n    align-self: flex-start;\n    padding-top: 10px;\n  }\n  \n  .todo_item_full .todo_btns {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    align-self: end;\n    justify-self: flex-end;\n    grid-column: 5/6;\n    grid-row: 3/4;\n    gap: 20px;\n    height: 50px;\n  }\n  \n  .todo_item_full .todo_body {\n    grid-column: 1/5;\n    grid-row: 2/4;\n    justify-self: start;\n    align-self: end;\n    padding-bottom: 10px;\n  }\n  \n  .todo_item_full .todo_body ul {\n    display: grid;\n    grid-template-columns: 1fr 9fr 1fr 9fr 1fr 9fr;\n    gap: 15px;\n    align-items: center;\n  }\n  \n  .todo_item_full .todo_body ul input {\n    width: 15px;\n    height: 15px;\n  }\n  \n  .todo_btns_full div {\n    display: flex;\n    justify-content: center;\n    width: 35px;\n  }\n  \n  .todo_btns div {\n    display: flex;\n    justify-content: center;\n    width: 35px;\n  }\n  \n  .form_wrap {\n    position: absolute;\n    display: flex;\n    background-color: rgba(188, 206, 248, 0.7);\n    justify-self: center;\n    align-self: center;\n    width: 100%;\n    height: 100%;\n  }\n  \n  .form_wrap .form_box {\n    margin: auto;\n  }\n  \n  .form_box .add_task_form {\n    display: grid;\n    align-items: center;\n    justify-items: start;\n    background-color: rgb(152, 168, 248);\n    gap: 15px;\n    width: 399px;\n    border: 5px solid black;\n    border-radius: 15px;\n    padding: 20px;\n  }\n  \n  .add_task_form .proj_name_box {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 10px;\n    grid-column: 1/6;\n    grid-row: 1/2;\n  }\n  \n  .add_task_form .date_box {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    grid-column: 1/3;\n    grid-row: 2/3;\n  }\n  \n  .add_task_form .time_box {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    grid-column: 4/6;\n    grid-row: 2/3;\n  }\n  \n  .add_task_form .task_num_box {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n    grid-column: 1/2;\n    grid-row: 3/4;\n    margin-bottom: 20px;\n  }\n  \n  .task_num_box label {\n    grid-column: 1/3;\n  }\n  \n  .task_num_box button {\n    padding: 5px;\n    background-color: rgb(250, 247, 240);\n    font-weight: bold;\n    font-size: 14px;\n    border-style: none;\n    border-radius: 5px;\n    border: 2px solid black;\n    width: 100%;\n  }\n  \n  .add_task_form .task_box {\n    display: flex;\n    width: 100%;\n    grid-column: 1/6;\n    grid-row: 4/5;\n    align-items: center;\n  }\n  \n  .form_wrap {\n    /* display: none; */\n  }\n  \n  .form_box input {\n    padding: 5px;\n    border-style: none;\n    border: 2px solid grey;\n    outline: none;\n  }\n  \n  .form_box button:hover {\n    background-color: black;\n    color: white;\n    border: 2px solid white;\n  }\n  \n  .form_box label {\n    font-weight: 600;\n  }\n  \n  .task_box input {\n    margin-left: auto;\n    width: 75%;\n    padding: 5px;\n  }\n  \n  .form_box input:focus:invalid {\n    border: 2px solid red;\n  }\n  \n  .form_box input:focus:valid,\n  .form_box input:valid {\n    border: 2px solid green;\n  }\n  \n  .add_task_form .submit_box {\n    display: flex;\n    justify-content: center;\n    margin-top: 25px;\n    gap: 20px;\n    width: 100%;\n    grid-column: 1/6;\n    grid-row: 5/6;\n  }\n  \n  .submit_box button {\n    padding: 5px;\n    background-color: rgb(250, 247, 240);\n    font-weight: bold;\n    font-size: 14px;\n    border-style: none;\n    border-radius: 5px;\n    border: 2px solid black;\n    width: 100%;\n  }  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Barlow', sans-serif;;\n    src: local('Barlow-Regular.ttf');\n  }\n  \n  * {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Barlow', sans-serif;\n  }\n  \n  body {\n    background-color: #FAF7F0;\n    height: 100vh;\n  }\n  \n  .main_wrap {\n    display: grid;\n    grid-template-rows: 1fr 9fr;\n    grid-template-columns: 1fr 4fr;\n    height: 100%;\n  }\n  \n  .head_page {\n    padding: 15px;\n    display: grid;\n    grid-column: 1/3;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    align-items: center;\n    background-color: #98A8F8;\n    border-bottom: solid 3px black;\n  }\n  \n  .head_page h1 {\n    grid-column: 3/4;\n    text-align: center;\n  }\n  \n  .head_page .profile_box {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    grid-column: 5/6;\n  }\n  \n  .profile_box .add_proj_btn {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 15px;\n  }\n  \n  .profile_box .add_proj_btn:hover {\n    background-color: #6a8de6;\n    border-radius: 50px;\n    position: inherit;\n  }\n  \n  .profile_box .add_proj_btn > img {\n    width: 20px;\n  }\n  \n  .side_nav {\n    background-color: #BCCEF8;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 5fr;\n    border-right: solid 3px black;\n  }\n  .side_nav .side_nav_item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-left: 20px;\n    padding-right: 10px;\n    width: 100%;\n  }\n  \n  .side_nav > div:hover {\n    background-color: #98A8F8;\n  }\n  \n  .side_nav .side_nav_footer {\n    align-self: flex-end;\n    border-bottom: none;\n    border-top: solid 1px black;  \n  }\n  \n  .side_nav > div {\n    padding: 10px;\n    border-bottom: dashed;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-start;\n  }\n  \n  .side_nav .side_nav_footer_item {\n    justify-content: space-evenly;\n  }\n  \n  .main_content {\n    display: flex;\n    flex-direction: column;\n    grid-column: 2/3;\n    grid-row: 2/3;\n    padding: 25px;\n    gap: 1rem;\n    overflow: scroll;\n  }\n  \n  .todo_item {\n    border: solid 2px black;\n    box-shadow: 5px 6px 3px 2px black;\n    border-radius: 8px;\n    padding: 5px 20px;\n    gap: 10px;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    justify-items: center;\n    align-items: center;\n    background-color: #CDFCF6;\n    flex-basis: 50px;\n    min-width: fit-content;\n  }\n  \n  .todo_item .todo_task {\n    grid-row: 1/2;\n    justify-self: flex-start;\n    font-weight: bold;\n  }\n  \n  .todo_item .todo_time {\n    grid-column: 3/4;\n  }\n  \n  .todo_item .todo_body {\n    display: none;\n  }\n  \n  .todo_item .todo_btns {\n    display: flex;\n    flex-basis: 50px;\n    justify-self: flex-end;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 20px;\n    grid-column: 5/6;\n  }\n  \n  .todo_item img,\n  .todo_item_full img {\n    width: 30px;\n    height: 30px;\n  }\n  \n  .todo_item img:hover,\n  .todo_item_full img:hover {\n    width: 35px;\n    height: 35px;\n  }\n  \n  .todo_item:hover,\n  .todo_item_full:hover {\n    background-color: #9ddfd6;\n  }\n  \n  .todo_item_full {\n    border: solid 2px black;\n    box-shadow: 5px 6px 3px 2px black;\n    border-radius: 8px;\n    padding: 5px 20px;\n    gap: 10px;\n    display: grid;\n    /* grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: 1fr 2fr 1fr; */\n    justify-items: center;\n    align-items: center;\n    background-color: #CDFCF6;\n    flex-basis: 175px;\n    min-width: fit-content;\n  }\n  \n  .todo_item_full .todo_task {\n    grid-column: 1/2;\n    grid-row: 1/2;\n    justify-self: flex-start;\n    align-self: flex-start;\n    padding-top: 10px;\n    font-weight: bold;\n  }\n  \n  .todo_item_full .todo_time {\n    grid-column: 5/6;\n    grid-row: 1/2;\n    justify-self: flex-end;\n    align-self: flex-start;\n    padding-top: 10px;\n  }\n  \n  .todo_item_full .todo_btns {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    align-self: end;\n    justify-self: flex-end;\n    grid-column: 5/6;\n    grid-row: 3/4;\n    gap: 20px;\n    height: 50px;\n  }\n  \n  .todo_item_full .todo_body {\n    grid-column: 1/5;\n    grid-row: 2/4;\n    justify-self: start;\n    align-self: end;\n    padding-bottom: 10px;\n  }\n  \n  .todo_item_full .todo_body ul {\n    display: grid;\n    grid-template-columns: 1fr 9fr 1fr 9fr 1fr 9fr;\n    gap: 15px;\n    align-items: center;\n  }\n  \n  .todo_item_full .todo_body ul input {\n    width: 15px;\n    height: 15px;\n  }\n  \n  .todo_btns_full div {\n    display: flex;\n    justify-content: center;\n    width: 35px;\n  }\n  \n  .todo_btns div {\n    display: flex;\n    justify-content: center;\n    width: 35px;\n  }\n  \n  .form_wrap {\n    position: absolute;\n    display: flex;\n    background-color: rgba(188, 206, 248, 0.7);\n    justify-self: center;\n    align-self: center;\n    width: 100%;\n    height: 100%;\n  }\n  \n  .form_wrap .form_box {\n    margin: auto;\n  }\n  \n  .form_box .add_task_form {\n    display: grid;\n    align-items: center;\n    justify-items: start;\n    background-color: rgb(152, 168, 248);\n    gap: 15px;\n    width: 399px;\n    border: 5px solid black;\n    border-radius: 15px;\n    padding: 20px;\n  }\n  \n  .add_task_form .proj_name_box {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 10px;\n    grid-column: 1/6;\n    grid-row: 1/2;\n  }\n  \n  .add_task_form .date_box {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    grid-column: 1/3;\n    grid-row: 2/3;\n  }\n  \n  .add_task_form .time_box {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    grid-column: 4/6;\n    grid-row: 2/3;\n  }\n  \n  .add_task_form .task_num_box {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n    grid-column: 1/2;\n    grid-row: 3/4;\n    margin-bottom: 20px;\n  }\n  \n  .task_num_box label {\n    grid-column: 1/3;\n  }\n  \n  .task_num_box button {\n    padding: 5px;\n    background-color: rgb(250, 247, 240);\n    font-weight: bold;\n    font-size: 14px;\n    border-style: none;\n    border-radius: 5px;\n    border: 2px solid black;\n    width: 100%;\n  }\n  \n  .add_task_form .task_box {\n    display: flex;\n    width: 100%;\n    grid-column: 1/6;\n    grid-row: 4/5;\n    align-items: center;\n  }\n  \n  .form_wrap {\n    /* display: none; */\n  }\n  \n  .form_box input {\n    padding: 5px;\n    border-style: none;\n    border: 2px solid grey;\n    outline: none;\n  }\n  \n  .form_box button:hover {\n    background-color: black;\n    color: white;\n    border: 2px solid white;\n  }\n  \n  .form_box label {\n    font-weight: 600;\n  }\n  \n  .task_box input {\n    margin-left: auto;\n    width: 75%;\n    padding: 5px;\n  }\n  \n  .form_box input:focus:invalid {\n    border: 2px solid red;\n  }\n  \n  .form_box input:focus:valid,\n  .form_box input:valid {\n    border: 2px solid green;\n  }\n  \n  .add_task_form .submit_box {\n    display: flex;\n    justify-content: center;\n    margin-top: 25px;\n    gap: 20px;\n    width: 100%;\n    grid-column: 1/6;\n    grid-row: 5/6;\n  }\n  \n  .submit_box button {\n    padding: 5px;\n    background-color: rgb(250, 247, 240);\n    font-weight: bold;\n    font-size: 14px;\n    border-style: none;\n    border-radius: 5px;\n    border: 2px solid black;\n    width: 100%;\n  }  "],"sourceRoot":""}]);
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
/* harmony export */   "calendarAllImg": () => (/* reexport default export from named module */ _src_event_note_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "calendarMonthImg": () => (/* reexport default export from named module */ _src_calendar_month_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "calendarTodayImg": () => (/* reexport default export from named module */ _src_calendar_today_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "calendarWeekImg": () => (/* reexport default export from named module */ _src_date_range_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "completedTaskImg": () => (/* reexport default export from named module */ _src_check_circle_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   "completedTaskImgFilled": () => (/* reexport default export from named module */ _src_check_circle_FILL1_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   "delTaskImg": () => (/* reexport default export from named module */ _src_delete_FILL1_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   "editTaskImg": () => (/* reexport default export from named module */ _src_edit_note_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   "gitLogoImg": () => (/* reexport default export from named module */ _src_GitHub_Mark_32px_png__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   "headerImgFile": () => (/* reexport default export from named module */ _src_description_FILL0_wght400_GRAD0_opsz48_1_svg__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "profileImageFile": () => (/* reexport default export from named module */ _src_person_FILL0_wght400_GRAD0_opsz48_2_svg__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "projBtnImageFile": () => (/* reexport default export from named module */ _src_add_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _src_description_FILL0_wght400_GRAD0_opsz48_1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/description_FILL0_wght400_GRAD0_opsz48 (1).svg */ "./src/description_FILL0_wght400_GRAD0_opsz48 (1).svg");
/* harmony import */ var _src_add_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/add_FILL0_wght400_GRAD0_opsz48.svg */ "./src/add_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _src_person_FILL0_wght400_GRAD0_opsz48_2_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/person_FILL0_wght400_GRAD0_opsz48 (2).svg */ "./src/person_FILL0_wght400_GRAD0_opsz48 (2).svg");
/* harmony import */ var _src_calendar_today_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/calendar_today_FILL0_wght400_GRAD0_opsz48.svg */ "./src/calendar_today_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _src_date_range_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/date_range_FILL0_wght400_GRAD0_opsz48.svg */ "./src/date_range_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _src_calendar_month_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/calendar_month_FILL0_wght400_GRAD0_opsz48.svg */ "./src/calendar_month_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _src_event_note_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/event_note_FILL0_wght400_GRAD0_opsz48.svg */ "./src/event_note_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _src_GitHub_Mark_32px_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/GitHub-Mark-32px.png */ "./src/GitHub-Mark-32px.png");
/* harmony import */ var _src_delete_FILL1_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/delete_FILL1_wght400_GRAD0_opsz48.svg */ "./src/delete_FILL1_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _src_check_circle_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/check_circle_FILL0_wght400_GRAD0_opsz48.svg */ "./src/check_circle_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _src_check_circle_FILL1_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/check_circle_FILL1_wght400_GRAD0_opsz48.svg */ "./src/check_circle_FILL1_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _src_edit_note_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/edit_note_FILL0_wght400_GRAD0_opsz48.svg */ "./src/edit_note_FILL0_wght400_GRAD0_opsz48.svg");

















/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images.js */ "./src/images.js");




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

    let headImg = domGenModule.makeEle("img", [["class", "nav_logo"], ["src", _images_js__WEBPACK_IMPORTED_MODULE_1__.headerImgFile]]);
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

    let projBtnImg = domGenModule.makeEle("img", [["src", _images_js__WEBPACK_IMPORTED_MODULE_1__.projBtnImageFile], ["alt", "add note icon"]]);
    projBtnEle.appendChild(projBtnImg);

    let projBtnProfile = domGenModule.makeEle("img", [["src", _images_js__WEBPACK_IMPORTED_MODULE_1__.profileImageFile], ["alt", "profile icon"]]);
    profBoxEle.appendChild(projBtnProfile);

    return profBoxEle;
}

let sideNavBox = () => {
    let sideNav = document.querySelector(".side_nav");

    let navClassArr = ["today_item", "week_item", "month_item", "all_item"];
    let navPText = ["Today's Projects", "This Week's Projects", "This Month's Projects", "All Projects"];
    let imgArr = [_images_js__WEBPACK_IMPORTED_MODULE_1__.calendarTodayImg, _images_js__WEBPACK_IMPORTED_MODULE_1__.calendarWeekImg, _images_js__WEBPACK_IMPORTED_MODULE_1__.calendarMonthImg, _images_js__WEBPACK_IMPORTED_MODULE_1__.calendarAllImg];

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
    let imgFootEle = domGenModule.makeEle("img", [["src", _images_js__WEBPACK_IMPORTED_MODULE_1__.gitLogoImg], ["alt", "GitHub logo of Mark the cat"]]);
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

            newEle.appendChild(labelEle)
            newEle.appendChild(inpEle)
            newEle.appendChild(btnEle)
        } else if (formEleClassArr[i] === "submit_box") {
            let subBtnEle = domGenModule.makeEle("button", ["type", "submit"], "Add Project")
            let cancelBtnEle = domGenModule.makeEle("button", ["type", "button"], "Cancel")

            newEle.appendChild(subBtnEle)
            newEle.appendChild(cancelBtnEle)
        }
        
        formEle.appendChild(newEle)
    }

    formBoxEle.appendChild(formEle)
    formWrap.appendChild(formBoxEle)

    return formBoxEle;
}

let testObjArr = [{
    project_name: "Test Project",
    date_entry: "11/09/2022",
    time_entry: "7:30pm",
    task_num: 2,
    tasks: {
        0: "Take the trash out test",
        1: "Cum"
    },
    prio: 0
},
{
    project_name: "Test Project",
    date_entry: "11/09/2022",
    time_entry: "7:30pm",
    task_num: 2,
    tasks: {
        0: "Take the trash out test",
        1: "Cum"
    },
    prio: 1
}
]


//Generates DOM tasks from an array of Objects.
let mainContBox = (arr) => {
    let mainContEle = document.querySelector(".main_content");

    for (let obj of arr) {
        let todoItem = domGenModule.makeEle("div", ["class", "todo_item"]);
        mainContEle.appendChild(todoItem);

        //Placeholder event listener
        let switchClass = (t) => {
            if (t.srcElement.classList[0] === "todo_item"){
                t.srcElement.classList.remove("todo_item")
                t.srcElement.classList.add("todo_item_full")
            } else if (t.srcElement.classList[0] === "todo_item_full") {
                t.srcElement.classList.remove("todo_item_full")
                t.srcElement.classList.add("todo_item")
            }
        }

        todoItem.addEventListener("click", switchClass)

        
        let taskEle = domGenModule.makeEle("div", ["class", "todo_task"], obj.project_name);
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

        let btnImgArr = [_images_js__WEBPACK_IMPORTED_MODULE_1__.completedTaskImg, _images_js__WEBPACK_IMPORTED_MODULE_1__.editTaskImg, _images_js__WEBPACK_IMPORTED_MODULE_1__.delTaskImg];
        let btnImgAlt = ["task done button", "edit task button", "remove task button"];
        let btnClassArr = ["todo_completed", "todo_edit", "todo_delete"];
        for (let i = 0; i < btnImgArr.length; i++) {
            let newBtn = domGenModule.makeEle("div", ["class", btnClassArr[i]]);
            let btnImgEle = domGenModule.makeEle("img", [["src", btnImgArr[i]], ["alt", btnImgAlt[i]], ["class", `task_image${i}`]]);

            //Placeholder event listener
            let swapImgFun = function (e) {
                let tarEle = e.srcElement;
                
                if (tarEle.src === _images_js__WEBPACK_IMPORTED_MODULE_1__.completedTaskImg) {
                    tarEle.src = _images_js__WEBPACK_IMPORTED_MODULE_1__.completedTaskImgFilled;
                } else if (tarEle.src === _images_js__WEBPACK_IMPORTED_MODULE_1__.completedTaskImgFilled) {
                    tarEle.src = _images_js__WEBPACK_IMPORTED_MODULE_1__.completedTaskImg;
                }
            }

            btnImgEle.addEventListener("click", swapImgFun)

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
    formBox();
    mainContBox(testObjArr);
})();



/***/ }),

/***/ "./src/GitHub-Mark-32px.png":
/*!**********************************!*\
  !*** ./src/GitHub-Mark-32px.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0035c307a36c17babb8d.png";

/***/ }),

/***/ "./src/add_FILL0_wght400_GRAD0_opsz48.svg":
/*!************************************************!*\
  !*** ./src/add_FILL0_wght400_GRAD0_opsz48.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46ae0e09d1132337aa92.svg";

/***/ }),

/***/ "./src/calendar_month_FILL0_wght400_GRAD0_opsz48.svg":
/*!***********************************************************!*\
  !*** ./src/calendar_month_FILL0_wght400_GRAD0_opsz48.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5307428124670cee616e.svg";

/***/ }),

/***/ "./src/calendar_today_FILL0_wght400_GRAD0_opsz48.svg":
/*!***********************************************************!*\
  !*** ./src/calendar_today_FILL0_wght400_GRAD0_opsz48.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7bb1b24db0b61c55b8ff.svg";

/***/ }),

/***/ "./src/check_circle_FILL0_wght400_GRAD0_opsz48.svg":
/*!*********************************************************!*\
  !*** ./src/check_circle_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14bbc5f5696b9b261bfc.svg";

/***/ }),

/***/ "./src/check_circle_FILL1_wght400_GRAD0_opsz48.svg":
/*!*********************************************************!*\
  !*** ./src/check_circle_FILL1_wght400_GRAD0_opsz48.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "756d8a26e3bc5c96a2e0.svg";

/***/ }),

/***/ "./src/date_range_FILL0_wght400_GRAD0_opsz48.svg":
/*!*******************************************************!*\
  !*** ./src/date_range_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7fbf4b82de02c03c144.svg";

/***/ }),

/***/ "./src/delete_FILL1_wght400_GRAD0_opsz48.svg":
/*!***************************************************!*\
  !*** ./src/delete_FILL1_wght400_GRAD0_opsz48.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "762bf58cf42fbafef635.svg";

/***/ }),

/***/ "./src/description_FILL0_wght400_GRAD0_opsz48 (1).svg":
/*!************************************************************!*\
  !*** ./src/description_FILL0_wght400_GRAD0_opsz48 (1).svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0de75bea90bc7148a1c1.svg";

/***/ }),

/***/ "./src/edit_note_FILL0_wght400_GRAD0_opsz48.svg":
/*!******************************************************!*\
  !*** ./src/edit_note_FILL0_wght400_GRAD0_opsz48.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c84a8f3d534fd6301860.svg";

/***/ }),

/***/ "./src/event_note_FILL0_wght400_GRAD0_opsz48.svg":
/*!*******************************************************!*\
  !*** ./src/event_note_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22de37a895c6cf7406b8.svg";

/***/ }),

/***/ "./src/person_FILL0_wght400_GRAD0_opsz48 (2).svg":
/*!*******************************************************!*\
  !*** ./src/person_FILL0_wght400_GRAD0_opsz48 (2).svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "122b5faf1085d00ea03d.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLHNEQUFzRCx5Q0FBeUMsdUNBQXVDLEtBQUssV0FBVyxtQkFBbUIsa0JBQWtCLHdDQUF3QyxLQUFLLGNBQWMsZ0NBQWdDLG9CQUFvQixLQUFLLG9CQUFvQixvQkFBb0Isa0NBQWtDLHFDQUFxQyxtQkFBbUIsS0FBSyxvQkFBb0Isb0JBQW9CLG9CQUFvQix1QkFBdUIsaURBQWlELDBCQUEwQixnQ0FBZ0MscUNBQXFDLEtBQUssdUJBQXVCLHVCQUF1Qix5QkFBeUIsS0FBSyxpQ0FBaUMsb0JBQW9CLG9DQUFvQywwQkFBMEIsdUJBQXVCLEtBQUssb0NBQW9DLG9CQUFvQiwwQkFBMEIsZUFBZSxvQkFBb0IsS0FBSywwQ0FBMEMsZ0NBQWdDLDBCQUEwQix3QkFBd0IsS0FBSywwQ0FBMEMsa0JBQWtCLEtBQUssbUJBQW1CLGdDQUFnQyxvQkFBb0IsOENBQThDLG9DQUFvQyxLQUFLLDhCQUE4QixvQkFBb0IsMEJBQTBCLHFDQUFxQyx5QkFBeUIsMEJBQTBCLGtCQUFrQixLQUFLLCtCQUErQixnQ0FBZ0MsS0FBSyxvQ0FBb0MsMkJBQTJCLDBCQUEwQixvQ0FBb0MsS0FBSyx5QkFBeUIsb0JBQW9CLDRCQUE0QixvQkFBb0IsNEJBQTRCLGtDQUFrQyxLQUFLLHlDQUF5QyxvQ0FBb0MsS0FBSyx1QkFBdUIsb0JBQW9CLDZCQUE2Qix1QkFBdUIsb0JBQW9CLG9CQUFvQixnQkFBZ0IsdUJBQXVCLEtBQUssb0JBQW9CLDhCQUE4Qix3Q0FBd0MseUJBQXlCLHdCQUF3QixnQkFBZ0Isb0JBQW9CLDRDQUE0Qyw0QkFBNEIsMEJBQTBCLGdDQUFnQyx1QkFBdUIsNkJBQTZCLEtBQUssK0JBQStCLG9CQUFvQiwrQkFBK0Isd0JBQXdCLEtBQUssK0JBQStCLHVCQUF1QixLQUFLLCtCQUErQixvQkFBb0IsS0FBSywrQkFBK0Isb0JBQW9CLHVCQUF1Qiw2QkFBNkIsMEJBQTBCLG9DQUFvQyxnQkFBZ0IsdUJBQXVCLEtBQUssZ0RBQWdELGtCQUFrQixtQkFBbUIsS0FBSyw0REFBNEQsa0JBQWtCLG1CQUFtQixLQUFLLG9EQUFvRCxnQ0FBZ0MsS0FBSyx5QkFBeUIsOEJBQThCLHdDQUF3Qyx5QkFBeUIsd0JBQXdCLGdCQUFnQixvQkFBb0IsK0NBQStDLHVDQUF1Qyw4QkFBOEIsMEJBQTBCLGdDQUFnQyx3QkFBd0IsNkJBQTZCLEtBQUssb0NBQW9DLHVCQUF1QixvQkFBb0IsK0JBQStCLDZCQUE2Qix3QkFBd0Isd0JBQXdCLEtBQUssb0NBQW9DLHVCQUF1QixvQkFBb0IsNkJBQTZCLDZCQUE2Qix3QkFBd0IsS0FBSyxvQ0FBb0Msb0JBQW9CLG9DQUFvQywwQkFBMEIsc0JBQXNCLDZCQUE2Qix1QkFBdUIsb0JBQW9CLGdCQUFnQixtQkFBbUIsS0FBSyxvQ0FBb0MsdUJBQXVCLG9CQUFvQiwwQkFBMEIsc0JBQXNCLDJCQUEyQixLQUFLLHVDQUF1QyxvQkFBb0IscURBQXFELGdCQUFnQiwwQkFBMEIsS0FBSyw2Q0FBNkMsa0JBQWtCLG1CQUFtQixLQUFLLDZCQUE2QixvQkFBb0IsOEJBQThCLGtCQUFrQixLQUFLLHdCQUF3QixvQkFBb0IsOEJBQThCLGtCQUFrQixLQUFLLG9CQUFvQix5QkFBeUIsb0JBQW9CLGlEQUFpRCwyQkFBMkIseUJBQXlCLGtCQUFrQixtQkFBbUIsS0FBSyw4QkFBOEIsbUJBQW1CLEtBQUssa0NBQWtDLG9CQUFvQiwwQkFBMEIsMkJBQTJCLDJDQUEyQyxnQkFBZ0IsbUJBQW1CLDhCQUE4QiwwQkFBMEIsb0JBQW9CLEtBQUssdUNBQXVDLG9CQUFvQiw2QkFBNkIsa0JBQWtCLGdCQUFnQix1QkFBdUIsb0JBQW9CLEtBQUssa0NBQWtDLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLHVCQUF1QixvQkFBb0IsS0FBSyxrQ0FBa0Msb0JBQW9CLDZCQUE2QixnQkFBZ0IsdUJBQXVCLG9CQUFvQixLQUFLLHNDQUFzQyxvQkFBb0IsNENBQTRDLGdCQUFnQix1QkFBdUIsb0JBQW9CLDBCQUEwQixLQUFLLDZCQUE2Qix1QkFBdUIsS0FBSyw4QkFBOEIsbUJBQW1CLDJDQUEyQyx3QkFBd0Isc0JBQXNCLHlCQUF5Qix5QkFBeUIsOEJBQThCLGtCQUFrQixLQUFLLGtDQUFrQyxvQkFBb0Isa0JBQWtCLHVCQUF1QixvQkFBb0IsMEJBQTBCLEtBQUssb0JBQW9CLHdCQUF3QixPQUFPLHlCQUF5QixtQkFBbUIseUJBQXlCLDZCQUE2QixvQkFBb0IsS0FBSyxnQ0FBZ0MsOEJBQThCLG1CQUFtQiw4QkFBOEIsS0FBSyx5QkFBeUIsdUJBQXVCLEtBQUsseUJBQXlCLHdCQUF3QixpQkFBaUIsbUJBQW1CLEtBQUssdUNBQXVDLDRCQUE0QixLQUFLLCtEQUErRCw4QkFBOEIsS0FBSyxvQ0FBb0Msb0JBQW9CLDhCQUE4Qix1QkFBdUIsZ0JBQWdCLGtCQUFrQix1QkFBdUIsb0JBQW9CLEtBQUssNEJBQTRCLG1CQUFtQiwyQ0FBMkMsd0JBQXdCLHNCQUFzQix5QkFBeUIseUJBQXlCLDhCQUE4QixrQkFBa0IsT0FBTyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxL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RUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUJBQXlCLHdEQUFnQixFQUFFLG1EQUFXLEVBQUUsa0RBQVU7QUFDbEU7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQSw4SEFBOEgsRUFBRTs7QUFFaEk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsd0RBQWdCO0FBQ25ELGlDQUFpQyw4REFBc0I7QUFDdkQsa0JBQWtCLHdCQUF3Qiw4REFBc0I7QUFDaEUsaUNBQWlDLHdEQUFnQjtBQUNqRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcF90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9saXN0Ly4vc3JjL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmOztcXG4gICAgc3JjOiBsb2NhbCgnQmFybG93LVJlZ3VsYXIudHRmJyk7XFxuICB9XFxuICBcXG4gICoge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XFxuICB9XFxuICBcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGN0YwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgfVxcbiAgXFxuICAubWFpbl93cmFwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLmhlYWRfcGFnZSB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4QThGODtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IGJsYWNrO1xcbiAgfVxcbiAgXFxuICAuaGVhZF9wYWdlIGgxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuaGVhZF9wYWdlIC5wcm9maWxlX2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogNS82O1xcbiAgfVxcbiAgXFxuICAucHJvZmlsZV9ib3ggLmFkZF9wcm9qX2J0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgfVxcbiAgXFxuICAucHJvZmlsZV9ib3ggLmFkZF9wcm9qX2J0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YThkZTY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcbiAgfVxcbiAgXFxuICAucHJvZmlsZV9ib3ggLmFkZF9wcm9qX2J0biA+IGltZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgfVxcbiAgXFxuICAuc2lkZV9uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkNDRUY4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciA1ZnI7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgM3B4IGJsYWNrO1xcbiAgfVxcbiAgLnNpZGVfbmF2IC5zaWRlX25hdl9pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgXFxuICAuc2lkZV9uYXYgPiBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThBOEY4O1xcbiAgfVxcbiAgXFxuICAuc2lkZV9uYXYgLnNpZGVfbmF2X2Zvb3RlciB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggYmxhY2s7ICBcXG4gIH1cXG4gIFxcbiAgLnNpZGVfbmF2ID4gZGl2IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogZGFzaGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIH1cXG4gIFxcbiAgLnNpZGVfbmF2IC5zaWRlX25hdl9mb290ZXJfaXRlbSB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcbiAgXFxuICAubWFpbl9jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDVweCA2cHggM3B4IDJweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDREZDRjY7XFxuICAgIGZsZXgtYmFzaXM6IDUwcHg7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gLnRvZG9fdGFzayB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gLnRvZG9fdGltZSB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gLnRvZG9fYm9keSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gLnRvZG9fYnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtYmFzaXM6IDUwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGdyaWQtY29sdW1uOiA1LzY7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gaW1nLFxcbiAgLnRvZG9faXRlbV9mdWxsIGltZyB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0gaW1nOmhvdmVyLFxcbiAgLnRvZG9faXRlbV9mdWxsIGltZzpob3ZlciB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW06aG92ZXIsXFxuICAudG9kb19pdGVtX2Z1bGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRkZmQ2O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtX2Z1bGwge1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogNXB4IDZweCAzcHggMnB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7ICovXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NERkNGNjtcXG4gICAgZmxleC1iYXNpczogMTc1cHg7XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb190YXNrIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb190aW1lIHtcXG4gICAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb19idG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb19ib2R5IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXG4gICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbV9mdWxsIC50b2RvX2JvZHkgdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5ZnIgMWZyIDlmciAxZnIgOWZyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCAudG9kb19ib2R5IHVsIGlucHV0IHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9fYnRuc19mdWxsIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMzVweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9fYnRucyBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICB9XFxuICBcXG4gIC5mb3JtX3dyYXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg4LCAyMDYsIDI0OCwgMC43KTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fd3JhcCAuZm9ybV9ib3gge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCAuYWRkX3Rhc2tfZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUyLCAxNjgsIDI0OCk7XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDM5OXB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG4gIFxcbiAgLmFkZF90YXNrX2Zvcm0gLnByb2pfbmFtZV9ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgfVxcbiAgXFxuICAuYWRkX3Rhc2tfZm9ybSAuZGF0ZV9ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICB9XFxuICBcXG4gIC5hZGRfdGFza19mb3JtIC50aW1lX2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gIH1cXG4gIFxcbiAgLmFkZF90YXNrX2Zvcm0gLnRhc2tfbnVtX2JveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG4gIFxcbiAgLnRhc2tfbnVtX2JveCBsYWJlbCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICB9XFxuICBcXG4gIC50YXNrX251bV9ib3ggYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNDcsIDI0MCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBcXG4gIC5hZGRfdGFza19mb3JtIC50YXNrX2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuZm9ybV93cmFwIHtcXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IGlucHV0IHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIH1cXG4gIFxcbiAgLnRhc2tfYm94IGlucHV0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IGlucHV0OmZvY3VzOmludmFsaWQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICB9XFxuICBcXG4gIC5mb3JtX2JveCBpbnB1dDpmb2N1czp2YWxpZCxcXG4gIC5mb3JtX2JveCBpbnB1dDp2YWxpZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbiAgfVxcbiAgXFxuICAuYWRkX3Rhc2tfZm9ybSAuc3VibWl0X2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogNS82O1xcbiAgfVxcbiAgXFxuICAuc3VibWl0X2JveCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI0NywgMjQwKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH0gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1C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QUNoQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsV0FBVztFQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7O1xcbiAgICBzcmM6IGxvY2FsKCdCYXJsb3ctUmVndWxhci50dGYnKTtcXG4gIH1cXG4gIFxcbiAgKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcXG4gIH1cXG4gIFxcbiAgYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUY3RjA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICB9XFxuICBcXG4gIC5tYWluX3dyYXAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgXFxuICAuaGVhZF9wYWdlIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThBOEY4O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggYmxhY2s7XFxuICB9XFxuICBcXG4gIC5oZWFkX3BhZ2UgaDEge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5oZWFkX3BhZ2UgLnByb2ZpbGVfYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiA1LzY7XFxuICB9XFxuICBcXG4gIC5wcm9maWxlX2JveCAuYWRkX3Byb2pfYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICB9XFxuICBcXG4gIC5wcm9maWxlX2JveCAuYWRkX3Byb2pfYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhOGRlNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XFxuICB9XFxuICBcXG4gIC5wcm9maWxlX2JveCAuYWRkX3Byb2pfYnRuID4gaW1nIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICB9XFxuICBcXG4gIC5zaWRlX25hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQ0NFRjg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDVmcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAzcHggYmxhY2s7XFxuICB9XFxuICAuc2lkZV9uYXYgLnNpZGVfbmF2X2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBcXG4gIC5zaWRlX25hdiA+IGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OEE4Rjg7XFxuICB9XFxuICBcXG4gIC5zaWRlX25hdiAuc2lkZV9uYXZfZm9vdGVyIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCBibGFjazsgIFxcbiAgfVxcbiAgXFxuICAuc2lkZV9uYXYgPiBkaXYge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiBkYXNoZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgfVxcbiAgXFxuICAuc2lkZV9uYXYgLnNpZGVfbmF2X2Zvb3Rlcl9pdGVtIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuICBcXG4gIC5tYWluX2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW0ge1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogNXB4IDZweCAzcHggMnB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NERkNGNjtcXG4gICAgZmxleC1iYXNpczogNTBweDtcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbSAudG9kb190YXNrIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbSAudG9kb190aW1lIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbSAudG9kb19ib2R5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbSAudG9kb19idG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1iYXNpczogNTBweDtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDUvNjtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbSBpbWcsXFxuICAudG9kb19pdGVtX2Z1bGwgaW1nIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbSBpbWc6aG92ZXIsXFxuICAudG9kb19pdGVtX2Z1bGwgaW1nOmhvdmVyIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbTpob3ZlcixcXG4gIC50b2RvX2l0ZW1fZnVsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZGRmZDY7XFxuICB9XFxuICBcXG4gIC50b2RvX2l0ZW1fZnVsbCB7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiA1cHggNnB4IDNweCAycHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjsgKi9cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RGQ0Y2O1xcbiAgICBmbGV4LWJhc2lzOiAxNzVweDtcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbV9mdWxsIC50b2RvX3Rhc2sge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbV9mdWxsIC50b2RvX3RpbWUge1xcbiAgICBncmlkLWNvbHVtbjogNS82O1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbV9mdWxsIC50b2RvX2J0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICBncmlkLWNvbHVtbjogNS82O1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbV9mdWxsIC50b2RvX2JvZHkge1xcbiAgICBncmlkLWNvbHVtbjogMS81O1xcbiAgICBncmlkLXJvdzogMi80O1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgXFxuICAudG9kb19pdGVtX2Z1bGwgLnRvZG9fYm9keSB1bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDlmciAxZnIgOWZyIDFmciA5ZnI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLnRvZG9faXRlbV9mdWxsIC50b2RvX2JvZHkgdWwgaW5wdXQge1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgfVxcbiAgXFxuICAudG9kb19idG5zX2Z1bGwgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgfVxcbiAgXFxuICAudG9kb19idG5zIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMzVweDtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fd3JhcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODgsIDIwNiwgMjQ4LCAwLjcpO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgXFxuICAuZm9ybV93cmFwIC5mb3JtX2JveCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IC5hZGRfdGFza19mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTIsIDE2OCwgMjQ4KTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMzk5cHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgfVxcbiAgXFxuICAuYWRkX3Rhc2tfZm9ybSAucHJval9uYW1lX2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzY7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICB9XFxuICBcXG4gIC5hZGRfdGFza19mb3JtIC5kYXRlX2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gIH1cXG4gIFxcbiAgLmFkZF90YXNrX2Zvcm0gLnRpbWVfYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLWNvbHVtbjogNC82O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgfVxcbiAgXFxuICAuYWRkX3Rhc2tfZm9ybSAudGFza19udW1fYm94IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcbiAgXFxuICAudGFza19udW1fYm94IGxhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIH1cXG4gIFxcbiAgLnRhc2tfbnVtX2JveCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI0NywgMjQwKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLmFkZF90YXNrX2Zvcm0gLnRhc2tfYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtY29sdW1uOiAxLzY7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBcXG4gIC5mb3JtX3dyYXAge1xcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbiAgfVxcbiAgXFxuICAuZm9ybV9ib3ggaW5wdXQge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgfVxcbiAgXFxuICAuZm9ybV9ib3ggbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgfVxcbiAgXFxuICAudGFza19ib3ggaW5wdXQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcbiAgXFxuICAuZm9ybV9ib3ggaW5wdXQ6Zm9jdXM6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIH1cXG4gIFxcbiAgLmZvcm1fYm94IGlucHV0OmZvY3VzOnZhbGlkLFxcbiAgLmZvcm1fYm94IGlucHV0OnZhbGlkIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxuICB9XFxuICBcXG4gIC5hZGRfdGFza19mb3JtIC5zdWJtaXRfYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtY29sdW1uOiAxLzY7XFxuICAgIGdyaWQtcm93OiA1LzY7XFxuICB9XFxuICBcXG4gIC5zdWJtaXRfYm94IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjQ3LCAyNDApO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfSAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaGVhZGVySW1nRmlsZSBmcm9tIFwiLi4vc3JjL2Rlc2NyaXB0aW9uX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4ICgxKS5zdmdcIlxuaW1wb3J0IHByb2pCdG5JbWFnZUZpbGUgZnJvbSBcIi4uL3NyYy9hZGRfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnXCJcbmltcG9ydCBwcm9maWxlSW1hZ2VGaWxlIGZyb20gXCIuLi9zcmMvcGVyc29uX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4ICgyKS5zdmdcIlxuaW1wb3J0IGNhbGVuZGFyVG9kYXlJbWcgZnJvbSBcIi4uL3NyYy9jYWxlbmRhcl90b2RheV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmdcIlxuaW1wb3J0IGNhbGVuZGFyV2Vla0ltZyBmcm9tIFwiLi4vc3JjL2RhdGVfcmFuZ2VfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnXCJcbmltcG9ydCBjYWxlbmRhck1vbnRoSW1nIGZyb20gXCIuLi9zcmMvY2FsZW5kYXJfbW9udGhfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnXCJcbmltcG9ydCBjYWxlbmRhckFsbEltZyBmcm9tIFwiLi4vc3JjL2V2ZW50X25vdGVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnXCJcbmltcG9ydCBnaXRMb2dvSW1nIGZyb20gXCIuLi9zcmMvR2l0SHViLU1hcmstMzJweC5wbmdcIlxuaW1wb3J0IGRlbFRhc2tJbWcgZnJvbSBcIi4uL3NyYy9kZWxldGVfRklMTDFfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnXCJcbmltcG9ydCBjb21wbGV0ZWRUYXNrSW1nIGZyb20gXCIuLi9zcmMvY2hlY2tfY2lyY2xlX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Z1wiXG5pbXBvcnQgY29tcGxldGVkVGFza0ltZ0ZpbGxlZCBmcm9tIFwiLi4vc3JjL2NoZWNrX2NpcmNsZV9GSUxMMV93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmdcIlxuaW1wb3J0IGVkaXRUYXNrSW1nIGZyb20gXCIuLi9zcmMvZWRpdF9ub3RlX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Z1wiXG5cbmV4cG9ydCB7IGhlYWRlckltZ0ZpbGUsIHByb2pCdG5JbWFnZUZpbGUsIHByb2ZpbGVJbWFnZUZpbGUsIGNhbGVuZGFyQWxsSW1nLFxuICAgICAgICAgY2FsZW5kYXJNb250aEltZywgY2FsZW5kYXJUb2RheUltZywgY2FsZW5kYXJXZWVrSW1nLCBnaXRMb2dvSW1nLFxuICAgICAgICBkZWxUYXNrSW1nLCBjb21wbGV0ZWRUYXNrSW1nLCBlZGl0VGFza0ltZywgY29tcGxldGVkVGFza0ltZ0ZpbGxlZCB9XG5cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaGVhZGVySW1nRmlsZSwgcHJvZmlsZUltYWdlRmlsZSwgcHJvakJ0bkltYWdlRmlsZSwgY2FsZW5kYXJBbGxJbWcsXG4gICAgICAgICBjYWxlbmRhck1vbnRoSW1nLCBjYWxlbmRhclRvZGF5SW1nLCBjYWxlbmRhcldlZWtJbWcsIGdpdExvZ29JbWcsXG4gICAgICAgICBkZWxUYXNrSW1nLCBjb21wbGV0ZWRUYXNrSW1nLCBlZGl0VGFza0ltZywgY29tcGxldGVkVGFza0ltZ0ZpbGxlZCB9IGZyb20gJy4vaW1hZ2VzLmpzJ1xuXG5cbmNvbnN0IGRvbUdlbk1vZHVsZSA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5cbiAgICAvL01ldGhvZCBmb3IgbWFraW5nIG5ldyBlbGVtZW50cy4gQWNjZXB0cyAzIGFyZ3MuIEZpcnN0IGFjY2VwdHMgYSBzdHJpbmcsIDJuZCBpcyBlaXRoZXIgYW4gQXJyYXksIE5lc3RlZCBBcnJheSwgb3IgU3RyaW5nLCBhbmQgM3JkIGFjY2VwdHMgYSBzdHJpbmcuXG4gICAgLy8ybmQgYXJnIHNldHMgYXR0cmlidXRlcyBmb3IgZWxlbWVudHMgaWYgYW4gYXJyYXkgb3IgbmVzdGVkIGFycmF5LCBvciB0ZXh0IGNvbnRlbnQgaWYgaXQncyBhIHN0cmluZy5cbiAgICAvL0FjY2VwdHMgYSAzcmQgYXJndW1lbnQgb25seSBpZiAybmQgYXJndW1lbnQgaXNuJ3QgYW4gYXJyYXkgb3IgbmVzdGVkIGFycmF5LlxuICAgIGNvbnN0IG1ha2VFbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFyZ0FyciA9IFsuLi5hcmd1bWVudHNdO1xuXG4gICAgICAgIGlmICh0eXBlb2YoYXJnQXJyWzBdKSAhPSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHZhbGlkIEhUTUwgZWxlbWVudCBpbiBzdHJpbmcgZm9ybWF0LiBFeGFtcGxlOiAnZGl2JyBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3RWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHthcmdBcnJbMF19YCkgICAgICAgIFxuXG4gICAgICAgIGlmIChhcmdBcnIubGVuZ3RoID49IDIgJiYgdHlwZW9mKGFyZ0FyclsxXSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZihhcmdBcnJbMV1bMF0pID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBhcmdBcnJbMV0pe1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcEFyciA9IFsuLi5hcmdBcnJbMV1baV1dO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZS5zZXRBdHRyaWJ1dGUoLi4udGVtcEFycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdFbGUuc2V0QXR0cmlidXRlKC4uLmFyZ0FyclsxXSk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChhcmdBcnIubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZihhcmdBcnJbMl0pID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBuZXdFbGUudGV4dENvbnRlbnQgPSBhcmdBcnJbMl07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiSW52YWxpZCBBcmd1bWVudCBUeXBlLiBUaGUgdGhpcmQgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYXJnQXJyLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YoYXJnQXJyWzFdKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbmV3RWxlLnRleHRDb250ZW50ID0gYXJnQXJyWzFdO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0VsZTsgXG4gICAgICAgIH0gZWxzZSBpZiAoYXJnQXJyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ld0VsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlRoZSBzZWNvbmQgYXJndW1lbnQgYWNjZXB0cyBhbiBhcnJheSBvZiBhcnJheXMgY29udGFpbmluZyAyIHN0cmluZ3Mgb3IgYW4gYXJyYXkgb2YgMiBzdHJpbmdzLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdFbGU7ICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbWFrZUVsZSwgYm9keSB9O1xufSkoKTtcblxubGV0IGRvbUdlbk1haW4gPSAoKSA9PiB7ICAgXG5cbiAgICBsZXQgbWFpbldyYXAgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImRpdlwiLCBbXCJjbGFzc1wiLCBcIm1haW5fd3JhcFwiXSk7XG4gICAgZG9tR2VuTW9kdWxlLmJvZHkuYXBwZW5kQ2hpbGQobWFpbldyYXApO1xuXG4gICAgbGV0IGhlYWRlckVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiaGVhZGVyXCIsIFtcImNsYXNzXCIsIFwiaGVhZF9wYWdlXCJdKTtcbiAgICBtYWluV3JhcC5hcHBlbmRDaGlsZChoZWFkZXJFbGUpO1xuXG4gICAgbGV0IHNpZGVOYXZFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImRpdlwiLCBbXCJjbGFzc1wiLCBcInNpZGVfbmF2XCJdKTtcbiAgICBtYWluV3JhcC5hcHBlbmRDaGlsZChzaWRlTmF2RWxlKTtcblxuICAgIGxldCBtYWluQ29uRWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJkaXZcIiwgW1wiY2xhc3NcIiwgXCJtYWluX2NvbnRlbnRcIl0pO1xuICAgIG1haW5XcmFwLmFwcGVuZENoaWxkKG1haW5Db25FbGUpO1xuXG4gICAgbGV0IGZvcm1XcmFwRWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJkaXZcIiwgW1wiY2xhc3NcIiwgXCJmb3JtX3dyYXBcIl0pO1xuICAgIG1haW5XcmFwLmFwcGVuZENoaWxkKGZvcm1XcmFwRWxlKTsgICAgXG5cbiAgICByZXR1cm4gbWFpbldyYXA7XG59O1xuXG5sZXQgaGVhZGVyRWxlQm94PSAoKSA9PiB7XG4gICAgbGV0IGhlYWRlckVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZF9wYWdlXCIpO1xuXG4gICAgbGV0IGhlYWRJbWcgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImltZ1wiLCBbW1wiY2xhc3NcIiwgXCJuYXZfbG9nb1wiXSwgW1wic3JjXCIsIGhlYWRlckltZ0ZpbGVdXSk7XG4gICAgaGVhZGVyRWxlLmFwcGVuZENoaWxkKGhlYWRJbWcpO1xuXG4gICAgbGV0IGgxRWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJoMVwiLCBcIk15IFRvIERvIExpc3RcIik7XG4gICAgaGVhZGVyRWxlLmFwcGVuZENoaWxkKGgxRWxlKTtcblxuICAgIGxldCBwcm9mQm94RWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJkaXZcIiwgW1wiY2xhc3NcIiwgXCJwcm9maWxlX2JveFwiXSk7XG4gICAgaGVhZGVyRWxlLmFwcGVuZENoaWxkKHByb2ZCb3hFbGUpO1xuXG4gICAgcmV0dXJuIGhlYWRlckVsZTtcbn1cblxubGV0IHByb2ZpbGVCb3ggPSAoKSA9PiB7XG4gICAgbGV0IHByb2ZCb3hFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfYm94XCIpO1xuXG4gICAgbGV0IHByb2pCdG5FbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImRpdlwiLCBbXCJjbGFzc1wiLCBcImFkZF9wcm9qX2J0blwiXSk7XG4gICAgcHJvZkJveEVsZS5hcHBlbmRDaGlsZChwcm9qQnRuRWxlKTtcblxuICAgIGxldCBwcm9qQnRuRGl2ID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJkaXZcIiwgXCJBZGQgYSBuZXcgcHJvamVjdFwiKTtcbiAgICBwcm9qQnRuRWxlLmFwcGVuZENoaWxkKHByb2pCdG5EaXYpO1xuXG4gICAgbGV0IHByb2pCdG5JbWcgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImltZ1wiLCBbW1wic3JjXCIsIHByb2pCdG5JbWFnZUZpbGVdLCBbXCJhbHRcIiwgXCJhZGQgbm90ZSBpY29uXCJdXSk7XG4gICAgcHJvakJ0bkVsZS5hcHBlbmRDaGlsZChwcm9qQnRuSW1nKTtcblxuICAgIGxldCBwcm9qQnRuUHJvZmlsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiaW1nXCIsIFtbXCJzcmNcIiwgcHJvZmlsZUltYWdlRmlsZV0sIFtcImFsdFwiLCBcInByb2ZpbGUgaWNvblwiXV0pO1xuICAgIHByb2ZCb3hFbGUuYXBwZW5kQ2hpbGQocHJvakJ0blByb2ZpbGUpO1xuXG4gICAgcmV0dXJuIHByb2ZCb3hFbGU7XG59XG5cbmxldCBzaWRlTmF2Qm94ID0gKCkgPT4ge1xuICAgIGxldCBzaWRlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlX25hdlwiKTtcblxuICAgIGxldCBuYXZDbGFzc0FyciA9IFtcInRvZGF5X2l0ZW1cIiwgXCJ3ZWVrX2l0ZW1cIiwgXCJtb250aF9pdGVtXCIsIFwiYWxsX2l0ZW1cIl07XG4gICAgbGV0IG5hdlBUZXh0ID0gW1wiVG9kYXkncyBQcm9qZWN0c1wiLCBcIlRoaXMgV2VlaydzIFByb2plY3RzXCIsIFwiVGhpcyBNb250aCdzIFByb2plY3RzXCIsIFwiQWxsIFByb2plY3RzXCJdO1xuICAgIGxldCBpbWdBcnIgPSBbY2FsZW5kYXJUb2RheUltZywgY2FsZW5kYXJXZWVrSW1nLCBjYWxlbmRhck1vbnRoSW1nLCBjYWxlbmRhckFsbEltZ107XG5cbiAgICBmb3IgKGxldCBpIGluIG5hdkNsYXNzQXJyKSB7XG5cbiAgICAgICAgbGV0IG5ld0VsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtcImNsYXNzXCIsIG5hdkNsYXNzQXJyW2ldXSk7XG5cbiAgICAgICAgbGV0IHNpZGVOYXZFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImRpdlwiLCBbXCJjbGFzc1wiLCBcInNpZGVfbmF2X2l0ZW1cIl0pO1xuICAgICAgICBuZXdFbGUuYXBwZW5kQ2hpbGQoc2lkZU5hdkVsZSk7XG5cbiAgICAgICAgbGV0IHBFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcInBcIiwgbmF2UFRleHRbaV0pO1xuICAgICAgICBzaWRlTmF2RWxlLmFwcGVuZENoaWxkKHBFbGUpO1xuXG4gICAgICAgIGxldCBpbWdFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImltZ1wiLCBbXCJzcmNcIiwgaW1nQXJyW2ldXSk7XG4gICAgICAgIHNpZGVOYXZFbGUuYXBwZW5kQ2hpbGQoaW1nRWxlKTtcblxuICAgICAgICBzaWRlTmF2LmFwcGVuZENoaWxkKG5ld0VsZSk7XG4gICAgfVxuXG4gICAgbGV0IHNpZGVGb290RWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJkaXZcIiwgW1wiY2xhc3NcIiwgXCJzaWRlX25hdl9mb290ZXJcIl0pO1xuICAgIGxldCBmb290RWxlSXRlbSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtcImNsYXNzXCIsIFwic2lkZV9uYXZfaXRlbSBzaWRlX25hdl9mb290ZXJfaXRlbVwiXSk7XG4gICAgbGV0IGFGb290RWxlID0gIGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiYVwiLCBbW1wiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9Kb3NoRFQ5MDBcIl0sIFtcInRhcmdldFwiLCBcIiNcIl1dKTtcbiAgICBsZXQgaW1nRm9vdEVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiaW1nXCIsIFtbXCJzcmNcIiwgZ2l0TG9nb0ltZ10sIFtcImFsdFwiLCBcIkdpdEh1YiBsb2dvIG9mIE1hcmsgdGhlIGNhdFwiXV0pO1xuICAgIGxldCBwRm9vdEVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwicFwiLCBcIkNyZWF0ZWQgYnkgLSBEYXZpZCBULlwiKTtcblxuICAgIGFGb290RWxlLmFwcGVuZENoaWxkKGltZ0Zvb3RFbGUpO1xuICAgIGZvb3RFbGVJdGVtLmFwcGVuZENoaWxkKGFGb290RWxlKTtcbiAgICBmb290RWxlSXRlbS5hcHBlbmRDaGlsZChwRm9vdEVsZSk7XG4gICAgc2lkZUZvb3RFbGUuYXBwZW5kQ2hpbGQoZm9vdEVsZUl0ZW0pO1xuICAgIHNpZGVOYXYuYXBwZW5kQ2hpbGQoc2lkZUZvb3RFbGUpO1xuXG4gICAgcmV0dXJuIHNpZGVOYXY7XG59XG5cbmxldCBmb3JtQm94ID0gKCkgPT4ge1xuICAgIGxldCBmb3JtV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV93cmFwXCIpXG5cbiAgICBsZXQgZm9ybUJveEVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtcImNsYXNzXCIsIFwiZm9ybV9ib3hcIl0pXG4gICAgbGV0IGZvcm1FbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImZvcm1cIiwgW1tcImNsYXNzXCIsIFwiYWRkX3Rhc2tfZm9ybVwiXSxbXCJhY3Rpb25cIiwgXCIgXCJdLFtcIm1ldGhvZFwiLCBcInBvc3RcIl1dKSAgICBcbiAgICBcbiAgICBsZXQgZm9ybUVsZUNsYXNzQXJyID0gW1wicHJval9uYW1lX2JveFwiLCBcImRhdGVfYm94XCIsIFwidGltZV9ib3hcIiwgXCJ0YXNrX251bV9ib3hcIiwgXCJ0YXNrX2JveFwiLCBcInN1Ym1pdF9ib3hcIl1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUVsZUNsYXNzQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuZXdFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImRpdlwiLCBbXCJjbGFzc1wiLCBmb3JtRWxlQ2xhc3NBcnJbaV1dKVxuICAgICAgICBcblxuICAgICAgICBpZiAoZm9ybUVsZUNsYXNzQXJyW2ldID09PSBcInByb2pfbmFtZV9ib3hcIil7XG4gICAgICAgICAgICBsZXQgbGFiZWxFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImxhYmVsXCIsIFtcImZvclwiLCBcInByb2plY3RfbmFtZVwiXSwgXCJQcm9qZWN0IE5hbWUgKlwiKVxuICAgICAgICAgICAgbGV0IGlucEVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiaW5wdXRcIiwgW1tcInR5cGVcIiwgXCJ0ZXh0XCJdLCBbXCJpZFwiLCBcInByb2plY3RfbmFtZVwiXSwgW1wibmFtZVwiLCBcInByb2plY3RfbmFtZVwiXSxcbiAgICAgICAgICAgICBbXCJwbGFjZWhvbGRlclwiLCBcIk15IE5ldyBQcm9qZWN0XCJdLCBbXCJtaW5sZW5ndGhcIiwgXCI0XCJdLCBbXCJtYXhsZW5ndGhcIiwgXCIzMFwiXSxbXCJyZXF1aXJlZFwiLCBcIlwiXV0pO1xuXG4gICAgICAgICAgICBuZXdFbGUuYXBwZW5kQ2hpbGQobGFiZWxFbGUpO1xuICAgICAgICAgICAgbmV3RWxlLmFwcGVuZENoaWxkKGlucEVsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKGZvcm1FbGVDbGFzc0FycltpXSA9PT0gXCJkYXRlX2JveFwiKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImxhYmVsXCIsIFtcImZvclwiLCBcImRhdGVfZW50cnlcIl0sIFwiRGF0ZSAqXCIpXG4gICAgICAgICAgICBsZXQgaW5wRWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJpbnB1dFwiLCBbW1widHlwZVwiLCBcImRhdGVcIl0sIFtcIm5hbWVcIiwgXCJkYXRlX2VudHJ5XCJdLCBbXCJpZFwiLCBcImRhdGVfZW50cnlcIl0sIFtcInJlcXVpcmVkXCIsIFwiXCJdXSlcblxuICAgICAgICAgICAgbmV3RWxlLmFwcGVuZENoaWxkKGxhYmVsRWxlKVxuICAgICAgICAgICAgbmV3RWxlLmFwcGVuZENoaWxkKGlucEVsZSlcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtRWxlQ2xhc3NBcnJbaV0gPT09IFwidGltZV9ib3hcIikge1xuICAgICAgICAgICAgbGV0IGxhYmVsRWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJsYWJlbFwiLCBbXCJmb3JcIiwgXCJ0aW1lX2VudHJ5XCJdLCBcIlRpbWUgKlwiKVxuICAgICAgICAgICAgbGV0IGlucEVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiaW5wdXRcIiwgW1tcInR5cGVcIiwgXCJ0aW1lXCJdLCBbXCJuYW1lXCIsIFwidGltZV9lbnRyeVwiXSwgW1wiaWRcIiwgXCJ0aW1lX2VudHJ5XCJdLCBbXCJyZXF1aXJlZFwiLCBcIlwiXV0pXG5cbiAgICAgICAgICAgIG5ld0VsZS5hcHBlbmRDaGlsZChsYWJlbEVsZSlcbiAgICAgICAgICAgIG5ld0VsZS5hcHBlbmRDaGlsZChpbnBFbGUpXG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybUVsZUNsYXNzQXJyW2ldID09PSBcInRhc2tfbnVtX2JveFwiKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxFbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImxhYmVsXCIsIFtcImZvclwiLCBcInRhc2tfbnVtXCJdLCBcIk51bWJlciBvZiB0YXNrcyAqXCIpXG4gICAgICAgICAgICBsZXQgaW5wRWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJpbnB1dFwiLCBbW1widHlwZVwiLCBcIm51bWJlclwiXSwgW1wibmFtZVwiLCBcInRhc2tfbnVtXCJdLCBbXCJpZFwiLCBcInRhc2tfbnVtXCJdLCBbXCJtaW5cIiwgXCIxXCJdLCBbXCJtYXhcIiwgXCIxMFwiXSwgW1widmFsdWVcIiwgXCIxXCJdXSlcbiAgICAgICAgICAgIGxldCBidG5FbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImJ1dHRvblwiLCBbXCJ0eXBlXCIsIFwiYnV0dG9uXCJdLCBcIkNvbmZpcm1cIilcblxuICAgICAgICAgICAgbmV3RWxlLmFwcGVuZENoaWxkKGxhYmVsRWxlKVxuICAgICAgICAgICAgbmV3RWxlLmFwcGVuZENoaWxkKGlucEVsZSlcbiAgICAgICAgICAgIG5ld0VsZS5hcHBlbmRDaGlsZChidG5FbGUpXG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybUVsZUNsYXNzQXJyW2ldID09PSBcInN1Ym1pdF9ib3hcIikge1xuICAgICAgICAgICAgbGV0IHN1YkJ0bkVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiYnV0dG9uXCIsIFtcInR5cGVcIiwgXCJzdWJtaXRcIl0sIFwiQWRkIFByb2plY3RcIilcbiAgICAgICAgICAgIGxldCBjYW5jZWxCdG5FbGUgPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImJ1dHRvblwiLCBbXCJ0eXBlXCIsIFwiYnV0dG9uXCJdLCBcIkNhbmNlbFwiKVxuXG4gICAgICAgICAgICBuZXdFbGUuYXBwZW5kQ2hpbGQoc3ViQnRuRWxlKVxuICAgICAgICAgICAgbmV3RWxlLmFwcGVuZENoaWxkKGNhbmNlbEJ0bkVsZSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9ybUVsZS5hcHBlbmRDaGlsZChuZXdFbGUpXG4gICAgfVxuXG4gICAgZm9ybUJveEVsZS5hcHBlbmRDaGlsZChmb3JtRWxlKVxuICAgIGZvcm1XcmFwLmFwcGVuZENoaWxkKGZvcm1Cb3hFbGUpXG5cbiAgICByZXR1cm4gZm9ybUJveEVsZTtcbn1cblxubGV0IHRlc3RPYmpBcnIgPSBbe1xuICAgIHByb2plY3RfbmFtZTogXCJUZXN0IFByb2plY3RcIixcbiAgICBkYXRlX2VudHJ5OiBcIjExLzA5LzIwMjJcIixcbiAgICB0aW1lX2VudHJ5OiBcIjc6MzBwbVwiLFxuICAgIHRhc2tfbnVtOiAyLFxuICAgIHRhc2tzOiB7XG4gICAgICAgIDA6IFwiVGFrZSB0aGUgdHJhc2ggb3V0IHRlc3RcIixcbiAgICAgICAgMTogXCJDdW1cIlxuICAgIH0sXG4gICAgcHJpbzogMFxufSxcbntcbiAgICBwcm9qZWN0X25hbWU6IFwiVGVzdCBQcm9qZWN0XCIsXG4gICAgZGF0ZV9lbnRyeTogXCIxMS8wOS8yMDIyXCIsXG4gICAgdGltZV9lbnRyeTogXCI3OjMwcG1cIixcbiAgICB0YXNrX251bTogMixcbiAgICB0YXNrczoge1xuICAgICAgICAwOiBcIlRha2UgdGhlIHRyYXNoIG91dCB0ZXN0XCIsXG4gICAgICAgIDE6IFwiQ3VtXCJcbiAgICB9LFxuICAgIHByaW86IDFcbn1cbl1cblxuXG4vL0dlbmVyYXRlcyBET00gdGFza3MgZnJvbSBhbiBhcnJheSBvZiBPYmplY3RzLlxubGV0IG1haW5Db250Qm94ID0gKGFycikgPT4ge1xuICAgIGxldCBtYWluQ29udEVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9jb250ZW50XCIpO1xuXG4gICAgZm9yIChsZXQgb2JqIG9mIGFycikge1xuICAgICAgICBsZXQgdG9kb0l0ZW0gPSBkb21HZW5Nb2R1bGUubWFrZUVsZShcImRpdlwiLCBbXCJjbGFzc1wiLCBcInRvZG9faXRlbVwiXSk7XG4gICAgICAgIG1haW5Db250RWxlLmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcblxuICAgICAgICAvL1BsYWNlaG9sZGVyIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGxldCBzd2l0Y2hDbGFzcyA9ICh0KSA9PiB7XG4gICAgICAgICAgICBpZiAodC5zcmNFbGVtZW50LmNsYXNzTGlzdFswXSA9PT0gXCJ0b2RvX2l0ZW1cIil7XG4gICAgICAgICAgICAgICAgdC5zcmNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2RvX2l0ZW1cIilcbiAgICAgICAgICAgICAgICB0LnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvZG9faXRlbV9mdWxsXCIpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHQuc3JjRWxlbWVudC5jbGFzc0xpc3RbMF0gPT09IFwidG9kb19pdGVtX2Z1bGxcIikge1xuICAgICAgICAgICAgICAgIHQuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidG9kb19pdGVtX2Z1bGxcIilcbiAgICAgICAgICAgICAgICB0LnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvZG9faXRlbVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdG9kb0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaENsYXNzKVxuXG4gICAgICAgIFxuICAgICAgICBsZXQgdGFza0VsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtcImNsYXNzXCIsIFwidG9kb190YXNrXCJdLCBvYmoucHJvamVjdF9uYW1lKTtcbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodGFza0VsZSk7XG5cbiAgICAgICAgbGV0IHRvZG9Cb2R5ID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJkaXZcIiwgW1wiY2xhc3NcIiwgXCJ0b2RvX2JvZHlcIl0pO1xuICAgICAgICBsZXQgdG9kb0JvZHlMaXN0ID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJ1bFwiKTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9iai50YXNrX251bTsgaisrKXsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdGFza0lucHV0RWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJpbnB1dFwiLCBbW1widHlwZVwiLCBcImNoZWNrYm94XCJdLCBbXCJuYW1lXCIsIGB0YXNrXyR7an1gXSwgW1wiaWRcIiwgYHRhc2tfaWRfJHtqfWBdXSk7XG4gICAgICAgICAgICBsZXQgdGFza0xhYmVsRWxlID0gIGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwibGFiZWxcIiwgW1wiZm9yXCIsIGB0YXNrXyR7an1gXSwgb2JqLnRhc2tzW2pdKTtcblxuICAgICAgICAgICAgdG9kb0JvZHlMaXN0LmFwcGVuZENoaWxkKHRhc2tJbnB1dEVsZSk7XG4gICAgICAgICAgICB0b2RvQm9keUxpc3QuYXBwZW5kQ2hpbGQodGFza0xhYmVsRWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZG9Cb2R5LmFwcGVuZENoaWxkKHRvZG9Cb2R5TGlzdCk7XG4gICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9Cb2R5KTtcblxuICAgICAgICBsZXQgdGltZUVsZSA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtcImNsYXNzXCIsIFwidG9kb190aW1lXCJdLCBvYmoudGltZV9lbnRyeSk7XG4gICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRpbWVFbGUpO1xuXG4gICAgICAgIGxldCB0YXNrQnRuQm94RWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJkaXZcIiwgW1wiY2xhc3NcIiwgXCJ0b2RvX2J0bnNcIl0pO1xuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0YXNrQnRuQm94RWxlKTtcblxuICAgICAgICBsZXQgYnRuSW1nQXJyID0gW2NvbXBsZXRlZFRhc2tJbWcsIGVkaXRUYXNrSW1nLCBkZWxUYXNrSW1nXTtcbiAgICAgICAgbGV0IGJ0bkltZ0FsdCA9IFtcInRhc2sgZG9uZSBidXR0b25cIiwgXCJlZGl0IHRhc2sgYnV0dG9uXCIsIFwicmVtb3ZlIHRhc2sgYnV0dG9uXCJdO1xuICAgICAgICBsZXQgYnRuQ2xhc3NBcnIgPSBbXCJ0b2RvX2NvbXBsZXRlZFwiLCBcInRvZG9fZWRpdFwiLCBcInRvZG9fZGVsZXRlXCJdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ0bkltZ0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5ld0J0biA9IGRvbUdlbk1vZHVsZS5tYWtlRWxlKFwiZGl2XCIsIFtcImNsYXNzXCIsIGJ0bkNsYXNzQXJyW2ldXSk7XG4gICAgICAgICAgICBsZXQgYnRuSW1nRWxlID0gZG9tR2VuTW9kdWxlLm1ha2VFbGUoXCJpbWdcIiwgW1tcInNyY1wiLCBidG5JbWdBcnJbaV1dLCBbXCJhbHRcIiwgYnRuSW1nQWx0W2ldXSwgW1wiY2xhc3NcIiwgYHRhc2tfaW1hZ2Uke2l9YF1dKTtcblxuICAgICAgICAgICAgLy9QbGFjZWhvbGRlciBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgbGV0IHN3YXBJbWdGdW4gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGxldCB0YXJFbGUgPSBlLnNyY0VsZW1lbnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHRhckVsZS5zcmMgPT09IGNvbXBsZXRlZFRhc2tJbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyRWxlLnNyYyA9IGNvbXBsZXRlZFRhc2tJbWdGaWxsZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJFbGUuc3JjID09PSBjb21wbGV0ZWRUYXNrSW1nRmlsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhckVsZS5zcmMgPSBjb21wbGV0ZWRUYXNrSW1nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnRuSW1nRWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2FwSW1nRnVuKVxuXG4gICAgICAgICAgICBuZXdCdG4uYXBwZW5kQ2hpbGQoYnRuSW1nRWxlKTtcbiAgICAgICAgICAgIHRhc2tCdG5Cb3hFbGUuYXBwZW5kQ2hpbGQobmV3QnRuKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfSAgICBcblxuICAgIHJldHVybiBtYWluQ29udEVsZTtcbn1cblxuKGZ1bmN0aW9uKCkgeyAgICBcbiAgICBkb21HZW5NYWluKCk7XG4gICAgaGVhZGVyRWxlQm94KCk7XG4gICAgcHJvZmlsZUJveCgpO1xuICAgIHNpZGVOYXZCb3goKTtcbiAgICBmb3JtQm94KCk7XG4gICAgbWFpbkNvbnRCb3godGVzdE9iakFycik7XG59KSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=