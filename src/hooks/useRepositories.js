import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from './../../src/graphql/queries';
const useRepositories = (ord, dir, search) => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  let variables = {order:ord  , direction:dir, search:search};
  //variables.order = 'CREATED_AT';
  //variables.direction = 'ASC';

  const { data, error }  = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network', variables
  });

  if (data) {
    console.log('repo:', data.repositories);
  }

  const fetchRepositories = async () => {
    // next is with graphql
    if (data) {
      setRepositories(data.repositories);
      console.log('asetus:', repositories);
    }
    // next is with FetchApi
    /*  setLoading(true);

    // Replace the IP address part with your own IP address!
    const response = await fetch('http://192.168.1.104:5000/api/repositories');
    const json = await response.json();

    setLoading(false);
    setRepositories(json); */
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return {  repositories: data ? data.repositories : undefined,
    loading,
    error};
  //return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;