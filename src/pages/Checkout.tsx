import Checkout from "../layout/checkout/Checkout";
import Summary from "../layout/checkout/Summary";
import { ForwardedRef, useRef } from "react";

const CheckoutPage = () => {
  const checkout = useRef<{ triggerSubmit: () => void } | null>(null);

  const handleTriggerSubmit = () => {
    checkout.current?.triggerSubmit();
  };

  return (
    <div>
      <Checkout ref={checkout} />
      <Summary onTriggerSubmit={handleTriggerSubmit} />
    </div>
  );
};
export default CheckoutPage;
