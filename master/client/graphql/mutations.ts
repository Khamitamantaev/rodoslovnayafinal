import gql from 'graphql-tag';

export const UPDATE_USER_MUTATION = gql`
  mutation updateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      _id
      permalink
      name
      avatar
      bio
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation logout {
    logout {
      _id
      permalink
      name
      avatar
      bio
    }
  }
`;

export const SEND_MESSAGE_MUTATION = gql`
  mutation sendMessage($input: SendMessageInput!) {
    sendMessage(input: $input) {
      sent
      body
    }
  }
`;

export const REGISTER_USER_MUTATION = gql`
mutation createUser($input: CreateUserInput!) {
    createUser(input: $input){
        name
        email
    }
}`;

export const CREATE_TREE = gql`
mutation createTree($input: CreateTreeInput!) {
  createTree(createTreeInput: $input) {
    name 
  }
}
`;

export const CREATE_BRANCH = gql`
mutation createBranch($input: CreateBranchInput!) {
  createBranch(createBranchInput: $input) {
    name
  }
}
`;

export const DELETE_BRANCH = gql`
mutation removeBranchByID($input: String!) {
  removeBranchByID(id: $input) {
    _id
  }
}
`;

