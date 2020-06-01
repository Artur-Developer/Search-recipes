import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, render_loader, clearLoader } from './views/base';
require('./bootstrap');

/*** Global state of the app
- Search object
- Current recipe object
- Shop list
- Favorites recipes
*/
const state = {};

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

        render_loader(elements.search_parent);

        //Get a result
        const resolve = await state.search.getRecipe();

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
