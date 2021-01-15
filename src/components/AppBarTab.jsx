import React from 'react';
import {
  TouchableWithoutFeedback, 
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {

  },
  textStyle: {
    color: 'white',
    width: 100,
    height: 50,
    fontWeight: 'bold'
  }
});

const pressRepo = () => {

};

const RepoTab = () => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={pressRepo()}>
        <View >
          <Text style={styles.textStyle}>Repositories</Text>
        </View>
      </TouchableWithoutFeedback >
    </View>
  );
};

export default RepoTab;