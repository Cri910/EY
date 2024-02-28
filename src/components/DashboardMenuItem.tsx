import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DashboardMenuItem.module.css";

export type DashboardMenuItemType = {
  dashboard?: string;

  /** Style props */
  dashboardMenuItemPosition?: CSSProperties["position"];
  dashboardMenuItemFlexShrink?: CSSProperties["flexShrink"];
};

const DashboardMenuItem: FunctionComponent<DashboardMenuItemType> = ({
  dashboard,
  dashboardMenuItemPosition,
  dashboardMenuItemFlexShrink,
}) => {
  const dashboardMenuItemStyle: CSSProperties = useMemo(() => {
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
