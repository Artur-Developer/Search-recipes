import { elements } from './base';
import { limitRecipeTitle } from './searchView';

export const toggleFavoriteBtn = isFavorite => {
    if (isFavorite) {
        document.querySelector('.recipe__love').classList.toggle('fas');
    } else {
        document.querySelector('.recipe__love').classList.remove('fas')
        document.querySelector('.recipe__love').classList.add('far');
    }
}

export const render_favorites = favorite => {
    const template_favorite = `
    <li>
        <a class="likes__link" href="#${favorite.id}">
            <figure class="likes__fig">
                <img src="${favorite.img}" alt="${favorite.title}">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${limitRecipeTitle(favorite.title)}</h4>
                <p class="likes__author">${favorite.publisher}</p>
            </div>
        </a>
    </li>`;
    elements.favorites_list.insertAdjacentHTML('beforeend', template_favorite);
};

export const delete_favorite = id => {
    const el = document.querySelector(`a[href*="${id}"]`).parentElement;
    if (el) el.parentElement.removeChild(el);
};
