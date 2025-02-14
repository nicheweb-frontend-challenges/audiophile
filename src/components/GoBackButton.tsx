import Button from "./Button";
import { useNavigate } from "react-router-dom";
import * as styles from "./GoBackButton.module.scss";

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
    <Button
      type="button"
      onClick={goBack}
      btnStyle="text"
      classes={`${styles.goBackButton} ${classes ? classes : ""}`}
    >
      go back
    </Button>
  );
};

export default GoBackButton;
