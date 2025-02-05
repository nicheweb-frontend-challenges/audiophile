import * as styles from "./Fieldset.module.scss";

type FieldsetProps = {
  title?:
    | "billing details"
    | "shipping info"
    | "payment details"
    | "payment method";
  children: React.ReactNode;
  classes?: string;
};

const Fieldset = ({ title, children, classes }: FieldsetProps) => {
  return (
    <fieldset className={`${styles.customFieldset} ${classes ? classes : ""}`}>
      <legend className={styles.customFieldset__legend}>{title}</legend>
      <div className={styles.customFieldset__children}>{children}</div>
    </fieldset>
  );
};

export default Fieldset;
