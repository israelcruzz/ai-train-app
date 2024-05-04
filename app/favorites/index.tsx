import ButtonBack from "@/components/button-back";
import Section from "@/components/section";
import TrainCard from "@/components/train-card";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ButtonBack />

        <View style={styles.sectionArea}>
          <Section title="Favoritos" active />
        </View>
        
      </View>

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
  header: {
    flexDirection: "row",
    gap: 12,
    paddingBottom: 8,
  },
  favoritesCardArea: {
    gap: 24,
  },
  buttonArea: {
    width: 42,
    height: 42,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius: 60
  },
  sectionArea: {
    justifyContent: "center",
    alignItems: "center",
  }
});
