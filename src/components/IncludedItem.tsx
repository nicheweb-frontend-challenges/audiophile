import IncludedIt from "../models/included-item";
import * as styles from "./IncludedItem.module.scss";

type IncludedItemProps = {
  includedItem: IncludedIt;
};

const IncludedItem = ({ includedItem }: IncludedItemProps) => {
  return (
    <li>
      <span
        className={styles.includedItem__bullet}
      >{`${includedItem.quantity}x`}</span>
      <span>{includedItem.item}</span>
    </li>
  );
};

export default IncludedItem;
