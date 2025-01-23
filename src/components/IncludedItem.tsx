import IncludedIt from "../models/included-item";

type IncludedItemProps = {
  includedItem: IncludedIt;
};

const IncludedItem = ({ includedItem }: IncludedItemProps) => {
  return (
    <li>
      <span style={{ marginRight: 10 }}>{`${includedItem.quantity}x`}</span>
      <span>{includedItem.item}</span>
    </li>
  );
};

export default IncludedItem;
