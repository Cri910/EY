import { FunctionComponent } from "react";
import MenuLateraleHome from "/";
import styles from "./MenuLaterale.module.css";

const MenuLaterale: FunctionComponent = () => {
  return (
    <div className={styles.menuLaterale}>
      <MenuLateraleHome
        dashboard="/dashboard.svg"
        menuLateraleHomePosition="absolute"
        menuLateraleHomeTop="0px"
        menuLateraleHomeLeft="0px"
      />
    </div>
  );
};

export default MenuLaterale;
