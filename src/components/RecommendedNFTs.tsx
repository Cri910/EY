import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./RecommendedNFTs.module.css";

export type RecommendedNFTsType = {
  image48?: string;
  group1000003485?: string;

  /** Style props */
  recommendedNFTsPosition?: CSSProperties["position"];
  recommendedNFTsTop?: CSSProperties["top"];
  recommendedNFTsLeft?: CSSProperties["left"];
};

const RecommendedNFTs: FunctionComponent<RecommendedNFTsType> = ({
  image48,
  group1000003485,
  recommendedNFTsPosition,
  recommendedNFTsTop,
  recommendedNFTsLeft,
}) => {
  const recommendedNFTsStyle: CSSProperties = useMemo(() => {
    return {
      position: recommendedNFTsPosition,
      top: recommendedNFTsTop,
      left: recommendedNFTsLeft,
    };
  }, [recommendedNFTsPosition, recommendedNFTsTop, recommendedNFTsLeft]);

  return (
    <div className={styles.recommendedNfts} style={recommendedNFTsStyle}>
      <div className={styles.recommendedNftsChild} />
      <div className={styles.nftBuy}>
        <div className={styles.nftBuyChild} />
        <div className={styles.nftBuyItem} />
        <div className={styles.nftParent}>
          <div className={styles.nft}>NFT</div>
          <div className={styles.lucaLiverani}>Luca Liverani</div>
        </div>
        <img className={styles.image48Icon} alt="" src={image48} />
        <div className={styles.parent}>
          <div className={styles.div}>1.40 +</div>
          <div className={styles.btc}>BTC</div>
          <img className={styles.groupChild} alt="" src={group1000003485} />
        </div>
      </div>
      <div className={styles.buttonsBuyBid}>
        <div className={styles.buy}>
          <div className={styles.buyChild} />
          <b className={styles.acquista}>Acquista</b>
        </div>
        <div className={styles.bid}>
          <div className={styles.bidChild} />
          <b className={styles.offri}>Offri</b>
        </div>
      </div>
    </div>
  );
};

export default RecommendedNFTs;
