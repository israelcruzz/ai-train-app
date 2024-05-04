import { TextInput } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconSet from "react-native-vector-icons/Octicons";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headingText}>AiTrain</Text>

        <TouchableOpacity style={styles.favButton}>
          <IconSet name="heart-fill" color="#FFFFFF" size={18} />
        </TouchableOpacity>
      </View>

        {/* Form */}
      <View>
        <Text>Prompt</Text>

        <TextInput placeholder="Digite o tipo de treino (ex: costa, biceps, completo...)" />

        <TouchableOpacity>
            <Text>Criar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingVertical: 48,
        paddingHorizontal: 24,
        backgroundColor: '#111417'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    favButton: {
        width: 42,
        height: 42,
        borderRadius: 60,
        borderColor: '#34363C',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headingText: {
        fontWeight: '600',
        fontSize: 24,
        color: '#C5F3B0'
    }
})
