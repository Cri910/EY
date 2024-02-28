import { FunctionComponent, useMemo, type CSSProperties } from "react";
import SocialIcons from "./SocialIcons";
import styles from "./MenuNotLog.module.css";

export type MenuNotLogType = {
  clipPathGroup?: string;
  vector?: string;
  vector1?: string;
  vector2?: string;
  vuesaxboldhome?: string;
  vuesaxlineardiamonds?: string;
  vuesaxlinearwallet?: string;
  vuesaxoutlinesetting2?: string;
  vuesaxoutlineinfoCircle?: string;

  /** Style props */
  menuNotLogPosition?: CSSProperties["position"];
  menuNotLogTop?: CSSProperties["top"];
  menuNotLogLeft?: CSSProperties["left"];
};

const MenuNotLog: FunctionComponent<MenuNotLogType> = ({
  clipPathGroup,
  vector,
  vector1,
  vector2,
  vuesaxboldhome,
  vuesaxlineardiamonds,
  vuesaxlinearwallet,
  vuesaxoutlinesetting2,
  vuesaxoutlineinfoCircle,
  menuNotLogPosition,
  menuNotLogTop,
  menuNotLogLeft,
}) => {
  const menuNotLogStyle: CSSProperties = useMemo(() => {
    return {
      position: menuNotLogPosition,
      top: menuNotLogTop,
      left: menuNotLogLeft,
    };
  }, [menuNotLogPosition, menuNotLogTop, menuNotLogLeft]);

  return (
    <div className={styles.menuNotLog} style={menuNotLogStyle}>
      <SocialIcons
        clipPathGroup="/clip-path-group.svg"
        vector="/vector.svg"
        vector1="/vector.svg"
        vector2="/vector.svg"
        socialIconsPosition="absolute"
        socialIconsTop="440px"
        socialIconsLeft="14.7px"
      />
      <div className={styles.vuesaxboldhomeParent}>
        <img
          className={styles.vuesaxboldhomeIcon}
          alt=""
          src={vuesaxboldhome}
        />
        <div className={styles.home}>Home</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.vuesaxlineardiamondsParent}>
          <img
            className={styles.vuesaxlineardiamondsIcon}
            alt=""
            src={vuesaxlineardiamonds}
          />
          <div className={styles.collezioni}>Collezioni</div>
        </div>
        <div className={styles.vuesaxlinearwalletParent}>
          <img
            className={styles.vuesaxlinearwalletIcon}
            alt=""
            src={vuesaxlinearwallet}
          />
          <div className={styles.wallet}>Wallet</div>
        </div>
        <div className={styles.vuesaxoutlinesetting2Parent}>
          <img
            className={styles.vuesaxoutlinesetting2Icon}
            alt=""
            src={vuesaxoutlinesetting2}
          />
          <div className={styles.contatti}>Contatti</div>
        </div>
        <div className={styles.vuesaxoutlineinfoCircleParent}>
          <img
            className={styles.vuesaxoutlineinfoCircleIcon}
            alt=""
            src={vuesaxoutlineinfoCircle}
          />
          <div className={styles.aiuto}>Aiuto</div>
        </div>
      </div>
      <div className={styles.accediButton}>
        <div className={styles.accediButtonChild} />
        <div className={styles.accedi}>Accedi</div>
      </div>
    </div>
  );
};

export default MenuNotLog;
