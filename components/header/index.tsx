import { StyleSheet, View } from "react-native";
import ButtonBack from "../button-back";
import Section from "../section";

interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  return (
    <View style={styles.header}>
      <ButtonBack />
      <View style={styles.sectionArea}>
        <Section title={name} active />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    gap: 12,
    paddingBottom: 8,
  },
  sectionArea: {
    justifyContent: "center",
    alignItems: "center",
  },
});
