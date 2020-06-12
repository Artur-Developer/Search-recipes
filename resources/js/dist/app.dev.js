"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _Search = _interopRequireDefault(require("./models/Search"));

var _Recipe = _interopRequireDefault(require("./models/Recipe"));

var searchView = _interopRequireWildcard(require("./views/searchView"));

var recipeView = _interopRequireWildcard(require("./views/recipeView"));

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
/**
 * Search controller
 */

var searchController = function searchController() {
  var query, resolve;
  return regeneratorRuntime.async(function searchController$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // Get query from input
          query = searchView.getInput(); //TODO

          if (!query) {
            _context.next = 16;
            break;
          }

          // Save search model into state
          state.search = new _Search["default"](query); //Prepare UI to render

          searchView.clearInput();
          searchView.clearResult();
          searchView.clearCountRecipes();
          searchView.clearErrorMessage();
          (0, _base.render_loader)(_base.elements.search_parent); //Get a result

          _context.next = 10;
          return regeneratorRuntime.awrap(state.search.getResults());

        case 10:
          resolve = _context.sent;

          if (!resolve) {
            searchView.render_error(query);
          }

          (0, _base.clearLoader)(); //Render result

          searchView.count_recipes(state.search.result.length);
          searchView.clearErrorMessage();
          searchView.render(state.search.result);

        case 16:
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

_base.elements.results_page.addEventListener('click', function (e) {
  var btn = e.target.closest('.btn-inline');

  if (btn) {
    var goToPage = parseInt(btn.dataset["goto"], 10);
    searchView.clearResult();
    searchView.render(state.search.result, goToPage);
  }
});

var recipeController = function recipeController() {
  var id;
  return regeneratorRuntime.async(function recipeController$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = window.location.hash.replace('#', '');

          if (!id) {
            _context2.next = 12;
            break;
          }

          //prepare UI
          recipeView.clear_recipe();
          (0, _base.render_loader)(_base.elements.recipe);
          state.recipe = new _Recipe["default"](id);
          _context2.next = 7;
          return regeneratorRuntime.awrap(state.recipe.getRecipe());

        case 7:
          state.recipe.parseIngredients();
          state.recipe.calcCookTime();
          state.recipe.calcServings(); //render recipe

          (0, _base.clearLoader)();
          recipeView.renderRecipe(state.recipe);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  });
};

['hashchange', 'load'].forEach(function (event) {
  return window.addEventListener(event, recipeController);
});