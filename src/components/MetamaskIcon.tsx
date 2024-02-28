import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MetamaskIcon.module.css";

export type MetamaskIconType = {
  metamaskIconMetamask?: string;

  /** Style props */
  metamaskIconWidth?: CSSProperties["width"];
  metamaskIconHeight?: CSSProperties["height"];
  metamaskIconPosition?: CSSProperties["position"];
  metamaskIconTop?: CSSProperties["top"];
  metamaskIconRight?: CSSProperties["right"];
};

const MetamaskIcon: FunctionComponent<MetamaskIconType> = ({
  metamaskIconMetamask,
  metamaskIconWidth,
  metamaskIconHeight,
  metamaskIconPosition,
  metamaskIconTop,
  metamaskIconRight,
}) => {
  const metamaskIconStyle: CSSProperties = useMemo(() => {
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
