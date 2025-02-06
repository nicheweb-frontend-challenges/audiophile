import * as styles from "./Fieldset.module.scss";
import useStore from "../../store/store";

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
  const { cart } = useStore(true)[0];

  return (
    <fieldset
      className={`${styles.customFieldset} ${classes ? classes : ""}`}
      disabled={!cart?.length}
    >
      <legend className={styles.customFieldset__legend}>{title}</legend>
      <div className={styles.customFieldset__children}>{children}</div>
    </fieldset>
  );
};

export default Fieldset;
