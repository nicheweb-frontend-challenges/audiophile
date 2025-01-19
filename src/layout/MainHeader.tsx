import CartIcon from "../assets/icons/icon-cart.svg";
import Nav from "../components/Nav";
import Logo from "../assets/logo.svg";
import * as styles from "./MainHeader.module.scss";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className={styles.mainHeader}>
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
      <CartIcon />
    </header>
  );
};

export default MainHeader;
