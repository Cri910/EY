import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MenuItemSelected1.module.css";

export type MenuItemSelected1Type = {
  vuesaxoutlinemessage?: string;

  /** Style props */
  menuItemSelectedPosition?: CSSProperties["position"];
  menuItemSelectedTop?: CSSProperties["top"];
  menuItemSelectedLeft?: CSSProperties["left"];
  menuItemSelectedHeight?: CSSProperties["height"];
};

const MenuItemSelected1: FunctionComponent<MenuItemSelected1Type> = ({
  vuesaxoutlinemessage,
  menuItemSelectedPosition,
  menuItemSelectedTop,
  menuItemSelectedLeft,
  menuItemSelectedHeight,
}) => {
  const menuItemSelected1Style: CSSProperties = useMemo(() => {
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
        className={styles.vuesaxoutlinemessageIcon}
        alt=""
        src={vuesaxoutlinemessage}
      />
      <div className={styles.messaggi}>Messaggi</div>
    </div>
  );
};

export default MenuItemSelected1;
