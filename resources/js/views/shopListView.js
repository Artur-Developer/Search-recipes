import { elements } from './base';

export const render_item = item => {
    const template_item = `
    <li class="shopping__item" data-itemid=${item.id}>
        <div class="shopping__count">
            <input type="number" value="${item.count}" step="${item.count}" class="shopping__count-value">
            <p>${item.unit}</p>
        </div>
        <p class="shopping__description">${item.ingredient}</p>
        <button class="shopping__delete btn-tiny">
            <i class="far fa-times-circle"></i>
        </button>
    </li>`
    elements.shop_list.insertAdjacentHTML('beforeend', template_item);
};

export const delete_item = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if (item) item.parentElement.removeChild(item);
};
