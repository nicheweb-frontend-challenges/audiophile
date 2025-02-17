import Checkout from "../layout/checkout/Checkout";
import Summary from "../layout/checkout/Summary";
import { useRef } from "react";
import * as styles from "./Checkout.module.scss";
import GoBackButton from "../components/GoBackButton";

const CheckoutPage = () => {
  const checkout = useRef<{ triggerSubmit: () => void } | null>(null);

  const handleTriggerSubmit = () => {
    checkout.current?.triggerSubmit();
  };

  return (
    <>
      <div className={styles.checkoutPage__headerBackground}>&nbsp;</div>
      <GoBackButton classes={styles.checkoutPage__goBackbutton} />
      <main className={styles.checkoutPage__main}>
        <Checkout ref={checkout} classes={styles.checkoutPage__main_checkout} />
        <Summary
          onTriggerSubmit={handleTriggerSubmit}
          classes={styles.checkoutPage__main_summary}
        />
      </main>
      <div className={styles.checkoutPage__background}>&nbsp;</div>
    </>
  );
};
export default CheckoutPage;
