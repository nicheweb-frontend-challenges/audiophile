import { useState } from "react";
import Item from "../cart/Item";
import CartItem from "../../models/cart-item";
import Button from "../../components/Button";

type OrderCartProps = {
  cart: CartItem[];
};

const OrderCart = ({ cart }: OrderCartProps) => {
  const [isShortList, setIsShortList] = useState(true);

  const handleToggleList = () => {
    setIsShortList((prevValue) => !prevValue);
  };
  return (
    <div>
      {isShortList ? (
        <Item cartItem={cart[0]} />
      ) : (
        <ul>
          {cart?.map((item) => (
            <Item cartItem={item} />
          ))}
        </ul>
      )}
      <Button type="button" onClick={handleToggleList}>
        {isShortList ? `and ${cart.length - 1} other item(s)` : "View less"}
      </Button>
    </div>
  );
};

export default OrderCart;
