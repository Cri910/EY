import { useMemo } from "react";
import SocialIcons from "./SocialIcons";
import styles from "./ContainerCard.module.css";

const ContainerCard = ({
  dimension,
  dimensionText,
  dimensionValue,
  dimensionCode,
  frameWidth,
  frameMarginTop,
}) => {
  const frameStyle = useMemo(() => {
    return {
      width: frameWidth,
      marginTop: frameMarginTop,
    };
  }, [frameWidth, frameMarginTop]);

  return (
    <div className={styles.frame}>
      <div className={styles.frame} style={frameStyle}>
        <div className={styles.seguiLeNostreContainer}>
          <p className={styles.seguiLeNostre}>Segui le nostre</p>
          <p className={styles.seguiLeNostre}>{`pagine social `}</p>
        </div>
        <SocialIcons
          clipPathGroup="/clip-path-group1@2x.png"
          vector="/vector3@2x.png"
          vector1="/vector4@2x.png"
          vector2="/vector5@2x.png"
          socialIconsPosition="unset"
          socialIconsTop="unset"
          socialIconsLeft="unset"
        />
      </div>
    </div>
  );
};

export default ContainerCard;
