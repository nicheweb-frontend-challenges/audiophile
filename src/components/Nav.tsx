import * as styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="">Home</Link>
      <Link to="/headphones">headphones</Link>
      <Link to="/speakers">speakers</Link>
      <Link to="/earphones">earphones</Link>
    </nav>
  );
};

export default Nav;
