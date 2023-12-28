import styles from "./ContainerCardForm.module.css";

const ContainerCardForm = ({ dimensionLabel }) => {
  return (
    <div className={styles.card2}>
      <img
        className={styles.rectangle151}
        alt=""
        src="/rectangle-15-11@2x.png"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.h22m}>10H : 22M : 26S</div>
        <img
          className={styles.vuesaxboldclockIcon}
          alt=""
          src="/vuesaxboldclock@2x.png"
        />
      </div>
      <div className={styles.card2Child} />
      <div className={styles.dModel11Parent}>
        <div className={styles.dModel11}>3D MODEL #11</div>
        <div className={styles.soroushnrz7}>@SOROUSHNRZ7</div>
      </div>
      <img className={styles.card2Item} alt="" src={dimensionLabel} />
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild} />
          <div className={styles.h22m}>10H : 22M : 26S</div>
          <img
            className={styles.vuesaxboldclockIcon}
            alt=""
            src="/vuesaxboldclock@2x.png"
          />
        </div>
      </div>
      <div className={styles.card2Inner} />
      <div className={styles.frameDiv}>
        <div className={styles.frameChild} />
        <div className={styles.h22m}>10H : 22M : 26S</div>
        <img
          className={styles.vuesaxboldclockIcon}
          alt=""
          src="/vuesaxboldclock@2x.png"
        />
      </div>
      <div className={styles.lionelMessiParent}>
        <div className={styles.lionelMessi}>Lionel Messi</div>
        <div className={styles.soroushnrz71}>@SOROUSHNRZ7</div>
      </div>
    </div>
  );
};

export default ContainerCardForm;
