import { useState } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

interface IUseFileUrls {
  data?: Pick<IQuery, any>;
}

export const useFileUrls = (props: IUseFileUrls) => {
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  // 업로드 컴포넌트에서 값을 받아온다, 이유는 게시판 작성 화면에도 이미지를 보여주기 위해선
  // Upload 컴포넌트의 file input클릭 시 얻어온 url 값이 필요하다
  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    // 객체나 배열은 값을 바꾸면 주소값은 그대로이기 떄문에 setState 에서 인식을 하지 못하여 리랜더링이 되지 않는다
    // 그래서 얕은 복사를 하여 새로운 배열로 변수를 만들어주어 배열 전체를 바꾸는식으로 스테이트 값을 변경한다.
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  // useEffect(() => {
  //   const images = props.data?.fetchUseditem.images;
  //   if (images !== undefined && images !== null) setFileUrls([...images]);
  // }, [props.data]);

  return {
    fileUrls,
    setFileUrls,
    onChangeFileUrls,
  };
};
