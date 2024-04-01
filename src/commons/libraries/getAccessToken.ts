import { GraphQLClient, gql } from "graphql-request";
import type { IMutation } from "../types/generated/types";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async (): Promise<string | undefined> => {
  try {
    console.log("getAccessToken 함수 시작");
    // 셋팅중이기 때문에 useMutation이 사용 불가능  => axios로 사용 / 라이브러리 사용
    // 리프레시 토큰을 인가 받고 accessToken을 생성하는 함수
    const graphQLClient = new GraphQLClient("https://backend-practice.codebootcamp.co.kr/graphql", {
      // 중요한 정보, 쿠키를 포함시키겠다
      credentials: "include",
    });
    console.log("API 요청 전");
    const result = await graphQLClient.request<Pick<IMutation, "restoreAccessToken">>(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    console.log("API 요청 후", newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.log("예외 발생");
    if (error instanceof Error) console.log(error.message);
  }
};
