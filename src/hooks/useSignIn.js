import { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/client';
import { AUTHORIZE } from './../graphql/mutations';

import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const signIn = async ({ username, password }) => {

    console.log('username:', username);
    console.log('password:', password);
    const token = await mutate({ variables: { input: { username, password } } });
    console.log('token:', token);

    await authStorage.setAccessToken(token.data.authorize.accessToken);
    apolloClient.resetStore();

    return token;
  };

  return [signIn, result];
};

export default useSignIn;
