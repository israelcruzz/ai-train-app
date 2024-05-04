import Header from "@/components/header";
import TrainCard from "@/components/train-card";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useFavContext } from "../context/fav-provider";

export default function Favorites() {
  const { favoriteTrains } = useFavContext();

  return (
    <View style={styles.container}>
      <Header name="Favoritos" />

      <ScrollView>
        <View style={styles.favoritesCardArea}>
          {favoriteTrains.length === 0 ? (
            <Text style={styles.notFavText}>Não há treinos favoritados.</Text>
          ) : (
            favoriteTrains.map((text, index) => {
              return <TrainCard key={index} text={text} loading={false} />;
            })
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingVertical: 48,
    paddingHorizontal: 24,
    backgroundColor: "#111417",
  },
  favoritesCardArea: {
    gap: 24,
  },
  notFavText: {
    marginTop: 330,
    color: "#FFFFFF",
    opacity: 0.6,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});
