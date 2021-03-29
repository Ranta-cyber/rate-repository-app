import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from './../../src/graphql/queries';
const useRepositories = (ord, dir, search) => {
  //const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  let variables = { order: ord, direction: dir, search: search, first: 4 };
  //variables.order = 'CREATED_AT';
  //variables.direction = 'ASC';

  const { data, error, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network', variables
  });


  if (data) {
    console.log('repo:', data.repositories);
  }

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,

      },

      updateQuery: (prev, { fetchMoreResult }) => {
        const newSearch = {

          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...prev.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };
        return newSearch;
      },
    });
  };

  /* updateQuery: (prev, { fetchMoreResult }) => {
    if (!fetchMoreResult) return prev;
    return Object.assign({}, prev, {
      repositories: [...prev.repositories, ...fetchMoreResult.repositories]
    });
  } */

  /* const fetchRepositories = async () => {
    // next is with graphql
    if (data) {
      setRepositories(data.repositories);
      console.log('asetus:', repositories);
    } */
  // next is with FetchApi
  /*  setLoading(true);
 
  // Replace the IP address part with your own IP address!
  const response = await fetch('http://192.168.1.104:5000/api/repositories');
  const json = await response.json();
 
  setLoading(false);
  setRepositories(json); 
};*/

 /*  useEffect(() => {
    fetchRepositories();
    
  }, []); */

  return {
    repositories: data ? data.repositories : undefined,
    fetchMore: handleFetchMore,
    loading,
    error,
    ...result,
  };
  //return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;