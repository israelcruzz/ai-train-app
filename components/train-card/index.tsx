import { Pressable, View } from "react-native";
import { ScrollView, StyleSheet, Text } from "react-native";
import IconSet from "react-native-vector-icons/Octicons";

interface TrainCardProps {
  text?: string;
  loading: boolean;
  isFav?: boolean
}

export default function TrainCard({ text, loading, isFav = false }: TrainCardProps) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 24 }}
    >
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
        <IconSet name="heart-fill" color={isFav ? '#FF1E1E' : '#FFFFFF'} size={18} />
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 280,
    borderWidth: 1,
    borderColor: "#34363C",
    padding: 24,
    borderRadius: 4,
    position: 'relative'
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
    position: 'absolute',
    right: 0,
  }
});
