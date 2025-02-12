import IncludedIt from "../models/included-item";
import IncludedItem from "../components/IncludedItem";
import * as styles from "./IncludedItems.module.scss";

type IncludedItemsProps = {
  includedItems: IncludedIt[];
  classes?: string;
};

const IncludedItems = ({ includedItems, classes }: IncludedItemsProps) => {
  return (
    <div className={`${styles.includedItems} ${classes ? classes : ""}`}>
      <h3 className={styles.includedItems__heading}>in the box</h3>
      <ul className={styles.includedItems__list}>
        {includedItems.map((includedItem, index) => (
          <IncludedItem includedItem={includedItem} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default IncludedItems;
