import React, { useState } from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
import Image from './src/assets/diamond-sunset.svg';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeScreen from './src/components/pages/HomeScreen';
import QuestionScreen from './src/components/pages/QuestionScreen';
import GameState  from './src/context/GameState';

import { NativeRouter, Route, Link } from "react-router-native";
import ResultScreen from './src/components/pages/ResultScreen';

const App = () => {
  const [hidden, setHidden] = useState(false);
  const Stack = createNativeStackNavigator();
  return (
    <GameState>
      <NativeRouter>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/questions" component={QuestionScreen} />
        <Route path="/result" component={ResultScreen} />
      </NativeRouter>
    </GameState>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 50,
    flexDirection: 'column',
    backgroundColor: '#192a56'

  },
  header: {
    flex: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    paddingHorizontal: 30,
    marginTop: 5,
    color: '#fff'
  },
  subtitle: {
    flex: 2,
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 30,
    marginTop: 5,
    color: '#fff'
  },
  SubmitButtonStyle: {
    marginTop: 10,
    marginBottom: 20,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#273c75',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default App;