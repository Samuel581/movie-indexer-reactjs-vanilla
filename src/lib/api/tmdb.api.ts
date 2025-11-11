import type { Movie, PaginatedResponse } from "../../types/movie.types";
import { apiClient } from "./client";


export const tmdbApi = {
  getPopularMovies: async (page: number = 1): Promise<PaginatedResponse<Movie>> => {
    return apiClient.get("movie/popular", {
      params: { page }
    })
  }
}
