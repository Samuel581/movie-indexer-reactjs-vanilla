import { useFetchOnTheatersMovies } from "./hooks/useFetchOnTheatersMovies";
import { MoviesRow } from "../../components/MoviesRow";

function OnThearersMovieRow() {
  const { movies, isLoading, error } = useFetchOnTheatersMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ups, an error occurred!</div>;
  }

  return (
    <MoviesRow title="Currently Playing in Theaters" movies={movies} />
  );
}

export default OnThearersMovieRow;
