import { useFetchUpcomingMovies } from "./hooks/useFetchUpcomingMovies";
import { MoviesRow } from "../../components/MoviesRow";

function UpcomingMoviesRow() {
  const { isLoading, movies, error } = useFetchUpcomingMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ups, an error occurred!</div>;
  }

  return (
    <MoviesRow title="Upcoming Movies" movies={movies} />
  )
}

export default UpcomingMoviesRow;
