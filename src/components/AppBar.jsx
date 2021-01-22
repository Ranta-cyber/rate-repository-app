import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Link } from 'react-router-native';
import RepoTab from './AppBarTab';
import SignInTab from './AppBarTabSignIn';

import Constants from 'expo-constants';
import SignIn from './SignIn';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 0,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',     //'#ECF0F1',
    padding: 30,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    height: 150,
  },

  textStyle: {

    color: 'white',
    width: 100,
    height: 50,
    //fontWeight: theme.fontWeights.bold,
  },
  item: {
    flexGrow: 0,
    width: 100,
    height: 100,
    top: 10
  },
  /*   scrollView: {
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
  
      },
    } */
});

 const PressRepo = () => {
  return (
    <Link to="/signin" component={TouchableWithoutFeedback}>
          <Text style={styles.textStyle}>Sign In</Text>
          </Link>
  );
};


const PressSign = () => {
  return(
        <Link to="/" component={TouchableWithoutFeedback}>
          <Text style={styles.textStyle}>Repositories</Text>
        </Link>
  );}; 


const AppBar = () => {
  return (

    <View style={styles.container} >
      <ScrollView horizontal  >
        
          <PressSign/>
          <PressRepo/>
        
      </ScrollView>
    </View >
  );
};

export default AppBar;