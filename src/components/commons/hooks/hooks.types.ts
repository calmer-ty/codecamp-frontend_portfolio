import type { ApolloCache, DefaultContext, MutationTuple, OperationVariables, QueryResult } from "@apollo/client";
import type { IMutation, IQuery } from "../../../commons/types/generated/types";

// export type QueryType01<T extends keyof IQuery> = QueryResult<Pick<IQuery, T>, OperationVariables>;
// export type QueryType02<T extends keyof IQuery, V extends OperationVariables> = QueryResult<Pick<IQuery, T>, V>;

export type QueryReturnType<T extends keyof IQuery, V extends OperationVariables | undefined> = V extends OperationVariables
  ? QueryResult<Pick<IQuery, T>, V>
  : QueryResult<Pick<IQuery, T>, OperationVariables>;

export type MutationReturnType<T extends keyof IMutation, V> = MutationTuple<Pick<IMutation, T>, V, DefaultContext, ApolloCache<any>>;
