import React from 'react';
//import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect, Link } from 'react-router-native';
import RepositoryList from './components/RepositoryList';
import SignIn from './components/SignIn';
import AppBar from './components/AppBar';
import SignInTab from './components/AppBarTabSignIn';
import RepoTab from './components/AppBarTab';

const styles = StyleSheet.create({
  container: {
    //marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8'
  },
});

const Main = () => {
  return (

    <View style={styles.container}>

      <AppBar />

      
      
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/sigin">
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;