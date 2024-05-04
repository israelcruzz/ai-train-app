import { StyleSheet, Text } from "react-native"

interface SectionProps {
    title: string
}

export default function Section({ title }: SectionProps) {
    return (
        <Text style={styles.prompText}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    prompText: {
        fontSize: 18,
        fontWeight: '600',
        color: "#616365",
        marginBottom: 12
    }
})