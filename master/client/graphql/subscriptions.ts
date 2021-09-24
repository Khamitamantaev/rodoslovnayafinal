import gql from 'graphql-tag';

export const NEW_MESSAGE_SUBSCRIPTION = gql`
  subscription newMessage {
    newMessage {
      sent
      body
    }
  }
`;

export const NEW_ANCESTORS_SUBSCRIPTION = gql`
  subscription userAdded {
    userAdded {
      _id
      name
    }
  }
`;
