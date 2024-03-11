// Custom Hooks
import { useToggleProductPick } from "../mutations/useToggleProductPick";
import { useFetchLoggedIn } from "../queries/useFetchLoggedIn";
// Component
import { Modal } from "antd";
// Type
import { useState } from "react";

export const useProductPicked = () => {
  const { data } = useFetchLoggedIn();

  const [pickProduct] = useToggleProductPick();

  // 찜하기 기능
  const [pick, setPick] = useState<number>(1);
  const onClickPick = async (): Promise<void> => {
    if (typeof data?.fetchUserLoggedIn._id !== "string") return;
    try {
      const result = await pickProduct({
        variables: { useditemId: data?.fetchUserLoggedIn._id },
        // refetchQueries: [
        //   {
        //     query: FETCH_USEDITEM,
        //     variables: { useditemId: id },
        //   },
        // ],
      });
      console.log(result.data?.toggleUseditemPick);
      setPick(result.data?.toggleUseditemPick ?? 0);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    pick,
    onClickPick,
  };
};
