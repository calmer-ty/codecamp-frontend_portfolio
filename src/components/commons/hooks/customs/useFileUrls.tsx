import { useState } from "react";

export const useFileUrls = () => {
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  return {
    fileUrls,
    setFileUrls,
    onChangeFileUrls,
  };
};
