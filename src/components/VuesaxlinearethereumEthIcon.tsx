import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./VuesaxlinearethereumEthIcon.module.css";

export type VuesaxlinearethereumEthIconType = {
  vuesaxlinearethereumEthIc?: string;

  /** Style props */
  vuesaxlinearethereumEthIcWidth?: CSSProperties["width"];
  vuesaxlinearethereumEthIcHeight?: CSSProperties["height"];
  vuesaxlinearethereumEthIcPosition?: CSSProperties["position"];
  vuesaxlinearethereumEthIcTop?: CSSProperties["top"];
  vuesaxlinearethereumEthIcLeft?: CSSProperties["left"];
};

const VuesaxlinearethereumEthIcon: FunctionComponent<
  VuesaxlinearethereumEthIconType
> = ({
  vuesaxlinearethereumEthIc,
  vuesaxlinearethereumEthIcWidth,
  vuesaxlinearethereumEthIcHeight,
  vuesaxlinearethereumEthIcPosition,
  vuesaxlinearethereumEthIcTop,
  vuesaxlinearethereumEthIcLeft,
}) => {
  const vuesaxlinearethereumEthIconStyle: CSSProperties = useMemo(() => {
    return {
      width: vuesaxlinearethereumEthIcWidth,
      height: vuesaxlinearethereumEthIcHeight,
      position: vuesaxlinearethereumEthIcPosition,
      top: vuesaxlinearethereumEthIcTop,
      left: vuesaxlinearethereumEthIcLeft,
    };
  }, [
    vuesaxlinearethereumEthIcWidth,
    vuesaxlinearethereumEthIcHeight,
    vuesaxlinearethereumEthIcPosition,
    vuesaxlinearethereumEthIcTop,
    vuesaxlinearethereumEthIcLeft,
  ]);

  return (
    <img
      className={styles.vuesaxlinearethereumEthIcon}
      alt=""
      src={vuesaxlinearethereumEthIc}
      style={vuesaxlinearethereumEthIconStyle}
    />
  );
};

export default VuesaxlinearethereumEthIcon;
