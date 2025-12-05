import { useState, useEffect } from "react";
import { tmdbApi } from "../../../lib/api/tmdb.api";
import type { Movie } from "../../../types/movie.types";

export function useFecthPopularMovies() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown | null>(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const movies = await tmdbApi.getPopularMovies()
        setMovies(movies.results)
      }
      catch (err) {
        setError(err)
      }
      finally {
        setLoading(false)
      }
    };
    fetchMovies()
  }, [])

  return { movies, loading, error }
}
