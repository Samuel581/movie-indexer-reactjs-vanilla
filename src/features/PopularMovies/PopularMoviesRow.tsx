import { SummaryCard } from "../../components/SummaryCard"
import { useFecthMovies } from "./hooks/useFetchMovies"

export const PopularMoviesRow = () => {
  const { loading, movies, error } = useFecthMovies()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Ups, an error occurred :c</div>
  }

  return (
    <div className="m-5">
    <h2 className="font-bold text-3xl text-center">Popular Movies</h2>
    <div className="flex flex-wrap">
      {
        movies.length > 0 ? (
          movies.map(movie => {
            return <SummaryCard {...movie} />
          })
        ) : (
          <div>There are not movies to show</div>
        )
      }
    </div>
    </div>
    
  )
}
