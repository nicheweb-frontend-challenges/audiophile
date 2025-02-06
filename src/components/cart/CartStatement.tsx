import CartItem from "../../models/cart-item";
import * as styles from "./CartStatement.module.scss";
import { total, vat, grandTotal, SHIPPING } from "../../utils/cart-methods";
import { formatDollar } from "../../utils/formatter";

type CartStatementProps = {
  cart: CartItem[];
  showAll?: boolean;
};

const CartStatement = ({ cart, showAll }: CartStatementProps) => {
  const cartTotal: string = formatDollar(total(cart));
  const cartVat: string = formatDollar(vat(cart));
  const cartGrandTotal: string = formatDollar(grandTotal(cart));
  const shipping: string = formatDollar(SHIPPING);

  return cart.length ? (
    <table
      className={`${styles.statement} ${
        showAll ? styles.statement__summary : styles.statement__cart
      }`}
    >
      <tbody>
        <tr>
          <th>total</th>
          <td>{cartTotal}</td>
        </tr>
        <tr>
          <th>shipping</th>
          <td>{shipping}</td>
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
  ) : (
    <p className={styles.statement__fallback}>No items in the cart</p>
  );
};

export default CartStatement;
