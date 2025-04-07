import { create } from "zustand";
import MovieItemProps from "@/utils/types"; // Make sure it's exported as a type

interface FavoriteMoviesState {
  favorites: MovieItemProps[];
  addFavorite: (movie: MovieItemProps) => void;
  removeFavorite: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
  clearFavorites: () => void;
}

const useFavoritesStore = create<FavoriteMoviesState>((set, get) => ({
  favorites: [],

  addFavorite: (movie) =>
    set((state) => {
      // Avoid duplicates
      const alreadyExists = state.favorites.some((fav) => fav.id === movie.id);
      if (alreadyExists) return state;
      return {
        favorites: [...state.favorites, movie],
      };
    }),

  removeFavorite: (movieId) =>
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav.id !== movieId),
    })),

  isFavorite: (movieId) => get().favorites.some((fav) => fav.id === movieId),

  clearFavorites: () => set({ favorites: [] }),
}));

export default useFavoritesStore;
