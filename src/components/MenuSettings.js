import { useMemo } from "react";
import FormContainer2 from "./FormContainer2";
import MenuItemSelected from "./MenuItemSelected";
import styles from "./MenuSettings.module.css";

const MenuSettings = ({
  vuesaxlineardiamonds,
  vuesaxlinearwallet,
  vuesaxoutlinesetting2,
  vuesaxoutlineinfoCircle,
  dashboard,
  vuesaxoutlinemessage,
  vuesaxboldhome,
  vuesaxoutlinesetting21,
  vuesaxoutlinemessage1,
  menuSettingsPosition,
  menuSettingsTop,
  menuSettingsLeft,
}) => {
  const menuSettingsStyle = useMemo(() => {
    return {
      position: menuSettingsPosition,
      top: menuSettingsTop,
      left: menuSettingsLeft,
    };
  }, [menuSettingsPosition, menuSettingsTop, menuSettingsLeft]);

  return (
    <div className={styles.menuSettings} style={menuSettingsStyle}>
      <div className={styles.menuLateraleParent}>
        <FormContainer2
          iconId="/vuesaxlineardiamonds@2x.png"
          iconCode="/vuesaxlinearwallet@2x.png"
          iconSize="/vuesaxoutlinesetting2@2x.png"
          iconIdentifier="/vuesaxoutlineinfocircle@2x.png"
          iconImageUrl="/dashboard@2x.png"
          iconTextId="/vuesaxoutlinemessage@2x.png"
          iconText="/vuesaxboldhome@2x.png"
          menuLateraleHeight="452.4px"
          menuLateralePosition="absolute"
          menuLateraleTop="0px"
          menuLateraleLeft="16px"
        />
        <MenuItemSelected
          vuesaxoutlinesetting2="/vuesaxoutlinesetting2@2x.png"
          vuesaxoutlinemessage="/vuesaxoutlinemessage@2x.png"
          messaggi="Impostazioni"
          menuItemSelectedPosition="absolute"
          menuItemSelectedTop="254.4px"
          menuItemSelectedLeft="0px"
          menuItemSelectedHeight="65.1px"
        />
      </div>
    </div>
  );
};

export default MenuSettings;
