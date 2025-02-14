import Categories from "../../layout/category/Categories";
import * as styles from "./Menu.module.scss";
import useStore from "../../store/store";
import { useEffect } from "react";

type MenuProps = {
  classes?: string;
};

const Menu = ({ classes }: MenuProps) => {
  const [{ openMenu }, dispatch] = useStore(true);

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      dispatch("CLOSE_MENU");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleOuterClick = () => {
    dispatch("CLOSE_MENU");
  };

  return (
    <div
      className={`${styles.menu} ${openMenu && styles.menu__open} ${
        classes ? classes : ""
      }`}
    >
      <main className={styles.menu__main}>
        <Categories
          classes={`${styles.menu__categories} ${styles.menu__mobileCat}`}
        />
      </main>
      <footer onClick={handleOuterClick} className={styles.menu__footer}>
        &nbsp;
      </footer>
    </div>
  );
};

export default Menu;
