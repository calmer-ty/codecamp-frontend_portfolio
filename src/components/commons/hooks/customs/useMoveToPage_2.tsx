import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../../commons/stores";
import { useRouter } from "next/router";

export const useMoveToPage = (): {
  visitedPage: string;
  onClickMoveToPage: () => void;
} => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (): void => {
    if (typeof router.asPath !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    setVisitedPage(router.asPath);
  };
  console.log(visitedPage);

  return {
    visitedPage,
    onClickMoveToPage,
  };
};
