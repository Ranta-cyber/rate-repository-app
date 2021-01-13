import React from 'react';
import { View, StyleSheet, StatusBar, Text, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',     //'#ECF0F1',
    padding: 30

  },
  textStyle: {
    textAlign: 'left',
    color: 'white'
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
        <View>

          <StatusBar />
          <Text style={styles.textStyle}>Repositories</Text>

        </View>
      </TouchableWithoutFeedback >
    </View >
  );
};

export default AppBar;