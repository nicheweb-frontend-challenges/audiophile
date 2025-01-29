import Fieldset from "../../components/checkout/Fieldset";
import Input from "../../components/checkout/Input";
import MoneyData from "./MoneyData";
import { useState } from "react";
import CashOnDelivery from "./CashOnDelivery";

const PaymentDetails = () => {
  const [method, setMethod] = useState<"cash" | "money">("money");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMethod(event.target.value as "cash" | "money");
  };
  return (
    <Fieldset title="payment details">
      <Fieldset title="payment method">
        <Input
          label="e-money"
          name="method"
          type="radio"
          value="money"
          onChange={handleChange}
          checked={method === "money"}
        />
        <Input
          label="cash on delivery"
          name="method"
          type="radio"
          value="cash"
          onChange={handleChange}
          checked={method === "cash"}
        />
      </Fieldset>
      {method === "money" && <MoneyData />}
      {method === "cash" && <CashOnDelivery />}
    </Fieldset>
  );
};

export default PaymentDetails;
