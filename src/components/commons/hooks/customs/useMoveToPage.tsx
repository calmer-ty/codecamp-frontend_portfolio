import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../../commons/stores";

export const useMoveToPage = (): {
  visitedPage: string;
  onClickMoveToPage: (path: string) => () => void;
} => {
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    if (typeof path !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    console.log(visitedPage);
    setVisitedPage(path);
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
};
