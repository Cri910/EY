import Footer1 from "./Footer1";
import styles from "./Footer2.module.css";

const Footer2 = () => {
  return (
    <div className={styles.footer}>
      <Footer1
        logoAlessandria="/logo-alessandria@2x.png"
        footerWidth="100%"
        footerHeight="100%"
        footerPosition="absolute"
        footerTop="7.97%"
        footerRight="0%"
        footerBottom="-7.97%"
        footerLeft="0%"
      />
    </div>
  );
};

export default Footer2;
