import { PopularMoviesRow } from "./features/PopularMovies/PopularMoviesRow"
import OnThearersMovieRow from "./features/OnThearersMovies/OnThearersMovieRow"
import UpcomingMoviesRow from "./features/UpcomingMovies/UpcomingMoviesRow"

function App() {
  return (
    <>
      <PopularMoviesRow />
      <OnThearersMovieRow/>
      <UpcomingMoviesRow/>
    </>
  )
}

export default App
