import { useState } from "react";

export const useKeyword = () => {
  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  return {
    keyword,
    onChangeKeyword,
  };
};
