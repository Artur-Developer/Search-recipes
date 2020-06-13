import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import { elements, render_loader, clearLoader } from './views/base';
require('./bootstrap');

/*** Global state of the app
- Search object
- Current recipe object
- Shop list
- Favorites recipes
*/
const state = {};

/**
 * Search controller
 */
const searchController = async() => {

    // Get query from input
    const query = searchView.getInput(); //TODO

    if (query) {
        // Save search model into state
        state.search = new Search(query);

        //Prepare UI to render
        searchView.clearInput();
        searchView.clearResult();
        searchView.clearCountRecipes();
        searchView.clearErrorMessage();

        render_loader(elements.search_parent);

        //Get a result
        const resolve = await state.search.getResults();

        if (!resolve) {
            searchView.render_error(query);
        }
        clearLoader();

        //Render result
        searchView.count_recipes(state.search.result.length);
        searchView.clearErrorMessage();
        searchView.render(state.search.result);
    }
};

elements.search_form.addEventListener('submit', e => {
    e.preventDefault();
    searchController();
});

//paginate
elements.results_page.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResult();
        searchView.render(state.search.result, goToPage);
    }
});

const recipeController = async() => {
    const id = window.location.hash.replace('#', '');

    if (id) {

        //prepare UI
        recipeView.clear_recipe();
        render_loader(elements.recipe);

        state.recipe = new Recipe(id);

        if (state.search) searchView.hightLightSelectedRecipe(id);

        await state.recipe.getRecipe();
        state.recipe.parseIngredients();

        state.recipe.calcCookTime();
        state.recipe.calcServings();

        //render recipe
        clearLoader();
        recipeView.renderRecipe(state.recipe);
    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, recipeController));


elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease *')) {
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.update_servings_ingredients(state.recipe);
        }
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        state.recipe.updateServings('inc');
        recipeView.update_servings_ingredients(state.recipe);
    }
    console.log(state.recipe);
});
