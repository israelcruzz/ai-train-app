import Section from "@/components/section";
import TrainCard from "@/components/train-card";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Train() {
  const { train } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <Section title="Treino" active />

      <TrainCard loading={false} text={train.toString()} />
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
});
