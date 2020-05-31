"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _Search = _interopRequireDefault(require("./models/Search"));

var searchView = _interopRequireWildcard(require("./views/searchView"));

var _base = require("./views/base");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('./bootstrap');
/*** Global state of the app
- Search object
- Current recipe object
- Shop list
- Favorites recipes
*/


var state = {};

var searchController = function searchController() {
  var query;
  return regeneratorRuntime.async(function searchController$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // Get query from input
          query = searchView.getInput(); //TODO

          if (!query) {
            _context.next = 8;
            break;
          }

          // Save search model into state
          state.search = new _Search["default"](query); //Prepare UI to render

          searchView.clearInput();
          searchView.clearResult(); //Get a result

          _context.next = 7;
          return regeneratorRuntime.awrap(state.search.getRecipe());

        case 7:
          //Render result
          searchView.render(state.search.result);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

_base.elements.search_form.addEventListener('submit', function (e) {
  e.preventDefault();
  searchController();
});