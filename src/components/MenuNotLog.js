import { useMemo } from "react";
import SocialIcons from "./SocialIcons";
import styles from "./MenuNotLog.module.css";

const MenuNotLog = ({
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
  const menuNotLogStyle = useMemo(() => {
    return {
      position: menuNotLogPosition,
      top: menuNotLogTop,
      left: menuNotLogLeft,
    };
  }, [menuNotLogPosition, menuNotLogTop, menuNotLogLeft]);

  return (
    <div className={styles.menuNotLog} style={menuNotLogStyle}>
      <SocialIcons
        clipPathGroup="/clip-path-group@2x.png"
        vector="/vector@2x.png"
        vector1="/vector@2x.png"
        vector2="/vector@2x.png"
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
            className={styles.vuesaxboldhomeIcon}
            alt=""
            src={vuesaxlineardiamonds}
          />
          <div className={styles.home}>Collezioni</div>
        </div>
        <div className={styles.vuesaxlineardiamondsParent}>
          <img
            className={styles.vuesaxboldhomeIcon}
            alt=""
            src={vuesaxlinearwallet}
          />
          <div className={styles.home}>Wallet</div>
        </div>
        <div className={styles.vuesaxlineardiamondsParent}>
          <img
            className={styles.vuesaxboldhomeIcon}
            alt=""
            src={vuesaxoutlinesetting2}
          />
          <div className={styles.home}>Contatti</div>
        </div>
        <div className={styles.vuesaxlineardiamondsParent}>
          <img
            className={styles.vuesaxboldhomeIcon}
            alt=""
            src={vuesaxoutlineinfoCircle}
          />
          <div className={styles.home}>Aiuto</div>
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
