import * as styles from "./Input.module.scss";

interface InputProps extends React.ComponentPropsWithRef<"input"> {
  label: string;
  errorMessage?: string;
}

const Input = ({ label, errorMessage, ...props }: InputProps) => {
  return (
    <label className={styles.customInput}>
      <span className={styles.customInput__label}>{label}</span>
      <span className={styles.customInput__error}>{errorMessage}</span>
      <input className={styles.customInput__input} {...props} />
    </label>
  );
};

export default Input;
