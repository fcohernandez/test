import React from 'react'
import { View, StyleSheet, Text, Button} from 'react-native';

const HomeScreen = (props) => {

    const {username, nombre} = props.usuario.item

    console.log(props)

    return(
        <View style = {styles.container}>
            <Text>Nickname: {username}</Text>
            <Text>Nombre de usuario: {nombre}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        backgroundColor: '#fff',
        height: 100,
        width: 200,
        marginBottom: 10
    },
})

export default HomeScreen;