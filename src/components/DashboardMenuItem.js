import { useMemo } from "react";
import styles from "./DashboardMenuItem.module.css";

const DashboardMenuItem = ({
  dashboard,
  dashboardMenuItemPosition,
  dashboardMenuItemFlexShrink,
}) => {
  const dashboardMenuItemStyle = useMemo(() => {
    return {
      position: dashboardMenuItemPosition,
      flexShrink: dashboardMenuItemFlexShrink,
    };
  }, [dashboardMenuItemPosition, dashboardMenuItemFlexShrink]);

  return (
    <div className={styles.dashboardMenuItem} style={dashboardMenuItemStyle}>
      <img className={styles.dashboardIcon} alt="" src={dashboard} />
      <div className={styles.dashboard}>Dashboard</div>
    </div>
  );
};

export default DashboardMenuItem;
