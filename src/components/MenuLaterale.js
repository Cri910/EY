import MenuLateraleHome from "./MenuLateraleHome";
import styles from "./MenuLaterale.module.css";

const MenuLaterale = () => {
  return (
    <div className={styles.menuLaterale}>
      <MenuLateraleHome
        dashboard="/dashboard@2x.png"
        menuLateraleHomePosition="absolute"
        menuLateraleHomeTop="0px"
        menuLateraleHomeLeft="0px"
      />
    </div>
  );
};

export default MenuLaterale;
