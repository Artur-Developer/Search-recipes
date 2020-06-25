"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=exports.create_paginate=exports.render_error=exports.count_recipes=exports.clearErrorMessage=exports.clearCountRecipes=exports.clearResult=exports.clearInput=exports.getInput=void 0;var _base=require("./base"),getInput=function(){return _base.elements.search_input.value};exports.getInput=getInput;var clearInput=function(){return _base.elements.search_input.value=""};exports.clearInput=clearInput;var clearResult=function(){_base.elements.search_res_list.innerHTML="",_base.elements.results_page.innerHTML=""};exports.clearResult=clearResult;var clearCountRecipes=function(){var e=document.querySelector(".".concat(_base.elementsString.count_recipe));e&&e.parentNode.removeChild(e)};exports.clearCountRecipes=clearCountRecipes;var clearErrorMessage=function(){var e=document.querySelector(".".concat(_base.elementsString.error_search));e&&e.parentNode.removeChild(e)};exports.clearErrorMessage=clearErrorMessage;var limitRecipeTitle=function(e,t){var r=1<arguments.length&&void 0!==t?t:17,n=[];return e.length>r?(e.split(" ").reduce(function(e,t){return e+t.length<=r&&n.push(t),e+t.length},0),"".concat(n.join(" ")," ...")):e},renderRecipe=function(e){var t='<li>\n            <a class="results__link" href="#'.concat(e.recipe_id,'">\n                <figure class="results__fig">\n                    <img src="').concat(e.image_url,'" alt="').concat(e.title,'">\n                </figure>\n                <div class="results__data">\n                    <h4 class="results__name">').concat(limitRecipeTitle(e.title),'</h4>\n                    <p class="results__author">').concat(e.publisher,"</p>\n                </div>\n            </a>\n        </li>\n    ");_base.elements.search_res_list.insertAdjacentHTML("beforeend",t)},count_recipes=function(e){var t='\n        <div class="count_recipes">\n            <h1>Search results: <span>'.concat(e,"</span> </h1>\n        </div>");_base.elements.search_parent.insertAdjacentHTML("afterbegin",t)};exports.count_recipes=count_recipes;var render_error=function(e){var t='\n    <div class="error_search">\n        <h1>Nothing search by: <span>'.concat(e,"</span> </h1>\n    </div>");_base.elements.search_parent.insertAdjacentHTML("afterbegin",t)};exports.render_error=render_error;var template_paginate_button=function(e,t){var r='\n    <button class="btn-inline results__btn--'.concat("prev"===t?"prev":"next",'" data-goto="').concat("prev"===t?e-1:e+1,'">\n        <i class="fa fa-').concat("prev"===t?"arrow-left":"arrow-right",'"></i>\n        <span>Page ').concat("prev"===t?e-1:e+1,"</span>\n    </button>");_base.elements.results_page.insertAdjacentHTML("afterbegin",r)},create_paginate=function(e,t,r){var n=Math.ceil(t/r);1===e&&1<n?template_paginate_button(e,"next"):e<n?"".concat(template_paginate_button(e,"prev"),"\n                ").concat(template_paginate_button(e,"next")):e===n&&1<n&&template_paginate_button(e,"prev")};exports.create_paginate=create_paginate;var render=function(e,t,r){var n=1<arguments.length&&void 0!==t?t:1,a=2<arguments.length&&void 0!==r?r:10,s=(n-1)*a,c=n*a;e.slice(s,c).forEach(renderRecipe),create_paginate(n,e.length,a)};exports.render=render;