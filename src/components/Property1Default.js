import { useMemo } from "react";
import styles from "./Property1Default.module.css";

const Property1Default = ({
  rectangle151,
  vuesaxboldclock,
  frame22,
  showRectangleDiv,
  showFrameDiv,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <img className={styles.rectangle151} alt="" src={rectangle151} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.h22m}>10H : 22M : 26S</div>
        <img
          className={styles.vuesaxboldclockIcon}
          alt=""
          src={vuesaxboldclock}
        />
      </div>
      {showRectangleDiv && <div className={styles.property1defaultChild} />}
      {showFrameDiv && (
        <div className={styles.dModel11Parent}>
          <div className={styles.dModel11}>3D MODEL #11</div>
          <div className={styles.soroushnrz7}>@SOROUSHNRZ7</div>
        </div>
      )}
      <img className={styles.property1defaultItem} alt="" src={frame22} />
    </div>
  );
};

export default Property1Default;
