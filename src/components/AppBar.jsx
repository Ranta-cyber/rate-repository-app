import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import RepoTab from './AppBarTab';
import SignInTab from './AppBarTabSignIn';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',     //'#ECF0F1',
    padding: 30,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'flex-start'
  },

  textStyle: {

    color: 'white',
    width: 100,
    height: 50,
    fontWeight: 'bold',
  },
  item: {
    flexGrow: 0,
    width: 100,
    height: 100,
    top: 10
  },
  scrollView: {
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,

    },
  }
});

const AppBar = () => {
  return (

    <View style={styles.container} >
      <ScrollView horizontal style={styles.scrollView}>

        <StatusBar barStyle='light-content' />

        <Link to="/sigin" component={SignInTab} activeOpacity={0.8} />
        <Link to="/" component={RepoTab} activeOpacity={0.8} />
        {/* <RepoTab/>

      <SignInTab/> */}
      </ScrollView>
    </View >
  );
};

export default AppBar;