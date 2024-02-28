import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./LogoutButton.module.css";

export type LogoutButtonType = {
  vuesaxlinearlogout?: string;

  /** Style props */
  logoutButtonPosition?: CSSProperties["position"];
  logoutButtonTop?: CSSProperties["top"];
  logoutButtonLeft?: CSSProperties["left"];
  logoutButtonFlexShrink?: CSSProperties["flexShrink"];
  logoutButtonHeight?: CSSProperties["height"];
  logoutButtonMarginLeft?: CSSProperties["marginLeft"];
};

const LogoutButton: FunctionComponent<LogoutButtonType> = ({
  vuesaxlinearlogout,
  logoutButtonPosition,
  logoutButtonTop,
  logoutButtonLeft,
  logoutButtonFlexShrink,
  logoutButtonHeight,
  logoutButtonMarginLeft,
}) => {
  const logoutButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: logoutButtonPosition,
      top: logoutButtonTop,
      left: logoutButtonLeft,
      flexShrink: logoutButtonFlexShrink,
      height: logoutButtonHeight,
      marginLeft: logoutButtonMarginLeft,
    };
  }, [
    logoutButtonPosition,
    logoutButtonTop,
    logoutButtonLeft,
    logoutButtonFlexShrink,
    logoutButtonHeight,
    logoutButtonMarginLeft,
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
