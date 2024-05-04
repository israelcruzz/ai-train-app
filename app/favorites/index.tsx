import Header from "@/components/header";
import TrainCard from "@/components/train-card";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Header name="Favoritos" />

      <ScrollView>
        <View style={styles.favoritesCardArea}>
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <TrainCard key={index} text={index.toString()} loading={false} />
            );
          })}
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
});
