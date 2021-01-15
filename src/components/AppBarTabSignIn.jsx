import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    width: 100,
    height: 50,
    fontWeight: 'bold',
  }
});

const SignInTab = () => {

  return (
    <TouchableWithoutFeedback>
      <View>
         <Text style={styles.textStyle}>Sign In</Text> 
      </View>
    </TouchableWithoutFeedback >
  );
};

export default SignInTab;