import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PasswordInputContainer.module.css";

export type PasswordInputContainerType = {
  inputLabel?: string;
  inputPlaceholder?: string;
  loginInputText?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propBottom?: CSSProperties["bottom"];
};

const PasswordInputContainer: FunctionComponent<PasswordInputContainerType> = ({
  inputLabel,
  inputPlaceholder,
  loginInputText,
  propTop,
  propBottom,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
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
