import {Text, View, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './styles';

interface PropsActivities {
    name: string;
    onRemove: () => void; //Tipando uma função
}

export function Activities({name, onRemove}: PropsActivities) { 
    return (
        <View style={styles.container}>
            <Text 
                style={styles.name}
            >
                {name}
                {/* Limpar a casa */}
            </Text>
    
            {/* //Botão */}
            <TouchableOpacity 
                style={styles.button} 
                onPress={onRemove}
            >
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
      )
} 