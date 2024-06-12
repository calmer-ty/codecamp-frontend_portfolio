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
    // 셋팅중이기 때문에 useMutation이 사용 불가능  => axios로 사용 / 라이브러리 사용
    // 리프레시 토큰을 인가 받고 accessToken을 생성하는 함수
    const graphQLClient = new GraphQLClient("https://backend-practice.codebootcamp.co.kr/graphql", {
      credentials: "include",
    });
    const result = await graphQLClient.request<Pick<IMutation, "restoreAccessToken">>(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
