import Nav from "./Nav";
import AppLogo from "./AppLogo";
import * as styles from "./MainNav.module.scss";

const MainNav = () => {
  return (
    <div className={styles.MainNav}>
      <AppLogo />
      <Nav />
    </div>
  );
};

export default MainNav;
