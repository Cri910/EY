import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FormContainer2.module.css";

export type FormContainer2Type = {
  iconId?: string;
  iconCode?: string;
  iconSize?: string;
  iconIdentifier?: string;
  iconImageUrl?: string;
  iconTextId?: string;
  iconText?: string;

  /** Style props */
  menuLateraleHeight?: CSSProperties["height"];
  menuLateralePosition?: CSSProperties["position"];
  menuLateraleTop?: CSSProperties["top"];
  menuLateraleLeft?: CSSProperties["left"];
};

const FormContainer2: FunctionComponent<FormContainer2Type> = ({
  iconId,
  iconCode,
  iconSize,
  iconIdentifier,
  iconImageUrl,
  iconTextId,
  iconText,
  menuLateraleHeight,
  menuLateralePosition,
  menuLateraleTop,
  menuLateraleLeft,
}) => {
  const menuLateraleStyle: CSSProperties = useMemo(() => {
    return {
      height: menuLateraleHeight,
      position: menuLateralePosition,
      top: menuLateraleTop,
      left: menuLateraleLeft,
    };
  }, [
    menuLateraleHeight,
    menuLateralePosition,
    menuLateraleTop,
    menuLateraleLeft,
  ]);

  return (
    <div className={styles.menuLaterale} style={menuLateraleStyle}>
      <div className={styles.collezioni}>
        <img className={styles.vuesaxlineardiamondsIcon} alt="" src={iconId} />
        <div className={styles.collezioni1}>Collezioni</div>
      </div>
      <div className={styles.wallet}>
        <img className={styles.vuesaxlinearwalletIcon} alt="" src={iconCode} />
        <div className={styles.wallet1}>Wallet</div>
      </div>
      <div className={styles.impostazioni}>
        <img
          className={styles.vuesaxoutlinesetting2Icon}
          alt=""
          src={iconSize}
        />
        <div className={styles.impostazioni1}>Impostazioni</div>
      </div>
      <div className={styles.aiuto}>
        <img
          className={styles.vuesaxoutlineinfoCircleIcon}
          alt=""
          src={iconIdentifier}
        />
        <div className={styles.aiuto1}>Aiuto</div>
      </div>
      <div className={styles.dashboard}>
        <img className={styles.dashboardIcon} alt="" src={iconImageUrl} />
        <div className={styles.dashboard1}>Dashboard</div>
      </div>
      <div className={styles.messaggi}>
        <img
          className={styles.vuesaxoutlinemessageIcon}
          alt=""
          src={iconTextId}
        />
        <div className={styles.messaggi1}>Messaggi</div>
        <div className={styles.ellipseParent}>
          <div className={styles.groupChild} />
          <div className={styles.div}>4</div>
        </div>
      </div>
      <div className={styles.home}>
        <div className={styles.home1}>Home</div>
        <img className={styles.vuesaxboldhomeIcon} alt="" src={iconText} />
      </div>
    </div>
  );
};

export default FormContainer2;
