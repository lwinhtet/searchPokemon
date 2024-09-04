'use client';

import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';
import { HttpLink } from '@apollo/client';

let client: ApolloClient<any> | null = null;

const getClient = () => {
  if (!client || typeof window === 'undefined') {
    client = new ApolloClient({
      link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
      }),
      cache: new InMemoryCache(),
    });
  }

  return client;
};

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={getClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
