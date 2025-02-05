import Button from "./Button";
import * as styles from "./QuantitySelector.module.scss";

type QuantitySelectorProps = {
  onDecrement: () => void;
  onIncrement: () => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  quantity: number;
  minQuantity: number;
  classes?: string;
};

const QuantitySelector = ({
  quantity,
  minQuantity,
  onDecrement,
  onIncrement,
  onInputChange,
  classes,
}: QuantitySelectorProps) => {
  return (
    <div className={`${styles.quantitySelector} ${classes ? classes : ""}`}>
      <Button
        type="button"
        onClick={onDecrement}
        disabled={quantity <= minQuantity}
        btnStyle="text"
      >
        -
      </Button>
      <input
        type="number"
        step="1"
        min={minQuantity.toString()}
        value={quantity.toString()}
        onChange={onInputChange}
      />
      <Button type="button" onClick={onIncrement} btnStyle="text">
        +
      </Button>
    </div>
  );
};

export default QuantitySelector;
