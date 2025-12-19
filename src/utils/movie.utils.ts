export function formatRating(rating: number): number {
  return Math.round(rating * 10) / 10;
}

export function formatReleaseDate(date: string): string {
  const releaseDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return releaseDate.toLocaleDateString("en-US", options);
}
