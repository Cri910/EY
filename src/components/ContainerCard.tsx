import { FunctionComponent, useMemo, type CSSProperties } from "react";
import SocialIcons from "./SocialIcons";
import styles from "./ContainerCard.module.css";

type ContainerCardType = {
  dimension?: string;
  dimensionText?: string;
  dimensionValue?: string;
  dimensionCode?: string;

  /** Style props */
  frameWidth?: CSSProperties["width"];
  frameMarginTop?: CSSProperties["marginTop"];
};

const ContainerCard: FunctionComponent<ContainerCardType> = ({
  dimension,
  dimensionText,
  dimensionValue,
  dimensionCode,
  frameWidth,
  frameMarginTop,
}) => {
  const frameStyle: CSSProperties = useMemo(() => {
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
        />
      </div>
    </div>
  );
};

export default ContainerCard;
