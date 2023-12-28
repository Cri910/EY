import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.barraDiRicerca}>
      <div className={styles.barraDiRicercaChild} />
      <div className={styles.cerca}>Cerca</div>
      <img
        className={styles.vuesaxlinearsearchNormalIcon}
        alt=""
        src="/vuesaxlinearsearchnormal@2x.png"
      />
    </div>
  );
};

export default Footer;
