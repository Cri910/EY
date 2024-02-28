import { FunctionComponent } from "react";
import CardPlayer from "./CardPlayer";
import AuctionCardForm from "./AuctionCardForm";
import styles from "./Cards1.module.css";

const Cards1: FunctionComponent = () => {
  return (
    <div className={styles.cards}>
      <CardPlayer
        imageDimensions="/rectangle-6.svg"
        imageDimensionsText="/group-1000003488.svg"
        imageDimensionsCoordinate="/likes.svg"
        imageDimensionsCoordinate2="/image-18@2x.png"
        imageDimensionsCoordinate3="/rotation-mode.svg"
        imageDimensionsText2="/dotnav.svg"
      />
      <div className={styles.cardsChild} />
      <div className={styles.cardsItem} />
      <div className={styles.cardsInner} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-6.svg" />
      <b className={styles.lionelMessi}>Lionel Messi</b>
      <div className={styles.artist}>
        <img
          className={styles.artistChild}
          alt=""
          src="/group-1000003488.svg"
        />
        <div className={styles.byMikeJones}>By Mike Jones</div>
      </div>
      <div className={styles.k}>125K</div>
      <div className={styles.wrapperLikes}>
        <img className={styles.likesIcon} alt="" src="/likes.svg" />
      </div>
      <div className={styles.image18Wrapper}>
        <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
      </div>
      <div className={styles.ellipseDiv} />
      <div className={styles.cardsChild1} />
      <div className={styles.cardsChild2} />
      <img
        className={styles.rotationModeIcon}
        alt=""
        src="/rotation-mode.svg"
      />
      <AuctionCardForm />
    </div>
  );
};

export default Cards1;
