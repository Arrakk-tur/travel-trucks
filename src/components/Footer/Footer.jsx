import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} TravelTrucks</p>
    </footer>
  );
}

export default Footer;
