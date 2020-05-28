import Search from './models/Search';
require('./bootstrap');

const search = new Search(`pizza`);

console.log(search);