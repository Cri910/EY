import { FunctionComponent } from "react";
import styles from "./HomeCard.module.css";

const HomeCard: FunctionComponent = () => {
  return (
    <div className={styles.property1default}>
      <div className={styles.home}>
        <img
          className={styles.vuesaxboldhomeIcon}
          alt=""
          src="/vuesaxboldhome.svg"
        />
        <div className={styles.home1}>Home</div>
      </div>
      <div className={styles.wallet}>
        <img
          className={styles.vuesaxlinearwalletIcon}
          alt=""
          src="/vuesaxlinearwallet.svg"
        />
        <div className={styles.wallet1}>Wallet</div>
      </div>
      <div className={styles.messaggi}>
        <img
          className={styles.vuesaxoutlinemessageIcon}
          alt=""
          src="/vuesaxoutlinemessage.svg"
        />
        <div className={styles.messaggi1}>Messaggi</div>
      </div>
      <div className={styles.settings}>
        <img
          className={styles.vuesaxoutlinesetting2Icon}
          alt=""
          src="/vuesaxoutlinesetting2.svg"
        />
        <div className={styles.impostazioni}>Impostazioni</div>
      </div>
      <div className={styles.help}>
        <img
          className={styles.vuesaxoutlineinfoCircleIcon}
          alt=""
          src="/vuesaxoutlineinfocircle.svg"
        />
        <div className={styles.aiuto}>Aiuto</div>
      </div>
      <div className={styles.collezioni}>
        <img
          className={styles.vuesaxlineardiamondsIcon}
          alt=""
          src="/vuesaxlineardiamonds.svg"
        />
        <div className={styles.collezioni1}>Collezioni</div>
      </div>
      <div className={styles.menuItemSelected}>
        <img className={styles.dashboardIcon} alt="" src="/dashboard.svg" />
        <div className={styles.dashboard}>Dashboard</div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.div}>4</div>
      </div>
    </div>
  );
};

export default HomeCard;
