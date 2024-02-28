import { FunctionComponent } from "react";
import styles from "./Group.module.css";

const Group: FunctionComponent = () => {
  return (
    <div className={styles.ellipseParent}>
      <div className={styles.groupChild} />
      <div className={styles.div}>4</div>
    </div>
  );
};

export default Group;
