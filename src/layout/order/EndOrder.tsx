import Button from "../../components/Button";
import OrderSumm from "./OrderSumm";
import OrderLogo from "../../assets/icons/checkout/icon-order-confirmation.svg";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/store";
import * as styles from "./EndOrder.module.scss";

type EndOrderProps = {
  classes?: string;
};

const EndOrder = ({ classes }: EndOrderProps) => {
  const navigate = useNavigate();
  const dispatch = useStore(false)[1];

  const handleNavigateHome = () => {
    dispatch("CART_REMOVE_ALL_ITEMS");
    dispatch("CLOSE_MODAL");
    navigate("/");
  };

  return (
    <div className={`${styles.endOrder} ${classes ? classes : ""}`}>
      <header className={styles.endOrder__header}>
        <OrderLogo />
        <h3>{"thank you \nfor your order"}</h3>
        <p>You will receive an email confirmation shortly.</p>
      </header>
      <section className={styles.endOrder__body}>
        <OrderSumm />
      </section>
      <footer>
        <Button
          classes={styles.endOrder__button}
          btnStyle="brown"
          type="button"
          onClick={handleNavigateHome}
        >
          back to home
        </Button>
      </footer>
    </div>
  );
};

export default EndOrder;
