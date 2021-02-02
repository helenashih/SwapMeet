import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
// import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks';

export default function App() {
     return (
         <WelcomeScreen />
  );
}
