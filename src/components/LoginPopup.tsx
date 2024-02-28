import { FunctionComponent, useMemo, type CSSProperties } from "react";
import PopupLogIn from "./PopupLogIn";
import styles from "./LoginPopup.module.css";

export type LoginPopupType = {
  google?: string;
  group52?: string;
  group51?: string;
  rectangle17?: string;
  rectangle171?: string;
  iconsxCircle?: string;

  /** Style props */
  loginPopupPosition?: CSSProperties["position"];
  loginPopupTop?: CSSProperties["top"];
  loginPopupLeft?: CSSProperties["left"];
};

const LoginPopup: FunctionComponent<LoginPopupType> = ({
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
  const loginPopupStyle: CSSProperties = useMemo(() => {
    return {
      position: loginPopupPosition,
      top: loginPopupTop,
      left: loginPopupLeft,
    };
  }, [loginPopupPosition, loginPopupTop, loginPopupLeft]);

  return (
    <div className={styles.loginPopup} style={loginPopupStyle}>
      <PopupLogIn
        google="/google.svg"
        group52="/group-52.svg"
        group51="/group-51.svg"
        rectangle17="/rectangle-17@2x.png"
        rectangle171="/rectangle-17@2x.png"
        iconsxCircle="/iconsxcircle.svg"
        popupLogInPosition="absolute"
        popupLogInTop="0px"
        popupLogInLeft="calc(50% - 273px)"
      />
    </div>
  );
};

export default LoginPopup;
