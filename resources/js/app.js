import Search from './models/Search';
import Recipe from './models/Recipe';
import ShopList from './models/ShopList';
import Favorite from './models/Favorite';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as shopListView from './views/shopListView';
import * as favoriteView from './views/favoriteView';
import { elements, render_loader, clearLoader } from './views/base';

require('./bootstrap');

/*** Global state of the app
- Search object
- Current recipe object
- Shop list
- Favorites recipes
*/
const state = {};
window.state = state;

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
        //searchView.clearInput();
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

//setup for seaech by key press
let typingInterval;
let doneTypingInterval = 1000;

elements.search_input.addEventListener('keyup', e => {
    clearTimeout(typingInterval);
    if (elements.search_input.value) {
        typingInterval = setTimeout(searchController, doneTypingInterval);
        searchView.show_clear_icon();
    }
});


//clear value from input field
elements.clear_input.addEventListener('click', () => {
    searchView.clearInput();
    searchView.close_clear_icon();
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

/**
 * RECIPE CONTROLLER
 */
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
        recipeView.renderRecipe(
            state.recipe,
            state.favorites.isFavorite(id)
        );
    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, recipeController));


const shopListController = () => {
    if (!state.shopList) state.shopList = new ShopList();

    state.recipe.ingredients.forEach(el => {
        const item = state.shopList.addItem(el.count, el.unit, el.ingredient);
        shopListView.render_item(item);
    });
}

elements.shop_list.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    if (e.target.matches('.shopping__delete, .shopping__delete *')) {
        state.shopList.deleteItem(id);

        //remove from UI
        shopListView.delete_item(id);
    } else if (e.target.matches('.shopping__count-value')) {
        const val = parseFloat(e.target.value, 10);

        state.shopList.updateСount(id, val);
    }
});


window.addEventListener('load', () => {
    state.favorites = new Favorite();
    state.favorites.readStorage();

    state.favorites.favorites.forEach(el => favoriteView.render_favorites(el));
});

const favoritesController = () => {
    if (!state.favorites) state.favorites = new Favorite();

    const currentId = state.recipe.id;
    if (!state.favorites.isFavorite(currentId)) {
        const newFavorite = state.favorites.addFavorite(
            currentId,
            state.recipe.title,
            state.recipe.img,
            state.recipe.publisher
        );
        favoriteView.toggleFavoriteBtn(true);
        favoriteView.render_favorites(newFavorite);
    } else {
        state.favorites.deleteFavorite(currentId);
        favoriteView.toggleFavoriteBtn(false);
        favoriteView.delete_favorite(currentId);
    }
};

elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease *')) {
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.update_servings_ingredients(state.recipe);
        }
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        state.recipe.updateServings('inc');
        recipeView.update_servings_ingredients(state.recipe);
    } else if (e.target.matches('.recipe__btn-add, .recipe__btn-add *')) {
        shopListController();
    } else if (e.target.matches('.recipe__love, .recipe__love *')) {
        favoritesController();
    }
});
