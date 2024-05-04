import { createContext } from "react";

interface favContext {
    fav: string[]
}

export const FavContext = createContext({} as favContext);