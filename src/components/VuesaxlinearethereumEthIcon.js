import { useMemo } from "react";
import styles from "./VuesaxlinearethereumEthIcon.module.css";

const VuesaxlinearethereumEthIcon = ({
  vuesaxlinearethereumEthIc,
  vuesaxlinearethereumEthIcWidth,
  vuesaxlinearethereumEthIcHeight,
  vuesaxlinearethereumEthIcPosition,
  vuesaxlinearethereumEthIcTop,
  vuesaxlinearethereumEthIcLeft,
}) => {
  const vuesaxlinearethereumEthIconStyle = useMemo(() => {
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
