import { useRef } from "react";
import { TextInput } from "react-native";

export type InputName = string;
export type FocusInput = (inputName: InputName) => void;
export type InputRefs = {
  [key: string]: React.MutableRefObject<TextInput | null>;
};

const useInputFocus = (inputs: InputName[]): [InputRefs, FocusInput] => {
  const inputRefs: InputRefs = {};
  inputs.forEach((input) => (inputRefs[input] = useRef(null)));

  const focus: FocusInput = (input: InputName) => {
    inputRefs[input].current?.focus();
  };

  return [inputRefs, focus];
};

export default useInputFocus;
