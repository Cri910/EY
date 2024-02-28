import { FunctionComponent, useMemo, type CSSProperties } from "react";
import SocialIcons from "./SocialIcons";
import styles from "./ContainerCard.module.css";

export type ContainerCardType = {
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
          <p className={styles.pagineSocial}>{`pagine social `}</p>
        </div>
        <SocialIcons
          clipPathGroup="/clip-path-group.svg"
          vector="/vector.svg"
          vector1="/vector.svg"
          vector2="/vector.svg"
          socialIconsPosition="unset"
          socialIconsTop="unset"
          socialIconsLeft="unset"
        />
      </div>
    </div>
  );
};

export default ContainerCard;
