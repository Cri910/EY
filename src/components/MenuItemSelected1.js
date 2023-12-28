import { useMemo } from "react";
import styles from "./MenuItemSelected1.module.css";

const MenuItemSelected1 = ({
  vuesaxoutlinemessage,
  menuItemSelectedPosition,
  menuItemSelectedTop,
  menuItemSelectedLeft,
  menuItemSelectedHeight,
}) => {
  const menuItemSelectedStyle = useMemo(() => {
    return {
      position: menuItemSelectedPosition,
      top: menuItemSelectedTop,
      left: menuItemSelectedLeft,
      height: menuItemSelectedHeight,
    };
  }, [
    menuItemSelectedPosition,
    menuItemSelectedTop,
    menuItemSelectedLeft,
    menuItemSelectedHeight,
  ]);

  return (
    <div className={styles.menuItemSelected} style={menuItemSelectedStyle}>
      <img
        className={styles.vuesaxoutlinemessageIcon}
        alt=""
        src={vuesaxoutlinemessage}
      />
      <div className={styles.messaggi}>Messaggi</div>
    </div>
  );
};

export default MenuItemSelected1;
