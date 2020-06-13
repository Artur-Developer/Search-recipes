import { elements } from './base';
import { Fraction } from 'fractional';

export const clear_recipe = () => {
    elements.recipe.innerHTML = '';
};

const formatCount = count => {
    if (count) {
        const [int, dec] = count.toString().split('.').map(el => parseInt(el, 10));

        if (!dec) return count;
        if (int === 0) {
            const fr = new Fraction(count);
            return `${fr.numerator}/${fr.denominator}`;
        } else {
            const fr = new Fraction(count - int);
            return `${int} ${fr.numerator}/${fr.denominator}`;
        }
    }
    return '?';
};

const create_ingredients = ingredient => `
    <li class="recipe__item">
        <i class="fas fa-check-circle"></i>
        <div class="recipe__count">${formatCount(ingredient.count)}</div>
        <div class="recipe__ingredient">
            <span class="recipe__unit">${ingredient.unit}</span>
            ${ingredient.ingredient}
        </div>
    </li>`;

export const renderRecipe = recipe => {
    const template_recipe = `
            <figure class="recipe__fig">
                <img src="${recipe.img}" alt="${recipe.title}}" class="recipe__img">
                <h1 class="recipe__title">
                    <span>${recipe.title}</span>
                </h1>
            </figure>
            <div class="recipe__details">
                <div class="recipe__info">
                    <i class="fa fa-clock"></i>
                    <span class="recipe__info-data recipe__info-data--minutes">${recipe.time}</span>
                    <span class="recipe__info-text"> minutes</span>
                </div>
                <div class="recipe__info">

                    <i class="fa fa-utensils"></i>
                    <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
                    <span class="recipe__info-text"> servings</span>

                    <div class="recipe__info-buttons">
                        <button class="btn-tiny btn-decrease">
                            <i class="fa fa-minus-circle"></i>
                        </button>
                        <button class="btn-tiny btn-increase">
                            <i class="fa fa-plus-circle"></i>
                        </button>
                    </div>

                </div>
                <button class="recipe__love">
                    <i class="like_icon far fa-heart"></i>
                </button>
            </div>

            <div class="recipe__ingredients">
                <ul class="recipe__ingredient-list">
                    ${recipe.ingredients.map(el => create_ingredients(el)).join('')}
                </ul>

                <button class="btn-small recipe__btn">
                    <i class="fa fa-shopping-cart"></i>
                    <span>Add to shopping list</span>
                </button>
            </div>

            <div class="recipe__directions">
                <h2 class="heading-2">How to cook it</h2>
                <p class="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span class="recipe__by">${recipe.publisher}</span>. Please check out directions at their website.
                </p>
                <a class="btn-small recipe__btn" href="${recipe.publisher_url}}" target="_blank">
                    <span>Directions</span>
                    <i class="fa fa-caret-right"></i>
                </a>
            </div>`;

    elements.recipe.insertAdjacentHTML('afterbegin', template_recipe);
};

export const update_servings_ingredients = recipe => {
    document.querySelector('.recipe__info-data--people').textContent = recipe.servings;

    const countElements = Array.from(document.querySelectorAll('.recipe__count'));
    countElements.forEach((el, i) => {
        el.textContent = formatCount(recipe.ingredients[i].count);
    });
};
