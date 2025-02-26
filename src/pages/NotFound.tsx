import MainHeader from "../layout/MainHeader";
import Footer from "../layout/Footer";
import Menu from "../components/menu/Menu";
import * as styles from "./NotFound.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorPage__header_background}>&nbsp;</div>
      <Menu />
      <MainHeader classes={styles.errorPage__header} />
      <main className={styles.errorPage__main}>
        <div className={styles.errorPage__main__container}>
          <img src="/assets/images/error.png" alt="Error 404 image" />
          <h1>An error ocurred!</h1>
          <p>Could not find this page!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
