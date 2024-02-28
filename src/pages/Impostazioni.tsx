import { FunctionComponent } from "react";
import styles from "./Impostazioni.module.css";

const Impostazioni: FunctionComponent = () => {
  return (
    <div className={styles.impostazioni}>
      <img
        className={styles.vuesaxoutlinesetting2Icon}
        alt=""
        src="/vuesaxoutlinesetting2.svg"
      />
      <div className={styles.impostazioni1}>Impostazioni</div>
    </div>
  );
};

export default Impostazioni;
