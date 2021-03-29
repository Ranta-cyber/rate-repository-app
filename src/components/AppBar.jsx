import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

/* import { useQuery } from '@apollo/react-hooks';
import { GET_AUTHORIZEDUSER } from '../graphql/queries'; */

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 0,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',     //'#ECF0F1',
    padding: 15,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    height: 80,
  },

  textStyle: {

    color: 'white',
    width: 150,
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
    <Link to="/" component={TouchableWithoutFeedback}>
      <View>
        <Text style={styles.textStyle}>Repositories</Text>
      </View>
    </Link >

  );
};

const PressMyReview = ({ userLogged }) => {
  if (!userLogged) { return null; }

  return (
    <Link to="/reviewlist" component={TouchableWithoutFeedback}>
      <View>
        <Text style={styles.textStyle}>My reviews</Text>
      </View>
    </Link >

  );
};

const PressReview = ({ userLogged }) => {
  if (!userLogged) { return null; }

  return (
    <Link to="/reviewForm" component={TouchableWithoutFeedback}>
      <View>
        <Text style={styles.textStyle}>Create a review</Text>
      </View>
    </Link >

  );
};

const PressSignUp = ({ userLogged }) => {
  if (!userLogged) {
    return (
      <Link to="/signup" component={TouchableWithoutFeedback}>
        <View>
          <Text style={styles.textStyle}>Sign Up</Text>
        </View>
      </Link>
    );
  }

  else { return null; }
};

const PressSign = ({ userLogged }) => {
  console.log('userlogged:', userLogged);
  if (!userLogged) {
    return (
      <Link to="/signin" component={TouchableWithoutFeedback}>
        <View>
          <Text style={styles.textStyle}>Sign in</Text>
        </View>
      </Link>
    );
  }
  else {

    console.log(' sign out');

    return (
      <Link to="/signout" component={TouchableWithoutFeedback} >
        <View>
          <Text style={styles.textStyle}>Sign out</Text>
        </View>
      </Link >
    );

  }
};


const AppBar = () => {

  /* const { data, error } = useQuery(GET_AUTHORIZEDUSER, {
    fetchPolicy: 'cache-and-network',
  });

  if (data) {
    console.log('user authorizedUser:', data.authorizedUser);
  }
  const userLoggedIn = data && data.authorizedUser; */

  const userData = useAuthorizedUser(false);
  
  const userLoggedIn = userData && userData.authorizedUser;

  console.log('userData:', userData);
  console.log('userloggedin:', userLoggedIn);

  return (

    <View style={styles.container} >
      <ScrollView horizontal  >

        <PressRepo />
        <PressReview userLogged={userLoggedIn} />
        <PressMyReview userLogged={userLoggedIn} />
        <PressSign userLogged={userLoggedIn} />
        <PressSignUp userLogged={userLoggedIn} />

      </ScrollView>
    </View >
  );
};

export default AppBar;