import CartItem from "../models/cart-item";
import * as styles from "./CartStatement.module.scss";

type CartStatementProps = {
  cart: CartItem[];
  showAll?: boolean;
};

const SHIPPING = 50;

const CartStatement = ({ cart, showAll }: CartStatementProps) => {
  const total: number = cart.reduce((acc: number, cartItem: CartItem) => {
    return acc + (cartItem.price ?? 0) * cartItem.quantity;
  }, 0);
  const vat: number = total * 0.2;
  const grandTotal = total + vat + SHIPPING;
  console.log(styles);

  return (
    <table className={showAll ? styles.summaryStatement : styles.cartStatement}>
      <tbody>
        <tr>
          <th>total</th>
          <td>{total}</td>
        </tr>
        <tr>
          <th>shipping</th>
          <td>${SHIPPING}</td>
        </tr>
        <tr>
          <th>vat(included)</th>
          <td>{vat}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>grand total</th>
          <td>{grandTotal}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartStatement;
