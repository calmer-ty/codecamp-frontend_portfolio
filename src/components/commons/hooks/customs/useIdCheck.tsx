// import { Modal } from "antd";
import { useRouter } from "next/router";

export const useIdCheck = (id: string) => {
  const router = useRouter();
  const queryId = router.query[id];

  if (typeof queryId !== "string") {
    console.log("시스템에 문제가 있습니다.");
    return { id: "" };
  }
  if (typeof queryId === "string") {
    return { id: queryId };
  }

  return {
    router,
    id: "",
  };

  // if (typeof queryId !== "string") return { id: "" };
  // if (typeof queryId === "string") return { id: queryId };
  // if (typeof queryId === "object") return { id: queryId[0] };
  // return { id: "" };
};
