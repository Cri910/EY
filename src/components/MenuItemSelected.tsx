import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MenuItemSelected.module.css";

export type MenuItemSelectedType = {
  vuesaxoutlinesetting2?: string;
  vuesaxoutlinemessage?: string;
  messaggi?: string;

  /** Style props */
  menuItemSelectedPosition?: CSSProperties["position"];
  menuItemSelectedTop?: CSSProperties["top"];
  menuItemSelectedLeft?: CSSProperties["left"];
  menuItemSelectedHeight?: CSSProperties["height"];
};

const MenuItemSelected: FunctionComponent<MenuItemSelectedType> = ({
  vuesaxoutlinesetting2,
  vuesaxoutlinemessage,
  messaggi,
  menuItemSelectedPosition,
  menuItemSelectedTop,
  menuItemSelectedLeft,
  menuItemSelectedHeight,
}) => {
  const menuItemSelectedStyle: CSSProperties = useMemo(() => {
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
