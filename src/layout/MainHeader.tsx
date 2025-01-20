import CartIcon from "../assets/icons/icon-cart.svg";
import Nav from "../components/Nav";
import * as styles from "./MainHeader.module.scss";
import AppLogo from "../components/AppLogo";
const MainHeader = () => {
  return (
    <header id="start" className={styles.mainHeader}>
      <AppLogo />
      <Nav />
      <CartIcon />
    </header>
  );
};

export default MainHeader;
