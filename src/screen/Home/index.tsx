import { Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import {styles} from './styles';
import { Participant } from '../../components/Participant';

export  function Home() {
  const participants = ["Walace", "Telles", "Naty", "Lucia", "Luis", "Luisa", "Felix", "Nicolly", "Isa", "Maria", "Marta", "Paula", "Paulo", "Silas", "Lucas" ]

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

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
           Ninguém chegou ainda? Adicione participantes, a sua lista de presença!
          </Text>
        )}
      />
     
    </View>
  );
}