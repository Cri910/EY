import { useMemo } from "react";
import styles from "./PasswordForm.module.css";

const PasswordForm = ({ passwordFieldNames, propTop, propTop1 }) => {
  const nameStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const frameDivStyle = useMemo(() => {
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
