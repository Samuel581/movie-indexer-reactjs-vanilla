
import { useFetchTrendingMovies } from './hooks/useFetchTrendingMovies'
import { MoviesRow } from '../../components/MoviesRow'

function TrendingMovies() {
  const { movies, isLoading, error } = useFetchTrendingMovies()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Ups, an error occurred!</div>
  }

  return (
    <MoviesRow title="Trending Movies" movies={movies} />
  )
}

export default TrendingMovies