import CashLogo from "../../assets/icons/checkout/icon-cash-on-delivery.svg";
import * as styles from "./CashOnDelivery.module.scss";

const CashOnDelivery = () => {
  return (
    <div className={styles.cashOnDelivery}>
      <CashLogo />
      <p>
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </p>
    </div>
  );
};

export default CashOnDelivery;
