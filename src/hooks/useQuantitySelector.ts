import { useState } from "react";

type useQuantitySelectorProps = (initialQuantity: number) => {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDecrement: () => void;
  handleIncrement: () => void;
};

const useQuantitySelector: useQuantitySelectorProps = (initialQuantity) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const handleDecrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  const handleIncrement = () => {
    console.log("INCREMENT");

    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
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
