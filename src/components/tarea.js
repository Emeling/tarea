import React from 'react';
import {
    FlatList,
    View,
    Text,
} from 'react-native';

const Tarea=(props) =>{
    const {datos}= props;
    return(
        <View>
            <Text style={{width: 200, flexDirection: 'row',alignItems: 'center'}}>Lista de Datos</Text>
            <FlatList
            data={datos}
            renderItem={
                ({item})=>{
                    return (
                        <View style={{borderRadius:10}}>
                        <View style={{padding:20,borderRadius:20}} >
                            <Text style={{backgroundColor:'#D4D9D4',}} >
                                {item.title}
                            </Text>
                           
                            <Text  style={{backgroundColor:'#D4D9D4',}}>
                                {item.body}
                            </Text>
                        </View>
                        </View>
                    )
                        
                    }
                }
           />
        </View>
    )
}
export default Tarea

       