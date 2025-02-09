import MainHeader from "../layout/MainHeader";
import * as styles from "./NotFound.module.scss";

const NotFoundPage = () => {
  return (
    <>
      <MainHeader classes={styles.errorPage__header} />
      <div className={styles.errorPage__headerBacground}></div>
      <div className={styles.errorPage}>
        <div className={styles.errorPage__container}>
          <img src="/assets/images/error.png" alt="Error 404 image" />
          <h1>An error ocurred!</h1>
          <p>Could not find this page!</p>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
