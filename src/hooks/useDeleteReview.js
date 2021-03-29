import { useMutation } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/client';
import { DELETEREVIEW } from './../graphql/mutations';

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETEREVIEW);
  const apolloClient = useApolloClient();

  const deleteReview = async  (id ) => {
    const deleted = await mutate({variables: {id}});
    apolloClient.resetStore();
    return deleted;
  };

  return [deleteReview, result];
};

export default useDeleteReview;