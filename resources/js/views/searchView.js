import { elements } from './base';

export const getInput = () => elements.search_input.value; //assign value from input

export const clearInput = () => elements.search_input.value = ''; //clear input

export const clearResult = () => elements.search_res_list.innerHTML = ''; //clear result list

/**
 * Function that splice title, if his length > 17
 *
 * @param {string} title
 * @param {num} limit
 */
const limitRecipeTitle = (title, limit = 17) => {
    const newTitleArr = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitleArr.push(cur);
            }
            return acc + cur.length;
        }, 0);
        return `${newTitleArr.join(' ')} ...`;
    }
    return title;
}

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
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
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
