import { FunctionComponent, useMemo, type CSSProperties } from "react";
import SocialIcons from "./SocialIcons";
import styles from "./MenuNotLog1.module.css";

export type MenuNotLog1Type = {
  /** Style props */
  menuvuesaxMarginTop?: CSSProperties["marginTop"];
  contattiTop?: CSSProperties["top"];
  contattiPosition?: CSSProperties["position"];
};

const MenuNotLog1: FunctionComponent<MenuNotLog1Type> = ({
  menuvuesaxMarginTop,
  contattiTop,
  contattiPosition,
}) => {
  const menuNotLog1Style: CSSProperties = useMemo(() => {
    return {
      marginTop: menuvuesaxMarginTop,
    };
  }, [menuvuesaxMarginTop]);

  const filterComponentStyle: CSSProperties = useMemo(() => {
    return {
      top: contattiTop,
      position: contattiPosition,
    };
  }, [contattiTop, contattiPosition]);

  return (
    <div className={styles.menuNotLog} style={menuNotLog1Style}>
      <div className={styles.frameDiscoverPopularNFT}>
        <div className={styles.filterComponent} style={filterComponentStyle}>
          <img
            className={styles.vuesaxboldhomeIcon}
            alt=""
            src="/vuesaxboldhome.svg"
          />
          <input className={styles.home} placeholder="Home" type="text" />
        </div>
        <div className={styles.loginRounded}>
          <div className={styles.mostraTuttiText}>
            <div className={styles.vuesaxlinearsearchnormalInsta}>
              <div className={styles.ipiApprezzatiText}>
                <img
                  className={styles.vuesaxlineardiamondsIcon}
                  alt=""
                  src="/vuesaxlineardiamonds.svg"
                />
                <div className={styles.collezioni}>Collezioni</div>
              </div>
              <div className={styles.connectWalletFrame}>
                <img
                  className={styles.vuesaxlinearwalletIcon}
                  alt=""
                  src="/vuesaxlinearwallet.svg"
                />
                <div className={styles.wallet}>Wallet</div>
              </div>
              <div className={styles.menuvuesax}>
                <img
                  className={styles.vuesaxoutlinesetting2Icon}
                  alt=""
                  src="/vuesaxoutlinesetting2.svg"
                />
                <div className={styles.contatti}>Contatti</div>
              </div>
              <div className={styles.clippathgroup}>
                <img
                  className={styles.vuesaxoutlineinfoCircleIcon}
                  alt=""
                  src="/vuesaxoutlineinfocircle.svg"
                />
                <div className={styles.aiuto}>Aiuto</div>
              </div>
            </div>
            <div className={styles.vectorthree}>
              <button className={styles.accediButton}>
                <div className={styles.rectangleframe} />
                <div className={styles.accedi}>Accedi</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialmediaicons}>
        <SocialIcons
          clipPathGroup="/clip-path-group.svg"
          vector="/textcerca.svg"
          vector1="/vector-1.svg"
          vector2="/vector-2.svg"
          socialIconsPosition="unset"
          socialIconsTop="unset"
          socialIconsLeft="unset"
        />
      </div>
    </div>
  );
};

export default MenuNotLog1;
