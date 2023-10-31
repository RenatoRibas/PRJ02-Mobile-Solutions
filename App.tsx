/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import CounterScreen from './src/screens/CounterScreen';



function App(): JSX.Element {
  return (
    <SafeAreaView>
      <CounterScreen />
    </SafeAreaView>
  );

}

export default App;
