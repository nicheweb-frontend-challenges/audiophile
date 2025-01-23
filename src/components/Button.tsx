import { Link } from "react-router-dom";
import { LinkOrButtonProps } from "models/button";

const Button = ({ children, linkTo, ...otherProps }: LinkOrButtonProps) => {
  if (linkTo) {
    return <Link to={linkTo}>{children}</Link>;
  }
  return <button {...otherProps}>{children}</button>;
};

export default Button;
