const KEY = 'favorites';

type Favorites = string[];

export function checkIfFavorite(pokemonName: string) {
    return getFavorites().includes(pokemonName);
}

export function addToFavorites(pokemonName: string) {
    const favorites: Favorites = [...getFavorites(), pokemonName];
    localStorage.setItem(KEY, JSON.stringify(favorites));
}

export function removeFromFavorites(pokemonName: string) {
    const favorites: Favorites = getFavorites().filter(
        (favorite) => favorite !== pokemonName
    );
    localStorage.setItem(KEY, JSON.stringify(favorites));
}

function getFavorites(): Favorites {
    try {
        return JSON.parse(localStorage.getItem(KEY) || '');
    } catch {
        return [];
    }
}
