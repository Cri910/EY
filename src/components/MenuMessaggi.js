import { useMemo } from "react";
import MenuItemSelected1 from "./MenuItemSelected1";
import MenuLaterale1 from "./MenuLaterale1";
import styles from "./MenuMessaggi.module.css";

const MenuMessaggi = ({
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
  const menuMessaggiStyle = useMemo(() => {
    return {
      position: menuMessaggiPosition,
      top: menuMessaggiTop,
      left: menuMessaggiLeft,
    };
  }, [menuMessaggiPosition, menuMessaggiTop, menuMessaggiLeft]);

  return (
    <div className={styles.menuMessaggi} style={menuMessaggiStyle}>
      <MenuItemSelected1
        vuesaxoutlinemessage="/vuesaxoutlinemessage@2x.png"
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
        vuesaxlineardiamonds="/vuesaxlineardiamonds@2x.png"
        vuesaxlinearwallet="/vuesaxlinearwallet@2x.png"
        vuesaxoutlinesetting2="/vuesaxoutlinesetting2@2x.png"
        vuesaxoutlineinfoCircle="/vuesaxoutlineinfocircle@2x.png"
        dashboard="/dashboard@2x.png"
        vuesaxboldhome="/vuesaxboldhome@2x.png"
        menuLateraleHeight="459px"
        menuLateralePosition="absolute"
        menuLateraleTop="89.3px"
        menuLateraleLeft="22.5px"
      />
    </div>
  );
};

export default MenuMessaggi;
