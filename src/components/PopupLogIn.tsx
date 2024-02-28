import { FunctionComponent, useMemo, type CSSProperties } from "react";
import PasswordInputContainer from "./PasswordInputContainer";
import styles from "./PopupLogIn.module.css";

export type PopupLogInType = {
  google?: string;
  group52?: string;
  group51?: string;
  rectangle17?: string;
  rectangle171?: string;
  iconsxCircle?: string;

  /** Style props */
  popupLogInPosition?: CSSProperties["position"];
  popupLogInTop?: CSSProperties["top"];
  popupLogInLeft?: CSSProperties["left"];
};

const PopupLogIn: FunctionComponent<PopupLogInType> = ({
  google,
  group52,
  group51,
  rectangle17,
  rectangle171,
  iconsxCircle,
  popupLogInPosition,
  popupLogInTop,
  popupLogInLeft,
}) => {
  const popupLogInStyle: CSSProperties = useMemo(() => {
    return {
      position: popupLogInPosition,
      top: popupLogInTop,
      left: popupLogInLeft,
    };
  }, [popupLogInPosition, popupLogInTop, popupLogInLeft]);

  return (
    <div className={styles.popupLogIn} style={popupLogInStyle}>
      <div className={styles.popupLogInChild} />
      <div className={styles.noAccountRegistratiWrapper}>
        <div className={styles.noAccountRegistratiContainer}>
          <p className={styles.noAccount}>No Account?</p>
          <p className={styles.registrati}>Registrati</p>
        </div>
      </div>
      <div className={styles.login}>Login</div>
      <div className={styles.socialLogin}>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img className={styles.googleIcon} alt="" src={google} />
            <div className={styles.loginWithGoogle}>Login with Google</div>
          </div>
          <img className={styles.groupItem} alt="" src={group52} />
          <img className={styles.groupInner} alt="" src={group51} />
        </div>
      </div>
      <PasswordInputContainer
        inputLabel="Inserisci username o indirizzo email"
        inputPlaceholder="/rectangle-17@2x.png"
        loginInputText="Username o indirizzo email"
        propTop="40.03%"
        propBottom="45.75%"
      />
      <PasswordInputContainer
        inputLabel="Inserisci la tua password"
        inputPlaceholder="/rectangle-17@2x.png"
        loginInputText="Password"
      />
      <div className={styles.passwordDimenticata}>Password dimenticata</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.accedi}>Accedi</div>
      </div>
      <img className={styles.iconsxCircle} alt="" src={iconsxCircle} />
    </div>
  );
};

export default PopupLogIn;
