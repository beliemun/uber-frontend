/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "mutation createAccount($input: CreateAccountInput!) {\n  createAccount(input: $input) {\n    ok\n    error\n  }\n}": types.CreateAccountDocument,
    "mutation requestRefreshToken($input: RequestRefreshTokenInput!) {\n  requestRefreshToken(input: $input) {\n    ok\n    error\n    accessToken\n    refreshToken\n  }\n}": types.RequestRefreshTokenDocument,
    "mutation signIn($input: SignInInput!) {\n  signIn(input: $input) {\n    ok\n    error\n    accessToken\n    refreshToken\n  }\n}": types.SignInDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createAccount($input: CreateAccountInput!) {\n  createAccount(input: $input) {\n    ok\n    error\n  }\n}"): (typeof documents)["mutation createAccount($input: CreateAccountInput!) {\n  createAccount(input: $input) {\n    ok\n    error\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation requestRefreshToken($input: RequestRefreshTokenInput!) {\n  requestRefreshToken(input: $input) {\n    ok\n    error\n    accessToken\n    refreshToken\n  }\n}"): (typeof documents)["mutation requestRefreshToken($input: RequestRefreshTokenInput!) {\n  requestRefreshToken(input: $input) {\n    ok\n    error\n    accessToken\n    refreshToken\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation signIn($input: SignInInput!) {\n  signIn(input: $input) {\n    ok\n    error\n    accessToken\n    refreshToken\n  }\n}"): (typeof documents)["mutation signIn($input: SignInInput!) {\n  signIn(input: $input) {\n    ok\n    error\n    accessToken\n    refreshToken\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;