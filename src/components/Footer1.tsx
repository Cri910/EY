import { FunctionComponent, useMemo, type CSSProperties } from "react";
import NewsletterForm from "./NewsletterForm";
import styles from "./Footer1.module.css";

export type Footer1Type = {
  logoAlessandria?: string;

  /** Style props */
  footerWidth?: CSSProperties["width"];
  footerHeight?: CSSProperties["height"];
  footerPosition?: CSSProperties["position"];
  footerTop?: CSSProperties["top"];
  footerRight?: CSSProperties["right"];
  footerBottom?: CSSProperties["bottom"];
  footerLeft?: CSSProperties["left"];
};

const Footer1: FunctionComponent<Footer1Type> = ({
  logoAlessandria,
  footerWidth,
  footerHeight,
  footerPosition,
  footerTop,
  footerRight,
  footerBottom,
  footerLeft,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
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
          <div className={styles.ordini}>Ordini</div>
          <div className={styles.preferiti}>Preferiti</div>
          <div className={styles.guadagnoMensile}>Guadagno mensile</div>
          <div className={styles.customerAnalytics}>Customer Analytics</div>
        </div>
        <div className={styles.pagineParent}>
          <div className={styles.pagine}>Pagine</div>
          <div className={styles.home}>Home</div>
          <div className={styles.collezioni}>Collezioni</div>
          <div className={styles.wallet}>Wallet</div>
          <div className={styles.messaggi}>Messaggi</div>
          <div className={styles.impostazioni}>Impostazioni</div>
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
