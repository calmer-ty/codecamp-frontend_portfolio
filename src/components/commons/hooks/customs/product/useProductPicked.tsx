import { useToggleProductPick } from "../../mutations/product/useToggleProductPick";
import { FETCH_USEDITEM } from "../../queries/product/useFetchProduct";

import type { IQuery, IQueryFetchUseditemArgs, IUseditem } from "../../../../../commons/types/generated/types";

export default function useProductPicked(fetchUseditem: IUseditem): {
  onClickPick: () => Promise<void>;
} {
  const onClickPick = async (): Promise<void> => {
    const [pickProduct] = useToggleProductPick();
    // 클릭시 모달 임포트
    const { Modal } = await import("antd");
    try {
      await pickProduct({
        variables: { useditemId: fetchUseditem._id },
        // refetchQueries: [
        //   {
        //     query: FETCH_USEDITEM,
        //     variables: { useditemId: id },
        //   },
        // ],
        optimisticResponse: {
          toggleUseditemPick: fetchUseditem.pickedCount ?? 0,
        },
        update: (cache, { data }) => {
          const prevData = cache.readQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>({
            query: FETCH_USEDITEM,
            variables: {
              useditemId: fetchUseditem._id,
            },
          });
          cache.writeQuery({
            query: FETCH_USEDITEM,
            variables: {
              useditemId: fetchUseditem._id,
            },
            data: {
              fetchUseditem: {
                _id: fetchUseditem._id,
                __typename: "Useditem",
                ...prevData?.fetchUseditem,
                pickedCount: data?.toggleUseditemPick,
              },
            },
          });
        },
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickPick,
  };
}
