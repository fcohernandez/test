import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = (props) => {
    return(
        <View>
            <Text style = {styles.text}>{props.titulo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    }
})

export default Header