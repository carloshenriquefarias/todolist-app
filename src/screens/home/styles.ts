import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333333',
      alignItems: 'center',       
      color: '#FFF'
    },
    header: {    
        backgroundColor: '#121212',
        alignItems: 'center',
        paddingTop: 80,
        marginBottom: 50,        
        color: '#FFF',
        width: '100%',
        height: '25%',
    },
    title: {
        fontSize: 36,
        color: '#FFF',
        fontWeight: 'bold',
    },
    form:{
        width: '90%',
        flexDirection: 'row',
        marginTop: -80,
        // marginTop: 36,
        // marginBottom: 42,        
    },
    input: {
        flex:1, //Empurra os elementos pro canto da tela
        backgroundColor: '#808080',
        height: 56,
        fontSize: 16,
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        marginRight: 12,               
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listEmptyText:{
        marginTop: 20,
        color: '#FDFCFE',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',      
    },
    listEmptyTextlight:{
        marginTop: 7,
        color: '#FDFCFE',
        fontSize: 14,
        textAlign: 'center',      
    },
    menu: {    
        marginTop: 30,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',                     
        color: '#FFF',
        width: '90%',      
    },
    activitiescreated: {   
        flexDirection: 'row',
    },
    textcreated: {  
        fontWeight: 'bold',        
        textAlign: 'center',               
        color: 'lightblue',
        backgroundColor: '#333333',
        fontSize: 16
    },
    numbercreated: {  
        fontWeight: 'bold',      
        color: '#FFF',
        backgroundColor: '#808080', 
        fontSize: 16,
        borderRadius: 8,
        width: 30,
        textAlign: 'center',
        marginLeft: 5
    },

    activitiesfinished: {   
        flexDirection: 'row',
    },
    textfinished: {  
        fontWeight: 'bold',        
        textAlign: 'center',               
        color: '#8284fa',
        backgroundColor: '#333333',
        fontSize: 16
    },
    numberfinished: {  
        fontWeight: 'bold',      
        color: '#FFF',
        backgroundColor: '#808080', 
        fontSize: 16,
        borderRadius: 8,
        width: 30,
        textAlign: 'center',
        marginLeft: 5
    },
    divider:{
        color: '#FFF',
        width: '90%',
    }
    
});