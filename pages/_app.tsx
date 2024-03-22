import type { AppProps } from "next/app";

import "../styles/globals.css";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";

// Global Styles
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

export default function App({ Component }: AppProps): JSX.Element {
  console.log("========== App 렌더링 됩니다 ==========");
  return (
    <>
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Layout>
              <Component />
            </Layout>
          </>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}
