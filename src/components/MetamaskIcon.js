import { useMemo } from "react";
import styles from "./MetamaskIcon.module.css";

const MetamaskIcon = ({
  metamaskIconMetamask,
  metamaskIconWidth,
  metamaskIconHeight,
  metamaskIconPosition,
  metamaskIconTop,
  metamaskIconRight,
}) => {
  const metamaskIconStyle = useMemo(() => {
    return {
      width: metamaskIconWidth,
      height: metamaskIconHeight,
      position: metamaskIconPosition,
      top: metamaskIconTop,
      right: metamaskIconRight,
    };
  }, [
    metamaskIconWidth,
    metamaskIconHeight,
    metamaskIconPosition,
    metamaskIconTop,
    metamaskIconRight,
  ]);

  return (
    <img
      className={styles.metamaskIcon}
      alt=""
      src={metamaskIconMetamask}
      style={metamaskIconStyle}
    />
  );
};

export default MetamaskIcon;
