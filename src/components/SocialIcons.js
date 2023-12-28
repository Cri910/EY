import { useMemo } from "react";
import styles from "./SocialIcons.module.css";

const SocialIcons = ({
  clipPathGroup,
  vector,
  vector1,
  vector2,
  socialIconsPosition,
  socialIconsTop,
  socialIconsLeft,
}) => {
  const socialIconsStyle = useMemo(() => {
    return {
      position: socialIconsPosition,
      top: socialIconsTop,
      left: socialIconsLeft,
    };
  }, [socialIconsPosition, socialIconsTop, socialIconsLeft]);

  return (
    <div className={styles.socialIcons} style={socialIconsStyle}>
      <img className={styles.clipPathGroup} alt="" src={clipPathGroup} />
      <img className={styles.clipPathGroup} alt="" src={vector} />
      <img className={styles.vectorIcon1} alt="" src={vector1} />
      <img className={styles.vectorIcon2} alt="" src={vector2} />
    </div>
  );
};

export default SocialIcons;
