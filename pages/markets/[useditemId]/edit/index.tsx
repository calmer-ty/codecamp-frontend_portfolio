import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

import type {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      createdAt
      pickedCount
      images
      useditemAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function MarketsEditPage(): JSX.Element {
  const router = useRouter();
  // boardId의 타입을 정확히 넣어주기 위한 조건
  if (typeof router.query.useditemId !== "string") return <></>;

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  console.log(data);

  return <MarketWrite isEdit={true} data={data} />;
}
