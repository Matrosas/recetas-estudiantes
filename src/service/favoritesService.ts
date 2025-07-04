const FAVORITES_KEY = 'favorites';

export function getFavorites(): string[] {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
}

export function addFavorite(id: string): void {
  const favorites = getFavorites();
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
}

export function removeFavorite(id: string): void {
  const favorites = getFavorites().filter(favId => favId !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}
