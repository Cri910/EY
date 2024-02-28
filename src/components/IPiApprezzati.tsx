import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./IPiApprezzati.module.css";

export type IPiApprezzatiType = {
  vuesaxlinearethereumEth?: string;
  vuesaxlinearethereumEth1?: string;
  vuesaxlinearethereumEth2?: string;
  rectangle18?: string;
  rectangle20?: string;
  rectangle21?: string;
  vuesaxoutlinearrowUp?: string;
  vuesaxoutlinearrowUp1?: string;
  vuesaxoutlinearrowUp2?: string;

  /** Style props */
  iPiApprezzatiPosition?: CSSProperties["position"];
  iPiApprezzatiTop?: CSSProperties["top"];
  iPiApprezzatiLeft?: CSSProperties["left"];
};

const IPiApprezzati: FunctionComponent<IPiApprezzatiType> = ({
  vuesaxlinearethereumEth,
  vuesaxlinearethereumEth1,
  vuesaxlinearethereumEth2,
  rectangle18,
  rectangle20,
  rectangle21,
  vuesaxoutlinearrowUp,
  vuesaxoutlinearrowUp1,
  vuesaxoutlinearrowUp2,
  iPiApprezzatiPosition,
  iPiApprezzatiTop,
  iPiApprezzatiLeft,
}) => {
  const iPiApprezzatiStyle: CSSProperties = useMemo(() => {
    return {
      position: iPiApprezzatiPosition,
      top: iPiApprezzatiTop,
      left: iPiApprezzatiLeft,
    };
  }, [iPiApprezzatiPosition, iPiApprezzatiTop, iPiApprezzatiLeft]);

  return (
    <div className={styles.iPiApprezzati} style={iPiApprezzatiStyle}>
      <div className={styles.iPiApprezzatiChild} />
      <div className={styles.iPiApprezzatiContainer}>
        <span>{`I più apprezzati `}</span>
        <span className={styles.span}>(5)</span>
      </div>
      <div className={styles.loremIpsum}>Lorem Ipsum</div>
      <div className={styles.loremIpsum1}>Lorem Ipsum</div>
      <div className={styles.loremIpsum2}>Lorem Ipsum</div>
      <div className={styles.minsonJolia}>@minson jolia</div>
      <div className={styles.vediTutti}>Vedi tutti</div>
      <div className={styles.minsonJolia1}>@minson jolia</div>
      <div className={styles.minsonJolia2}>@minson jolia</div>
      <div className={styles.price}>Price</div>
      <div className={styles.price1}>Price</div>
      <div className={styles.price2}>Price</div>
      <div className={styles.eth}>0.2 ETH</div>
      <div className={styles.eth1}>0.2 ETH</div>
      <div className={styles.eth2}>0.2 ETH</div>
      <div className={styles.div}>+3%</div>
      <div className={styles.div1}>+3%</div>
      <div className={styles.div2}>+3%</div>
      <img
        className={styles.vuesaxlinearethereumEthIcon}
        alt=""
        src={vuesaxlinearethereumEth}
      />
      <img
        className={styles.vuesaxlinearethereumEthIcon1}
        alt=""
        src={vuesaxlinearethereumEth1}
      />
      <img
        className={styles.vuesaxlinearethereumEthIcon2}
        alt=""
        src={vuesaxlinearethereumEth2}
      />
      <img className={styles.iPiApprezzatiItem} alt="" src={rectangle18} />
      <img className={styles.iPiApprezzatiInner} alt="" src={rectangle20} />
      <img className={styles.rectangleIcon} alt="" src={rectangle21} />
      <img
        className={styles.vuesaxoutlinearrowUpIcon}
        alt=""
        src={vuesaxoutlinearrowUp}
      />
      <img
        className={styles.vuesaxoutlinearrowUpIcon1}
        alt=""
        src={vuesaxoutlinearrowUp1}
      />
      <img
        className={styles.vuesaxoutlinearrowUpIcon2}
        alt=""
        src={vuesaxoutlinearrowUp2}
      />
    </div>
  );
};

export default IPiApprezzati;
