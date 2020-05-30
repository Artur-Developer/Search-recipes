"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = exports.clearResult = exports.clearInput = exports.getInput = void 0;

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
  return _base.elements.search_res_list.innerHTML = '';
}; //clear result list


exports.clearResult = clearResult;

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
 *
 *  Method for prepare render recipes
 */


var renderRecipe = function renderRecipe(recipe) {
  var template_recipe = "<li>\n            <a class=\"results__link\" href=\"#".concat(recipe.recipe_id, "\">\n                <figure class=\"results__fig\">\n                    <img src=\"").concat(recipe.image_url, "\" alt=\"").concat(recipe.title, "\">\n                </figure>\n                <div class=\"results__data\">\n                    <h4 class=\"results__name\">").concat(limitRecipeTitle(recipe.title), "</h4>\n                    <p class=\"results__author\">").concat(recipe.publisher, "</p>\n                </div>\n            </a>\n        </li>\n    ");

  _base.elements.search_res_list.insertAdjacentHTML('beforeend', template_recipe);
};
/***
 *
 * Render all searched recipes
 *
 */


var render = function render(recipes) {
  recipes.forEach(renderRecipe);
};

exports.render = render;