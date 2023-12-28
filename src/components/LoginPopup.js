import { useMemo } from "react";
import PopupLogIn from "./PopupLogIn";
import styles from "./LoginPopup.module.css";

const LoginPopup = ({
  google,
  group52,
  group51,
  rectangle17,
  rectangle171,
  iconsxCircle,
  loginPopupPosition,
  loginPopupTop,
  loginPopupLeft,
}) => {
  const loginPopupStyle = useMemo(() => {
    return {
      position: loginPopupPosition,
      top: loginPopupTop,
      left: loginPopupLeft,
    };
  }, [loginPopupPosition, loginPopupTop, loginPopupLeft]);

  return (
    <div className={styles.loginPopup} style={loginPopupStyle}>
      <PopupLogIn
        google="/google@2x.png"
        group52="/group-52@2x.png"
        group51="/group-51@2x.png"
        rectangle17="/rectangle-17@2x.png"
        rectangle171="/rectangle-17@2x.png"
        iconsxCircle="/iconsxcircle@2x.png"
        popupLogInPosition="absolute"
        popupLogInTop="0px"
        popupLogInLeft="calc(50% - 273px)"
      />
    </div>
  );
};

export default LoginPopup;
