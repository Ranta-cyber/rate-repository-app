import React from 'react';
import { useHistory } from "react-router-native";
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';

const SignOut = () => {

  console.log('signout componentissä');
 const authStorage = useContext(AuthStorageContext);
 const history = useHistory();
 const apolloClient = useApolloClient();

 authStorage.removeAccessToken();
 apolloClient.resetStore();
 history.push("/");

 return null;

};

export default SignOut;