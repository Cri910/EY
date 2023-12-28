import { useMemo } from "react";
import styles from "./MenuLaterale1.module.css";

const MenuLaterale1 = ({
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
  const menuLateraleStyle = useMemo(() => {
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
        <img
          className={styles.vuesaxlineardiamondsIcon}
          alt=""
          src={vuesaxlineardiamonds}
        />
        <div className={styles.collezioni1}>Collezioni</div>
      </div>
      <div className={styles.wallet}>
        <img
          className={styles.vuesaxlineardiamondsIcon}
          alt=""
          src={vuesaxlinearwallet}
        />
        <div className={styles.collezioni1}>Wallet</div>
      </div>
      <div className={styles.impostazioni}>
        <img
          className={styles.vuesaxlineardiamondsIcon}
          alt=""
          src={vuesaxoutlinesetting2}
        />
        <div className={styles.collezioni1}>Impostazioni</div>
      </div>
      <div className={styles.aiuto}>
        <img
          className={styles.vuesaxlineardiamondsIcon}
          alt=""
          src={vuesaxoutlineinfoCircle}
        />
        <div className={styles.collezioni1}>Aiuto</div>
      </div>
      <div className={styles.dashboard}>
        <img className={styles.dashboardIcon} alt="" src={dashboard} />
        <div className={styles.collezioni1}>Dashboard</div>
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
