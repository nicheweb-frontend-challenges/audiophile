import Button from "../Button";
import CartStatement from "./CartStatement";
import useStore from "../../store/store";
import Item from "./Item";
import { useNavigate } from "react-router-dom";

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
    <div>
      <header>
        <h6>{`cart(${cart?.length})`}</h6>
        <Button disabled={!cart?.length} onClick={handleRemoveAllItems}>
          remove all
        </Button>
      </header>
      {cart?.length ? (
        <ul>
          {cart?.map((item) => (
            <Item cartItem={item} key={item.id} itemForCart />
          ))}
        </ul>
      ) : (
        <p>No items in the cart</p>
      )}
      <footer>
        {cart?.length ? <CartStatement cart={cart} /> : undefined}
        <Button disabled={!cart?.length} onClick={handleCheckout}>
          checkout
        </Button>
      </footer>
    </div>
  );
};

export default Cart;
