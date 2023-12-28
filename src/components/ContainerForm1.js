import { useMemo } from "react";
import styles from "./ContainerForm1.module.css";

const ContainerForm1 = ({ dimensionLabel, propTop, propLeft }) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.rectangleParent} style={rectangleDivStyle}>
      <div className={styles.componentChild} />
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild} />
        <div className={styles.h22m}>10H : 22M : 26S</div>
        <img
          className={styles.vuesaxboldclockIcon}
          alt=""
          src={dimensionLabel}
        />
      </div>
    </div>
  );
};

export default ContainerForm1;
