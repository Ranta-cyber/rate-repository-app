import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Link
} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    width: 100,
    height: 50,
    //fontWeight: 700,
  }
});

const SignInTab = () => {

  return (
    <TouchableWithoutFeedback>
      <View>
        {/* <Text style={styles.textStyle}>Sign In</Text> */}
        <Link to="/sigin">Sign In</Link>
      </View>
    </TouchableWithoutFeedback >
  );
};

export default SignInTab;