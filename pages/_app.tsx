import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";

import "../styles/globals.css";

export default function App({ Component }: AppProps) {
  const client = new ApolloClient({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <div>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    </div>
  );
}
