import { ReactNode, useContext, useState } from "react";
import { FavContext } from "./fav-context";

export function FavProvider({ children }: { children: ReactNode }) {
  const [favoriteTrains, setFavoriteTrains] = useState<string[]>([]);

  const addFavoriteTrain = (train: string) => {
    setFavoriteTrains((prev) => {
      const existTrain = prev.find(
        (prevTrain) =>
          prevTrain.toLocaleLowerCase().trim() ===
          train.toLocaleLowerCase().trim()
      );

      if (existTrain) {
        const trains = prev.filter((train) => train !== existTrain);
        return trains;
      }

      return [...prev, train];
    });
  };

  return (
    <FavContext.Provider value={{ favoriteTrains, addFavoriteTrain }}>
      {children}
    </FavContext.Provider>
  );
}

export const useFavContext = () => useContext(FavContext);
