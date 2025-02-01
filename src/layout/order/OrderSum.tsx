import useStore from "../../store/store";
import OrderCart from "../../components/order/OrderCart";
import { grandTotal } from "../../utils/cart-methods";

const OrderSum = () => {
  const { cart } = useStore(false)[0];

  const orderGrandTotal: number = cart ? grandTotal(cart) : 0;

  return (
    <div>
      <OrderCart cart={cart || []} />
      <section>
        <p>grand total</p>
        <p>{orderGrandTotal}</p>
      </section>
    </div>
  );
};

export default OrderSum;
