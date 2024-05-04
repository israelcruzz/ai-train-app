import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
});
