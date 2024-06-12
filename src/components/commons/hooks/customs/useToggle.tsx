import { useState } from "react";

export default function useToggle(args: boolean): [boolean, () => void] {
  const [isToggle, setIsToggle] = useState(args);

  const onToggle = (): void => {
    setIsToggle((prev) => !prev);
  };

  return [isToggle, onToggle];
}
