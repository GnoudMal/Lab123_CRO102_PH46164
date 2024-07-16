import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import ExpenseManager from './src/screens/ExpenseManager '
import RootComponent from './src/screens/RootComponent'

const App = () => {
  return (
    <RootComponent />
  )
}

export default App

const styles = StyleSheet.create({})