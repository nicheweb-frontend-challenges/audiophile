import useStore from "../../store/store";
import OrderCart from "../../components/order/OrderCart";
import Card from "../../components/UI/Card";
import { grandTotal } from "../../utils/cart-methods";
import { formatDollar } from "../../utils/formatter";
import * as styles from "./OrderSumm.module.scss";
import { useState } from "react";

const OrderSumm = () => {
  const [isFolded, setIsFolded] = useState<boolean>(true);
  const { cart } = useStore(false)[0];

  const orderGrandTotal: string = cart ? formatDollar(grandTotal(cart)) : "0";

  const handleChangeList = () => {
    setIsFolded((prevState) => !prevState);
  };

  return (
    <Card className={styles.orderSumm}>
      <OrderCart
        cart={cart || []}
        classes={styles.orderSumm__ordeCart}
        onChangeList={handleChangeList}
      />
      <section
        className={`${styles.orderSumm__grandTotal} ${
          !isFolded ? styles.orderSumm__grandTotal__unfolded : ""
        }`}
      >
        <p className={styles.orderSumm__grandTotal_heading}>grand total</p>
        <p className={styles.orderSumm__grandTotal_quantity}>
          {orderGrandTotal}
        </p>
      </section>
    </Card>
  );
};

export default OrderSumm;
