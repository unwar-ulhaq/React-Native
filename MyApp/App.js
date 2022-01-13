import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native-safe-area-context';
import List from './components/List';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <List />
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
