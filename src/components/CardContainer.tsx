import { FunctionComponent } from "react";
import styles from "./CardContainer.module.css";

const CardContainer: FunctionComponent = () => {
  return (
    <div className={styles.card3}>
      <img
        className={styles.rectangle151}
        alt=""
        src="/rectangle-15-1@2x.png"
      />
      <div className={styles.card3Child} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.h22m}>10H : 22M : 26S</div>
        <img
          className={styles.vuesaxboldclockIcon}
          alt=""
          src="/vuesaxboldclock.svg"
        />
      </div>
      <div className={styles.loremIpsumParent}>
        <div className={styles.loremIpsum}>Lorem Ipsum</div>
        <div className={styles.soroushnrz7}>@SOROUSHNRZ7</div>
      </div>
    </div>
  );
};

export default CardContainer;
