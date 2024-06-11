import { useEffect } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, fromPromise } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";

import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../../../commons/stores";

// 서버 데이터
const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  // 23-01 로그인 페이지에서 가져온 accessToken을 모든 페이지에 뿌릴 수 있게 설정
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  console.log("useEffect 밖 토큰", restoreAccessToken);
  useEffect(() => {
    console.log(restoreAccessToken);
    if (restoreAccessToken.state === "hasValue") {
      const newAccessToken = restoreAccessToken.contents;
      setAccessToken(newAccessToken ?? "");
      console.log("apollo의 useEffect 프로미스 토큰: ", newAccessToken);
    } else if (restoreAccessToken.state === "hasError") {
      console.error("Failed to restore access token:", restoreAccessToken.contents);
    }
  }, [restoreAccessToken]);

  // useEffect(() => {
  //   console.log(restoreAccessToken);
  //   void restoreAccessToken.toPromise().then((newAccessToken) => {
  //     setAccessToken(newAccessToken ?? "");
  //     console.log("apollo의 useEffect 프로미스 토큰: ", newAccessToken);
  //   });
  // }, [restoreAccessToken]);
  // useEffect(() => {
  //   // 2-1. 리코일 API(useRecoilValueLoadable) 사용 이전
  //   void getAccessToken().then((newAccessToken): void => {
  //     setAccessToken(newAccessToken ?? "");
  //   });
  // }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // operation: 쿼리
    // forward: 쿼리.. 재요청 함수
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2. refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");
              // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리 요청하기
              // 쿼리문을 수정한다
              operation.setContext({
                headers: {
                  // 가지고 있던 쿼리문을 가져온 후에
                  ...operation.getContext().headers, // Authorization: Bearer adsfqwd... => 만료된 토큰이 추가된 상태
                  Authorization: `Bearer ${newAccessToken}`, // 3-2. 토큰만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-3. 방금 수정한 쿼리 재요청하기
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    // 모든 API가 추가 될 때마다 header 추가
    headers: { Authorization: `Bearer ${accessToken}` },
    // 중요한 정보, 쿠키를 포함시키겠다
    credentials: "include",
  });

  const client = new ApolloClient({
    // ApolloClient: 받아온 데이터를 저장하려는 성격을 가지고 있음 => 캐시.
    link: ApolloLink.from([errorLink, uploadLink]),
    // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터로 임시 저장해 놓기 => 나중에 더 자세히 알아보기
    // 파일, 컴퓨터 메모리에 저장할지 선택가능
    // 서버데이터 + 프론트데이터
    cache: GLOBAL_STATE,
  });

  //   prettier-ignore
  return(
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>
    )
}
