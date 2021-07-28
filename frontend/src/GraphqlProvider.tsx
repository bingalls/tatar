import React from 'react';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:3333/graphql',   // TODO make this a config
    cache: new InMemoryCache(),
    credentials: 'same-origin',
  });


const GraphqlProvider: React.FC = ({ children }) => (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
)

export default GraphqlProvider
