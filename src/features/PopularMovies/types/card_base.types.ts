import type { Movie } from "../../../types/movie.types";
export type BaseCardProps = Pick<Movie, "id" | "overview" | "original_title" | "release_date" | "popularity" | "backdrop_path">
