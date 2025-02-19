import * as styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

type NavProps = {
  classes?: string;
};

const Nav = ({ classes, ...otherProps }: NavProps) => {
  return (
    <nav className={`${styles.nav} ${classes ? classes : ""}`} {...otherProps}>
      <Link to="">Home</Link>
      <Link to="/headphones">headphones</Link>
      <Link to="/speakers">speakers</Link>
      <Link to="/earphones">earphones</Link>
    </nav>
  );
};

export default Nav;
