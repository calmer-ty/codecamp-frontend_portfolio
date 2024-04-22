import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useIdCheck = (id: string) => {
  const router = useRouter();
  const [queryId, setQueryId] = useState<string>("");

  const idFromQuery = router.query[id];
  useEffect(() => {
    if (idFromQuery === undefined || idFromQuery === null) {
      console.log("id를 못찾았습니다");
      setQueryId("");
    } else if (typeof idFromQuery === "string") {
      console.log("id를 찾았습니다 string");
      setQueryId(idFromQuery);
    } else if (typeof idFromQuery === "object") {
      console.log("id를 찾았습니다 object");
      setQueryId(idFromQuery[0]);
    }
  }, [idFromQuery]);

  return { id: queryId };
};
