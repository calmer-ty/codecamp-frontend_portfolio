import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
// QUERIES
import { DELETE_USEDITEM, FETCH_USEDITEM } from "./MarketDetail.queries";

import type {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
// UI
import MarketDetailUI from "./MarketDetail.presenter";

// Custon Hooks
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { FETCH_USEDITEMS } from "../list/MarketList.queries";
import { useIdCheck } from "../../../commons/hooks/customs/useIdCheck";

export default function MarketDetail(): JSX.Element {
  const router = useRouter();
  // 아래 조건 시 빈 화면
  if (typeof router.query.useditemId !== "string") return <></>;

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const { onClickMoveToPage } = useMoveToPage();

  const [deleteMarket] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);

  // 게시물 삭제
  const onClickDeleteMarketDetail = async (): Promise<void> => {
    const { id } = useIdCheck("useditemId");

    if (typeof id !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    try {
      await deleteMarket({
        variables: { useditemId: id },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    alert("게시물이 삭제되었습니다.");
    void router.push(`/boards`);
  };

  return (
    <MarketDetailUI
      data={data}
      onClickMoveToPage={onClickMoveToPage}
      onClickDeleteMarketDetail={onClickDeleteMarketDetail}
    />
  );
}
