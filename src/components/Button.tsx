import * as styles from "./Button.module.scss";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnStyle: "brown" | "black" | "transparent" | "text" | "cart" | "icon";
  classes?: string;
}
const Button = ({
  children,
  btnStyle,
  classes,
  ...otherProps
}: ButtonProps) => {
  let _class = styles.btn__brown;
  if (btnStyle === "black") {
    _class = styles.btn__black;
  } else if (btnStyle === "transparent") {
    _class = styles.btn__transparent;
  } else if (btnStyle === "text") {
    _class = styles.btn__text;
  } else if (btnStyle === "cart") {
    _class = styles.btn__cart;
  } else if (btnStyle === "icon") {
    _class = styles.btn__icon;
  }

  return (
    <button className={`${_class} ${classes ? classes : ""}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
