import CartStatement from "../../components/cart/CartStatement";
import Item from "../../components/cart/Item";
import Button from "../../components/Button";
import useStore from "../../store/store";

type SummaryProps = {
  onTriggerSubmit: () => void;
};

const Summary = ({ onTriggerSubmit }: SummaryProps) => {
  const { cart } = useStore(false)[0];

  return (
    <section>
      <header>
        <h6>summary</h6>
      </header>

      <ul>
        {cart?.map((item) => (
          <Item cartItem={item} key={item.id} />
        ))}
      </ul>

      <footer>
        {<CartStatement cart={cart ?? []} showAll />}
        <Button type="button" onClick={onTriggerSubmit}>
          continue
        </Button>
      </footer>
    </section>
  );
};

export default Summary;
