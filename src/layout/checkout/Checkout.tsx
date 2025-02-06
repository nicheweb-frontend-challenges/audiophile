import BillingDetails from "./BillingDetails";
import ShippingInfo from "./ShippingInfo";
import PaymentDetails from "./PaymentDetails";
import { ForwardedRef, useImperativeHandle, useRef } from "react";
import useStore from "../../store/store";
import * as styles from "./Checkout.module.scss";
import Card from "../../components/UI/Card";

type CheckoutProps = {
  ref: ForwardedRef<Object>;
  classes?: string;
};

const Checkout = ({ ref, classes }: CheckoutProps) => {
  const form = useRef<HTMLFormElement>(null);
  const dispatch = useStore(false)[1];

  useImperativeHandle(ref, () => ({
    triggerSubmit: () => {
      form.current?.requestSubmit();
    },
  }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.current?.checkValidity()) {
      dispatch("OPEN_MODAL", "order");
    }
  };
  return (
    <Card className={`${styles.checkout} ${classes ? classes : ""}`}>
      <h3 className={styles.checkout__heading}>checkout</h3>
      <form ref={form} id="checkout-form" onSubmit={handleSubmit} noValidate>
        <BillingDetails />
        <ShippingInfo />
        <PaymentDetails />
      </form>
    </Card>
  );
};

export default Checkout;
