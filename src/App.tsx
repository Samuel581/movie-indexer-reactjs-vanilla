import { useEffect } from "react"
import { tmdbApi } from "./lib/api/tmdb.api"

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
      <h1 className="underline text-red-200">
        Hello world!
      </h1>
    </>
  )
}

export default App
