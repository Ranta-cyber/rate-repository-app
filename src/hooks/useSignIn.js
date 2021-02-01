import { useMutation } from '@apollo/client';
import { AUTHORIZE } from './../graphql/mutations';


const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    console.log('username:', username);
    console.log('password:', password);
    const token = await mutate({variables: {input: {username, password}}});
    console.log('token:', token);
    return token;
  };

  return [signIn, result];
};

export default useSignIn;
