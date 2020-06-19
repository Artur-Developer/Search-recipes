import { elements, elementsString } from './base';

export const getInput = () => elements.search_input.value; //assign value from input

export const clearInput = () => elements.search_input.value = ''; //clear input

export const clearResult = () => {
    elements.search_res_list.innerHTML = '';
    elements.results_page.innerHTML = '';
};

export const show_clear_icon = () => {
    elements.clear_input.style.display = 'block';
};

export const close_clear_icon = () => {
    elements.clear_input.style.display = 'none';
};

export const hightLightSelectedRecipe = id => {
    const arrLinks = Array.from(document.querySelectorAll('.results__link'));

    arrLinks.forEach(el => {
        el.classList.remove('results__link--active');
    });
    document.querySelector(`a[href*="${id}"]`).classList.add('results__link--active');
};

export const clearCountRecipes = () => {
    const count_rec = document.querySelector(`.${elementsString.count_recipe}`);
    if (count_rec) count_rec.parentNode.removeChild(count_rec);
};

export const clearErrorMessage = () => {
    const err_msg = document.querySelector(`.${elementsString.error_search}`);
    if (err_msg) err_msg.parentNode.removeChild(err_msg);
};

/**
 * Function that splice title, if his length > 17
 *
 * @param {string} title
 * @param {num} limit
 */
export const limitRecipeTitle = (title, limit = 17) => {
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
 * Method for prepare render recipes
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

export const count_recipes = num => {
    const template_count_recipes = `
        <div class="count_recipes">
            <h1>Search results: <span>${num}</span> </h1>
        </div>`;
    elements.search_parent.insertAdjacentHTML("afterbegin", template_count_recipes);
};

export const render_error = val => {
    const template_error = `
    <div class="error_search">
        <h1>Nothing search by: <span>${val}</span> </h1>
    </div>`;
    elements.search_parent.insertAdjacentHTML("afterbegin", template_error);
};


const template_paginate_button = (page, type) => {

    const template_button = `
    <button class="btn-inline results__btn--${type === 'prev' ? 'prev' : 'next'}" data-goto="${type === 'prev' ? page - 1: page + 1}">
        <i class="fa fa-${type === 'prev' ? 'arrow-left' : 'arrow-right'}"></i>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
    </button>`;

    elements.results_page.insertAdjacentHTML('afterbegin', template_button);
};

export const create_paginate = (page, numOfResults, resPerPage) => {
    const pages = Math.ceil(numOfResults / resPerPage);

    let button;
    if (page === 1 && pages > 1) {
        button = template_paginate_button(page, 'next');
    } else if (page < pages) {
        button = `${template_paginate_button(page, 'prev')}
                ${template_paginate_button(page, 'next')}`;
    } else if (page === pages && pages > 1) {
        button = template_paginate_button(page, 'prev');
    }
};


/**
 * Render all searched recipes
 */
export const render = (recipes, page = 1, resPerPage = 10) => {
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
    recipes.slice(start, end).forEach(renderRecipe);
    create_paginate(page, recipes.length, resPerPage);
};
