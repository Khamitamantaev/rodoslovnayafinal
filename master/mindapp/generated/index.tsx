import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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
  readonly branches: ReadonlyArray<Branch>;
  readonly name?: Maybe<Scalars['String']>;
  readonly parentID?: Maybe<Scalars['String']>;
  readonly rootUser?: Maybe<Scalars['String']>;
  readonly treeID?: Maybe<Scalars['String']>;
};

export type CreateBranchInput = {
  readonly name?: InputMaybe<Scalars['String']>;
  readonly parentID?: InputMaybe<Scalars['String']>;
  readonly rootUser?: InputMaybe<Scalars['String']>;
  readonly treeID?: InputMaybe<Scalars['String']>;
};

export type CreateTreeInput = {
  readonly name?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  readonly bio?: InputMaybe<Scalars['String']>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
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
  readonly createBranch: Branch;
  readonly createTree: Tree;
  readonly createUser: User;
  readonly logout?: Maybe<User>;
  readonly removeBranchByID: Branch;
  readonly removeTree: Tree;
  readonly sendMessage: Message;
  readonly updateBranchByID: Branch;
  readonly updateTree: Tree;
  readonly updateUser: User;
};


export type MutationCreateBranchArgs = {
  createBranchInput: CreateBranchInput;
};


export type MutationCreateTreeArgs = {
  createTreeInput: CreateTreeInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationRemoveBranchByIdArgs = {
  id: Scalars['String'];
};


export type MutationRemoveTreeArgs = {
  id: Scalars['Int'];
};


export type MutationSendMessageArgs = {
  input: SendMessageInput;
};


export type MutationUpdateBranchByIdArgs = {
  updateBranchInput: UpdateBranchInput;
};


export type MutationUpdateTreeArgs = {
  updateTreeInput: UpdateTreeInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly findAllAncestors: ReadonlyArray<User>;
  readonly findAllBranches: ReadonlyArray<Branch>;
  readonly findBranchByID: Branch;
  readonly findTreebyID: Tree;
  readonly findalltrees: ReadonlyArray<Tree>;
  readonly getGoogleAuthURL: Scalars['String'];
  readonly gitHubAuth: User;
  readonly googleAuth: User;
  readonly me?: Maybe<User>;
  readonly redditAuth: User;
  readonly user?: Maybe<User>;
  readonly users: ReadonlyArray<User>;
};


export type QueryFindBranchByIdArgs = {
  id: Scalars['String'];
};


export type QueryFindTreebyIdArgs = {
  id: Scalars['String'];
};


export type QueryGitHubAuthArgs = {
  input: SocialAuthInput;
};


export type QueryGoogleAuthArgs = {
  input: SocialAuthInput;
};


export type QueryRedditAuthArgs = {
  input: SocialAuthInput;
};


export type QueryUserArgs = {
  input: GetUserInput;
};

export enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export type SendMessageInput = {
  readonly body: Scalars['String'];
};

export type SocialAuthInput = {
  readonly code?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly newMessage: Message;
  readonly userAdded: ReadonlyArray<User>;
};

export type Tree = {
  readonly __typename?: 'Tree';
  readonly _id: Scalars['ID'];
  readonly branches: ReadonlyArray<Branch>;
  readonly name: Scalars['String'];
  readonly rootUser: Scalars['String'];
};

export type UpdateBranchInput = {
  readonly id: Scalars['String'];
  readonly leftchildID: Scalars['String'];
  readonly rightchildID: Scalars['String'];
  readonly rootUser: Scalars['String'];
  readonly treeID: Scalars['String'];
};

export type UpdateTreeInput = {
  readonly id: Scalars['Int'];
};

export type UpdateUserInput = {
  readonly bio?: InputMaybe<Scalars['String']>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
};

export type User = {
  readonly __typename?: 'User';
  readonly _id: Scalars['ID'];
  readonly active: Scalars['Boolean'];
  readonly ancestors: ReadonlyArray<User>;
  readonly avatar?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly githubId: Scalars['String'];
  readonly name: Scalars['String'];
  readonly permalink: Scalars['String'];
  readonly redditId: Scalars['String'];
  readonly role: Roles;
};

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { readonly __typename?: 'Mutation', readonly updateUser: { readonly __typename?: 'User', readonly _id: string, readonly permalink: string, readonly name: string, readonly avatar?: string | null | undefined, readonly bio?: string | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { readonly __typename?: 'Mutation', readonly logout?: { readonly __typename?: 'User', readonly _id: string, readonly permalink: string, readonly name: string, readonly avatar?: string | null | undefined, readonly bio?: string | null | undefined } | null | undefined };

export type SendMessageMutationVariables = Exact<{
  input: SendMessageInput;
}>;


export type SendMessageMutation = { readonly __typename?: 'Mutation', readonly sendMessage: { readonly __typename?: 'Message', readonly sent: string, readonly body: string } };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { readonly __typename?: 'Mutation', readonly createUser: { readonly __typename?: 'User', readonly name: string, readonly email?: string | null | undefined } };

export type CreateTreeMutationVariables = Exact<{
  input: CreateTreeInput;
}>;


export type CreateTreeMutation = { readonly __typename?: 'Mutation', readonly createTree: { readonly __typename?: 'Tree', readonly name: string } };

export type CreateBranchMutationVariables = Exact<{
  input: CreateBranchInput;
}>;


export type CreateBranchMutation = { readonly __typename?: 'Mutation', readonly createBranch: { readonly __typename?: 'Branch', readonly name?: string | null | undefined } };

export type RemoveBranchByIdMutationVariables = Exact<{
  input: Scalars['String'];
}>;


export type RemoveBranchByIdMutation = { readonly __typename?: 'Mutation', readonly removeBranchByID: { readonly __typename?: 'Branch', readonly _id: string } };

export type GitHubAuthQueryVariables = Exact<{
  input: SocialAuthInput;
}>;


export type GitHubAuthQuery = { readonly __typename?: 'Query', readonly gitHubAuth: { readonly __typename?: 'User', readonly _id: string, readonly githubId: string } };

export type RedditAuthQueryVariables = Exact<{
  input: SocialAuthInput;
}>;


export type RedditAuthQuery = { readonly __typename?: 'Query', readonly redditAuth: { readonly __typename?: 'User', readonly _id: string, readonly redditId: string } };

export type GoogleAuthQueryVariables = Exact<{
  input: SocialAuthInput;
}>;


export type GoogleAuthQuery = { readonly __typename?: 'Query', readonly googleAuth: { readonly __typename?: 'User', readonly _id: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { readonly __typename?: 'Query', readonly me?: { readonly __typename?: 'User', readonly _id: string, readonly name: string, readonly role: Roles, readonly permalink: string, readonly email?: string | null | undefined, readonly avatar?: string | null | undefined } | null | undefined };

export type UserQueryVariables = Exact<{
  input: GetUserInput;
}>;


export type UserQuery = { readonly __typename?: 'Query', readonly user?: { readonly __typename?: 'User', readonly _id: string, readonly permalink: string, readonly name: string, readonly avatar?: string | null | undefined, readonly bio?: string | null | undefined } | null | undefined };

export type GetGoogleAuthUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGoogleAuthUrlQuery = { readonly __typename?: 'Query', readonly getGoogleAuthURL: string };

export type FindAllAncestorsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllAncestorsQuery = { readonly __typename?: 'Query', readonly findAllAncestors: ReadonlyArray<{ readonly __typename?: 'User', readonly _id: string, readonly name: string }> };

export type FindTreebyIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindTreebyIdQuery = { readonly __typename?: 'Query', readonly findTreebyID: { readonly __typename?: 'Tree', readonly name: string, readonly branches: ReadonlyArray<{ readonly __typename?: 'Branch', readonly _id: string, readonly rootUser?: string | null | undefined, readonly parentID?: string | null | undefined }> } };

export type FindalltreesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindalltreesQuery = { readonly __typename?: 'Query', readonly findalltrees: ReadonlyArray<{ readonly __typename?: 'Tree', readonly _id: string, readonly name: string, readonly branches: ReadonlyArray<{ readonly __typename?: 'Branch', readonly _id: string, readonly name?: string | null | undefined, readonly rootUser?: string | null | undefined, readonly parentID?: string | null | undefined }> }> };

export type NewMessageSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewMessageSubscription = { readonly __typename?: 'Subscription', readonly newMessage: { readonly __typename?: 'Message', readonly sent: string, readonly body: string } };

export type UserAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserAddedSubscription = { readonly __typename?: 'Subscription', readonly userAdded: ReadonlyArray<{ readonly __typename?: 'User', readonly _id: string, readonly name: string }> };


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
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

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
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
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
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

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
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const SendMessageDocument = gql`
    mutation sendMessage($input: SendMessageInput!) {
  sendMessage(input: $input) {
    sent
    body
  }
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

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
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($input: CreateUserInput!) {
  createUser(input: $input) {
    name
    email
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

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
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreateTreeDocument = gql`
    mutation createTree($input: CreateTreeInput!) {
  createTree(createTreeInput: $input) {
    name
  }
}
    `;
export type CreateTreeMutationFn = Apollo.MutationFunction<CreateTreeMutation, CreateTreeMutationVariables>;

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
export function useCreateTreeMutation(baseOptions?: Apollo.MutationHookOptions<CreateTreeMutation, CreateTreeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTreeMutation, CreateTreeMutationVariables>(CreateTreeDocument, options);
      }
export type CreateTreeMutationHookResult = ReturnType<typeof useCreateTreeMutation>;
export type CreateTreeMutationResult = Apollo.MutationResult<CreateTreeMutation>;
export type CreateTreeMutationOptions = Apollo.BaseMutationOptions<CreateTreeMutation, CreateTreeMutationVariables>;
export const CreateBranchDocument = gql`
    mutation createBranch($input: CreateBranchInput!) {
  createBranch(createBranchInput: $input) {
    name
  }
}
    `;
export type CreateBranchMutationFn = Apollo.MutationFunction<CreateBranchMutation, CreateBranchMutationVariables>;

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
export function useCreateBranchMutation(baseOptions?: Apollo.MutationHookOptions<CreateBranchMutation, CreateBranchMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBranchMutation, CreateBranchMutationVariables>(CreateBranchDocument, options);
      }
export type CreateBranchMutationHookResult = ReturnType<typeof useCreateBranchMutation>;
export type CreateBranchMutationResult = Apollo.MutationResult<CreateBranchMutation>;
export type CreateBranchMutationOptions = Apollo.BaseMutationOptions<CreateBranchMutation, CreateBranchMutationVariables>;
export const RemoveBranchByIdDocument = gql`
    mutation removeBranchByID($input: String!) {
  removeBranchByID(id: $input) {
    _id
  }
}
    `;
export type RemoveBranchByIdMutationFn = Apollo.MutationFunction<RemoveBranchByIdMutation, RemoveBranchByIdMutationVariables>;

/**
 * __useRemoveBranchByIdMutation__
 *
 * To run a mutation, you first call `useRemoveBranchByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveBranchByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeBranchByIdMutation, { data, loading, error }] = useRemoveBranchByIdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveBranchByIdMutation(baseOptions?: Apollo.MutationHookOptions<RemoveBranchByIdMutation, RemoveBranchByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveBranchByIdMutation, RemoveBranchByIdMutationVariables>(RemoveBranchByIdDocument, options);
      }
export type RemoveBranchByIdMutationHookResult = ReturnType<typeof useRemoveBranchByIdMutation>;
export type RemoveBranchByIdMutationResult = Apollo.MutationResult<RemoveBranchByIdMutation>;
export type RemoveBranchByIdMutationOptions = Apollo.BaseMutationOptions<RemoveBranchByIdMutation, RemoveBranchByIdMutationVariables>;
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
export function useGitHubAuthQuery(baseOptions: Apollo.QueryHookOptions<GitHubAuthQuery, GitHubAuthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GitHubAuthQuery, GitHubAuthQueryVariables>(GitHubAuthDocument, options);
      }
export function useGitHubAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GitHubAuthQuery, GitHubAuthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GitHubAuthQuery, GitHubAuthQueryVariables>(GitHubAuthDocument, options);
        }
export type GitHubAuthQueryHookResult = ReturnType<typeof useGitHubAuthQuery>;
export type GitHubAuthLazyQueryHookResult = ReturnType<typeof useGitHubAuthLazyQuery>;
export type GitHubAuthQueryResult = Apollo.QueryResult<GitHubAuthQuery, GitHubAuthQueryVariables>;
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
export function useRedditAuthQuery(baseOptions: Apollo.QueryHookOptions<RedditAuthQuery, RedditAuthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RedditAuthQuery, RedditAuthQueryVariables>(RedditAuthDocument, options);
      }
export function useRedditAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RedditAuthQuery, RedditAuthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RedditAuthQuery, RedditAuthQueryVariables>(RedditAuthDocument, options);
        }
export type RedditAuthQueryHookResult = ReturnType<typeof useRedditAuthQuery>;
export type RedditAuthLazyQueryHookResult = ReturnType<typeof useRedditAuthLazyQuery>;
export type RedditAuthQueryResult = Apollo.QueryResult<RedditAuthQuery, RedditAuthQueryVariables>;
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
export function useGoogleAuthQuery(baseOptions: Apollo.QueryHookOptions<GoogleAuthQuery, GoogleAuthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GoogleAuthQuery, GoogleAuthQueryVariables>(GoogleAuthDocument, options);
      }
export function useGoogleAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GoogleAuthQuery, GoogleAuthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GoogleAuthQuery, GoogleAuthQueryVariables>(GoogleAuthDocument, options);
        }
export type GoogleAuthQueryHookResult = ReturnType<typeof useGoogleAuthQuery>;
export type GoogleAuthLazyQueryHookResult = ReturnType<typeof useGoogleAuthLazyQuery>;
export type GoogleAuthQueryResult = Apollo.QueryResult<GoogleAuthQuery, GoogleAuthQueryVariables>;
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
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
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
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
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
export function useGetGoogleAuthUrlQuery(baseOptions?: Apollo.QueryHookOptions<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>(GetGoogleAuthUrlDocument, options);
      }
export function useGetGoogleAuthUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>(GetGoogleAuthUrlDocument, options);
        }
export type GetGoogleAuthUrlQueryHookResult = ReturnType<typeof useGetGoogleAuthUrlQuery>;
export type GetGoogleAuthUrlLazyQueryHookResult = ReturnType<typeof useGetGoogleAuthUrlLazyQuery>;
export type GetGoogleAuthUrlQueryResult = Apollo.QueryResult<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>;
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
export function useFindAllAncestorsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllAncestorsQuery, FindAllAncestorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllAncestorsQuery, FindAllAncestorsQueryVariables>(FindAllAncestorsDocument, options);
      }
export function useFindAllAncestorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllAncestorsQuery, FindAllAncestorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllAncestorsQuery, FindAllAncestorsQueryVariables>(FindAllAncestorsDocument, options);
        }
export type FindAllAncestorsQueryHookResult = ReturnType<typeof useFindAllAncestorsQuery>;
export type FindAllAncestorsLazyQueryHookResult = ReturnType<typeof useFindAllAncestorsLazyQuery>;
export type FindAllAncestorsQueryResult = Apollo.QueryResult<FindAllAncestorsQuery, FindAllAncestorsQueryVariables>;
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
export function useFindTreebyIdQuery(baseOptions: Apollo.QueryHookOptions<FindTreebyIdQuery, FindTreebyIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTreebyIdQuery, FindTreebyIdQueryVariables>(FindTreebyIdDocument, options);
      }
export function useFindTreebyIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTreebyIdQuery, FindTreebyIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTreebyIdQuery, FindTreebyIdQueryVariables>(FindTreebyIdDocument, options);
        }
export type FindTreebyIdQueryHookResult = ReturnType<typeof useFindTreebyIdQuery>;
export type FindTreebyIdLazyQueryHookResult = ReturnType<typeof useFindTreebyIdLazyQuery>;
export type FindTreebyIdQueryResult = Apollo.QueryResult<FindTreebyIdQuery, FindTreebyIdQueryVariables>;
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
export function useFindalltreesQuery(baseOptions?: Apollo.QueryHookOptions<FindalltreesQuery, FindalltreesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindalltreesQuery, FindalltreesQueryVariables>(FindalltreesDocument, options);
      }
export function useFindalltreesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindalltreesQuery, FindalltreesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindalltreesQuery, FindalltreesQueryVariables>(FindalltreesDocument, options);
        }
export type FindalltreesQueryHookResult = ReturnType<typeof useFindalltreesQuery>;
export type FindalltreesLazyQueryHookResult = ReturnType<typeof useFindalltreesLazyQuery>;
export type FindalltreesQueryResult = Apollo.QueryResult<FindalltreesQuery, FindalltreesQueryVariables>;
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
export function useNewMessageSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewMessageSubscription, NewMessageSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewMessageSubscription, NewMessageSubscriptionVariables>(NewMessageDocument, options);
      }
export type NewMessageSubscriptionHookResult = ReturnType<typeof useNewMessageSubscription>;
export type NewMessageSubscriptionResult = Apollo.SubscriptionResult<NewMessageSubscription>;
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
export function useUserAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UserAddedSubscription, UserAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<UserAddedSubscription, UserAddedSubscriptionVariables>(UserAddedDocument, options);
      }
export type UserAddedSubscriptionHookResult = ReturnType<typeof useUserAddedSubscription>;
export type UserAddedSubscriptionResult = Apollo.SubscriptionResult<UserAddedSubscription>;