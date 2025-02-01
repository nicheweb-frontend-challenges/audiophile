import CartIcon from "../assets/icons/icon-cart.svg";
import * as styles from "./MainHeader.module.scss";
import Button from "../components/Button";
import useStore from "../store/store";
import Modal from "../components/Modal";
import Nav from "../components/Nav";
import AppLogo from "../components/AppLogo";

const MainHeader = () => {
  const [{ modal }, dispatch] = useStore(true);

  const handleOpenCart = () => {
    console.log("HANDLE OPEN CART", modal);

    dispatch("OPEN_MODAL", "cart");
  };

  return (
    <header id="start" className={styles.mainHeader}>
      {modal && <Modal modal={modal} />}
      <AppLogo />
      <Nav />
      <Button
        onClick={handleOpenCart}
        btnStyle="cart"
        classes={styles.mainHeader__cart}
      >
        <CartIcon />
      </Button>
    </header>
  );
};

export default MainHeader;
