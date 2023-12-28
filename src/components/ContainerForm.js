import DashboardMenuItem from "./DashboardMenuItem";
import styles from "./ContainerForm.module.css";

const ContainerForm = ({ productCode }) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.vuesaxlineardiamondsParent}>
        <img
          className={styles.vuesaxlineardiamondsIcon}
          alt=""
          src="/vuesaxlineardiamonds@2x.png"
        />
        <div className={styles.collezioni}>Collezioni</div>
      </div>
      <div className={styles.vuesaxlineardiamondsParent}>
        <img
          className={styles.vuesaxlineardiamondsIcon}
          alt=""
          src="/vuesaxlinearwallet@2x.png"
        />
        <div className={styles.collezioni}>Wallet</div>
      </div>
      <DashboardMenuItem
        dashboard="/dashboard@2x.png"
        dashboardMenuItemPosition="relative"
        dashboardMenuItemFlexShrink="0"
      />
      <div className={styles.vuesaxoutlinemessageParent}>
        <img
          className={styles.vuesaxoutlinemessageIcon}
          alt=""
          src="/vuesaxoutlinemessage@2x.png"
        />
        <div className={styles.messaggi}>Messaggi</div>
      </div>
      <div className={styles.vuesaxlineardiamondsParent}>
        <img
          className={styles.vuesaxlineardiamondsIcon}
          alt=""
          src="/vuesaxoutlinesetting2@2x.png"
        />
        <div className={styles.collezioni}>Impostazioni</div>
      </div>
      <div className={styles.vuesaxlineardiamondsParent}>
        <img
          className={styles.vuesaxlineardiamondsIcon}
          alt=""
          src="/vuesaxoutlineinfocircle@2x.png"
        />
        <div className={styles.collezioni}>Aiuto</div>
      </div>
    </div>
  );
};

export default ContainerForm;
