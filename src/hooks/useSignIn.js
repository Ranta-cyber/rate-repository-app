import { useContext } from 'react';
import ApolloClient from 'apollo-boost';
import { useMutation } from '@apollo/client';
import { AUTHORIZE } from './../graphql/mutations';

import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    const authStorage = useContext(AuthStorageContext);
    console.log('username:', username);
    console.log('password:', password);
    const token = await mutate({ variables: { input: { username, password } } });
    console.log('token:', token);

    await authStorage.setAccessToken(/* access token from the data */);
    ApolloClient.resetStore();
    
    return token;
  };

  return [signIn, result];
};

export default useSignIn;
