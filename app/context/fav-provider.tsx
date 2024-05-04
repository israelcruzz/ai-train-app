import { ReactNode, useContext, useState } from "react";
import { FavContext } from "./fav-context";

export function FavProvider({ children }: { children: ReactNode }) {
  const [favoriteTrains, setFavoriteTrains] = useState<string[]>(["Treino de Superiores:"]);

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

  const isFav = (train: string) => {
    const existTrain = favoriteTrains.find(
      (prevTrain) =>
        prevTrain.toLocaleLowerCase().trim() ===
        train.toLocaleLowerCase().trim()
    );

    return existTrain ? true : false
  };

  return (
    <FavContext.Provider value={{ favoriteTrains, addFavoriteTrain, isFav }}>
      {children}
    </FavContext.Provider>
  );
}

export const useFavContext = () => useContext(FavContext);
