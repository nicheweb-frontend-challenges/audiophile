import CartIcon from "../assets/icons/icon-cart.svg";
import Hamburger from "../assets/icons/icon-hamburger.svg";
import * as styles from "./MainHeader.module.scss";
import Button from "../components/Button";
import useStore from "../store/store";
import Modal from "../components/Modal";
import Nav from "../components/Nav";
import AppLogo from "../components/AppLogo";
import { useParams, useLocation } from "react-router";

type MainHeaderProps = {
  classes?: string;
};

const MainHeader = ({ classes }: MainHeaderProps) => {
  const params = useParams();
  const { pathname } = useLocation();

  const [{ modal, cart }, dispatch] = useStore(true);

  let isHomePage = pathname === "/";
  let isCategoryPage = Object.keys(params).length === 1;

  const handleOpenCart = () => {
    console.log("HANDLE OPEN CART", modal);
    dispatch("OPEN_MODAL", "cart");
  };

  const toggleMenu = () => {
    dispatch("TOGGLE_MENU");
  };

  return (
    <header
      id="start"
      className={`${styles.mainHeader} ${classes ? classes : ""}`}
      style={!(isHomePage || isCategoryPage) ? { border: "none" } : {}}
    >
      {modal && <Modal modal={modal} />}
      <Button
        classes={styles.mainHeader__hamburger_hidden}
        btnStyle="icon"
        onClick={toggleMenu}
        aria-label="Menu Hamburger"
      >
        <Hamburger />
      </Button>
      <AppLogo classes={styles.mainHeader__logo} />
      <Nav classes={styles.mainHeader__nav} />
      <Button
        onClick={handleOpenCart}
        btnStyle="icon"
        classes={styles.mainHeader__cart}
        aria-label="Cart Button"
      >
        {cart?.length ? <span>{cart?.length}</span> : null}
        <CartIcon />
      </Button>
    </header>
  );
};

export default MainHeader;
