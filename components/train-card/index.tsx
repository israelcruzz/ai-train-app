import { View } from "react-native";
import { ScrollView, StyleSheet, Text } from "react-native";

interface TrainCardProps {
  text?: string;
  loading: boolean;
}

export default function TrainCard({ text, loading }: TrainCardProps) {
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
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  loading: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    color: "#FFFFFF",
    textAlign: 'center'
  }
});
