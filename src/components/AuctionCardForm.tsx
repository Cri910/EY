import { FunctionComponent } from "react";
import styles from "./AuctionCardForm.module.css";

const AuctionCardForm: FunctionComponent = () => {
  return (
    <div className={styles.endsHigestBid}>
      <div className={styles.endsHigestBidChild} />
      <div className={styles.endsHigestBidItem} />
      <div className={styles.h30m29s}>04h 30m 29s</div>
      <div className={styles.eth}>2.5 ETH</div>
      <div className={styles.offertaPiAlta}>Offerta più alta</div>
      <div className={styles.finisceTra}>Finisce tra</div>
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

export default AuctionCardForm;
