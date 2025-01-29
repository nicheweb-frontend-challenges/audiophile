type validateType = {
  (validity: ValidityState | undefined):
    | "A value is required"
    | "Wrong format"
    | "";
};

//Parameter: validity--> Validity State gotten by checkvalidity()
//return: A custom error used for client feedback
export const validate: validateType = (validity) => {
  if (validity?.valueMissing) {
    return "A value is required";
  } else if (validity?.patternMismatch || validity?.typeMismatch) {
    return "Wrong format";
  }
  return "";
};
