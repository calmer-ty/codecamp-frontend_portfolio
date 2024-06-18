import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useIdCheck = (
  id: string
): {
  id: string;
} => {
  const router = useRouter();
  const [queryId, setQueryId] = useState<string>("");

  useEffect(() => {
    const idFromQuery = router.query[id];
    if (idFromQuery === undefined || idFromQuery === null) {
      // console.log("id를 못찾았습니다");
    } else if (typeof idFromQuery === "string") {
      // console.log(idFromQuery, "id를 찾았습니다 string");
      setQueryId(idFromQuery);
    } else if (typeof idFromQuery === "object") {
      // console.log(idFromQuery, "id를 찾았습니다 object");
      setQueryId(idFromQuery[0]);
    }
  }, [router.query[id]]);

  return { id: queryId };
};
