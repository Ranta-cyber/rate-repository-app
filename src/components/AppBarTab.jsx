import React from 'react';
import {
  TouchableWithoutFeedback, 
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Link } from 'react-router-native';

// koe 

const styles = StyleSheet.create({
  container: {

  },
  textStyle: {
    color: 'white',
    width: 100,
    height: 50,
   // fontWeight: 700
  }
});

const pressRepo = () => {

};

const RepoTab = () => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={pressRepo()}>
        <View >
          {/* <Text style={styles.textStyle}>Repositories</Text> */}
          <Link to="/">Repositories</Link>
        </View>
      </TouchableWithoutFeedback >
    </View>
  );
};

export default RepoTab;