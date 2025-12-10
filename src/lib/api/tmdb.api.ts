import type { Movie, MovieDetails, PaginatedResponse } from "../../types/movie.types";
import { apiClient } from "./client";


export const tmdbApi = {

  // Movies list 
  // Get popular movie
  getPopularMovies: async (page: number = 1): Promise<PaginatedResponse<Movie>> => {
    return apiClient.get("movie/popular", {
      params: { page }
    })
  },

  // Get movies currently being played in tearers
  getOnThearersMovies: async (page: number = 1): Promise<PaginatedResponse<Movie>> => {
    return apiClient.get("movie/now_playing", {
      params: { page }
    })
  },

  getUpcomingMovies: async (page: number = 1): Promise<PaginatedResponse<Movie>> => {
    return apiClient.get("movie/upcoming", {
      params: { page }
    })
  },

  getTrendingMovies: async (page: number = 1): Promise<PaginatedResponse<Movie>> => {
    return apiClient.get("trending/movie/week", {
      params: { page }
    })
  },

  // Movies details 
  // Details 
  getMovieDetails: async (movie_id: number): Promise<MovieDetails> => {
    return apiClient.get(`movie/${movie_id}`, {
    })
  }


}


