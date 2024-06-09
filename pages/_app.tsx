import type { AppProps } from "next/app";

import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";

// Global Styles
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  return (
    <>
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Layout path={router.asPath}>
              <Component {...pageProps} />
            </Layout>
          </>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}
