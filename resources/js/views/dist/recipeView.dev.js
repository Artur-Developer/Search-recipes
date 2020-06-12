"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderRecipe = exports.clear_recipe = void 0;

var _base = require("./base");

var clear_recipe = function clear_recipe() {
  _base.elements.recipe.innerHTML = '';
};

exports.clear_recipe = clear_recipe;

var create_ingredients = function create_ingredients(ingredient) {
  return "\n    <li class=\"recipe__item\">\n        <i class=\"fa fa-check\"></i>\n        <div class=\"recipe__count\">".concat(ingredient.count, "</div>\n        <div class=\"recipe__ingredient\">\n            <span class=\"recipe__unit\">").concat(ingredient.unit, "</span>\n            ").concat(ingredient.ingredient, "\n        </div>\n    </li>");
};

var renderRecipe = function renderRecipe(recipe) {
  var template_recipe = "\n            <figure class=\"recipe__fig\">\n                <img src=\"".concat(recipe.img, "\" alt=\"").concat(recipe.title, "}\" class=\"recipe__img\">\n                <h1 class=\"recipe__title\">\n                    <span>").concat(recipe.title, "</span>\n                </h1>\n            </figure>\n            <div class=\"recipe__details\">\n                <div class=\"recipe__info\">\n                    <i class=\"fa fa-clock\"></i>\n                    <span class=\"recipe__info-data recipe__info-data--minutes\">").concat(recipe.time, "</span>\n                    <span class=\"recipe__info-text\"> minutes</span>\n                </div>\n                <div class=\"recipe__info\">\n                    <svg class=\"recipe__info-icon\">\n                        <use href=\"img/icons.svg#icon-man\"></use>\n                    </svg>\n                    <span class=\"recipe__info-data recipe__info-data--people\">").concat(recipe.servings, "</span>\n                    <span class=\"recipe__info-text\"> servings</span>\n\n                    <div class=\"recipe__info-buttons\">\n                        <button class=\"btn-tiny\">\n                            <svg>\n                                <use href=\"./img/icons.svg#icon-circle-with-minus\"></use>\n                            </svg>\n                        </button>\n                        <button class=\"btn-tiny\">\n                            <svg>\n                                <use href=\"img/icons.svg#icon-circle-with-plus\"></use>\n                            </svg>\n                        </button>\n                    </div>\n\n                </div>\n                <button class=\"recipe__love\">\n                    <i class=\"like_icon far fa-heart\"></i>\n                </button>\n            </div>\n\n            <div class=\"recipe__ingredients\">\n                <ul class=\"recipe__ingredient-list\">\n                    ").concat(recipe.ingredients.map(function (el) {
    return create_ingredients(el);
  }), "\n                </ul>\n\n                <button class=\"btn-small recipe__btn\">\n                    <i class=\"fa fa-shopping-cart\"></i>\n                    <span>Add to shopping list</span>\n                </button>\n            </div>\n\n            <div class=\"recipe__directions\">\n                <h2 class=\"heading-2\">How to cook it</h2>\n                <p class=\"recipe__directions-text\">\n                    This recipe was carefully designed and tested by\n                    <span class=\"recipe__by\">").concat(recipe.publisher, "</span>. Please check out directions at their website.\n                </p>\n                <a class=\"btn-small recipe__btn\" href=\"").concat(recipe.publisher_url, "}\" target=\"_blank\">\n                    <span>Directions</span>\n                    <i class=\"fa fa-caret-right\"></i>\n                </a>\n            </div>");

  _base.elements.recipe.insertAdjacentHTML('afterbegin', template_recipe);
};

exports.renderRecipe = renderRecipe;