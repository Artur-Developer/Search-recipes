import axios from 'axios';
export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getRecipe() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const url = `${proxy}https://forkify-api.herokuapp.com/api/search?q=${this.query}`;
        try {
            const res = await axios(`${url}`);
            this.result = res.data.recipes;
        } catch (e) {
            throw new Error(e);
        }
    }
}