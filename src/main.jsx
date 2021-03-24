import React from 'react';
//import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './components/Repository/RepositoryList';
import SignIn from './components/SignIn/SignIn';
import SignOut from './components/SignOut';
import SignUp from './components/SignUp';
import AppBar from './components/AppBar';
import Repository from './components/Repository';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';

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
      <Route exact path="/" component={RepositoryList} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signout" component={SignOut} />
        <Route path="/repository/:id" component={Repository} />
        <Route path="/reviewForm" component={ReviewForm} />
        <Route path="/reviewlist" component={ReviewList} />
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;