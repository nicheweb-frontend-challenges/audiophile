import CartIcon from "../assets/icons/icon-cart.svg";
import * as styles from "./MainHeader.module.scss";
import MainNav from "../components/MainNav";
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
      <MainNav />
      <Button onClick={handleOpenCart} btnStyle="cart">
        <CartIcon />
      </Button>
    </header>
  );
};

export default MainHeader;
