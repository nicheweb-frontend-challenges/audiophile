import CartIcon from "../assets/icons/icon-cart.svg";
import Nav from "../components/Nav";
import * as styles from "./MainHeader.module.scss";
import AppLogo from "../components/AppLogo";
import Button from "../components/Button";
import useStore from "../store/store";
import Modal from "../components/Modal";

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
      <Button onClick={handleOpenCart}>
        <CartIcon />
      </Button>
    </header>
  );
};

export default MainHeader;
