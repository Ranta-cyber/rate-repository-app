import { gql } from 'apollo-boost';
//repositories(orderBy:$order, orderDirection:$direction) {
export const GET_REPOSITORIES = gql`
  query($order: AllRepositoriesOrderBy, $direction: OrderDirection, $search: String, $first: Int, $after: String) {
    repositories(orderBy:$order, orderDirection:$direction, searchKeyword: $search, first: $first, after: $after) {
      edges{
        node {
          id,
          fullName,
          description,
          ownerName,
          ownerAvatarUrl,
          reviewCount,
          ratingAverage,
          forksCount,
          stargazersCount,
          language,
          url
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
      
    }
  }
`;

export const GET_REPOSITORY = gql`
  query get_repository($id: ID!, $first: Int, $after: String){
    repository(id: $id){
      id,
      fullName,
      description,
      ownerName,
      ownerAvatarUrl,
      reviewCount,
      ratingAverage,
      forksCount,
      stargazersCount,
      language,
      url,
      reviews (first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
        }
        
      }
    }
  }
`;

export const GET_AUTHORIZEDUSER = gql`
query{
  authorizedUser {
    username
  }
}
`;

