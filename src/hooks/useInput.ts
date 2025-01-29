import { useRef, useState } from "react";
import { validate } from "../utils/inputValidation";

const useInput = () => {
  const [value, setValue] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const isValid: boolean = errorMessage !== "";

  const handleChange: React.ChangeEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(event.target.value);
    setErrorMessage("");
  };

  const handleBlur: React.FocusEventHandler = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    setErrorMessage(validate(event.target.validity));
  };

  const handleValidation = (event: React.InvalidEvent<HTMLInputElement>) => {
    setErrorMessage(validate(event.target.validity));
  };

  return {
    inputRef,
    value,
    isValid,
    errorMessage,
    handleChange,
    handleBlur,
    handleValidation,
  };
};

export default useInput;
