
const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];
const sortBooksDesc = (list) => list.sort((a, b) => b.title.length - a.title.length);
const mapToTitle = (list) => list.map(({title}) => title);
const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
let result = compose(sortBooksDesc, mapToTitle);
console.log(result(books)[1]);