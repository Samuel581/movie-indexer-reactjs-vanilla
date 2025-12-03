import type { Movie } from "../../../types/movie.types";
export type BaseCardProps = Pick<Movie,
    "id" | 
    "title" | 
    "release_date" | 
    "poster_path" | 
    "vote_average">
