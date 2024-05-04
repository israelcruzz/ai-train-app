import { Pressable, TouchableOpacity, View } from "react-native";
import { ScrollView, StyleSheet, Text } from "react-native";
import IconSet from "react-native-vector-icons/Octicons";
import { router } from 'expo-router'
import { TouchableWithoutFeedback } from "react-native";
import { useFavContext } from "@/app/context/fav-provider";

interface TrainCardProps {
  text: string;
  loading: boolean;
}

export default function TrainCard({
  text,
  loading,
}: TrainCardProps) {
  function handleClick(){
    router.navigate(`/train/${text}`)
  }

  const { isFav } = useFavContext();

  return (
    <ScrollView
      style={styles.scrollViewArea}
      contentContainerStyle={{ paddingBottom: 24 }}
    >
      <TouchableOpacity  style={styles.container} onPress={handleClick}>
        <Text style={styles.text}>
          {loading ? (
            <View style={styles.loading}>
              <Text style={styles.loadingText}>Gerando...</Text>
            </View>
          ) : (
            text
          )}
        </Text>

        <Pressable style={styles.heartButton}>
          <IconSet
            name="heart-fill"
            color={isFav(text) ? "#FF1E1E" : "#FFFFFF"}
            size={18}
          />
        </Pressable>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewArea: {
    width: "100%",
  },
  container: {
    width: "100%",
    height: 280,
    borderWidth: 1,
    borderColor: "#34363C",
    padding: 24,
    borderRadius: 4,
    position: "relative",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  loading: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  heartButton: {
    position: "absolute",
    right: 0,
    margin: 16
  },
});
