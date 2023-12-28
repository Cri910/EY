import styles from "./Container.module.css";

const Container = () => {
  return (
    <div className={styles.menuItemSelected}>
      <img
        className={styles.vuesaxoutlinesetting2Icon}
        alt=""
        src="/vuesaxoutlinesetting2@2x.png"
      />
      <img
        className={styles.vuesaxoutlinesetting2Icon}
        alt=""
        src="/vuesaxoutlinemessage@2x.png"
      />
      <div className={styles.messaggi}>Impostazioni</div>
    </div>
  );
};

export default Container;
