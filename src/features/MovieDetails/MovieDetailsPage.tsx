import { useParams } from "react-router";
import { useFetchMovieDetails } from "./hooks/useFetchMovieDetails";
import MovieDetailsScreen from "./MovieDetailsScreen";

export default function MovieDetailsPage() {
  // Get the ID from the URL parameters
  const { id } = useParams();
  const movieId = id ? parseInt(id, 10) : null;
  // Fetch it using the custom hook
  const { movie, isLoading, error } = useFetchMovieDetails(movieId);

  // TODO: Implement error handling and loading states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return <MovieDetailsScreen movie={movie} />;
}
