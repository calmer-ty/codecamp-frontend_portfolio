import { useRouter } from "next/router";

export const useQueryIdChecker = (id: string) => {
  const router = useRouter();
  const queryId = router.query[id];
  if (typeof queryId === "string") return { id: queryId };
  return { id: "" };
};
