import Fieldset from "../../components/checkout/Fieldset";
import Input from "../../components/checkout/Input";
import MoneyData from "./MoneyData";
import { useState } from "react";
import CashOnDelivery from "./CashOnDelivery";
import * as styles from "./PaymentDetails.module.scss";

const PaymentDetails = () => {
  const [method, setMethod] = useState<"cash" | "money">("money");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMethod(event.target.value as "cash" | "money");
  };
  return (
    <Fieldset title="payment details" classes={styles.paymentDetails}>
      <Fieldset
        title="payment method"
        classes={styles.paymentDetails__paymentMethod}
      >
        <Input
          isValid
          label="e-Money"
          name="method"
          type="radio"
          value="money"
          classes={`${styles.paymentDetails__paymentMethod_emoney} ${styles.radioInput}`}
          onChange={handleChange}
          checked={method === "money"}
        />
        <Input
          isValid
          label="cash on delivery"
          name="method"
          type="radio"
          value="cash"
          classes={`${styles.paymentDetails__paymentMethod_cash} ${styles.radioInput}`}
          onChange={handleChange}
          checked={method === "cash"}
        />
      </Fieldset>
      <section className={styles.paymentDetails__paymentMethod_details}>
        {method === "money" && <MoneyData />}
        {method === "cash" && <CashOnDelivery />}
      </section>
    </Fieldset>
  );
};

export default PaymentDetails;
