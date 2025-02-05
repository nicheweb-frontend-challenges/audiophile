import CartIcon from "../assets/icons/icon-cart.svg";
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

  const [{ modal }, dispatch] = useStore(true);

  let isHomePage = pathname === "/";
  let isCategoryPage = Object.keys(params).length === 1;

  const handleOpenCart = () => {
    console.log("HANDLE OPEN CART", modal);

    dispatch("OPEN_MODAL", "cart");
  };

  return (
    <header
      id="start"
      className={`${styles.mainHeader} ${classes ? classes : ""}`}
      style={!(isHomePage || isCategoryPage) ? { border: "none" } : {}}
    >
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
