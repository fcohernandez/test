import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {

    const logged = useSelector(state => state.auth.logged)

    return(
        <Stack.Navigator>
            {   logged ? 
                (<Stack.Screen name="Home" component={HomeScreen}/>) :
                (
                    <>
                    <Stack.Screen name="Login" component={LoginScreen}/>
                    <Stack.Screen name="Registro" component={RegisterScreen}/>
                    </>
                )
            }
        </Stack.Navigator>
    )
}

export default MainNavigator;