import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const url = `https://forkify-api.herokuapp.com/api/search?q=${this.query}`;
            const result = await axios(`${url}`);
            log(result);
        } catch (e) {
            throw new Error(e);
        }
    }
}