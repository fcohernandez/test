import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, Button, TextInput, Alert } from 'react-native';

import { login } from '../actions/authAction';
import Header from '../components/Header';

const LoginScreen = ({ navigation }) => {

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const log = () => {
        fetch(`http://192.168.18.169:3000/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usuario,
                password,
            })
        })
        .then(response => response.json())  
        .then(json => {
            if(!json.ok){
                return Alert.alert(json.msg)
            }

            Alert.alert(json.msg)

            dispatch(login(true))
        })
    }

    return(
        <View style = {styles.container}>
            <Header titulo = "Pantalla de login"/>
            <TextInput
                style = {styles.inputs}
                placeholder = "Usuario"
                value = {usuario}
                onChangeText = {text => setUsuario(text)}
                autoCapitalize = 'none'
            />
            <TextInput
                style = {styles.inputs}
                placeholder = "Contraseña"
                value = {password}
                onChangeText = {text => setPassword(text)}
                autoCapitalize = 'none'
                secureTextEntry={true}
            />
            <Button title = "Ingresar" onPress={() => log()}/>
            <Button title = "Registrarse" onPress={() => navigation.navigate('Registro')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf4f3',
    },
    inputs: {
        backgroundColor: '#fff',
        height: 40,
        width: 200,
        marginBottom: 10,
        paddingLeft: 20,
        borderRadius: 18
    }
})

export default LoginScreen