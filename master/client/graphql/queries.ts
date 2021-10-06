// @ts-nocheck
import gql from 'graphql-tag';

export const GITHUB_LOGIN_QUERY = gql`
  query gitHubAuth($input: SocialAuthInput!) {
    gitHubAuth(input: $input) {
      _id
      githubId
    }
  }
`;

export const REDDIT_LOGIN_QUERY = gql`
  query redditAuth($input: SocialAuthInput!) {
    redditAuth(input: $input) {
      _id
      redditId
    }
  }
`;

export const GOOGLE_LOGIN_QUERY = gql`
  query googleAuth($input: SocialAuthInput!) {
    googleAuth(input: $input) {
      _id
    }
  }
`;

export const ME_QUERY = gql`
  query me {
    me {
      _id
      name
      role
      permalink
      email
      avatar
    }
  }
`;

export const GET_USER_QUERY = gql`
  query user($input: GetUserInput!) {
    user(input: $input) {
      _id
      permalink
      name
      avatar
      bio
    }
  }
`;

export const GET_GOOGLE_LOG_LINK = gql`
  query getGoogleAuthURL {
    getGoogleAuthURL
  }
`;

export const GET_USER_ANCESTORS = gql`
  query findAllAncestors {
    findAllAncestors {
      _id
      name
    }
  }
`;

export const GET_TREE_BY_ID = gql`
query findTreebyID($id: String!) {
  findTreebyID(id: $id) {
    name
    branches {
      _id
      rootUser
    }
  }
}
`

export const GET_ALL_TREES = gql`
  query findalltrees {
    findalltrees {
      name
      branches {
        _id
        rootUser
      }
    }
  }
`;


