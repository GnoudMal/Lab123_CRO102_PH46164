import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lab3 from './Lab3';
import Home from './Home';
import Lab1 from './Lab1';
import Lab2 from './Bai2';



const Stack = createStackNavigator();

const RootComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Lab1" component={Lab1} />
                <Stack.Screen name="Lab2" component={Lab2} />
                <Stack.Screen name="Lab3" component={Lab3} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
})