import { Link } from "react-router-dom";

type ButtonProps = {
  children: string;
  linkTo: string;
};
const Button = ({ children, linkTo }: ButtonProps) => {
  if (linkTo) {
    return <Link to={linkTo}>{children}</Link>;
  }
  return <button> {children}</button>;
};

export default Button;
