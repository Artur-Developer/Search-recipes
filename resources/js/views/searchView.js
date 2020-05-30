import { elements } from './base';

export const getInput = () => elements.search_input.value; //assign value from input

export const clearInput = () => elements.search_input.value = ''; //clear input

export const clearResult = () => elements.search_res_list.innerHTML = ''; //clear result list


/**
 *
 *  Method for prepare render recipes
 */
const renderRecipe = recipe => {

    const template_recipe =
        `<li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${recipe.title}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
    elements.search_res_list.insertAdjacentHTML('beforeend', template_recipe);
};


/***
 *
 * Render all searched recipes
 *
 */
export const render = recipes => {
    recipes.forEach(renderRecipe);
};