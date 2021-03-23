import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from './../../src/graphql/queries';


const useRepository = (id) => {
  const [repository, setRepository] = useState();
  const [loading, setLoading] = useState(false);

  const variables = { "id": id, first: 2 };

  const { data, error, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network', variables
  });

  if (data) {
    console.log('repo:', data.repository);
  }

  const fetchRepository = async () => {
    // next is with graphql
    if (data) {
      setRepository(data.repository);
      console.log('asetus:', repository);
    }

  };

  /* useEffect(() => {
    fetchRepository();
  }, []); */

  const handleFetchMore = () => {
    const canFetchMore = !loading && data && data.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        const newSearch = {
          repository: {
            ...fetchMoreResult.repository,
            reviews: {
              ...fetchMoreResult.repository.reviews,
              edges: [
                ...prev.repository.reviews.edges,
                ...fetchMoreResult.repository.reviews.edges,
              ]
            },
          },
        };

        return newSearch;
      },
    });
  };

  return {
    repositories: data ? data.repository : undefined,
    fetchMore: handleFetchMore,
    loading,
    error,
    ...result,
  };
  //return { repositories, loading, refetch: fetchRepositories };
};

export default useRepository;