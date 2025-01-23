import Button from "./Button";

type QuantitySelectorProps = {
  onDecrement: () => void;
  onIncrement: () => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  quantity: number;
  minQuantity: number;
};

const QuantitySelector = ({
  quantity,
  minQuantity,
  onDecrement,
  onIncrement,
  onInputChange,
}: QuantitySelectorProps) => {
  return (
    <div>
      <Button
        type="button"
        onClick={onDecrement}
        disabled={quantity <= 1}
        style={{ margin: 10 }}
      >
        -
      </Button>
      <input
        type="number"
        step="1"
        min={minQuantity}
        value={quantity.toString()}
        onChange={onInputChange}
      />
      <Button type="button" onClick={onIncrement}>
        +
      </Button>
    </div>
  );
};

export default QuantitySelector;
