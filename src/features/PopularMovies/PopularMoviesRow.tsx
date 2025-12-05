import { MoviesRow } from "../../components/MoviesRow"
import { useFecthPopularMovies } from "./hooks/useFetchPopularMovies"

export const PopularMoviesRow = () => {
  const { loading, movies, error } = useFecthPopularMovies()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Ups, an error occurred :c</div>
  }

  return (
    <MoviesRow title="Popular Movies" movies={movies} />
  )
}
