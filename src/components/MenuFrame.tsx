import { FunctionComponent } from "react";
import Logo from "./Logo";
import MenuNotLog1 from "./MenuNotLog1";
import styles from "./MenuFrame.module.css";

const MenuFrame: FunctionComponent = () => {
  return (
    <div className={styles.menuFrame}>
      <div className={styles.menuFrameChild} />
      <div className={styles.homeLogo}>
        <Logo />
      </div>
      <div className={styles.accediButton}>
        <MenuNotLog1 />
        <MenuNotLog1
          menuvuesaxMarginTop="-512px"
          contattiTop="unset"
          contattiPosition="unset"
        />
      </div>
    </div>
  );
};

export default MenuFrame;
