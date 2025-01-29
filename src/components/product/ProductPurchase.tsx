import QuantitySelector from "../QuantitySelector";
import Button from "../Button";
import useQuantitySelector from "../../hooks/useQuantitySelector";
import Product from "../../models/product";
import useStore from "../../store/store";
import CartItem from "../../models/cart-item";

type ProductPurchaseProps = {
  product: Product;
};

const ProductPurchase = ({ product }: ProductPurchaseProps) => {
  const {
    quantity,
    setQuantity,
    handleChange,
    handleDecrement,
    handleIncrement,
  } = useQuantitySelector(1);

  const dispatch = useStore(false)[1];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch("CART_ADD_ITEM", new CartItem(quantity, product));

    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <QuantitySelector
        quantity={quantity}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
        onInputChange={handleChange}
        minQuantity={1}
      />
      <Button>Add to cart</Button>
    </form>
  );
};

export default ProductPurchase;
