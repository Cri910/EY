import styles from "./Group.module.css";

const Group = () => {
  return (
    <div className={styles.ellipseParent}>
      <div className={styles.groupChild} />
      <div className={styles.div}>4</div>
    </div>
  );
};

export default Group;
