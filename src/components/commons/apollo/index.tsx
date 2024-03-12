import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { onError } from "@apollo/client/link/error";
import { GraphQLClient, gql } from "graphql-request";

interface IApolloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const refreshToken = useRecoilValueLoadable();

  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    setAccessToken(result ?? "");
    // void refreshToken.toPromise().then((newAccessToken) => {
    //   setAccessToken(newAccessToken ?? "");
    // });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리 요청하기
          const graphQLClient = new GraphQLClient("https://backend-practice.codebootcamp.co.kr/graphql", {
            credentials: "include",
          });
          const result = graphQLClient.request(RESTORE_ACCESS_TOKEN);
          // RESTORE_ACCESS_TOKEN이라는 gql을 요청한 뒤 반환되는 결과값을 result에 담는다.
          const newAccessToken = result?.restoreAccessToken.accessToken;
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
