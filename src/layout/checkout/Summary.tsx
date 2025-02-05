import CartStatement from "../../components/cart/CartStatement";
import Item from "../../components/cart/Item";
import Button from "../../components/Button";
import useStore from "../../store/store";

type SummaryProps = {
  onTriggerSubmit: () => void;
  classes?: string;
};

const Summary = ({ onTriggerSubmit, classes }: SummaryProps) => {
  const { cart } = useStore(false)[0];

  return (
    <section className={`${classes ? classes : ""}`}>
      <header>
        <h6>summary</h6>
      </header>
      <section>
        <ul>
          {cart?.map((item) => (
            <Item cartItem={item} key={item.id} />
          ))}
        </ul>
      </section>
      <footer>
        {<CartStatement cart={cart ?? []} showAll />}
        <Button btnStyle="brown" type="button" onClick={onTriggerSubmit}>
          continue
        </Button>
      </footer>
    </section>
  );
};

export default Summary;
