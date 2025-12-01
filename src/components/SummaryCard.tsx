import type { BaseCardProps } from "../features/PopularMovies/types/card_base.types"
import { IMAGE_BASE_URL } from "../types/constants.types"
export const SummaryCard = (Movie: BaseCardProps) => {
  return (
    <div 
      className="bg-gray-50 
      w-96 rounded-lg m-10 transition-transform
      duration-300 ease-in-out hover:scale-105 
      hover:shadow-xl hover:cursor-pointer group">
      <img src={`${IMAGE_BASE_URL}${Movie.backdrop_path}`} 
        className="w-full h-60 object-cover transition-filter 
        duration-300 ease-in-out group-hover:blur-sm" />
      <div className="m-5 flex flex-col gap-2">
        <text className="font-bold">{Movie.original_title}</text>
        <div className="flex flex-row justify-between">
          <text className="font-bold">{Movie.popularity}/10</text>
          <text className="text-gray-500">{Movie.release_date}</text>
        </div>
        <text className="text-sm line-clamp-4">{Movie.overview}</text>
      </div>
    </div>
  )
}
