import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../../commons/stores";

export const useMoveToPage = () => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    if (typeof path !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    setVisitedPage(path);
    void router.push(path);
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
};
