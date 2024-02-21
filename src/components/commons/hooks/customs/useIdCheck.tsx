// import { Modal } from "antd";
import { useRouter } from "next/router";

export const useIdCheck = (id: string) => {
  const router = useRouter();
  const queryId = router.query[id];

  if (queryId === undefined) {
    // console.log("id를 못찾았습니다");
    return { id: "" };
  }
  if (typeof queryId === "string") {
    // console.log("id를 찾았습니다");
    return { id: queryId };
  }
  if (typeof queryId === "object") return { id: queryId[0] };

  return {
    id: "",
  };
};
