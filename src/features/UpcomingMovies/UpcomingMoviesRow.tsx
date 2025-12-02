import { useFetchUpcomingMovies } from "./hooks/useFetchUpcomingMovies";
import { SummaryCard } from "../../components/SummaryCard";

function UpcomingMoviesRow() {
  const { isLoading, movies, error } = useFetchUpcomingMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ups, an error occurred!</div>;
  }

  return (
    <div className="m-1">
        <h2 className="font-bold text-3xl text-center">Upcoming Movies</h2>
        <div className="flex flex-wrap justify-evenly">
        {movies.length > 0 ? (
          movies.map((movie) => {
            return <SummaryCard {...movie} />;
          })
        ) : (
          <div>There are no movies to show</div>
        )}
      </div>
    </div>
  )
}

export default UpcomingMoviesRow;
