import { FunctionComponent } from "react";
import styles from "./CardPlayer.module.css";

export type CardPlayerType = {
  imageDimensions?: string;
  imageDimensionsText?: string;
  imageDimensionsCoordinate?: string;
  imageDimensionsCoordinate2?: string;
  imageDimensionsCoordinate3?: string;
  imageDimensionsText2?: string;
};

const CardPlayer: FunctionComponent<CardPlayerType> = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsCoordinate,
  imageDimensionsCoordinate2,
  imageDimensionsCoordinate3,
  imageDimensionsText2,
}) => {
  return (
    <div className={styles.cardMessi}>
      <div className={styles.card}>
        <div className={styles.cardChild} />
        <div className={styles.cardItem} />
        <div className={styles.cardInner} />
        <img className={styles.rectangleIcon} alt="" src={imageDimensions} />
        <b className={styles.lionelMessi}>Lionel Messi</b>
        <div className={styles.artist}>
          <img
            className={styles.artistChild}
            alt=""
            src={imageDimensionsText}
          />
          <div className={styles.byMikeJones}>By Mike Jones</div>
        </div>
        <div className={styles.k}>125K</div>
        <div className={styles.wrapperLikes}>
          <img
            className={styles.likesIcon}
            alt=""
            src={imageDimensionsCoordinate}
          />
        </div>
        <div className={styles.image18Wrapper}>
          <img
            className={styles.image18Icon}
            alt=""
            src={imageDimensionsCoordinate2}
          />
        </div>
        <div className={styles.ellipseDiv} />
        <div className={styles.cardChild1} />
        <div className={styles.cardChild2} />
        <img
          className={styles.rotationModeIcon}
          alt=""
          src={imageDimensionsCoordinate3}
        />
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
      </div>
      <img className={styles.dotnavIcon} alt="" src={imageDimensionsText2} />
    </div>
  );
};

export default CardPlayer;
