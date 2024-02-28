import { FunctionComponent, useMemo, type CSSProperties } from "react";
import MenuItemSelected1 from "./MenuItemSelected1";
import MenuLaterale1 from "./MenuLaterale1";
import styles from "./MenuMessaggi.module.css";

export type MenuMessaggiType = {
  vuesaxoutlinemessage?: string;
  vuesaxlineardiamonds?: string;
  vuesaxlinearwallet?: string;
  vuesaxoutlinesetting2?: string;
  vuesaxoutlineinfoCircle?: string;
  dashboard?: string;
  vuesaxboldhome?: string;

  /** Style props */
  menuMessaggiPosition?: CSSProperties["position"];
  menuMessaggiTop?: CSSProperties["top"];
  menuMessaggiLeft?: CSSProperties["left"];
};

const MenuMessaggi: FunctionComponent<MenuMessaggiType> = ({
  vuesaxoutlinemessage,
  vuesaxlineardiamonds,
  vuesaxlinearwallet,
  vuesaxoutlinesetting2,
  vuesaxoutlineinfoCircle,
  dashboard,
  vuesaxboldhome,
  menuMessaggiPosition,
  menuMessaggiTop,
  menuMessaggiLeft,
}) => {
  const menuMessaggiStyle: CSSProperties = useMemo(() => {
    return {
      position: menuMessaggiPosition,
      top: menuMessaggiTop,
      left: menuMessaggiLeft,
    };
  }, [menuMessaggiPosition, menuMessaggiTop, menuMessaggiLeft]);

  return (
    <div className={styles.menuMessaggi} style={menuMessaggiStyle}>
      <MenuItemSelected1
        vuesaxoutlinemessage="/vuesaxoutlinemessage.svg"
        menuItemSelectedPosition="absolute"
        menuItemSelectedTop="273px"
        menuItemSelectedLeft="4px"
        menuItemSelectedHeight="65px"
      />
      <div className={styles.ellipseParent}>
        <div className={styles.groupChild} />
        <div className={styles.div}>4</div>
      </div>
      <MenuLaterale1
        vuesaxlineardiamonds="/vuesaxlineardiamonds.svg"
        vuesaxlinearwallet="/vuesaxlinearwallet.svg"
        vuesaxoutlinesetting2="/vuesaxoutlinesetting2.svg"
        vuesaxoutlineinfoCircle="/vuesaxoutlineinfocircle.svg"
        dashboard="/dashboard.svg"
        vuesaxboldhome="/vuesaxboldhome.svg"
        menuLateraleHeight="459px"
        menuLateralePosition="absolute"
        menuLateraleTop="89.3px"
        menuLateraleLeft="22.5px"
      />
    </div>
  );
};

export default MenuMessaggi;
