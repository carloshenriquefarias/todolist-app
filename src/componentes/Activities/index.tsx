import {Text, View, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './styles';
// import React, {useState, useEffect} from 'react';

interface PropsActivities {
    name: string;
    onRemove: () => void; //Tipando uma função
    // id: number;    
    // isComplete: boolean;
}

export function ActivitiesList({name, onRemove}: PropsActivities) { 

    // const [activities, setActivities] = useState<string[]>([
    //     "Nome 1","Nome 2"
    // ]);

    // function handleActivitiesCompleted(id: number) {
    //     // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
    
    //     const activitiesToDo = activities.map(item =>{
    //       if (item.id == id) {        
    //         if(item.isComplete == true){
    //           item.isComplete = false;          
    //         }else if(item.isComplete == false){
    //           item.isComplete = true;
    //         }          
    //       } 
    //       return item;
    //     })    
    //     setActivities(activitiesToDo)  
        
    // }
    

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