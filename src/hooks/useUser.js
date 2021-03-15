import { useMutation } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/client';
import { CREATEUSER } from './../graphql/mutations';

const useUser = () => {
  const [mutate, result] = useMutation(CREATEUSER);

  const apolloClient = useApolloClient();

  const addUser = async ({ username, password }) => {

    console.log('username:', username);
    console.log('password:', password);
    const review = await mutate({variables:{"input":{"username": username,"password": password} }});
    apolloClient.resetStore();

    return review;
  };

  return [addUser, result];
};

export default useUser;