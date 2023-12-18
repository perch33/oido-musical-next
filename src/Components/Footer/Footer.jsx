import MenuRedesGlobal from "./MenuRedesGlobal";
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footers}>
      <p>
        Desarrollado por Percy Chuzon <br />
        2023 &copy; PERCH33
      </p>
      <MenuRedesGlobal />
    </footer>
  );
};

export default Footer;
