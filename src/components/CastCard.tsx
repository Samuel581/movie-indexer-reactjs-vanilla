import type { CastCardProps } from "../types/cast_card_details.types";
import { POSTER_BASE_URL } from "../utils/constants.types";

export default function CastCard({ castCardDetails }: CastCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-slate-800/50 text-slate-100 transition-all duration-300 hover:bg-slate-800 hover:cursor-pointer">
      <img
        src={
          castCardDetails.profile_path
            ? `${POSTER_BASE_URL}${castCardDetails.profile_path}`
            : "/placeholder-avatar.png"
        }
        alt={castCardDetails.name}
        className="h-[220px] w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
      />
      <div
        className="
            pointer-events-none
            absolute inset-0
            bg-white/5
            opacity-0
            transition-all duration-300
            group-hover:opacity-100
            backdrop-blur-[3px]
            flex justify-center items-center
          "
      >
        <p className="text-center font-bold ">Click to see more details</p>
      </div>

      <div className="p-3">
        <p className="text-sm font-semibold">{castCardDetails.name}</p>
        <p className="text-xs text-slate-400">{castCardDetails.character}</p>
      </div>
    </div>
  );
}
