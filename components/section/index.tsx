import { StyleSheet, Text } from "react-native";

interface SectionProps {
  title: string;
  active?: boolean;
}

export default function Section({ title, active }: SectionProps) {
  return <Text style={[styles.prompText, active && styles.active]}>{title}</Text>;
}

const styles = StyleSheet.create({
  prompText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#616365",
    marginBottom: 12,
  },
  active: {
    color: "#FFFFFF",
    marginBottom: 0,
  },
});
