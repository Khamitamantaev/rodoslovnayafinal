// THIS IS A GENERATED FILE, use `yarn codegen to regenerate
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Branch = {
  readonly __typename?: 'Branch';
  readonly _id: Scalars['ID'];
  readonly name?: Maybe<Scalars['String']>;
  readonly treeID?: Maybe<Scalars['String']>;
  readonly parentID?: Maybe<Scalars['String']>;
  readonly rootUser?: Maybe<Scalars['String']>;
  readonly positionX?: Maybe<Scalars['Float']>;
  readonly positionY?: Maybe<Scalars['Float']>;
  readonly branches: ReadonlyArray<Branch>;
};

export type CreateBranchInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly treeID?: Maybe<Scalars['String']>;
  readonly parentID?: Maybe<Scalars['String']>;
  readonly rootUser?: Maybe<Scalars['String']>;
};

export type CreateTreeInput = {
  readonly name?: Maybe<Scalars['String']>;
};

export type CreateUserInput = {
  readonly email?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
};

export type GetUserInput = {
  readonly userPermalink: Scalars['String'];
};

export type Message = {
  readonly __typename?: 'Message';
  readonly body: Scalars['String'];
  readonly sent: Scalars['String'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly updateUser: User;
  readonly createUser: User;
  readonly logout?: Maybe<User>;
  readonly sendMessage: Message;
  readonly createTree: Tree;
  readonly updateTree: Tree;
  readonly removeTree: Tree;
  readonly createBranch: Branch;
  readonly updateBranchByID: Branch;
  readonly removeBranchByID: Branch;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationSendMessageArgs = {
  input: SendMessageInput;
};


export type MutationCreateTreeArgs = {
  createTreeInput: CreateTreeInput;
};


export type MutationUpdateTreeArgs = {
  updateTreeInput: UpdateTreeInput;
};


export type MutationRemoveTreeArgs = {
  id: Scalars['Int'];
};


export type MutationCreateBranchArgs = {
  createBranchInput: CreateBranchInput;
};


export type MutationUpdateBranchByIdArgs = {
  updateBranchInput: UpdateBranchInput;
};


export type MutationRemoveBranchByIdArgs = {
  id: Scalars['String'];
};

export type Query = {
  readonly __typename?: 'Query';
  readonly users: ReadonlyArray<User>;
  readonly findAllAncestors: ReadonlyArray<User>;
  readonly me?: Maybe<User>;
  readonly user?: Maybe<User>;
  readonly gitHubAuth: User;
  readonly redditAuth: User;
  readonly googleAuth: User;
  readonly getGoogleAuthURL: Scalars['String'];
  readonly findalltrees: ReadonlyArray<Tree>;
  readonly findTreebyID: Tree;
  readonly findAllBranches: ReadonlyArray<Branch>;
  readonly findBranchByID: Branch;
};


export type QueryUserArgs = {
  input: GetUserInput;
};


export type QueryGitHubAuthArgs = {
  input: SocialAuthInput;
};


export type QueryRedditAuthArgs = {
  input: SocialAuthInput;
};


export type QueryGoogleAuthArgs = {
  input: SocialAuthInput;
};


export type QueryFindTreebyIdArgs = {
  id: Scalars['String'];
};


export type QueryFindBranchByIdArgs = {
  id: Scalars['String'];
};

export enum Roles {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export type SendMessageInput = {
  readonly body: Scalars['String'];
};

export type SocialAuthInput = {
  readonly code?: Maybe<Scalars['String']>;
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly userAdded: ReadonlyArray<User>;
  readonly newMessage: Message;
};

export type Tree = {
  readonly __typename?: 'Tree';
  readonly _id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly rootUser: Scalars['String'];
  readonly branches: ReadonlyArray<Branch>;
};

export type UpdateBranchInput = {
  readonly id: Scalars['String'];
  readonly treeID: Scalars['String'];
  readonly rootUser: Scalars['String'];
  readonly leftchildID: Scalars['String'];
  readonly rightchildID: Scalars['String'];
};

export type UpdateTreeInput = {
  readonly id: Scalars['Int'];
};

export type UpdateUserInput = {
  readonly email?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
};

export type User = {
  readonly __typename?: 'User';
  readonly _id: Scalars['ID'];
  readonly email?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly permalink: Scalars['String'];
  readonly active: Scalars['Boolean'];
  readonly githubId: Scalars['String'];
  readonly redditId: Scalars['String'];
  readonly avatar?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  readonly ancestors: ReadonlyArray<User>;
  readonly role: Roles;
};

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly updateUser: (
    { readonly __typename?: 'User' }
    & Pick<User, '_id' | 'permalink' | 'name' | 'avatar' | 'bio'>
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly logout?: Maybe<(
    { readonly __typename?: 'User' }
    & Pick<User, '_id' | 'permalink' | 'name' | 'avatar' | 'bio'>
  )> }
);

export type SendMessageMutationVariables = Exact<{
  input: SendMessageInput;
}>;


export type SendMessageMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly sendMessage: (
    { readonly __typename?: 'Message' }
    & Pick<Message, 'sent' | 'body'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly createUser: (
    { readonly __typename?: 'User' }
    & Pick<User, 'name' | 'email'>
  ) }
);

export type CreateTreeMutationVariables = Exact<{
  input: CreateTreeInput;
}>;


export type CreateTreeMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly createTree: (
    { readonly __typename?: 'Tree' }
    & Pick<Tree, 'name'>
  ) }
);

export type CreateBranchMutationVariables = Exact<{
  input: CreateBranchInput;
}>;


export type CreateBranchMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly createBranch: (
    { readonly __typename?: 'Branch' }
    & Pick<Branch, 'name'>
  ) }
);

export type GitHubAuthQueryVariables = Exact<{
  input: SocialAuthInput;
}>;


export type GitHubAuthQuery = (
  { readonly __typename?: 'Query' }
  & { readonly gitHubAuth: (
    { readonly __typename?: 'User' }
    & Pick<User, '_id' | 'githubId'>
  ) }
);

export type RedditAuthQueryVariables = Exact<{
  input: SocialAuthInput;
}>;


export type RedditAuthQuery = (
  { readonly __typename?: 'Query' }
  & { readonly redditAuth: (
    { readonly __typename?: 'User' }
    & Pick<User, '_id' | 'redditId'>
  ) }
);

export type GoogleAuthQueryVariables = Exact<{
  input: SocialAuthInput;
}>;


export type GoogleAuthQuery = (
  { readonly __typename?: 'Query' }
  & { readonly googleAuth: (
    { readonly __typename?: 'User' }
    & Pick<User, '_id'>
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { readonly __typename?: 'Query' }
  & { readonly me?: Maybe<(
    { readonly __typename?: 'User' }
    & Pick<User, '_id' | 'name' | 'role' | 'permalink' | 'email' | 'avatar'>
  )> }
);

export type UserQueryVariables = Exact<{
  input: GetUserInput;
}>;


export type UserQuery = (
  { readonly __typename?: 'Query' }
  & { readonly user?: Maybe<(
    { readonly __typename?: 'User' }
    & Pick<User, '_id' | 'permalink' | 'name' | 'avatar' | 'bio'>
  )> }
);

export type GetGoogleAuthUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGoogleAuthUrlQuery = (
  { readonly __typename?: 'Query' }
  & Pick<Query, 'getGoogleAuthURL'>
);

export type FindAllAncestorsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllAncestorsQuery = (
  { readonly __typename?: 'Query' }
  & { readonly findAllAncestors: ReadonlyArray<(
    { readonly __typename?: 'User' }
    & Pick<User, '_id' | 'name'>
  )> }
);

export type FindTreebyIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindTreebyIdQuery = (
  { readonly __typename?: 'Query' }
  & { readonly findTreebyID: (
    { readonly __typename?: 'Tree' }
    & Pick<Tree, 'name'>
    & { readonly branches: ReadonlyArray<(
      { readonly __typename?: 'Branch' }
      & Pick<Branch, '_id' | 'rootUser' | 'parentID'>
    )> }
  ) }
);

export type FindalltreesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindalltreesQuery = (
  { readonly __typename?: 'Query' }
  & { readonly findalltrees: ReadonlyArray<(
    { readonly __typename?: 'Tree' }
    & Pick<Tree, '_id' | 'name'>
    & { readonly branches: ReadonlyArray<(
      { readonly __typename?: 'Branch' }
      & Pick<Branch, '_id' | 'name' | 'rootUser' | 'parentID'>
    )> }
  )> }
);

export type NewMessageSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewMessageSubscription = (
  { readonly __typename?: 'Subscription' }
  & { readonly newMessage: (
    { readonly __typename?: 'Message' }
    & Pick<Message, 'sent' | 'body'>
  ) }
);

export type UserAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserAddedSubscription = (
  { readonly __typename?: 'Subscription' }
  & { readonly userAdded: ReadonlyArray<(
    { readonly __typename?: 'User' }
    & Pick<User, '_id' | 'name'>
  )> }
);


export const UpdateUserDocument = gql`
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
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const LogoutDocument = gql`
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
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const SendMessageDocument = gql`
    mutation sendMessage($input: SendMessageInput!) {
  sendMessage(input: $input) {
    sent
    body
  }
}
    `;
export type SendMessageMutationFn = ApolloReactCommon.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        return ApolloReactHooks.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, baseOptions);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = ApolloReactCommon.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($input: CreateUserInput!) {
  createUser(input: $input) {
    name
    email
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreateTreeDocument = gql`
    mutation createTree($input: CreateTreeInput!) {
  createTree(createTreeInput: $input) {
    name
  }
}
    `;
export type CreateTreeMutationFn = ApolloReactCommon.MutationFunction<CreateTreeMutation, CreateTreeMutationVariables>;

/**
 * __useCreateTreeMutation__
 *
 * To run a mutation, you first call `useCreateTreeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTreeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTreeMutation, { data, loading, error }] = useCreateTreeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTreeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTreeMutation, CreateTreeMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTreeMutation, CreateTreeMutationVariables>(CreateTreeDocument, baseOptions);
      }
export type CreateTreeMutationHookResult = ReturnType<typeof useCreateTreeMutation>;
export type CreateTreeMutationResult = ApolloReactCommon.MutationResult<CreateTreeMutation>;
export type CreateTreeMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTreeMutation, CreateTreeMutationVariables>;
export const CreateBranchDocument = gql`
    mutation createBranch($input: CreateBranchInput!) {
  createBranch(createBranchInput: $input) {
    name
  }
}
    `;
export type CreateBranchMutationFn = ApolloReactCommon.MutationFunction<CreateBranchMutation, CreateBranchMutationVariables>;

/**
 * __useCreateBranchMutation__
 *
 * To run a mutation, you first call `useCreateBranchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBranchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBranchMutation, { data, loading, error }] = useCreateBranchMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBranchMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBranchMutation, CreateBranchMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateBranchMutation, CreateBranchMutationVariables>(CreateBranchDocument, baseOptions);
      }
export type CreateBranchMutationHookResult = ReturnType<typeof useCreateBranchMutation>;
export type CreateBranchMutationResult = ApolloReactCommon.MutationResult<CreateBranchMutation>;
export type CreateBranchMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBranchMutation, CreateBranchMutationVariables>;
export const GitHubAuthDocument = gql`
    query gitHubAuth($input: SocialAuthInput!) {
  gitHubAuth(input: $input) {
    _id
    githubId
  }
}
    `;

/**
 * __useGitHubAuthQuery__
 *
 * To run a query within a React component, call `useGitHubAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useGitHubAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGitHubAuthQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGitHubAuthQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GitHubAuthQuery, GitHubAuthQueryVariables>) {
        return ApolloReactHooks.useQuery<GitHubAuthQuery, GitHubAuthQueryVariables>(GitHubAuthDocument, baseOptions);
      }
export function useGitHubAuthLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GitHubAuthQuery, GitHubAuthQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GitHubAuthQuery, GitHubAuthQueryVariables>(GitHubAuthDocument, baseOptions);
        }
export type GitHubAuthQueryHookResult = ReturnType<typeof useGitHubAuthQuery>;
export type GitHubAuthLazyQueryHookResult = ReturnType<typeof useGitHubAuthLazyQuery>;
export type GitHubAuthQueryResult = ApolloReactCommon.QueryResult<GitHubAuthQuery, GitHubAuthQueryVariables>;
export const RedditAuthDocument = gql`
    query redditAuth($input: SocialAuthInput!) {
  redditAuth(input: $input) {
    _id
    redditId
  }
}
    `;

/**
 * __useRedditAuthQuery__
 *
 * To run a query within a React component, call `useRedditAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useRedditAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRedditAuthQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRedditAuthQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RedditAuthQuery, RedditAuthQueryVariables>) {
        return ApolloReactHooks.useQuery<RedditAuthQuery, RedditAuthQueryVariables>(RedditAuthDocument, baseOptions);
      }
export function useRedditAuthLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RedditAuthQuery, RedditAuthQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RedditAuthQuery, RedditAuthQueryVariables>(RedditAuthDocument, baseOptions);
        }
export type RedditAuthQueryHookResult = ReturnType<typeof useRedditAuthQuery>;
export type RedditAuthLazyQueryHookResult = ReturnType<typeof useRedditAuthLazyQuery>;
export type RedditAuthQueryResult = ApolloReactCommon.QueryResult<RedditAuthQuery, RedditAuthQueryVariables>;
export const GoogleAuthDocument = gql`
    query googleAuth($input: SocialAuthInput!) {
  googleAuth(input: $input) {
    _id
  }
}
    `;

/**
 * __useGoogleAuthQuery__
 *
 * To run a query within a React component, call `useGoogleAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useGoogleAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGoogleAuthQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGoogleAuthQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GoogleAuthQuery, GoogleAuthQueryVariables>) {
        return ApolloReactHooks.useQuery<GoogleAuthQuery, GoogleAuthQueryVariables>(GoogleAuthDocument, baseOptions);
      }
export function useGoogleAuthLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GoogleAuthQuery, GoogleAuthQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GoogleAuthQuery, GoogleAuthQueryVariables>(GoogleAuthDocument, baseOptions);
        }
export type GoogleAuthQueryHookResult = ReturnType<typeof useGoogleAuthQuery>;
export type GoogleAuthLazyQueryHookResult = ReturnType<typeof useGoogleAuthLazyQuery>;
export type GoogleAuthQueryResult = ApolloReactCommon.QueryResult<GoogleAuthQuery, GoogleAuthQueryVariables>;
export const MeDocument = gql`
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

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const UserDocument = gql`
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

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;
export const GetGoogleAuthUrlDocument = gql`
    query getGoogleAuthURL {
  getGoogleAuthURL
}
    `;

/**
 * __useGetGoogleAuthUrlQuery__
 *
 * To run a query within a React component, call `useGetGoogleAuthUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGoogleAuthUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGoogleAuthUrlQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGoogleAuthUrlQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>) {
        return ApolloReactHooks.useQuery<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>(GetGoogleAuthUrlDocument, baseOptions);
      }
export function useGetGoogleAuthUrlLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>(GetGoogleAuthUrlDocument, baseOptions);
        }
export type GetGoogleAuthUrlQueryHookResult = ReturnType<typeof useGetGoogleAuthUrlQuery>;
export type GetGoogleAuthUrlLazyQueryHookResult = ReturnType<typeof useGetGoogleAuthUrlLazyQuery>;
export type GetGoogleAuthUrlQueryResult = ApolloReactCommon.QueryResult<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>;
export const FindAllAncestorsDocument = gql`
    query findAllAncestors {
  findAllAncestors {
    _id
    name
  }
}
    `;

/**
 * __useFindAllAncestorsQuery__
 *
 * To run a query within a React component, call `useFindAllAncestorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllAncestorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllAncestorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllAncestorsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindAllAncestorsQuery, FindAllAncestorsQueryVariables>) {
        return ApolloReactHooks.useQuery<FindAllAncestorsQuery, FindAllAncestorsQueryVariables>(FindAllAncestorsDocument, baseOptions);
      }
export function useFindAllAncestorsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindAllAncestorsQuery, FindAllAncestorsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindAllAncestorsQuery, FindAllAncestorsQueryVariables>(FindAllAncestorsDocument, baseOptions);
        }
export type FindAllAncestorsQueryHookResult = ReturnType<typeof useFindAllAncestorsQuery>;
export type FindAllAncestorsLazyQueryHookResult = ReturnType<typeof useFindAllAncestorsLazyQuery>;
export type FindAllAncestorsQueryResult = ApolloReactCommon.QueryResult<FindAllAncestorsQuery, FindAllAncestorsQueryVariables>;
export const FindTreebyIdDocument = gql`
    query findTreebyID($id: String!) {
  findTreebyID(id: $id) {
    name
    branches {
      _id
      rootUser
      parentID
    }
  }
}
    `;

/**
 * __useFindTreebyIdQuery__
 *
 * To run a query within a React component, call `useFindTreebyIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTreebyIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTreebyIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindTreebyIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindTreebyIdQuery, FindTreebyIdQueryVariables>) {
        return ApolloReactHooks.useQuery<FindTreebyIdQuery, FindTreebyIdQueryVariables>(FindTreebyIdDocument, baseOptions);
      }
export function useFindTreebyIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindTreebyIdQuery, FindTreebyIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindTreebyIdQuery, FindTreebyIdQueryVariables>(FindTreebyIdDocument, baseOptions);
        }
export type FindTreebyIdQueryHookResult = ReturnType<typeof useFindTreebyIdQuery>;
export type FindTreebyIdLazyQueryHookResult = ReturnType<typeof useFindTreebyIdLazyQuery>;
export type FindTreebyIdQueryResult = ApolloReactCommon.QueryResult<FindTreebyIdQuery, FindTreebyIdQueryVariables>;
export const FindalltreesDocument = gql`
    query findalltrees {
  findalltrees {
    _id
    name
    branches {
      _id
      name
      rootUser
      parentID
    }
  }
}
    `;

/**
 * __useFindalltreesQuery__
 *
 * To run a query within a React component, call `useFindalltreesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindalltreesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindalltreesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindalltreesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindalltreesQuery, FindalltreesQueryVariables>) {
        return ApolloReactHooks.useQuery<FindalltreesQuery, FindalltreesQueryVariables>(FindalltreesDocument, baseOptions);
      }
export function useFindalltreesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindalltreesQuery, FindalltreesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindalltreesQuery, FindalltreesQueryVariables>(FindalltreesDocument, baseOptions);
        }
export type FindalltreesQueryHookResult = ReturnType<typeof useFindalltreesQuery>;
export type FindalltreesLazyQueryHookResult = ReturnType<typeof useFindalltreesLazyQuery>;
export type FindalltreesQueryResult = ApolloReactCommon.QueryResult<FindalltreesQuery, FindalltreesQueryVariables>;
export const NewMessageDocument = gql`
    subscription newMessage {
  newMessage {
    sent
    body
  }
}
    `;

/**
 * __useNewMessageSubscription__
 *
 * To run a query within a React component, call `useNewMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMessageSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewMessageSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<NewMessageSubscription, NewMessageSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<NewMessageSubscription, NewMessageSubscriptionVariables>(NewMessageDocument, baseOptions);
      }
export type NewMessageSubscriptionHookResult = ReturnType<typeof useNewMessageSubscription>;
export type NewMessageSubscriptionResult = ApolloReactCommon.SubscriptionResult<NewMessageSubscription>;
export const UserAddedDocument = gql`
    subscription userAdded {
  userAdded {
    _id
    name
  }
}
    `;

/**
 * __useUserAddedSubscription__
 *
 * To run a query within a React component, call `useUserAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUserAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUserAddedSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<UserAddedSubscription, UserAddedSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<UserAddedSubscription, UserAddedSubscriptionVariables>(UserAddedDocument, baseOptions);
      }
export type UserAddedSubscriptionHookResult = ReturnType<typeof useUserAddedSubscription>;
export type UserAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<UserAddedSubscription>;