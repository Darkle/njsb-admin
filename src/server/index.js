/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.lsc");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/expressApp.lsc":
/*!***********************************!*\
  !*** ./src/server/expressApp.lsc ***!
  \***********************************/
/*! exports provided: expressInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expressInit", function() { return expressInit; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes_indexRouter_lsc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/indexRouter.lsc */ "./src/server/routes/indexRouter.lsc");
/* harmony import */ var _routes_emailExample_lsc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/emailExample.lsc */ "./src/server/routes/emailExample.lsc");
/* harmony import */ var _routes_admin_lsc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/admin.lsc */ "./src/server/routes/admin.lsc");
/* harmony import */ var _routes_login_lsc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/login.lsc */ "./src/server/routes/login.lsc");
/* harmony import */ var _utils_lsc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils.lsc */ "./src/server/utils.lsc");
/* harmony import */ var _logging_logger_lsc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logging/logger.lsc */ "./src/server/logging/logger.lsc");










const PORT = process.env.PORT || 8086;

function expressInit(expressApp) {
  expressApp.set('views', path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, 'views'));
  expressApp.set('view engine', 'pug');
  expressApp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());
  expressApp.use(_logging_logger_lsc__WEBPACK_IMPORTED_MODULE_9__["logger"].errorHandler());
  expressApp.use( true ? morgan__WEBPACK_IMPORTED_MODULE_2___default()('dev') : undefined);
  expressApp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.json());
  expressApp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({
    extended: false
  })); // expressApp.use(cookieParser())

  expressApp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, 'public')));
  expressApp.use('/', _routes_indexRouter_lsc__WEBPACK_IMPORTED_MODULE_4__["indexRouter"]);
  expressApp.use('/example', _routes_emailExample_lsc__WEBPACK_IMPORTED_MODULE_5__["emailExampleRouter"]);
  expressApp.use('/admin', _routes_admin_lsc__WEBPACK_IMPORTED_MODULE_6__["adminRouter"]);
  expressApp.use('/login', _routes_login_lsc__WEBPACK_IMPORTED_MODULE_7__["loginRouter"]);
  if (true) __webpack_require__(/*! express-debug */ "express-debug")(expressApp); // catch 404

  expressApp.use(function (req, res) {
    res.status(404);
    return res.render('404');
  }); // error handler

  expressApp.use(function (err, req, res) {
    res.status(err.status || 500);
    return res.render('error', {
      error:  true ? err : undefined,
      message:  true ? err.message : undefined
    });
  });
  return expressApp.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
    return console.log('Press Ctrl+C to quit.');
  });
}



/***/ }),

/***/ "./src/server/index.lsc":
/*!******************************!*\
  !*** ./src/server/index.lsc ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _expressApp_lsc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expressApp.lsc */ "./src/server/expressApp.lsc");
__webpack_require__(/*! dotenv */ "dotenv").config({
  path: __webpack_require__(/*! path */ "path").resolve(__dirname, '..', '..', 'config', '.env')
});



const expressApp = express__WEBPACK_IMPORTED_MODULE_0___default()();
Object(_expressApp_lsc__WEBPACK_IMPORTED_MODULE_1__["expressInit"])(expressApp);

/***/ }),

/***/ "./src/server/logging/logger.lsc":
/*!***************************************!*\
  !*** ./src/server/logging/logger.lsc ***!
  \***************************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var _lightscript_runtime_hasProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lightscript/runtime/hasProps */ "@lightscript/runtime/hasProps");
/* harmony import */ var _lightscript_runtime_hasProps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lightscript_runtime_hasProps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rollbar */ "rollbar");
/* harmony import */ var rollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);




const hasProps = __webpack_require__(/*! @lightscript/runtime/hasProps */ "@lightscript/runtime/hasProps");

let rollbar = {}; // eslint-disable-line fp/no-let, fp/no-nil

const logger = new Proxy(rollbar, {
  // eslint-disable-line fp/no-proxy
  get: function (target, property) {
    if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(rollbar)) {
      rollbar = new rollbar__WEBPACK_IMPORTED_MODULE_1___default.a({
        // eslint-disable-line fp/no-mutation
        accessToken: process.env.ROLLBAR_NODE_TOKEN,
        captureUncaught: true,
        captureUnhandledRejections: true
      });
      return rollbar[property];
    } else {
      return rollbar[property];
    }
  }
});

function f(x) {
  if (_lightscript_runtime_hasProps__WEBPACK_IMPORTED_MODULE_0___default()(x, "y")) {
    const y = x.y;
    return y;
  }
}



/***/ }),

/***/ "./src/server/routes/admin.lsc":
/*!*************************************!*\
  !*** ./src/server/routes/admin.lsc ***!
  \*************************************/
/*! exports provided: adminRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminRouter", function() { return adminRouter; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);

const adminRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
adminRouter.get('/', function (req, res) {
  //@TODO - if not logged in, redirect to login page
  return res.render('admin');
});


/***/ }),

/***/ "./src/server/routes/emailExample.lsc":
/*!********************************************!*\
  !*** ./src/server/routes/emailExample.lsc ***!
  \********************************************/
/*! exports provided: emailExampleRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailExampleRouter", function() { return emailExampleRouter; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);

const emailExampleRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
emailExampleRouter.get('/', function (req, res) {
  return res.render('emailExample');
});


/***/ }),

/***/ "./src/server/routes/indexRouter.lsc":
/*!*******************************************!*\
  !*** ./src/server/routes/indexRouter.lsc ***!
  \*******************************************/
/*! exports provided: indexRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexRouter", function() { return indexRouter; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);

const indexRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
indexRouter.get('/', function (req, res) {
  return res.render('index');
});


/***/ }),

/***/ "./src/server/routes/login.lsc":
/*!*************************************!*\
  !*** ./src/server/routes/login.lsc ***!
  \*************************************/
/*! exports provided: loginRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRouter", function() { return loginRouter; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var timeproxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! timeproxy */ "timeproxy");
/* harmony import */ var timeproxy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(timeproxy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-rate-limit */ "express-rate-limit");
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_rate_limit__WEBPACK_IMPORTED_MODULE_2__);



const loginLimiter = express_rate_limit__WEBPACK_IMPORTED_MODULE_2___default()({
  windowMs: timeproxy__WEBPACK_IMPORTED_MODULE_1___default.a.ONE_MINUTE,
  max: 5
});
const loginRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
loginRouter.get('/', loginLimiter, function (req, res) {
  return res.render('login');
});
loginRouter.post('/', loginLimiter, function (req, res) {
  // redirect to admin page if login successfull
  // @TODO do I need to prepend the redirect with req.baseUrl here?
  return res.redirect('/admin');
});


/***/ }),

/***/ "./src/server/utils.lsc":
/*!******************************!*\
  !*** ./src/server/utils.lsc ***!
  \******************************/
/*! exports provided: noop, identity, pipe, compose, curry, curryRight, range, rangeIncEnd, safeFind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return curry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curryRight", function() { return curryRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeIncEnd", function() { return rangeIncEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeFind", function() { return safeFind; });
/* harmony import */ var folktale_maybe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! folktale/maybe */ "folktale/maybe");
/* harmony import */ var folktale_maybe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(folktale_maybe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



const noop = function () {
  return;
}; // eslint-disable-line fp/no-nil


function identity(param) {
  return param;
}

function pipe(...fns) {
  return function (param) {
    return fns.reduce(function (result, fn) {
      return fn(result);
    }, param);
  };
} // eslint-disable-line fp/no-rest-parameters


function compose(...fns) {
  return function (value) {
    return fns.reduceRight(function (acc, current) {
      return current(acc);
    }, value);
  };
} // eslint-disable-line fp/no-rest-parameters


function curry(f) {
  return function (...a) {
    return function (...b) {
      return f(...(a === void 0 ? [] : a), ...(b === void 0 ? [] : b));
    };
  };
} // eslint-disable-line fp/no-rest-parameters


function curryRight(f) {
  return function (...a) {
    return function (...b) {
      return f(...(b === void 0 ? [] : b), ...(a === void 0 ? [] : a));
    };
  };
} // eslint-disable-line fp/no-rest-parameters


function range(start, end) {
  return Array.from({
    length: end - start
  }, function (v, k) {
    return k + start;
  });
}

function rangeIncEnd(start, end) {
  return Array.from({
    length: end - start + 1
  }, function (v, k) {
    return k + start;
  });
} //includes end number - useful if you actually want the numbers in the range instead of just the index range
//If _.get(obj, path) returns null or undefined then Maybe.fromNullable returns Maybe.Nothing(), otherwise it returns Maybe.Just(value)
// Maybe.fromNullable(_.get(obj, path))


function safeFind(collection = [], predicate) {
  return folktale_maybe__WEBPACK_IMPORTED_MODULE_0___default.a.fromNullable(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(collection, predicate));
}



/***/ }),

/***/ "@lightscript/runtime/hasProps":
/*!************************************************!*\
  !*** external "@lightscript/runtime/hasProps" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@lightscript/runtime/hasProps");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-debug":
/*!********************************!*\
  !*** external "express-debug" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-debug");

/***/ }),

/***/ "express-rate-limit":
/*!*************************************!*\
  !*** external "express-rate-limit" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-rate-limit");

/***/ }),

/***/ "folktale/maybe":
/*!*********************************!*\
  !*** external "folktale/maybe" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("folktale/maybe");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "rollbar":
/*!**************************!*\
  !*** external "rollbar" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rollbar");

/***/ }),

/***/ "timeproxy":
/*!****************************!*\
  !*** external "timeproxy" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("timeproxy");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map