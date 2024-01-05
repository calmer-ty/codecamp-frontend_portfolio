import type { AppProps } from "next/app";

import "../styles/globals.css";
import ApolloSetting from "../src/commons/apollo";
import Layout from "../src/commons/layout";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <div>
      <ApolloSetting>
        <Layout>
          <Component />
        </Layout>
      </ApolloSetting>
    </div>
  );
}
