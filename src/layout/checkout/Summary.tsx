import CartStatement from "../../components/cart/CartStatement";
import Item from "../../components/cart/Item";
import Button from "../../components/Button";
import useStore from "../../store/store";
import Card from "../../components/UI/Card";
import * as styles from "./Summary.module.scss";

type SummaryProps = {
  onTriggerSubmit: () => void;
  classes?: string;
};

const Summary = ({ onTriggerSubmit, classes }: SummaryProps) => {
  const { cart } = useStore(true)[0];

  return (
    <Card className={`${styles.summary} ${classes ? classes : ""}`}>
      <header className={styles.summary__header}>
        <h6>summary</h6>
      </header>
      <section className={styles.summary__items}>
        <ul className={styles.summary__items_list}>
          {cart?.map((item) => (
            <Item cartItem={item} key={item.id} />
          ))}
        </ul>
      </section>
      <footer className={styles.summary__footer}>
        {<CartStatement cart={cart ?? []} showAll />}
        <Button
          classes={styles.summary__footer_button}
          btnStyle="brown"
          type="button"
          onClick={onTriggerSubmit}
          disabled={!cart?.length}
        >
          continue & pay
        </Button>
      </footer>
    </Card>
  );
};

export default Summary;
