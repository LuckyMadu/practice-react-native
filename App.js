import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import NavigatorTab from './src/navigation/NavigatorTab';

const AppContainer = createAppContainer(NavigatorTab);

const App = () => {
  return (
    <View style={styles.appWrapper}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <AppContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    margin: 40,
    flex: 1,
  },
});

export default App;
