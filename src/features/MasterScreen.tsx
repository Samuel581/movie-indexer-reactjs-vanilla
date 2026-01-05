
import { useState } from "react";
import { useFetchTrendingMovies } from "./TrendingMovies/hooks/useFetchTrendingMovies";
import { MovieCard } from "../components/MovieCard";
import { useFetchMovieDetails } from "./MovieDetails/hooks/useFetchMovieDetails";
import MovieDetailsScreen from "./MovieDetails/MovieDetailsScreen";

export const MasterScreen = () => {
  const { movies, isLoading, error } = useFetchTrendingMovies();
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const { movie: movieDetails, isLoading: isLoadingDetails, error: errorDetails } = useFetchMovieDetails(selectedMovieId);

  const handleMovieSelection = (movieId: number) => {
    setSelectedMovieId(movieId);
  };

  const handleBack = () => {
    setSelectedMovieId(null);
  };

  if (selectedMovieId) {
     if (isLoadingDetails) {
        return <div className="p-10 text-center text-white">Loading details...</div>;
     }
     if (errorDetails) {
        return (
            <div className="p-10 text-center text-red-500">
                <p>Error loading details.</p>
                <button onClick={handleBack} className="mt-4 text-blue-500 underline">Back to list</button>
            </div>
        );
     }
     if (movieDetails) {
        return (
            <div>
                <button 
                    onClick={handleBack} 
                    className="fixed top-4 left-4 z-50 rounded-full bg-black/50 px-4 py-2 text-white hover:bg-black/80"
                >
                    ← Back
                </button>
                <MovieDetailsScreen movie={movieDetails} />
            </div>
        );
     }
  }

  if (isLoading) {
    return <div className="p-10 text-center text-white">Loading movies...</div>;
  }

  if (error) {
      return <div className="p-10 text-center text-red-500">Error loading movies: {String(error)}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {movies.map((movie) => (
        <div key={movie.id} onClick={() => handleMovieSelection(movie.id)} className="cursor-pointer transition-transform hover:scale-105">
          <MovieCard
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />
        </div>
      ))}
    </div>
  );
};

