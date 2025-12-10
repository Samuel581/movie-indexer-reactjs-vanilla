import { useEffect, useState } from "react";
import type { Movie } from "../../../types/movie.types";
import { tmdbApi } from "../../../lib/api/tmdb.api";

export function useFetchTrendingMovies() {
    const [movies, setMovies] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<unknown | null>(null)

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                setIsLoading(true)
                const movies = await tmdbApi.getTrendingMovies()
                setMovies(movies.results)
            }
            catch (err) {
                setError(err)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchTrendingMovies()
    }, [])
    return { movies, isLoading, error }
}