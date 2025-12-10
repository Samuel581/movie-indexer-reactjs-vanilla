import { PopularMoviesRow } from "./features/PopularMovies/PopularMoviesRow"
import OnThearersMovieRow from "./features/OnThearersMovies/OnThearersMovieRow"
import UpcomingMoviesRow from "./features/UpcomingMovies/UpcomingMoviesRow"
import TrendingMovies from "./features/TrendingMovies/TrendingMovies"

function App() {
  return (
    <>
      <PopularMoviesRow />
      <OnThearersMovieRow/>
      <UpcomingMoviesRow/>
      <TrendingMovies/>
    </>
  )
}

export default App
