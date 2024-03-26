import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache, fromPromise } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../../../commons/stores";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void restoreAccessToken.toPromise().then((newAccessToken) => {
      try {
        setAccessToken(newAccessToken ?? "");
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
        }
      }
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2. refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken): void => {
              // 2-2. 재발급 받은 accessToken 저장하기
              setAccessToken(newAccessToken ?? "");

              // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리 요청하기
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // Authorization: Bearer adsfqwd... => 만료된 토큰이 추가된 상태
                  Authorization: `Bearer ${newAccessToken}`, // 3-2. 토큰만 새걸로 바꿔치기
                },
              });
            })
            // 3-3. 방금 수정한 쿼리 재요청하기
          ).flatMap(() => forward(operation));
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
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
