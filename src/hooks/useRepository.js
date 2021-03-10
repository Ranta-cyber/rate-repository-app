import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from './../../src/graphql/queries';
const useRepository = ( id ) => {
  const [repository, setRepository] = useState();
  const [loading, setLoading] = useState(false);

  const variables = { "id": id };

  const { data, error }  = useQuery(GET_REPOSITORY, {
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

   useEffect(() => {
    fetchRepository();
  }, []); 

  return {  repositories: data ? data.repository : undefined,
    loading,
    error};
  //return { repositories, loading, refetch: fetchRepositories };
};

export default useRepository;