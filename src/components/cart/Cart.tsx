import Button from "../Button";
import Card from "../../components/UI/Card";
import CartStatement from "./CartStatement";
import useStore from "../../store/store";
import Item from "./Item";
import { useNavigate } from "react-router-dom";
import * as styles from "./Cart.module.scss";

const Cart = () => {
  const [{ cart }, dispatch] = useStore(true);
  const navigate = useNavigate();

  const handleRemoveAllItems = () => {
    dispatch("CART_REMOVE_ALL_ITEMS");
  };

  const handleCheckout = () => {
    dispatch("CLOSE_MODAL");
    navigate("/checkout", { replace: true });
  };

  return (
    <div className={styles.cart}>
      <header className={styles.cart__header}>
        <h6>{`cart(${cart?.length})`}</h6>
        <Button
          btnStyle="cart"
          disabled={!cart?.length}
          onClick={handleRemoveAllItems}
          classes={styles.cart__header_button}
        >
          Remove all
        </Button>
      </header>
      <section className={styles.cart__items}>
        {cart?.length ? (
          <ul className={styles.cart__items_list}>
            {cart?.map((item) => (
              <Item cartItem={item} key={item.id} itemForCart />
            ))}
          </ul>
        ) : (
          <p className={styles.cart__items__fallback}>No items in the cart</p>
        )}
      </section>
      <footer className={styles.cart__footer}>
        {cart?.length ? <CartStatement cart={cart} /> : undefined}
        <Button
          btnStyle="brown"
          disabled={!cart?.length}
          onClick={handleCheckout}
          classes={styles.cart__footer_button}
        >
          checkout
        </Button>
      </footer>
    </div>
  );
};

export default Cart;
