import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { View, StyleSheet, Button, FlatList} from 'react-native';

import { login } from '../actions/authAction'
import UserCard from '../components/UserCard'
import Header from '../components/Header';

const HomeScreen = () => {

    const [users, setUsers] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        fetch('http://192.168.18.169:3000/usuarios')
        .then(response => response.json()) 
        .then(json => {
            if(!json.ok){
                return Alert.alert(json.msg)
            }
            
            setUsers(json.usuarios)
        })
    }, []);

    return(
        <View style = {styles.container}>
            <Header titulo = "Lista de usuarios registrados"/>
            <FlatList
                data={users}
                renderItem = {item => <UserCard usuario = {item}/>}
                keyExtractor={item => item._id}
            />
            <Button title="Cerrar sesión" onPress={() => dispatch(login(false))}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf4f3',
        marginTop: 10
    },
})

export default HomeScreen;