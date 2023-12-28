import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./LogoutButton.module.css";

type LogoutButtonType = {
  vuesaxlinearlogout?: string;

  /** Style props */
  logoutButtonPosition?: CSSProperties["position"];
  logoutButtonTop?: CSSProperties["top"];
  logoutButtonLeft?: CSSProperties["left"];
  logoutButtonFlexShrink?: CSSProperties["flexShrink"];
};

const LogoutButton: FunctionComponent<LogoutButtonType> = ({
  vuesaxlinearlogout,
  logoutButtonPosition,
  logoutButtonTop,
  logoutButtonLeft,
  logoutButtonFlexShrink,
}) => {
  const logoutButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: logoutButtonPosition,
      top: logoutButtonTop,
      left: logoutButtonLeft,
      flexShrink: logoutButtonFlexShrink,
    };
  }, [
    logoutButtonPosition,
    logoutButtonTop,
    logoutButtonLeft,
    logoutButtonFlexShrink,
  ]);

  return (
    <div className={styles.logoutButton} style={logoutButtonStyle}>
      <img
        className={styles.vuesaxlinearlogoutIcon}
        alt=""
        src={vuesaxlinearlogout}
      />
      <div className={styles.logOut}>Log out</div>
    </div>
  );
};

export default LogoutButton;
