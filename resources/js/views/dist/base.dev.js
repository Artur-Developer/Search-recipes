"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearLoader = exports.render_loader = exports.elementsString = exports.elements = void 0;
var elements = {
  search_form: document.querySelector('.search'),
  //search form
  search_input: document.querySelector('.search__field'),
  //input for search
  search_res_list: document.querySelector('.results__list'),
  //result list to render searched items
  search_parent: document.querySelector('.results'),
  //parent section for redner
  single_recipe: document.querySelector('.recipe'),
  //section for render single recipe
  results_page: document.querySelector('.results__pages'),
  // for paginate buttons
  recipe: document.querySelector('.recipe') //recipe sections


  search_parent: document.querySelector('.results'),
  //parent section for redner
  single_recipe: document.querySelector('.recipe') //section for render single recipe

};
exports.elements = elements;
var elementsString = {
  loader: 'custom_loader',
  count_recipe: 'count_recipes',
  error_search: 'error_search'

};
exports.elementsString = elementsString;

var render_loader = function render_loader(parent) {
  var template_loader = "\n            <div class=\"custom_loader\">\n                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\n                    <rect fill=\"#FBDB89\" width=\"3\" height=\"100\" transform=\"translate(0) rotate(180 3 50)\">\n                    <animate\n                        attributeName=\"height\"\n                        attributeType=\"XML\"\n                        dur=\"1s\"\n                        values=\"30; 100; 30\"\n                        repeatCount=\"indefinite\"/>\n                    </rect>\n                    <rect x=\"17\" fill=\"#FBDB89\" width=\"3\" height=\"100\" transform=\"translate(0) rotate(180 20 50)\">\n                        <animate\n                            attributeName=\"height\"\n                            attributeType=\"XML\"\n                            dur=\"1s\"\n                            values=\"30; 100; 30\"\n                            repeatCount=\"indefinite\"\n                            begin=\"0.1s\"/>\n                    </rect>\n                    <rect x=\"40\" fill=\"#FBDB89\" width=\"3\" height=\"100\" transform=\"translate(0) rotate(180 40 50)\">\n                        <animate\n                            attributeName=\"height\"\n                            attributeType=\"XML\"\n                            dur=\"1s\"\n                            values=\"30; 100; 30\"\n                            repeatCount=\"indefinite\"\n                            begin=\"0.3s\"/>\n                    </rect>\n                    <rect x=\"60\" fill=\"#FBDB89\" width=\"3\" height=\"100\" transform=\"translate(0) rotate(180 58 50)\">\n                        <animate\n                            attributeName=\"height\"\n                            attributeType=\"XML\"\n                            dur=\"1s\"\n                            values=\"30; 100; 30\"\n                            repeatCount=\"indefinite\"\n                            begin=\"0.5s\"/>\n                    </rect>\n                    <rect x=\"80\" fill=\"#FBDB89\" width=\"3\" height=\"100\" transform=\"translate(0) rotate(180 76 50)\">\n                        <animate\n                            attributeName=\"height\"\n                            attributeType=\"XML\"\n                            dur=\"1s\"\n                            values=\"30; 100; 30\"\n                            repeatCount=\"indefinite\"\n                            begin=\"0.1s\"/>\n                    </rect>\n                </svg>\n            </div>";
  parent.insertAdjacentHTML('afterbegin', template_loader);
};
exports.elements = elements;
var elementsString = {
  loader: 'custom_loader',
  count_recipe: 'count_recipes',
  error_search: 'error_search'
};
exports.elementsString = elementsString;

var render_loader = function render_loader(parent) {
  var template_loader = "\n            <div class=\"custom_loader\">\n                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\n                    <rect fill=\"#FBDB89\" width=\"3\" height=\"100\" transform=\"translate(0) rotate(180 3 50)\">\n                    <animate\n                        attributeName=\"height\"\n                        attributeType=\"XML\"\n                        dur=\"1s\"\n                        values=\"30; 100; 30\"\n                        repeatCount=\"indefinite\"/>\n                    </rect>\n                    <rect x=\"17\" fill=\"#FBDB89\" width=\"3\" height=\"100\" transform=\"translate(0) rotate(180 20 50)\">\n                        <animate\n                            attributeName=\"height\"\n                            attributeType=\"XML\"\n                            dur=\"1s\"\n                            values=\"30; 100; 30\"\n                            repeatCount=\"indefinite\"\n                            begin=\"0.1s\"/>\n                    </rect>\n                    <rect x=\"40\" fill=\"#FBDB89\" width=\"3\" height=\"100\" transform=\"translate(0) rotate(180 40 50)\">\n                        <animate\n                            attributeName=\"height\"\n                            attributeType=\"XML\"\n                            dur=\"1s\"\n                            values=\"30; 100; 30\"\n                            repeatCount=\"indefinite\"\n                            begin=\"0.3s\"/>\n                    </rect>\n                    <rect x=\"60\" fill=\"#FBDB89\" width=\"3\" height=\"100\" transform=\"translate(0) rotate(180 58 50)\">\n                        <animate\n                            attributeName=\"height\"\n                            attributeType=\"XML\"\n                            dur=\"1s\"\n                            values=\"30; 100; 30\"\n                            repeatCount=\"indefinite\"\n                            begin=\"0.5s\"/>\n                    </rect>\n                    <rect x=\"80\" fill=\"#FBDB89\" width=\"3\" height=\"100\" transform=\"translate(0) rotate(180 76 50)\">\n                        <animate\n                            attributeName=\"height\"\n                            attributeType=\"XML\"\n                            dur=\"1s\"\n                            values=\"30; 100; 30\"\n                            repeatCount=\"indefinite\"\n                            begin=\"0.1s\"/>\n                    </rect>\n                </svg>\n            </div>";
  parent.insertAdjacentHTML('afterbegin', template_loader);
};

exports.render_loader = render_loader;

var clearLoader = function clearLoader() {
  var loader = document.querySelector(".".concat(elementsString.loader));
  if (loader) loader.parentNode.removeChild(loader);
};

exports.clearLoader = clearLoader;