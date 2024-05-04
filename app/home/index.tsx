import Button from "@/components/button";
import Section from "@/components/section";
import TrainCard from "@/components/train-card";
import { Link } from "expo-router";
import { useState } from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconSet from "react-native-vector-icons/Octicons";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  console.log(prompt);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headingText}>AiTrain</Text>
        <Link href="/favorites/" asChild>
          <TouchableOpacity style={styles.favButton}>
            <IconSet name="heart-fill" color="#FFFFFF" size={18} />
          </TouchableOpacity>
        </Link>
      </View>

      {/* Form */}
      <View>
        <Section title={`Prompt (${prompt.length}/360)`} />

        <TextInput
          placeholder="Digite o tipo de treino (ex: costa, biceps, completo...)"
          style={styles.textArea}
          placeholderTextColor="#FFFFFF"
          onChangeText={setPrompt}
        />

        <Button title="Criar" />
      </View>

      {/* Train */}
      <View>
        <Section title="Treino Gerado" />

        <TrainCard loading />
      </View>
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  favButton: {
    width: 42,
    height: 42,
    borderRadius: 60,
    borderColor: "#34363C",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    fontWeight: "600",
    fontSize: 24,
    color: "#C5F3B0",
  },
  textArea: {
    width: "100%",
    height: 162,
    padding: 16,
    backgroundColor: "#292B2E",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#404148",
    textAlignVertical: "top",
    color: "#FFFFFF",
    marginBottom: 24,
  },
  prompText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#616365",
    marginBottom: 12,
  },
});
