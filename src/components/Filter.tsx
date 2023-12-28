import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Filter.module.css";

type FilterType = {
  group1000003500?: string;

  /** Style props */
  filterPosition?: CSSProperties["position"];
  filterTop?: CSSProperties["top"];
  filterLeft?: CSSProperties["left"];
  filterGap?: CSSProperties["gap"];
};

const Filter: FunctionComponent<FilterType> = ({
  group1000003500,
  filterPosition,
  filterTop,
  filterLeft,
  filterGap,
}) => {
  const filterStyle: CSSProperties = useMemo(() => {
    return {
      position: filterPosition,
      top: filterTop,
      left: filterLeft,
      gap: filterGap,
    };
  }, [filterPosition, filterTop, filterLeft, filterGap]);

  return (
    <div className={styles.filter} style={filterStyle}>
      <div className={styles.frame}>
        <img className={styles.frameChild} alt="" src={group1000003500} />
        <div className={styles.frameParent}>
          <div className={styles.frame1}>
            <div className={styles.frame2}>
              <div className={styles.frameItem} />
              <div className={styles.frameItem} />
            </div>
            <div className={styles.frame2}>
              <div className={styles.frameItem} />
              <div className={styles.frameItem} />
            </div>
          </div>
          <div className={styles.lineDiv} />
        </div>
      </div>
      <div className={styles.new139}>
        <span>{`New `}</span>
        <span className={styles.span}>(139)</span>
      </div>
    </div>
  );
};

export default Filter;
