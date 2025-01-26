import IncludedIt from "../models/included-item";
import IncludedItem from "../components/IncludedItem";

type IncludedItemsProps = {
  includedItems: IncludedIt[];
};

const IncludedItems = ({ includedItems }: IncludedItemsProps) => {
  return (
    <div>
      <h3>in the box</h3>
      <ul>
        {includedItems.map((includedItem, index) => (
          <IncludedItem includedItem={includedItem} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default IncludedItems;
