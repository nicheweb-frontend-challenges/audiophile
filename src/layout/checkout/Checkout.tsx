import BillingDetails from "./BillingDetails";
import ShippingInfo from "./ShippingInfo";
import PaymentDetails from "./PaymentDetails";
import { ForwardedRef, useImperativeHandle, useRef } from "react";
import useStore from "../../store/store";

type CheckoutProps = {
  ref: ForwardedRef<Object>;
};

const Checkout = ({ ref }: CheckoutProps) => {
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
    <section>
      <h3>checkout</h3>
      <form ref={form} id="checkout-form" onSubmit={handleSubmit} noValidate>
        <BillingDetails />
        <ShippingInfo />
        <PaymentDetails />
      </form>
    </section>
  );
};

export default Checkout;
