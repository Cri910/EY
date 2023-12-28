import { FunctionComponent } from "react";
import styles from "./SocialIcons.module.css";

type SocialIconsType = {
  clipPathGroup?: string;
  vector?: string;
  vector1?: string;
  vector2?: string;
};

const SocialIcons: FunctionComponent<SocialIconsType> = ({
  clipPathGroup,
  vector,
  vector1,
  vector2,
}) => {
  return (
    <div className={styles.socialIcons}>
      <img className={styles.clipPathGroup} alt="" src={clipPathGroup} />
      <img className={styles.clipPathGroup} alt="" src={vector} />
      <img className={styles.vectorIcon1} alt="" src={vector1} />
      <img className={styles.vectorIcon2} alt="" src={vector2} />
    </div>
  );
};

export default SocialIcons;
