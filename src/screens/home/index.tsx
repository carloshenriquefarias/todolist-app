import {Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert} from 'react-native';
import { Activities } from '../../componentes/Activities';
import {styles} from './styles';
import React, {useState} from 'react';

export function Home() {

    const [activities, setActivities] = useState<string[]>([]);
    const [activitiesName, setActivitiesName] = useState('');

    function handleActivitiesAdd(){

        //Verificando se existe uma atividade na lista
        if(activities.includes(activitiesName)){
            return Alert.alert("Atenção", "Esta atividade já existe!");
        }

        setActivities(prevState => [...prevState, activitiesName]);
        setActivitiesName('');
    }

    function handleActivitiesRemove(name: string){

        //Estrutura: TÍTULO / ALERTA DA MENSAGEM / BOTOES
        return Alert.alert("Remover", `Remover a atividade ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setActivities(
                    prevState => prevState.filter (activities => activities !== name) //Removendo um atividade
                )
            },
            {
                text: 'Não',
                style: 'cancel'
                // onPress: () => Alert.alert("Deletado")
            },
        ])
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>TODO List</Text>
            </View>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#F2F2F2'
                    onChangeText={setActivitiesName} //Valor que e colocado no input
                    value={activitiesName}
                    // keyboardType='numeric'
                />

                {/* //Botão */}
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleActivitiesAdd}
                >
                    <Text 
                        // style={styles.buttonText}
                    >
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.menu}>                
                <View style={styles.activitiescreated}>
                    <Text style={styles.textcreated}>Criadas:</Text>
                    <Text style={styles.numbercreated}>12</Text>
                </View>
                <View style={styles.activitiesfinished}>
                    <Text style={styles.textfinished}>Concluidas:</Text>
                    <Text style={styles.numberfinished}>10</Text>
                </View>                
            </View>

            <Text style={styles.divider}>
                .................................................................................................
            </Text>  

            <FlatList
                data={activities}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Activities 
                        key={item}
                        name={item}  
                        onRemove={ () =>handleActivitiesRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                
                //Se a lista estiver vazia, moste isso:
                ListEmptyComponent={() => (
                    <>
                        <Text style={styles.listEmptyText}>
                            Voce ainda não tem tarefas cadastradas!
                        </Text>

                        <Text style={styles.listEmptyTextlight}>
                            Crie as tarefas e organize seus itens a fazer!
                        </Text>
                    </>                        
                )}
            />       
            
        </View>
    )
}