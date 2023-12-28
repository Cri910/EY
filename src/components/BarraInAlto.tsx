import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Footer from "./Footer";
import Notifiche from "./Notifiche";
import styles from "./BarraInAlto.module.css";

type BarraInAltoType = {
  /** Style props */
  barraInAltoPosition?: CSSProperties["position"];
  barraInAltoTop?: CSSProperties["top"];
  barraInAltoLeft?: CSSProperties["left"];
};

const BarraInAlto: FunctionComponent<BarraInAltoType> = ({
  barraInAltoPosition,
  barraInAltoTop,
  barraInAltoLeft,
}) => {
  const barraInAltoStyle: CSSProperties = useMemo(() => {
    return {
      position: barraInAltoPosition,
      top: barraInAltoTop,
      left: barraInAltoLeft,
    };
  }, [barraInAltoPosition, barraInAltoTop, barraInAltoLeft]);

  return (
    <div className={styles.barraInAlto} style={barraInAltoStyle}>
      <Footer />
      <div className={styles.ethOwned}>
        <img
          className={styles.vuesaxlinearethereumEthIcon}
          alt=""
          src="/vuesaxlinearethereumeth@2x.png"
        />
        <div className={styles.eth}>14.06 ETH</div>
      </div>
      <div className={styles.bentornatoFederico}>
        <b className={styles.bentornatoFederico1}>Bentornato Federico!</b>
      </div>
      <Notifiche
        vuesaxoutlinenotification="/vuesaxoutlinenotification@2x.png"
        notifichePosition="absolute"
        notificheTop="7.8px"
        notificheLeft="1006.4px"
      />
      <img
        className={styles.profileImageIcon}
        alt=""
        src="/profile-image@2x.png"
      />
    </div>
  );
};

export default BarraInAlto;
