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

export function formatMoney(amount: number) {
  if (amount === 0) {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  }
  if (amount > 0 && amount < 10000) {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  }
  if (amount >= 10000 && amount < 1000000) {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
    }).format(amount);
  }
  if (amount >= 1000000 && amount < 1000000000) {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      compactDisplay: "short",
    }).format(amount);
  }
}
