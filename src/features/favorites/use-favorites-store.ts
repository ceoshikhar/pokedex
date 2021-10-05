import create from 'zustand';
import { combine } from 'zustand/middleware';

const KEY = 'favorites';
export type Favorites = string[];

interface State {
    favorites: Favorites;
}

function getInitialValues(): State {
    try {
        const favorites = JSON.parse(localStorage.getItem(KEY) || '');
        return { favorites };
    } catch {
        return { favorites: [] };
    }
}

export const useFavoritesStore = create(
    combine(getInitialValues(), (set, get) => ({
        addToFavorites: (pokemonName: string) => {
            const favorites: Favorites = [...get().favorites, pokemonName];
            set({ favorites });
            saveToStorage(favorites);
        },
        removeFromFavorites: (pokemonName: string) => {
            const favorites: Favorites = get().favorites.filter(
                (favorite) => favorite !== pokemonName
            );
            set({ favorites });
            saveToStorage(favorites);
        },
        checkIfFavorite: (pokemonName: string): boolean => {
            return get().favorites.includes(pokemonName);
        },
    }))
);

function saveToStorage(favorites: Favorites) {
    try {
        localStorage.setItem(KEY, JSON.stringify(favorites));
    } catch {}
}
