import { InsertMovies } from "./fetchMovies.js";

export const apiKey = '05971feefd7f2a91f44479cbbbb4e21a';
let movies = []; 

function fetchAndDisplayMovies(endpoint, numMovies) {
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      movies = data.results.slice(0, numMovies);
      InsertMovies(movies);
    })
    .catch(error => {
      console.error(`Ocorreu um erro ao obter os filmes em ${endpoint}:`, error);
    });
}

const popularMoviesEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`;
const numPopularMovies = 4; // Altere este valor para o número desejado de filmes populares a serem exibidos

fetchAndDisplayMovies(popularMoviesEndpoint, numPopularMovies);
