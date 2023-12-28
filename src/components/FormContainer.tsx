import { FunctionComponent } from "react";
import styles from "./FormContainer.module.css";

const FormContainer: FunctionComponent = () => {
  return (
    <div className={styles.menuLaterale}>
      <div className={styles.collezioni}>
        <img
          className={styles.vuesaxlineardiamondsIcon}
          alt=""
          src="/vuesaxlineardiamonds@2x.png"
        />
        <div className={styles.collezioni1}>Collezioni</div>
      </div>
      <div className={styles.wallet}>
        <img
          className={styles.vuesaxlineardiamondsIcon}
          alt=""
          src="/vuesaxlinearwallet@2x.png"
        />
        <div className={styles.collezioni1}>Wallet</div>
      </div>
      <div className={styles.impostazioni}>
        <img
          className={styles.vuesaxoutlinesetting2Icon}
          alt=""
          src="/vuesaxoutlinesetting2@2x.png"
        />
        <div className={styles.impostazioni1}>Impostazioni</div>
      </div>
      <div className={styles.aiuto}>
        <img
          className={styles.vuesaxlineardiamondsIcon}
          alt=""
          src="/vuesaxoutlineinfocircle@2x.png"
        />
        <div className={styles.collezioni1}>Aiuto</div>
      </div>
      <div className={styles.dashboard}>
        <img className={styles.dashboardIcon} alt="" src="/dashboard@2x.png" />
        <div className={styles.collezioni1}>Dashboard</div>
      </div>
      <div className={styles.messaggi}>
        <img
          className={styles.vuesaxoutlinemessageIcon}
          alt=""
          src="/vuesaxoutlinemessage@2x.png"
        />
        <div className={styles.messaggi1}>Messaggi</div>
        <div className={styles.ellipseParent}>
          <div className={styles.groupChild} />
          <div className={styles.div}>4</div>
        </div>
      </div>
      <div className={styles.home}>
        <div className={styles.messaggi1}>Home</div>
        <img
          className={styles.vuesaxoutlinemessageIcon}
          alt=""
          src="/vuesaxboldhome@2x.png"
        />
      </div>
      <div className={styles.impostazioni2}>
        <img
          className={styles.vuesaxlineardiamondsIcon}
          alt=""
          src="/vuesaxoutlinesetting2@2x.png"
        />
        <div className={styles.collezioni1}>Impostazioni</div>
      </div>
    </div>
  );
};

export default FormContainer;
