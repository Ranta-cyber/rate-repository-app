import { useMutation } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/client';
import { CREATEREVIEW } from './../graphql/mutations';

const useReview = () => {
  const [mutate, result] = useMutation(CREATEREVIEW);

  const apolloClient = useApolloClient();

  const addReview = async ({ username, reponame, rating, reviewText }) => {

    console.log('username:', username);
    console.log('password:', reponame);
    const review = await mutate({variables:{"input":{"repositoryName": reponame,"ownerName": username,"rating": parseInt(rating), "text": reviewText} }});
    apolloClient.resetStore();

    return review;
  };

  return [addReview, result];
};

export default useReview;