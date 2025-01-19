import * as styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="">Home</Link>
      <Link to="category/headphones">headphones</Link>
      <Link to="category/speakers">speakers</Link>
      <Link to="category/earphones">earphones</Link>
    </nav>
  );
};

export default Nav;
