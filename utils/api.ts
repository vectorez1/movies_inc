import axios from "axios";

const api_key = "9c024169de071d4fbd135671bf5d05cf";
const api_url = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: api_url,
  params: {
    api_key: api_key,
  },
});
export const getMovies = async (page: number) => {
  const response = await api.get("/movie/popular", {
    params: {
      page: page,
    },
  });
  return response.data;
};
export const getGenres = async () => {
  const response = await api.get("/genre/movie/list");
  return response.data;
};
export const getMoviesByGenre = async (id: number, page: number) => {
  const response = await api.get("/discover/movie", {
    params: {
      with_genres: id,
      page: page,
    },
  });
  return response.data;
};
export const searchMovies = async (query: string, page: number) => {
  const response = await api.get("/search/movie", {
    params: {
      query: query,
      page: page,
    },
  });
  return response.data;
};
export const getMovieImages = async (id: number) => {
  const response = await api.get(`/movie/${id}/images`);
  return response.data;
};
export const getMovieDetails = async (id: number) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};
export const getMovieCredits = async (id: number) => {
  const response = await api.get(`/movie/${id}/credits`);
  return response.data;
};
export const getMovieVideos = async (id: number) => {
  const response = await api.get(`/movie/${id}/videos`);
  return response.data;
};
export const getMovieReviews = async (id: number) => {
  const response = await api.get(`/movie/${id}/reviews`);
  return response.data;
};
export const getGenreName = async (id: number) => {
  const response = await api.get("/genre/movie/list");
  const genre = response.data.genres.find((g: any) => g.id === id);
  return genre ? genre.name : null;
};
