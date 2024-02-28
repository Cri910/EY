import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MenuLaterale1.module.css";

export type MenuLaterale1Type = {
  vuesaxlineardiamonds?: string;
  vuesaxlinearwallet?: string;
  vuesaxoutlinesetting2?: string;
  vuesaxoutlineinfoCircle?: string;
  dashboard?: string;
  vuesaxboldhome?: string;

  /** Style props */
  menuLateraleHeight?: CSSProperties["height"];
  menuLateralePosition?: CSSProperties["position"];
  menuLateraleTop?: CSSProperties["top"];
  menuLateraleLeft?: CSSProperties["left"];
};

const MenuLaterale1: FunctionComponent<MenuLaterale1Type> = ({
  vuesaxlineardiamonds,
  vuesaxlinearwallet,
  vuesaxoutlinesetting2,
  vuesaxoutlineinfoCircle,
  dashboard,
  vuesaxboldhome,
  menuLateraleHeight,
  menuLateralePosition,
  menuLateraleTop,
  menuLateraleLeft,
}) => {
  const menuLaterale1Style: CSSProperties = useMemo(() => {
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
    <div className={styles.menuLaterale} style={menuLaterale1Style}>
      <div className={styles.collezioni}>
        <img
          className={styles.vuesaxlineardiamondsIcon}
          alt=""
          src={vuesaxlineardiamonds}
        />
        <div className={styles.collezioni1}>Collezioni</div>
      </div>
      <div className={styles.wallet}>
        <img
          className={styles.vuesaxlinearwalletIcon}
          alt=""
          src={vuesaxlinearwallet}
        />
        <div className={styles.wallet1}>Wallet</div>
      </div>
      <div className={styles.impostazioni}>
        <img
          className={styles.vuesaxoutlinesetting2Icon}
          alt=""
          src={vuesaxoutlinesetting2}
        />
        <div className={styles.impostazioni1}>Impostazioni</div>
      </div>
      <div className={styles.aiuto}>
        <img
          className={styles.vuesaxoutlineinfoCircleIcon}
          alt=""
          src={vuesaxoutlineinfoCircle}
        />
        <div className={styles.aiuto1}>Aiuto</div>
      </div>
      <div className={styles.dashboard}>
        <img className={styles.dashboardIcon} alt="" src={dashboard} />
        <div className={styles.dashboard1}>Dashboard</div>
      </div>
      <div className={styles.home}>
        <div className={styles.home1}>Home</div>
        <img
          className={styles.vuesaxboldhomeIcon}
          alt=""
          src={vuesaxboldhome}
        />
      </div>
    </div>
  );
};

export default MenuLaterale1;
