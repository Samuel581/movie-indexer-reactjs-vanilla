import { useEffect, useState } from "react";
import type { MovieDetails } from "../../../types/movie.types";
import { tmdbApi } from "../../../lib/api/tmdb.api";

export function useFetchMovieDetails(movieId: number | null) {
  const [movie, setMovie] = useState<MovieDetails>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const movie = await tmdbApi.getMovieDetails(movieId);
        setMovie(movie);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return { movie, isLoading, error };
}
