import CartItem from "../models/cart-item";
import QuantitySelector from "./QuantitySelector";
import useQuantitySelector from "../hooks/useQuantitySelector";

type ItemProps = {
  cartItem: CartItem;
};

const Item = ({ cartItem }: ItemProps) => {
  const { quantity, handleChange, handleDecrement, handleIncrement } =
    useQuantitySelector(cartItem.quantity, true, cartItem);

  return (
    <li key={cartItem.id}>
      <div>
        <img src={cartItem.imageUrl} alt={`${cartItem.name} image`} />
        <p>{cartItem.name}</p>
        <p>{cartItem.price}</p>
      </div>
      <QuantitySelector
        quantity={quantity}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
        onInputChange={handleChange}
        minQuantity={0}
      />
    </li>
  );
};

export default Item;
