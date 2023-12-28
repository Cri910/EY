import styles from "./HomeCard1.module.css";

const HomeCard1 = () => {
  return (
    <div className={styles.property1default}>
      <div className={styles.home}>
        <img
          className={styles.vuesaxboldhomeIcon}
          alt=""
          src="/vuesaxboldhome@2x.png"
        />
        <div className={styles.home1}>Home</div>
      </div>
      <div className={styles.wallet}>
        <img
          className={styles.vuesaxlinearwalletIcon}
          alt=""
          src="/vuesaxlinearwallet@2x.png"
        />
        <div className={styles.impostazioni}>Wallet</div>
      </div>
      <div className={styles.messaggi}>
        <img
          className={styles.vuesaxlinearwalletIcon}
          alt=""
          src="/vuesaxoutlinemessage@2x.png"
        />
        <div className={styles.impostazioni}>Messaggi</div>
      </div>
      <div className={styles.settings}>
        <img
          className={styles.vuesaxlinearwalletIcon}
          alt=""
          src="/vuesaxoutlinesetting2@2x.png"
        />
        <div className={styles.impostazioni}>Impostazioni</div>
      </div>
      <div className={styles.help}>
        <img
          className={styles.vuesaxboldhomeIcon}
          alt=""
          src="/vuesaxoutlineinfocircle@2x.png"
        />
        <div className={styles.aiuto}>Aiuto</div>
      </div>
      <div className={styles.collezioni}>
        <img
          className={styles.vuesaxlinearwalletIcon}
          alt=""
          src="/vuesaxlineardiamonds@2x.png"
        />
        <div className={styles.impostazioni}>Collezioni</div>
      </div>
      <div className={styles.menuItemSelected}>
        <img className={styles.dashboardIcon} alt="" src="/dashboard@2x.png" />
        <div className={styles.dashboard}>Dashboard</div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.groupChild} />
        <div className={styles.div}>4</div>
      </div>
    </div>
  );
};

export default HomeCard1;
