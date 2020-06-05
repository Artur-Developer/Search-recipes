export const elements = {
    search_form: document.querySelector('.search'), //search form
    search_input: document.querySelector('.search__field'), //input for search
    search_res_list: document.querySelector('.results__list'), //result list to render searched items
    search_parent: document.querySelector('.results'), //parent section for redner
    single_recipe: document.querySelector('.recipe'), //section for render single recipe
    results_page: document.querySelector('.results__pages') // for paginate buttons
};

export const elementsString = {
    loader: 'custom_loader',
    count_recipe: 'count_recipes',
    error_search: 'error_search'
};

export const render_loader = parent => {
    const template_loader = `
            <div class="custom_loader">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                    <rect fill="#FBDB89" width="3" height="100" transform="translate(0) rotate(180 3 50)">
                    <animate
                        attributeName="height"
                        attributeType="XML"
                        dur="1s"
                        values="30; 100; 30"
                        repeatCount="indefinite"/>
                    </rect>
                    <rect x="17" fill="#FBDB89" width="3" height="100" transform="translate(0) rotate(180 20 50)">
                        <animate
                            attributeName="height"
                            attributeType="XML"
                            dur="1s"
                            values="30; 100; 30"
                            repeatCount="indefinite"
                            begin="0.1s"/>
                    </rect>
                    <rect x="40" fill="#FBDB89" width="3" height="100" transform="translate(0) rotate(180 40 50)">
                        <animate
                            attributeName="height"
                            attributeType="XML"
                            dur="1s"
                            values="30; 100; 30"
                            repeatCount="indefinite"
                            begin="0.3s"/>
                    </rect>
                    <rect x="60" fill="#FBDB89" width="3" height="100" transform="translate(0) rotate(180 58 50)">
                        <animate
                            attributeName="height"
                            attributeType="XML"
                            dur="1s"
                            values="30; 100; 30"
                            repeatCount="indefinite"
                            begin="0.5s"/>
                    </rect>
                    <rect x="80" fill="#FBDB89" width="3" height="100" transform="translate(0) rotate(180 76 50)">
                        <animate
                            attributeName="height"
                            attributeType="XML"
                            dur="1s"
                            values="30; 100; 30"
                            repeatCount="indefinite"
                            begin="0.1s"/>
                    </rect>
                </svg>
            </div>`;

    parent.insertAdjacentHTML('afterbegin', template_loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementsString.loader}`);
    if (loader) loader.parentNode.removeChild(loader);
}
