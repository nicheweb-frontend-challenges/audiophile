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
      <li>
        <a href="https://www.facebook.com/" target="_blank">
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blank">
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a
          href="https://x.com/?prefetchTimestamp=1737309405972&mx=2"
          target="_blank"
        >
          <TwitterIcon />
        </a>
      </li>
    </ul>
  );
};

export default Social;
