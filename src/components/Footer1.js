import { useMemo } from "react";
import NewsletterForm from "./NewsletterForm";
import styles from "./Footer1.module.css";

const Footer1 = ({
  logoAlessandria,
  footerWidth,
  footerHeight,
  footerPosition,
  footerTop,
  footerRight,
  footerBottom,
  footerLeft,
}) => {
  const footerStyle = useMemo(() => {
    return {
      width: footerWidth,
      height: footerHeight,
      position: footerPosition,
      top: footerTop,
      right: footerRight,
      bottom: footerBottom,
      left: footerLeft,
    };
  }, [
    footerWidth,
    footerHeight,
    footerPosition,
    footerTop,
    footerRight,
    footerBottom,
    footerLeft,
  ]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.footerChild} />
      <div className={styles.menuFooter}>
        <div className={styles.categorieParent}>
          <div className={styles.categorie}>Categorie</div>
          <div className={styles.portieriParent}>
            <div className={styles.portieri}>Portieri</div>
            <div className={styles.attaccanti}>Attaccanti</div>
            <div className={styles.centrocampisti}>Centrocampisti</div>
            <div className={styles.difensori}>Difensori</div>
            <div className={styles.topDellaSettimana}>Top della settimana</div>
          </div>
        </div>
        <div className={styles.ilMioAccountParent}>
          <div className={styles.ilMioAccount}>Il mio account</div>
          <div className={styles.dashboard}>Dashboard</div>
          <div className={styles.dashboard}>Ordini</div>
          <div className={styles.dashboard}>Preferiti</div>
          <div className={styles.dashboard}>Guadagno mensile</div>
          <div className={styles.dashboard}>Customer Analytics</div>
        </div>
        <div className={styles.ilMioAccountParent}>
          <div className={styles.ilMioAccount}>Pagine</div>
          <div className={styles.dashboard}>Home</div>
          <div className={styles.dashboard}>Collezioni</div>
          <div className={styles.dashboard}>Wallet</div>
          <div className={styles.dashboard}>Messaggi</div>
          <div className={styles.dashboard}>Impostazioni</div>
        </div>
      </div>
      <NewsletterForm />
      <div className={styles.hekto}>Hekto</div>
      <div className={styles.contattaci}>Contattaci</div>
      <div className={styles.footerInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.moreWebDesign}>
            More. Web Design. All rights reserved.
          </div>
        </div>
      </div>
      <img
        className={styles.logoAlessandriaIcon}
        alt=""
        src={logoAlessandria}
      />
    </div>
  );
};

export default Footer1;
