import axios from 'axios';

const API_KEY = 'api_key=c5da3fdb0f6273f0998c4d86684a63fc';
const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
export const getPopularMovies = async (page) => {
  const res = await moviesApi.get(
    `/movie/popular?${API_KEY}&language=es&page=${page}`
  );
  return res.data.results;
};
export const getUpcomingMovies = async (language = 'es') => {
  const res = await moviesApi.get(
    `/movie/upcoming?${API_KEY}&language=${language}`
  );
  return res.data.results;
};

export const getLatesMovie = async (language = 'es') => {
  const res = await moviesApi.get(
    `/movie/top_rated?${API_KEY}&language=${language}`
  );
  return res.data.results;
};

export const getDetails = async (movie_id, language = 'es') => {
  const res = await moviesApi.get(
    `/movie/${movie_id}?${API_KEY}&language=${language}`
  );
  return res.data;
};

export const getImages = async (movie_id) => {
  const res = await moviesApi.get(
    `/movie/${movie_id}/images?${API_KEY}&language=en`
  );
  return res.data;
};

export const getVideos = async (movie_id) => {
  const res = await moviesApi.get(
    `/movie/${movie_id}/videos?${API_KEY}&language=es`
  );
  return res.data.results;
};

export const getCredits = async (movie_id) => {
  const res = await moviesApi.get(
    `movie/${movie_id}/credits?${API_KEY}&language=es`
  );

  return res.data;
};

export const getSimilarMovies = async (movie_id) => {
  const res = await moviesApi.get(
    `/movie/${movie_id}/similar?${API_KEY}&language=es`
  );
  return res.data.results;
};

export const getRecommendations = async (movie_id) => {
  const res = await moviesApi.get(
    `/movie/${movie_id}/recommendations?${API_KEY}&language=es`
  );
  return res.data.results;
};

export const getGenres = async () => {
  const res = await moviesApi.get(`/genre/movie/list?${API_KEY}&language=es`);
  return res.data;
};

export const searchMovies = async (input) => {
  const res = await moviesApi.get(
    `search/movie?${API_KEY}&query=${input}&language=es`
  );
  return res.data.results;
};
