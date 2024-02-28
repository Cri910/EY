import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ContainerForm from "./ContainerForm";
import styles from "./MenuLateraleHome.module.css";

export type MenuLateraleHomeType = {
  dashboard?: string;

  /** Style props */
  menuLateraleHomePosition?: CSSProperties["position"];
  menuLateraleHomeTop?: CSSProperties["top"];
  menuLateraleHomeLeft?: CSSProperties["left"];
};

const MenuLateraleHome: FunctionComponent<MenuLateraleHomeType> = ({
  dashboard,
  menuLateraleHomePosition,
  menuLateraleHomeTop,
  menuLateraleHomeLeft,
}) => {
  const menuLateraleHomeStyle: CSSProperties = useMemo(() => {
    return {
      position: menuLateraleHomePosition,
      top: menuLateraleHomeTop,
      left: menuLateraleHomeLeft,
    };
  }, [menuLateraleHomePosition, menuLateraleHomeTop, menuLateraleHomeLeft]);

  return (
    <div className={styles.menuLateraleHome} style={menuLateraleHomeStyle}>
      <div className={styles.vuesaxboldhomeParent}>
        <img
          className={styles.vuesaxboldhomeIcon}
          alt=""
          src="/vuesaxboldhome.svg"
        />
        <div className={styles.home}>Home</div>
      </div>
      <ContainerForm productCode="/dashboard.svg" />
      <div className={styles.ellipseParent}>
        <div className={styles.groupChild} />
        <div className={styles.div}>4</div>
      </div>
    </div>
  );
};

export default MenuLateraleHome;
