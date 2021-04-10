import React from 'react'
import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import HomeScreen from './src/screens/HomeScreen'
import ImageScreen from './src/screens/ImageScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen component={HomeScreen} name='Home' />
        <Stack.Screen component={DetailsScreen} name='Details' />
        <Stack.Screen component={ImageScreen} name='BigImageView' />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
