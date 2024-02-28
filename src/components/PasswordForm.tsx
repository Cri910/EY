import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PasswordForm.module.css";

export type PasswordFormType = {
  passwordFieldNames?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propTop1?: CSSProperties["top"];
};

const PasswordForm: FunctionComponent<PasswordFormType> = ({
  passwordFieldNames,
  propTop,
  propTop1,
}) => {
  const nameStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  return (
    <div className={styles.name} style={nameStyle}>
      <div className={styles.fullName}>{passwordFieldNames}</div>
      <div className={styles.wrapper} style={frameDivStyle}>
        <div className={styles.div}>************</div>
      </div>
    </div>
  );
};

export default PasswordForm;
