import { useState } from "react";
import type { BaseCardProps } from "../types/card_base.types";
import { POSTER_BASE_URL } from "../utils/constants.types";
import { formatRating, formatReleaseDate } from "../utils/movie.utils";
export const MovieCard = (Movie: BaseCardProps) => {
  const posterUrl = `${POSTER_BASE_URL}${Movie.poster_path}`;
  const rating = formatRating(Movie.vote_average);
  const releaseDate = formatReleaseDate(Movie.release_date);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group cursor-pointer px-2 w-full max-w-[300px]">
      {/* Poster Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg bg-secondary aspect-[342/513]">
        {/* Track image load error with state */}
        {(() => {
          return (
            <img
              src={
                imageError
                  ? "/placeholder.svg?height=500&width=342&query=movie%20poster"
                  : posterUrl
              }
              alt={Movie.title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          );
        })()}
        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur rounded-full w-10 h-10 flex items-center justify-center text-accent font-bold text-sm">
          <p className="text-white">{rating}</p>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Movie Info */}
      <div className="min-w-0">
        <h3 className="font-semibold text-sm md:text-base line-clamp-2 group-hover:text-blue-400 transition-colors break-words">
          {Movie.title}
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground mt-1 text-gray-500 group-hover:text-blue-400 transition-colors">
          {releaseDate}
        </p>
      </div>
    </div>
  );
};
