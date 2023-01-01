const API_KEY = "2960a53aab03511d610e160a3a9f5bc4";
const BASE = "https://api.themoviedb.org/3";
const url = BASE + `/trending/all/week?api_key=${API_KEY}&language=en-US`;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchRandom: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
};

console.log(requests.keys());

// Promise.all([fetchMovies])
//     .then(async (response) => {
//         const temp = await response[0].json()
//         console.log(temp)
//     })
//     .catch((err) => console.log(err))
