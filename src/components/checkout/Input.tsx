import * as styles from "./Input.module.scss";

interface InputProps extends React.ComponentPropsWithRef<"input"> {
  label: string;
  errorMessage?: string;
  classes?: string;
  isValid?: boolean;
}

const Input = ({
  label,
  errorMessage,
  classes,
  isValid,
  ...props
}: InputProps) => {
  return (
    <label className={`${styles.customInput} ${classes ? classes : ""}`}>
      <span
        className={`${styles.customInput__label} ${
          !isValid ? styles.customInput__input_invalid_label : ""
        }`}
      >
        {label}
      </span>
      <span className={styles.customInput__error}>{errorMessage}</span>
      <input
        className={`${styles.customInput__input} ${
          !isValid ? styles.customInput__input_invalid_input : ""
        }`}
        {...props}
      />
    </label>
  );
};

export default Input;
