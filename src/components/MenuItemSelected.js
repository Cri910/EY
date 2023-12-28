import { useMemo } from "react";
import styles from "./MenuItemSelected.module.css";

const MenuItemSelected = ({
  vuesaxoutlinesetting2,
  vuesaxoutlinemessage,
  messaggi,
  menuItemSelectedPosition,
  menuItemSelectedTop,
  menuItemSelectedLeft,
  menuItemSelectedHeight,
}) => {
  const menuItemSelected1Style = useMemo(() => {
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
    <div className={styles.menuItemSelected} style={menuItemSelected1Style}>
      <img
        className={styles.vuesaxoutlinesetting2Icon}
        alt=""
        src={vuesaxoutlinesetting2}
      />
      <img
        className={styles.vuesaxoutlinemessageIcon}
        alt=""
        src={vuesaxoutlinemessage}
      />
      <div className={styles.messaggi}>{messaggi}</div>
    </div>
  );
};

export default MenuItemSelected;
