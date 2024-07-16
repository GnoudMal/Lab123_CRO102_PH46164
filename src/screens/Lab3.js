import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import ExpenseManager from './ExpenseManager '

const Lab3 = () => {
    return (
        <Provider store={store}>
            < ExpenseManager />
        </Provider>
    )
}

export default Lab3

const styles = StyleSheet.create({})