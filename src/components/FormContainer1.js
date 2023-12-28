import styles from "./FormContainer1.module.css";

const FormContainer1 = () => {
  return (
    <div className={styles.card}>
      <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
      <div className={styles.cardChild} />
      <div className={styles.frameParent}>
        <div className={styles.frame}>
          <div className={styles.nomeGiocatore}>{`NOME GIOCATORE     `}</div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.h22m}>@SOROUSHNRZ7</div>
        </div>
      </div>
      <div className={styles.vuesaxboldclockParent}>
        <img
          className={styles.vuesaxboldclockIcon}
          alt=""
          src="/vuesaxboldclock@2x.png"
        />
        <div className={styles.h22m}>10H : 22M : 26S</div>
      </div>
    </div>
  );
};

export default FormContainer1;
