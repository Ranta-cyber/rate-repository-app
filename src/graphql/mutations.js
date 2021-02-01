import { gql } from 'apollo-boost';

export const AUTHORIZE = gql`
mutation Authorize($input: AuthorizeInput) {
    authorize(credentials: $input) {
      accessToken
    }
}
`;