import CastCard from "../../components/CastCard";

import type { MovieDetailsProps } from "../../types/movie_details.types";
import {
  BACKDROP_BASE_URL,
  POSTER_BASE_URL,
} from "../../utils/constants.types";
import { formatMoney } from "../../utils/movie.utils";

export default function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <div className="w-full bg-slate-950 text-slate-100">
      {/* Hero */}
      <section
        className="relative h-[520px] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${BACKDROP_BASE_URL}${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end gap-6 px-6 pb-10">
          {/* Poster */}
          <img
            src={`${POSTER_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="h-[320px] w-[220px] rounded-xl object-cover shadow-2xl shadow-black/50"
          />

          {/* Info */}
          <div className="text-white">
            <h1 className="text-4xl font-bold tracking-tight">{movie.title}</h1>
            <p className="mt-2 text-sm font-medium text-slate-300">
              {new Date(movie.release_date).getFullYear()} · {movie.runtime}m
            </p>

            {/* Rating & genres */}
            <div className="mt-4 flex items-center gap-3">
              <span className="flex items-center gap-1 rounded-full border border-yellow-500/30 bg-yellow-500/20 px-3 py-1 text-sm font-semibold text-yellow-200 backdrop-blur-md">
                ⭐ {movie.vote_average.toFixed(1)}
              </span>

              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Overview */}
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-200 opacity-90">
              {movie.overview}
            </p>

            {/* Actions */}
            <button className="mt-8 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/40 active:scale-95">
              + Add to Watchlist
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-10 md:grid-cols-3">
        <Stat label="Budget" value={`${formatMoney(movie.budget)}`} />
        <Stat label="Revenue" value={`${formatMoney(movie.revenue)}`} />
        <Stat label="Rating" value={`${movie.vote_average.toFixed(1)}/10`} />
      </section>

      {/* Cast */}
      {movie.credits?.cast && (
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="mb-6 text-2xl font-semibold text-slate-100">Cast</h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {movie.credits.cast.slice(0, 10).map((actor) => (
              <CastCard key={actor.id} castCardDetails={actor} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-slate-800/50 p-6 text-slate-100 shadow-sm backdrop-blur-sm">
      <p className="text-sm font-medium text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
    </div>
  );
}
