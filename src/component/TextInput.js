// components/CustomTextInput.js
import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

const CustomTextInput = (props) => {
    return (
        <RNTextInput style={styles.input} {...props} />
    );
}

export default CustomTextInput;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
});
