import { useState } from "react";
import CartItem from "../models/cart-item";
import useStore from "../store/store";

type useQuantitySelectorProps = (
  initialQuantity: number,
  updateCart?: boolean,
  item?: CartItem
) => {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDecrement: () => void;
  handleIncrement: () => void;
};

const useQuantitySelector: useQuantitySelectorProps = (
  initialQuantity,
  updateCart,
  item
) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const dispatch = useStore()[1];

  const handleDecrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
    if (updateCart) {
      dispatch("CART_DECREMENT_ITEM", item);
    }
  };
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    if (updateCart) {
      dispatch("CART_INCREMENT_ITEM", item);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
    if (updateCart) {
      dispatch("CART_UPDATE_QUANTITY_ITEM", { newQuantity, item });
    }
  };

  return {
    quantity,
    setQuantity,
    handleChange,
    handleDecrement,
    handleIncrement,
  };
};

export default useQuantitySelector;
