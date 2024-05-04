import { createContext } from "react";

interface favContext {
    favoriteTrains: string[]
    addFavoriteTrain: (train: string) => void
    isFav: (train: string) => boolean
}

export const FavContext = createContext({} as favContext);