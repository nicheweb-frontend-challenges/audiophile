import * as styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

type NavProps = {
  classes?: string;
};

const Nav = ({ classes }: NavProps) => {
  return (
    <nav
      className={`${styles.nav} ${classes ? classes : ""}`}
      role="navigation"
    >
      <Link to="">Home</Link>
      <Link to="/headphones">headphones</Link>
      <Link to="/speakers">speakers</Link>
      <Link to="/earphones">earphones</Link>
    </nav>
  );
};

export default Nav;
