import { router } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";
import IconSet from "react-native-vector-icons/Octicons";

export default function ButtonBack() {
  function handleBackScreen() {
    router.back();
  }

  return (
    <TouchableOpacity style={styles.buttonArea} onPress={handleBackScreen}>
      <IconSet name="arrow-left" color="#FFFFFF" size={24} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonArea: {
    width: 42,
    height: 42,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius: 60,
  },
});
