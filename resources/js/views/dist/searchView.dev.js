"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = exports.create_paginate = exports.render_error = exports.count_recipes = exports.clearErrorMessage = exports.clearCountRecipes = exports.clearResult = exports.clearInput = exports.getInput = void 0;

var _base = require("./base");

var getInput = function getInput() {
  return _base.elements.search_input.value;
}; //assign value from input


exports.getInput = getInput;

var clearInput = function clearInput() {
  return _base.elements.search_input.value = '';
}; //clear input


exports.clearInput = clearInput;

var clearResult = function clearResult() {
  _base.elements.search_res_list.innerHTML = '';
  _base.elements.results_page.innerHTML = '';
}; //clear result list


exports.clearResult = clearResult;

var clearCountRecipes = function clearCountRecipes() {
  var count_rec = document.querySelector(".".concat(_base.elementsString.count_recipe));
  if (count_rec) count_rec.parentNode.removeChild(count_rec);
};

exports.clearCountRecipes = clearCountRecipes;

var clearErrorMessage = function clearErrorMessage() {
  var err_msg = document.querySelector(".".concat(_base.elementsString.error_search));
  if (err_msg) err_msg.parentNode.removeChild(err_msg);
};
/**
 * Function that splice title, if his length > 17
 *
 * @param {string} title
 * @param {num} limit
 */


exports.clearErrorMessage = clearErrorMessage;

var limitRecipeTitle = function limitRecipeTitle(title) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 17;
  var newTitleArr = [];

  if (title.length > limit) {
    title.split(' ').reduce(function (acc, cur) {
      if (acc + cur.length <= limit) {
        newTitleArr.push(cur);
      }

      return acc + cur.length;
    }, 0);
    return "".concat(newTitleArr.join(' '), " ...");
  }

  return title;
};
/**
 * Method for prepare render recipes
 */


var renderRecipe = function renderRecipe(recipe) {
  var template_recipe = "<li>\n            <a class=\"results__link\" href=\"#".concat(recipe.recipe_id, "\">\n                <figure class=\"results__fig\">\n                    <img src=\"").concat(recipe.image_url, "\" alt=\"").concat(recipe.title, "\">\n                </figure>\n                <div class=\"results__data\">\n                    <h4 class=\"results__name\">").concat(limitRecipeTitle(recipe.title), "</h4>\n                    <p class=\"results__author\">").concat(recipe.publisher, "</p>\n                </div>\n            </a>\n        </li>\n    ");

  _base.elements.search_res_list.insertAdjacentHTML('beforeend', template_recipe);
};

var count_recipes = function count_recipes(num) {
  var template_count_recipes = "\n        <div class=\"count_recipes\">\n            <h1>Search results: <span>".concat(num, "</span> </h1>\n        </div>");

  _base.elements.search_parent.insertAdjacentHTML("afterbegin", template_count_recipes);
};

exports.count_recipes = count_recipes;

var render_error = function render_error(val) {
  var template_error = "\n    <div class=\"error_search\">\n        <h1>Nothing search by: <span>".concat(val, "</span> </h1>\n    </div>");

  _base.elements.search_parent.insertAdjacentHTML("afterbegin", template_error);
};

exports.render_error = render_error;

var template_paginate_button = function template_paginate_button(page, type) {
  var template_button = "\n    <button class=\"btn-inline results__btn--".concat(type === 'prev' ? 'prev' : 'next', "\" data-goto=\"").concat(type === 'prev' ? page - 1 : page + 1, "\">\n        <i class=\"fa fa-").concat(type === 'prev' ? 'arrow-left' : 'arrow-right', "\"></i>\n        <span>Page ").concat(type === 'prev' ? page - 1 : page + 1, "</span>\n    </button>");

  _base.elements.results_page.insertAdjacentHTML('afterbegin', template_button);
};

var create_paginate = function create_paginate(page, numOfResults, resPerPage) {
  var pages = Math.ceil(numOfResults / resPerPage);
  var button;

  if (page === 1 && pages > 1) {
    button = template_paginate_button(page, 'next');
  } else if (page < pages) {
    button = "".concat(template_paginate_button(page, 'prev'), "\n                ").concat(template_paginate_button(page, 'next'));
  } else if (page === pages && pages > 1) {
    button = template_paginate_button(page, 'prev');
  }
};
/**
 * Render all searched recipes
 */


exports.create_paginate = create_paginate;

var render = function render(recipes) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var resPerPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var start = (page - 1) * resPerPage;
  var end = page * resPerPage;
  recipes.slice(start, end).forEach(renderRecipe);
  create_paginate(page, recipes.length, resPerPage);
};

exports.render = render;