import CartItem from "../../models/cart-item";
import QuantitySelector from "../QuantitySelector";
import useQuantitySelector from "../../hooks/useQuantitySelector";
import * as styles from "./Item.module.scss";
import { formatDollar } from "../../utils/formatter";

type ItemProps = {
  cartItem: CartItem;
  itemForCart?: boolean;
};

const Item = ({ cartItem, itemForCart }: ItemProps) => {
  const { quantity, handleChange, handleDecrement, handleIncrement } =
    useQuantitySelector(cartItem.quantity, true, cartItem);

  const price = formatDollar(cartItem?.price || 0);

  return (
    <li key={cartItem.id} className={styles.cartItem}>
      <div className={styles.cartItem__desc}>
        <img
          src={cartItem.imageUrl}
          alt={`${cartItem.name} image`}
          className={styles.cartItem__desc_img}
        />
        <div>
          <p className={styles.cartItem__desc_name}>{cartItem.name}</p>
          <p className={styles.cartItem__desc_price}>{price}</p>
        </div>
      </div>
      {itemForCart ? (
        <QuantitySelector
          quantity={quantity}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          onInputChange={handleChange}
          minQuantity={0}
          classes={styles.cartItem__quantitySelector}
        />
      ) : (
        `x${quantity}`
      )}
    </li>
  );
};

export default Item;
