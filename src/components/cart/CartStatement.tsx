import CartItem from "../../models/cart-item";
import * as styles from "./CartStatement.module.scss";
import { total, vat, grandTotal, SHIPPING } from "../../utils/cart-methods";

type CartStatementProps = {
  cart: CartItem[];
  showAll?: boolean;
};

const CartStatement = ({ cart, showAll }: CartStatementProps) => {
  const cartTotal: number = total(cart);
  const cartVat: number = vat(cart);
  const cartGrandTotal = grandTotal(cart);
  console.log(styles);

  return (
    <table className={showAll ? styles.summaryStatement : styles.cartStatement}>
      <tbody>
        <tr>
          <th>total</th>
          <td>{cartTotal}</td>
        </tr>
        <tr>
          <th>shipping</th>
          <td>${SHIPPING}</td>
        </tr>
        <tr>
          <th>vat(included)</th>
          <td>{cartVat}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>grand total</th>
          <td>{cartGrandTotal}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartStatement;
