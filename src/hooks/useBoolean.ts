import { useState } from "react";

type ReturnValues = {
  isVisible: boolean,
  setToTrue: () => void,
  setToFalse: () => void,
}

export function useBoolean(): [ReturnValues] {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const setToTrue = () => {
    setIsVisible(true);
  };
  const setToFalse = () => {
    setIsVisible(false);
  };

  return [{isVisible, setToTrue, setToFalse}];
}
