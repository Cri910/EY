import { useMemo } from "react";
import styles from "./MonthlyEarnings.module.css";

const MonthlyEarnings = ({
  vector,
  group4,
  maskGroup,
  maskGroup1,
  vector1,
  vector2,
  monthlyEarningsPosition,
  monthlyEarningsTop,
  monthlyEarningsLeft,
}) => {
  const monthlyEarningsStyle = useMemo(() => {
    return {
      position: monthlyEarningsPosition,
      top: monthlyEarningsTop,
      left: monthlyEarningsLeft,
    };
  }, [monthlyEarningsPosition, monthlyEarningsTop, monthlyEarningsLeft]);

  return (
    <div className={styles.monthlyEarnings} style={monthlyEarningsStyle}>
      <div className={styles.monthlyEarningsChild} />
      <div className={styles.monthlyEarningsItem} />
      <div className={styles.monthlyEarningsInner} />
      <img className={styles.vectorIcon} alt="" src={vector} />
      <img className={styles.groupIcon} alt="" src={group4} />
      <div className={styles.guadagnoMensile}>Guadagno mensile</div>
      <div className={styles.gen}>Gen</div>
      <div className={styles.feb}>Feb</div>
      <div className={styles.mar}>Mar</div>
      <div className={styles.apr}>Apr</div>
      <div className={styles.mag}>Mag</div>
      <div className={styles.div}>+32.5%</div>
      <div className={styles.ultimiOrdini}>Ultimi ordini</div>
      <div className={styles.hi}>Hi</div>
      <div className={styles.federico}>Federico</div>
      <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
      <div className={styles.nickParent}>
        <div className={styles.nick}>Nick</div>
        <div className={styles.div1}>€ 3500</div>
        <img className={styles.maskGroupIcon1} alt="" src={maskGroup1} />
      </div>
      <img className={styles.monthlyEarningsChild1} alt="" src={vector1} />
      <img className={styles.monthlyEarningsChild2} alt="" src={vector2} />
    </div>
  );
};

export default MonthlyEarnings;
