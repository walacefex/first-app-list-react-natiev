import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import {styles} from './styles';
import { Participant } from '../../components/Participant';

export  function Home() {

  function handleParticipantAdd() {
    console.log('ok')
  }
  function handleParticipantRemove(name: string) {
    console.log(`removendo ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Terça, 4 de Julho de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6B6B6B"	
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Walace" onRemove={() => handleParticipantRemove("Walace")} />
      <Participant name="Telles" onRemove={() => handleParticipantRemove("Telles")} />
    </View>
  );
}