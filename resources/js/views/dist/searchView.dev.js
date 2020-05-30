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

/**
 *
 *  Method for prepare render recipes
 */


exports.clearResult = clearResult;

var renderRecipe = function renderRecipe(recipe) {
  var template_recipe = "<li>\n            <a class=\"results__link\" href=\"#".concat(recipe.recipe_id, "\">\n                <figure class=\"results__fig\">\n                    <img src=\"").concat(recipe.image_url, "\" alt=\"").concat(recipe.title, "\">\n                </figure>\n                <div class=\"results__data\">\n                    <h4 class=\"results__name\">").concat(recipe.title, "</h4>\n                    <p class=\"results__author\">").concat(recipe.publisher, "</p>\n                </div>\n            </a>\n        </li>\n    ");

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