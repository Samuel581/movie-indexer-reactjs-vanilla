import type { Movie } from "../types/movie.types"
import { MovieCard } from "./MovieCard"

export const MoviesRow = ({ title, movies }: { title: string, movies: Movie[] }) => {
    return (
        <div className="m-5">
            <h2 className="font-bold text-3xl text-center">{title}</h2>
            <div className="flex flex-wrap">
                {
                    movies.length > 0 ? (
                        movies.map(movie => {
                            return <MovieCard {...movie} />
                        })
                    ) : (
                        <div>There are not movies to show</div>
                    )
                }
            </div>
        </div>
    )
}