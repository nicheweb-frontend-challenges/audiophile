import FacebookIcon from "../assets/icons/icon-facebook.svg";
import InstagramIcon from "../assets/icons/icon-instagram.svg";
import TwitterIcon from "../assets/icons/icon-twitter.svg";
import * as styles from "./Social.module.scss";

type SocialProps = {
  classes?: string;
};

const Social = ({ classes }: SocialProps) => {
  return (
    <ul className={`${styles.social} ${classes ? classes : ""}`}>
      <li className={styles.social__item}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          aria-label="www.facebook.com(open in a new window)"
        >
          <FacebookIcon />
        </a>
      </li>
      <li className={styles.social__item}>
        <a
          href="https://www.instagram.com/(open in a new window)"
          target="_blank"
          aria-label="www.instagram.com"
        >
          <InstagramIcon />
        </a>
      </li>
      <li className={styles.social__item}>
        <a
          href="https://x.com/?prefetchTimestamp=1737309405972&mx=2(open in a new window)"
          target="_blank"
          aria-label="x.com"
        >
          <TwitterIcon />
        </a>
      </li>
    </ul>
  );
};

export default Social;
