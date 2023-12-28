import { useMemo } from "react";
import styles from "./Notifiche.module.css";

const Notifiche = ({
  vuesaxoutlinenotification,
  notifichePosition,
  notificheTop,
  notificheLeft,
}) => {
  const notificheStyle = useMemo(() => {
    return {
      position: notifichePosition,
      top: notificheTop,
      left: notificheLeft,
    };
  }, [notifichePosition, notificheTop, notificheLeft]);

  return (
    <div className={styles.notifiche} style={notificheStyle}>
      <div className={styles.number}>
        <div className={styles.numberChild} />
        <div className={styles.div}>2</div>
      </div>
      <img
        className={styles.vuesaxoutlinenotificationIcon}
        alt=""
        src={vuesaxoutlinenotification}
      />
    </div>
  );
};

export default Notifiche;
