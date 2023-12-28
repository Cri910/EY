import { useMemo } from "react";
import ContainerForm from "./ContainerForm";
import styles from "./MenuLateraleHome.module.css";

const MenuLateraleHome = ({
  dashboard,
  menuLateraleHomePosition,
  menuLateraleHomeTop,
  menuLateraleHomeLeft,
}) => {
  const menuLateraleHomeStyle = useMemo(() => {
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
          src="/vuesaxboldhome@2x.png"
        />
        <div className={styles.home}>Home</div>
      </div>
      <ContainerForm productCode="/dashboard@2x.png" />
      <div className={styles.ellipseParent}>
        <div className={styles.groupChild} />
        <div className={styles.div}>4</div>
      </div>
    </div>
  );
};

export default MenuLateraleHome;
