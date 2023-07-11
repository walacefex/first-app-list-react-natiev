import {View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ParticipantProps } from './types';

export function Participant({name}: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
    </View>
  );
}