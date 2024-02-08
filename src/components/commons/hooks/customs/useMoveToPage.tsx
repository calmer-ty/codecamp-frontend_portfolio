import { useRouter } from "next/router";
// import { useState } from "react";
// import { visitedPageState } from "../../../../commons/stores";

// interface IUseMoveToPageReturn {
//   visitedPage: string;
//   onClickMoveToPage: (path: string) => () => void;
// }

export const useMoveToPage = () => {
  const router = useRouter();
  //   const [visitedPage, setVisitedPage] = useState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    // setVisitedPage(path);
    void router.push(path);
  };

  return {
    // visitedPage,
    onClickMoveToPage,
  };
};
