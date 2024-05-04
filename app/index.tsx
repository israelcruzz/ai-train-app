import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

export default function Init() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionOne}>
        <Image
          source={require("@/app/assets/init-image.jpg")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>

      <View style={styles.sectionTwo}>
        <View style={styles.sloganArea}>
          <Text style={styles.sloganText}>Monte Seus</Text>
          <Text style={styles.sloganText}>Treinos</Text>
        </View>

        <Text style={styles.description}>
          Monte seus treinos agora utilizando texto gerado por IA
        </Text>

        <Link href="/home/" style={styles.buttonArea} asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#111417",
    alignItems: "center",
  },
  sectionOne: {
    width: "100%",
    height: "60%",
  },
  sectionTwo: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  sloganArea: {
    marginTop: -24,
    alignItems: "center",
    justifyContent: "center",
  },
  sloganText: {
    fontWeight: "bold",
    fontSize: 48,
    color: "#CEF5BD",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonArea: {
    width: "100%",
    marginTop: 24
  },
  button: {
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: "#B6F09C",
    borderRadius: 4,
  },
  buttonText: {
    color: "#131619",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  description: {
    fontWeight: "500",
    fontSize: 14,
    color: "#616365",
    textAlign: "center",
    marginBottom: 24,
    marginTop: 12
  },
});
