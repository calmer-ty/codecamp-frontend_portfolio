import { Modal } from "antd";
import { useRouter } from "next/router";

export const useIdCheck = (id: any) => {
  const router = useRouter();
  const queryId = router.query[id];

  if (typeof queryId !== "string") {
    Modal.error({ content: "시스템에 문제가 있습니다." });
    return { id: "" };
  }

  return {
    id: queryId,
  };
};
