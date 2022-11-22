import {Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert} from 'react-native';
import { ActivitiesList } from '../../componentes/Activities';
import {styles} from './styles';
import React, {useState, useEffect} from 'react';

export function Home() {

    const [activities, setActivities] = useState<string[]>([
        "Nome 1","Nome 2"
    ]);
    const [activitiesName, setActivitiesName] = useState('');

    const [ActivitiesCount, setActivitiesCount] = useState(0);
    // const [CountActivitiesFinished, setCountActivitiesFinished] = useState(0);

    // useEffect(() => {
    //     setActivitiesCount(activities.length);
    
    //     var activitiesFinished = activities.filter(item => {
    //        return  item.isComplete == true               
    //     })
    //     setCountActivitiesFinished(activitiesFinished.length);
    // }, [activities]);


    function handleActivitiesAdd(){

        if (activitiesName == '') {
            Alert.alert('Informe a sua atividade');
            return;
        }

        //Verificando se existe uma atividade na lista
        if(activities.includes(activitiesName)){
            return Alert.alert("Atenção", "Esta atividade já existe!");
        }

        // const newActivities = {
        //     id: activities.length + 1,
        //     name: activitiesName,    
        //     isComplete: false
        // }

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
                style={{ width: "90%"}}
                data={activities}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <ActivitiesList 
                        key={item}
                        name={item}  
                        onRemove={ () =>handleActivitiesRemove(item)}
                        // isComplete= true
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