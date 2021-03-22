import { gql } from 'apollo-boost';
//repositories(orderBy:$order, orderDirection:$direction) {
 export const GET_REPOSITORIES = gql`
  query($order: AllRepositoriesOrderBy, $direction: OrderDirection, $search: String) {
    repositories(orderBy:$order, orderDirection:$direction, searchKeyword: $search) {
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
      }
    }
  }
`; 

export const GET_REPOSITORY = gql`
  query get_repository($id: ID!){
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
      reviews {
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

