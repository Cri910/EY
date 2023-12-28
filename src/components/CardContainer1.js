import styles from "./CardContainer1.module.css";

const CardContainer1 = ({ dimensionLabel }) => {
  return (
    <div className={styles.card1}>
      <div className={styles.card11}>
        <img
          className={styles.rectangle151}
          alt=""
          src="/rectangle-15-1@2x.png"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.h22m}>10H : 22M : 26S</div>
            <img
              className={styles.vuesaxboldclockIcon}
              alt=""
              src="/vuesaxboldclock@2x.png"
            />
          </div>
        </div>
        <div className={styles.loremIpsumParent}>
          <div className={styles.loremIpsum}>Lorem Ipsum</div>
          <div className={styles.soroushnrz7}>@SOROUSHNRZ7</div>
        </div>
        <img className={styles.card1Child} alt="" src={dimensionLabel} />
      </div>
    </div>
  );
};

export default CardContainer1;
