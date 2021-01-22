import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet
} from 'react-native';
import { Link } from 'react-router-native';

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