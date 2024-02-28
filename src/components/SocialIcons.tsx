import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SocialIcons.module.css";

export type SocialIconsType = {
  clipPathGroup?: string;
  vector?: string;
  vector1?: string;
  vector2?: string;

  /** Style props */
  socialIconsPosition?: CSSProperties["position"];
  socialIconsTop?: CSSProperties["top"];
  socialIconsLeft?: CSSProperties["left"];
};

const SocialIcons: FunctionComponent<SocialIconsType> = ({
  clipPathGroup,
  vector,
  vector1,
  vector2,
  socialIconsPosition,
  socialIconsTop,
  socialIconsLeft,
}) => {
  const socialIconsStyle: CSSProperties = useMemo(() => {
    return {
      position: socialIconsPosition,
      top: socialIconsTop,
      left: socialIconsLeft,
    };
  }, [socialIconsPosition, socialIconsTop, socialIconsLeft]);

  return (
    <div className={styles.socialIcons} style={socialIconsStyle}>
      <img className={styles.clipPathGroup} alt="" src={clipPathGroup} />
      <img className={styles.vectorIcon} alt="" src={vector} />
      <img className={styles.vectorIcon1} alt="" src={vector1} />
      <img className={styles.vectorIcon2} alt="" src={vector2} />
    </div>
  );
};

export default SocialIcons;
