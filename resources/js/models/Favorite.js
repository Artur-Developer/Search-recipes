export default class Favorite {
    constructor() {
        this.favorites = [];
    }

    addFavorite(id, title, img, publisher) {
        const favorite = { id, title, img, publisher };
        this.favorites.push(favorite);
        this.persistData();
        return favorite;
    }

    deleteFavorite(id) {
        const index = this.favorites.findIndex(el => el.id === id);
        this.favorites.splice(index, 1);
        this.persistData();
    }

    isFavorite(id) {
        return this.favorites.findIndex(el => el.id === id) !== -1;
    }

    persistData() {
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('favorites'));
        if (storage) this.favorites = storage;
    }

}
