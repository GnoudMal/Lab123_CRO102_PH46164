import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Block = ({ title, children }) => (
    <View style={styles.blockContainer}>
        <Text style={styles.title}>{title}</Text>
        {children}
    </View>
);

export default Block

const styles = StyleSheet.create({
    blockContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6200EE',
        marginBottom: 10,
    },
})