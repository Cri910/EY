import { FunctionComponent } from "react";
import DashboardMenuItem from "./DashboardMenuItem";
import styles from "./ContainerForm.module.css";

export type ContainerFormType = {
  productCode?: string;
};

const ContainerForm: FunctionComponent<ContainerFormType> = ({
  productCode,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.vuesaxlineardiamondsParent}>
        <img
          className={styles.vuesaxlineardiamondsIcon}
          alt=""
          src="/vuesaxlineardiamonds.svg"
        />
        <div className={styles.collezioni}>Collezioni</div>
      </div>
      <div className={styles.vuesaxlinearwalletParent}>
        <img
          className={styles.vuesaxlinearwalletIcon}
          alt=""
          src="/vuesaxlinearwallet.svg"
        />
        <div className={styles.wallet}>Wallet</div>
      </div>
      <DashboardMenuItem
        dashboard="/dashboard.svg"
        dashboardMenuItemPosition="relative"
        dashboardMenuItemFlexShrink="unset"
      />
      <div className={styles.vuesaxoutlinemessageParent}>
        <img
          className={styles.vuesaxoutlinemessageIcon}
          alt=""
          src="/vuesaxoutlinemessage.svg"
        />
        <div className={styles.messaggi}>Messaggi</div>
      </div>
      <div className={styles.vuesaxoutlinesetting2Parent}>
        <img
          className={styles.vuesaxoutlinesetting2Icon}
          alt=""
          src="/vuesaxoutlinesetting2.svg"
        />
        <div className={styles.impostazioni}>Impostazioni</div>
      </div>
      <div className={styles.vuesaxoutlineinfoCircleParent}>
        <img
          className={styles.vuesaxoutlineinfoCircleIcon}
          alt=""
          src="/vuesaxoutlineinfocircle.svg"
        />
        <div className={styles.aiuto}>Aiuto</div>
      </div>
    </div>
  );
};

export default ContainerForm;
