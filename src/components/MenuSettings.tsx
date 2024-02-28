import { FunctionComponent, useMemo, type CSSProperties } from "react";
import FormContainer2 from "./FormContainer2";
import MenuItemSelected from "./MenuItemSelected";
import styles from "./MenuSettings.module.css";

export type MenuSettingsType = {
  vuesaxlineardiamonds?: string;
  vuesaxlinearwallet?: string;
  vuesaxoutlinesetting2?: string;
  vuesaxoutlineinfoCircle?: string;
  dashboard?: string;
  vuesaxoutlinemessage?: string;
  vuesaxboldhome?: string;
  vuesaxoutlinesetting21?: string;
  vuesaxoutlinemessage1?: string;

  /** Style props */
  menuSettingsPosition?: CSSProperties["position"];
  menuSettingsTop?: CSSProperties["top"];
  menuSettingsLeft?: CSSProperties["left"];
};

const MenuSettings: FunctionComponent<MenuSettingsType> = ({
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
  const menuSettingsStyle: CSSProperties = useMemo(() => {
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
          iconId="/vuesaxlineardiamonds.svg"
          iconCode="/vuesaxlinearwallet.svg"
          iconSize="/vuesaxoutlinesetting2.svg"
          iconIdentifier="/vuesaxoutlineinfocircle.svg"
          iconImageUrl="/dashboard.svg"
          iconTextId="/vuesaxoutlinemessage.svg"
          iconText="/vuesaxboldhome.svg"
          menuLateraleHeight="452.4px"
          menuLateralePosition="absolute"
          menuLateraleTop="0px"
          menuLateraleLeft="16px"
        />
        <MenuItemSelected
          vuesaxoutlinesetting2="/vuesaxoutlinesetting2.svg"
          vuesaxoutlinemessage="/vuesaxoutlinemessage.svg"
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
