import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

type AppLogoProps = {
  classes?: string;
};

const AppLogo = ({ classes }: AppLogoProps) => {
  return (
    <Link to="/" className={classes ? classes : ""} aria-label="Main Logo">
      <Logo />
    </Link>
  );
};

export default AppLogo;
