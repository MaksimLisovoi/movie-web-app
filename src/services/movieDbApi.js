import axios from 'axios';

let baseUrl = `https://api.themoviedb.org/3/`;
let key = `e6acfc4fc0153671a91c6ac155f53696`;

export async function getTrendingMovie() {
  try {
    const trendingMovies = await axios.get(
      `${baseUrl}trending/movie/week?api_key=${key}`
    );

    return trendingMovies.data.results;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getMovieById(movieId) {
  try {
    const movieDetails = await axios.get(
      `${baseUrl}/movie/${movieId}?api_key=${key}`
    );

    return movieDetails.data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getSearchedMovies({ searhQuery, page = 1 }) {
  try {
    const movies = await axios.get(
      `${baseUrl}/search/movie?api_key=${key}&query=${searhQuery}&page=${page}`
    );

    return movies.data.results;
  } catch (error) {
    console.error(error.message);
  }
}

// export function getSearchedMovies({ searhQuery, currentPage = 1 }) {
//   return axios.get(
//     `${baseUrl}/search/movie?api_key=${key}&query=${searhQuery}&page=${currentPage}`
//   );
// }

export async function getMovieCast(movieId) {
  try {
    const movieDetails = await axios.get(
      `${baseUrl}/movie/${movieId}/credits?api_key=${key}`
    );

    return movieDetails.data.cast;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getMovieReviews(movieId) {
  try {
    const movieDetails = await axios.get(
      `${baseUrl}/movie/${movieId}/reviews?api_key=${key}`
    );

    return movieDetails.data.results;
  } catch (error) {
    console.error(error.message);
  }
}
