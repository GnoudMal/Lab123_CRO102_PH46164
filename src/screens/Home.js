import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Lab1')}
            >
                <Text>Go to Lab 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Lab2')}
            >
                <Text>Go to Lab 2</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Lab3')}
            >
                <Text>Go to Lab 3</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        borderRadius: 20,
        padding: 20,
        backgroundColor: 'cyan',
        marginTop: 10,
    },
});
