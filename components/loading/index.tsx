import { ActivityIndicator, StyleSheet } from "react-native";

export default function LoadingScreen() {
  return <ActivityIndicator style={styles.loading} />;
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: "#111417",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFF",
  },
});
