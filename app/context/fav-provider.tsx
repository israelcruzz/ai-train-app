import { ReactNode, useContext, useEffect, useState } from "react";
import { FavContext } from "./fav-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export function FavProvider({ children }: { children: ReactNode }) {
  const [favoriteTrains, setFavoriteTrains] = useState<string[]>([]);

  const getFavoriteTrainsInMemory = async () => {
    try {
      let trainsInMemory = await AsyncStorage.getItem("@train-favorite");

      if (trainsInMemory !== null) {
        setFavoriteTrains(JSON.parse(trainsInMemory));
      }
    } catch (error) {
      Alert.alert("Não foi possivel realizar a busca.", "Erro Interno");
    }
  };

  const addTrainInMemory = async (train: string) => {
    const existingTrainsInMemory: string | null = await AsyncStorage.getItem(
      "@train-favorite"
    );

    const favoriteTrainsArray: string[] = existingTrainsInMemory
      ? JSON.parse(existingTrainsInMemory)
      : [];

    favoriteTrainsArray.push(train);

    await AsyncStorage.setItem(
      "@train-favorite",
      JSON.stringify(favoriteTrainsArray)
    );
  };

  useEffect(() => {
    getFavoriteTrainsInMemory();
  }, []);

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

      addTrainInMemory(train);

      return [...prev, train];
    });
  };

  const isFav = (train: string) => {
    const existTrain = favoriteTrains.find(
      (prevTrain) =>
        prevTrain.toLocaleLowerCase().trim() ===
        train.toLocaleLowerCase().trim()
    );

    return existTrain ? true : false;
  };

  return (
    <FavContext.Provider value={{ favoriteTrains, addFavoriteTrain, isFav }}>
      {children}
    </FavContext.Provider>
  );
}

export const useFavContext = () => useContext(FavContext);
