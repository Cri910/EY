import { FunctionComponent, useMemo, type CSSProperties } from "react";
import CardContainer1 from "./CardContainer1";
import ContainerCardForm from "./ContainerCardForm";
import CardContainer from "./CardContainer";
import Filter from "./Filter";
import styles from "./BestSellers.module.css";

type BestSellersType = {
  frame22?: string;
  frame221?: string;
  group1000003500?: string;

  /** Style props */
  bestSellersWidth?: CSSProperties["width"];
  bestSellersHeight?: CSSProperties["height"];
  bestSellersPosition?: CSSProperties["position"];
  bestSellersTop?: CSSProperties["top"];
  bestSellersLeft?: CSSProperties["left"];
  filterGap?: CSSProperties["gap"];
};

const BestSellers: FunctionComponent<BestSellersType> = ({
  frame22,
  frame221,
  group1000003500,
  bestSellersWidth,
  bestSellersHeight,
  bestSellersPosition,
  bestSellersTop,
  bestSellersLeft,
  filterGap,
}) => {
  const bestSellersStyle: CSSProperties = useMemo(() => {
    return {
      width: bestSellersWidth,
      height: bestSellersHeight,
      position: bestSellersPosition,
      top: bestSellersTop,
      left: bestSellersLeft,
    };
  }, [
    bestSellersWidth,
    bestSellersHeight,
    bestSellersPosition,
    bestSellersTop,
    bestSellersLeft,
  ]);

  const filterStyle: CSSProperties = useMemo(() => {
    return {
      gap: filterGap,
    };
  }, [filterGap]);

  return (
    <div className={styles.bestSellers} style={bestSellersStyle}>
      <b className={styles.bestSellersDel}>Best Sellers del mese</b>
      <div className={styles.mostraTutti}>Mostra tutti</div>
      <CardContainer1 dimensionLabel="/frame-22@2x.png" />
      <ContainerCardForm dimensionLabel="/frame-22@2x.png" />
      <CardContainer />
      <Filter
        group1000003500="/group-10000035001@2x.png"
        filterPosition="absolute"
        filterTop="37.5px"
        filterLeft="1032.5px"
        filterGap="24px"
      />
      <img
        className={styles.vuesaxlineararrowDownIcon}
        alt=""
        src="/vuesaxlineararrowdown1@2x.png"
      />
    </div>
  );
};

export default BestSellers;
