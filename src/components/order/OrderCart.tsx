import { useState } from "react";
import Item from "../cart/Item";
import CartItem from "../../models/cart-item";
import Button from "../../components/Button";
import * as styles from "./OrderCart.module.scss";

type OrderCartProps = {
  cart: CartItem[];
  classes?: string;
  onChangeList: () => void;
};

const OrderCart = ({ cart, classes, onChangeList }: OrderCartProps) => {
  const [isShortList, setIsShortList] = useState(true);

  const handleToggleList = () => {
    setIsShortList((prevValue) => !prevValue);
    onChangeList();
  };
  return (
    <div className={`${styles.orderCart} ${classes ? classes : ""}`}>
      {isShortList ? (
        <Item cartItem={cart[0]} />
      ) : (
        <ul className={styles.orderCart_list}>
          {cart?.map((item) => (
            <Item cartItem={item} />
          ))}
        </ul>
      )}
      <hr />
      <Button
        classes={styles.orderCart__button}
        btnStyle="cart"
        type="button"
        onClick={handleToggleList}
      >
        {isShortList ? `and ${cart.length - 1} other item(s)` : "View less"}
      </Button>
    </div>
  );
};

export default OrderCart;
