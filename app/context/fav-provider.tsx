import { ReactNode, useContext } from "react";
import { FavContext } from "./fav-context";

export function FavProvider({ children }: { children: ReactNode }) {
    return (
        <FavContext.Provider value={{ fav: [] }}>
            {children}
        </FavContext.Provider>
    )
}

export const useFavContext = () => useContext(FavContext)