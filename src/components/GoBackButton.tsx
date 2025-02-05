import Button from "./Button";
import { replace, useNavigate } from "react-router-dom";

type GoBackProps = {
  classes?: string;
};

const GoBackButton = ({ classes }: GoBackProps) => {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history && window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <Button type="button" onClick={goBack} btnStyle="text" classes={classes}>
      go back
    </Button>
  );
};

export default GoBackButton;
