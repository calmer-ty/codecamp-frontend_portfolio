import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useIdCheck(id: string): {
  id: string | null;
} {
  const router = useRouter();
  const [queryId, setQueryId] = useState<string | null>(null);

  useEffect(() => {
    const idFromQuery = router.query[id];
    if (idFromQuery === undefined || idFromQuery === null) {
      console.log("id를 못찾았습니다");
    } else if (typeof idFromQuery === "string") {
      console.log("id를 찾았습니다 string");
      setQueryId(idFromQuery);
    } else if (typeof idFromQuery === "object") {
      console.log("id를 찾았습니다 object");
      setQueryId(idFromQuery[0]);
    }
  }, [router.query[id]]);

  return { id: queryId };
}
