// Custom Hooks
import { useIdCheck } from "../useIdCheck";
import { useToggleProductPick } from "../../mutations/product/useToggleProductPick";
import { FETCH_USEDITEM, useFetchProduct } from "../../queries/product/useFetchProduct";

import type { IQuery, IQueryFetchUseditemArgs } from "../../../../../commons/types/generated/types";

export const useProductPicked = () => {
  const { id } = useIdCheck("useditemId");
  const { data } = useFetchProduct({ useditemId: id });

  const [pickProduct] = useToggleProductPick();

  const onClickPick = async (): Promise<void> => {
    // 클릭시 모달 임포트
    const { Modal } = await import("antd");
    try {
      await pickProduct({
        variables: { useditemId: id },
        // refetchQueries: [
        //   {
        //     query: FETCH_USEDITEM,
        //     variables: { useditemId: id },
        //   },
        // ],
        optimisticResponse: {
          toggleUseditemPick: data?.fetchUseditem.pickedCount ?? 0,
        },
        update: (cache, { data }) => {
          const prevData = cache.readQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>({
            query: FETCH_USEDITEM,
            variables: {
              useditemId: id,
            },
          });
          cache.writeQuery({
            query: FETCH_USEDITEM,
            variables: {
              useditemId: id,
            },
            data: {
              fetchUseditem: {
                _id: id,
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
};
