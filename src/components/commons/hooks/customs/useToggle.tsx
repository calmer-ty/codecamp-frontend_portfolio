import { useState } from "react";

export const useToggle = (args: boolean): [boolean, () => void] => {
  const [isToggle, setIsToggle] = useState(args);

  const onToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return [isToggle, onToggle];
};
