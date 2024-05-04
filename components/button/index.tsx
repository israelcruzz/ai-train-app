import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isDisabled?: boolean;
}

export default function Button({ title, isDisabled = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.button, isDisabled && styles.buttonDisabled]}
      disabled={isDisabled}
    >
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
  buttonDisabled: {
    backgroundColor: "#B6F09C",
    opacity: 0.6,
  },
});
