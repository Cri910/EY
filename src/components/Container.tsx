import { FunctionComponent } from "react";
import styles from "./Container.module.css";

const Container: FunctionComponent = () => {
  return (
    <div className={styles.menuItemSelected}>
      <img
        className={styles.vuesaxoutlinesetting2Icon}
        alt=""
        src="/vuesaxoutlinesetting2.svg"
      />
      <img
        className={styles.vuesaxoutlinemessageIcon}
        alt=""
        src="/vuesaxoutlinemessage.svg"
      />
      <div className={styles.messaggi}>Impostazioni</div>
    </div>
  );
};

export default Container;
