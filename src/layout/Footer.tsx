import AppLogo from "../components/AppLogo";
import Nav from "../components/Nav";
import Social from "../components/Social";
import * as styles from "./Footer.module.scss";

type FooterProps = {
  classes?: string;
};

const Footer = ({ classes }: FooterProps) => {
  return (
    <>
      <footer className={`${styles.footer} ${classes ? classes : ""}`}>
        <AppLogo />
        <Nav classes={styles.footer__nav} />
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <Social />
        <div className={styles.footer__copyright}>
          Copyright 2024. All Rights Reserved
        </div>
      </footer>
      <div className={styles.footer__background}>&nbsp;</div>
    </>
  );
};

export default Footer;
