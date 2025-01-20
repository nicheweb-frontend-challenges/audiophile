import AppLogo from "../components/AppLogo";
import Nav from "../components/Nav";
import Social from "../components/Social";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "black", color: "white" }}>
      <AppLogo />
      <Nav />
      <Social />
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div>Copyright 2021. All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
