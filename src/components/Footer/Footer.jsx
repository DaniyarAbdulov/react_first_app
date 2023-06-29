import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <img src="https://jusan.kz/file-server/filename?dir=logo&filename=logo-desktop2.webp" />
      </div>
      <div className={classes.author}>made by Garrincha</div>
    </footer>
  );
};

export default Footer;
