import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Notifiche.module.css";

type NotificheType = {
  vuesaxoutlinenotification?: string;

  /** Style props */
  notifichePosition?: CSSProperties["position"];
  notificheTop?: CSSProperties["top"];
  notificheLeft?: CSSProperties["left"];
};

const Notifiche: FunctionComponent<NotificheType> = ({
  vuesaxoutlinenotification,
  notifichePosition,
  notificheTop,
  notificheLeft,
}) => {
  const notificheStyle: CSSProperties = useMemo(() => {
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
