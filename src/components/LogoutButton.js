import { useMemo } from "react";
import styles from "./LogoutButton.module.css";

const LogoutButton = ({
  vuesaxlinearlogout,
  logoutButtonPosition,
  logoutButtonTop,
  logoutButtonLeft,
  logoutButtonFlexShrink,
  logoutButtonHeight,
  logoutButtonMarginLeft,
}) => {
  const logoutButtonStyle = useMemo(() => {
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
