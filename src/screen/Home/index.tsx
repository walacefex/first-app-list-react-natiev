import { Text, TextInput, TouchableOpacity, View, FlatList, Alert} from 'react-native';
import {styles} from './styles';
import { Participant } from '../../components/Participant';

export  function Home() {
  const participants = ["Walace", "Telles", "Naty", "Lucia", "Luis", "Luisa", "Felix", "Nicolly", "Isa", "Maria", "Marta", "Paula", "Paulo", "Silas", "Lucas" ]

  function handleParticipantAdd() {
    if (participants.includes('Walace')) {
    Alert.alert('Participante já adicionado', 'Esse participante já foi adicionado a lista de presença')
  } 
}
  function handleParticipantRemove(name: string) {
    Alert.alert('Remover participante', `Deseja remover ${name} da lista de presença?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
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