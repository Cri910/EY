import { FunctionComponent } from "react";
import styles from "./FormContainer.module.css";

const FormContainer: FunctionComponent = () => {
  return (
    <div className={styles.menuLaterale}>
      <div className={styles.impostazioni}>
        <img
          className={styles.vuesaxoutlinesetting2Icon}
          alt=""
          src="/vuesaxoutlinesetting2.svg"
        />
        <div className={styles.impostazioni1}>Impostazioni</div>
      </div>
      <div className={styles.frame}>
        <div className={styles.collezioni}>
          <img
            className={styles.vuesaxlineardiamondsIcon}
            alt=""
            src="/vuesaxlineardiamonds.svg"
          />
          <div className={styles.collezioni1}>Collezioni</div>
        </div>
      </div>
      <div className={styles.frame1}>
        <div className={styles.wallet}>
          <img
            className={styles.vuesaxlinearwalletIcon}
            alt=""
            src="/vuesaxlinearwallet.svg"
          />
          <div className={styles.wallet1}>Wallet</div>
        </div>
      </div>
      <div className={styles.frame2}>
        <div className={styles.aiuto}>
          <img
            className={styles.vuesaxoutlineinfoCircleIcon}
            alt=""
            src="/vuesaxoutlineinfocircle.svg"
          />
          <div className={styles.aiuto1}>Aiuto</div>
        </div>
      </div>
      <div className={styles.dashboard}>
        <img className={styles.dashboardIcon} alt="" src="/dashboard.svg" />
        <div className={styles.dashboard1}>Dashboard</div>
      </div>
      <div className={styles.frame3}>
        <div className={styles.messaggi}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.div}>4</div>
          </div>
          <div className={styles.frame4}>
            <img
              className={styles.vuesaxoutlinemessageIcon}
              alt=""
              src="/vuesaxoutlinemessage.svg"
            />
            <div className={styles.messaggi1}>Messaggi</div>
          </div>
        </div>
      </div>
      <div className={styles.frame5}>
        <div className={styles.home}>
          <img
            className={styles.vuesaxboldhomeIcon}
            alt=""
            src="/vuesaxboldhome.svg"
          />
          <div className={styles.home1}>Home</div>
        </div>
      </div>
      <div className={styles.frame6}>
        <div className={styles.impostazioni2}>
          <img
            className={styles.vuesaxoutlinesetting2Icon1}
            alt=""
            src="/vuesaxoutlinesetting2.svg"
          />
          <div className={styles.impostazioni3}>Impostazioni</div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
