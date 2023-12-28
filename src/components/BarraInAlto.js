import { useMemo } from "react";
import Footer from "./Footer";
import Notifiche from "./Notifiche";
import styles from "./BarraInAlto.module.css";

const BarraInAlto = ({
  vuesaxlinearsearchNormal,
  vuesaxlinearethereumEth,
  vuesaxoutlinenotification,
  profileImage,
  barraInAltoPosition,
  barraInAltoTop,
  barraInAltoLeft,
}) => {
  const barraInAltoStyle = useMemo(() => {
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
          src={vuesaxlinearethereumEth}
        />
        <div className={styles.eth}>14.06 ETH</div>
      </div>
      <div className={styles.bentornatoFederico}>
        <b className={styles.bentornatoFederico1}>Bentornato Federico!</b>
      </div>
      <Notifiche
        vuesaxoutlinenotification="/vuesaxoutlinenotification1@2x.png"
        notifichePosition="absolute"
        notificheTop="7.8px"
        notificheLeft="1006.4px"
      />
      <img className={styles.profileImageIcon} alt="" src={profileImage} />
    </div>
  );
};

export default BarraInAlto;
