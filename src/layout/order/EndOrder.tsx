import Button from "../../components/Button";
import OrderSum from "./OrderSum";
import OrderLogo from "../../assets/icons/checkout/icon-order-confirmation.svg";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/store";

const EndOrder = () => {
  const navigate = useNavigate();
  const dispatch = useStore(false)[1];

  const handleNavigateHome = () => {
    dispatch("CLOSE_MODAL");
    navigate("/");
  };

  return (
    <div>
      <header>
        <OrderLogo />
        <h3>thank you for your order</h3>
      </header>
      <OrderSum />
      <footer>
        <Button type="button" onClick={handleNavigateHome}>
          back to home
        </Button>
      </footer>
    </div>
  );
};

export default EndOrder;
