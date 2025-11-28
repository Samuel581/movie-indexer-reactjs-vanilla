import { useEffect } from "react"
import { tmdbApi } from "./lib/api/tmdb.api"
import { SummaryCard } from "./components/SummaryCard"

function App() {

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const data = await tmdbApi.getOnThearersMovies()
        console.log(data)
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchPopularMovies()
  }, [])

  return (
    <>
      <SummaryCard />
    </>
  )
}

export default App
