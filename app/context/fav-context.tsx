import { createContext } from "react";

interface favContext {
    favoriteTrains: string[]
    addFavoriteTrain: (train: string) => void
}

export const FavContext = createContext({} as favContext);