import { InsertMovies } from "./fetchMovies.js";

export const apiKey = '05971feefd7f2a91f44479cbbbb4e21a';
let movies = []; 

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`)
  .then(response => response.json())
  .then(data => {
    movies = data.results.slice(0, 4); // Atribui o valor a movies, por exemplo (top 10 filmes populares)-
    InsertMovies(movies);
  })
  .catch(error => {
    console.error('Ocorreu um erro ao obter os filmes populares:', error);
  })