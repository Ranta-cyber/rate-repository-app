import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges{
        node {
          fullName,
         description,
          ownerName,
          ownerAvatarUrl,
          reviewCount,
          ratingAverage,
          forksCount,
          stargazersCount,
          language
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