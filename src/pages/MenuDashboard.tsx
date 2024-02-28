import { FunctionComponent } from "react";
import HomeCard1 from "../components/HomeCard1";
import styles from "./MenuDashboard.module.css";

const MenuDashboard: FunctionComponent = () => {
  return (
    <div className={styles.menuDashboard}>
      <HomeCard1 />
    </div>
  );
};

export default MenuDashboard;
