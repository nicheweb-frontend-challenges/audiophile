import Button from "./Button";
import { replace, useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history && window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <Button type="button" onClick={goBack}>
      go back
    </Button>
  );
};

export default GoBackButton;
