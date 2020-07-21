import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, Button, TextInput, Alert } from 'react-native';

import { login } from '../actions/authAction';
import Header from '../components/Header';

const RegisterScreen = () => {

    const [usuario, setUsuario] = useState('')
    const [nombre, setNombre] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPwd, setConfirmPwd] = useState('')
    const [pwdMatch, setpwdMatch] = useState('')

    const dispatch = useDispatch();

    const register = () => {

        if(!pwdMatch){
            return Alert.alert("Las contraseñas no coinciden")
        }

        fetch('http://192.168.18.169:3000/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usuario,
                nombre,
                password
            })
        })
        .then(response => response.json()) 
        .then(json => {
            if(!json.ok){
                return Alert.alert(json.msg)
            }

            Alert.alert("Registro exitoso!")

            dispatch(login(true))
        })
    }

    const validatePassword = () => {
        if(password == confirmPwd){
            setpwdMatch(true)
        }else{
            setpwdMatch(false)
        }
    }

    return(
        <View style = {styles.container}>
            <Header titulo = "Pantalla de registro"/>
            <TextInput
                style = {styles.inputs}
                placeholder = "Usuario"
                value = {usuario}
                onChangeText = {text => setUsuario(text)}
                autoCapitalize = 'none'
            />
            <TextInput
                style = {styles.inputs}
                placeholder = "Nombre"
                value = {nombre}
                onChangeText = {text => setNombre(text)}
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
            <TextInput
                style = {styles.inputs}
                placeholder = "Confirmar Contraseña"
                value = {confirmPwd}
                onChangeText = {text => setConfirmPwd(text)}
                autoCapitalize = 'none'
                secureTextEntry={true}
                onBlur = {() => validatePassword()}
            />
            <Button title = "Registrarse" onPress={() => register()}/>
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

export default RegisterScreen