// Custom Hooks
import { useIdCheck } from "../useIdCheck";
import { useToggleProductPick } from "../../mutations/product/useToggleProductPick";
import { useFetchProduct } from "../../queries/product/useFetchProduct";
import { gql } from "graphql-request";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditem: ID!) {
    fetchBoard(useditem: $useditem) {
      _id
      likeCount
    }
  }
`;

export const useProductPicked = () => {
  const { id } = useIdCheck("useditemId");
  // const { data } = useFetchProduct({ useditemId: id });
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: "65fc1a7e5d6eaa0029f7e4aa" },
  });

  console.log(data);

  const [pickProduct] = useToggleProductPick();

  const onClickPick = async (): Promise<void> => {
    // 클릭시 모달 임포트
    const { Modal } = await import("antd");
    if (typeof data?.fetchUseditem._id !== "string") return;
    try {
      await pickProduct({
        variables: { useditemId: data?.fetchUseditem._id },

        optimisticResponse: {
          toggleUseditemPick: data?.fetchUseditem.pickedCount ?? 0,
        },
        update: (cache, { data }) => {
          console.log(data);
          cache.writeQuery({
            query: FETCH_USEDITEM,
            variables: {
              useditemId: id,
            },
            data: {
              fetchUseditem: {
                _id: id,
                __typename: "Useditem",

                pickedCount: data?.toggleUseditemPick,
              },
            },
          });
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_USEDITEM,
        //     variables: { useditemId: id },
        //   },
        // ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickPick,
  };
};
