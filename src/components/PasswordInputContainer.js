import { useMemo } from "react";
import styles from "./PasswordInputContainer.module.css";

const PasswordInputContainer = ({
  inputLabel,
  inputPlaceholder,
  loginInputText,
  propTop,
  propBottom,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  return (
    <div className={styles.enterYourPasswordParent} style={groupDivStyle}>
      <div className={styles.enterYourPassword}>{inputLabel}</div>
      <img className={styles.instanceChild} alt="" src={inputPlaceholder} />
      <div className={styles.password}>{loginInputText}</div>
    </div>
  );
};

export default PasswordInputContainer;
