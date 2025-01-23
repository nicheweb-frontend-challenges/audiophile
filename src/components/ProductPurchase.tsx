import QuantitySelector from "./QuantitySelector";
import Button from "./Button";
import useQuantitySelector from "../hooks/useQuantitySelector";
import Product from "../models/product";

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(quantity);
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
