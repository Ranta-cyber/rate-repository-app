import { useQuery } from '@apollo/react-hooks';
import { GET_AUTHORIZEDUSER } from '../graphql/queries';

const useAuthorizedUser = (bReviews) => {

  const variables = { "includeReviews": bReviews };

  const { data, error } = useQuery(GET_AUTHORIZEDUSER, {
    fetchPolicy: 'cache-and-network', variables
  });

  if (error) {
    console.log('useAuthorizeError:', error);
  }

  if (data) {
    console.log('user authorizedUser:', data.authorizedUser);
  }

  return {
    authorizedUser: data ? data.authorizedUser : undefined
  };
};

export default useAuthorizedUser;