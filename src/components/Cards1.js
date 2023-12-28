import CardPlayer from "./CardPlayer";
import AuctionCardForm from "./AuctionCardForm";
import styles from "./Cards1.module.css";

const Cards1 = () => {
  return (
    <div className={styles.cards}>
      <CardPlayer
        imageDimensions="/rectangle-6@2x.png"
        imageDimensionsText="/group-1000003488@2x.png"
        imageDimensionsCoordinate="/likes@2x.png"
        imageDimensionsCoordinate2="/image-18@2x.png"
        imageDimensionsCoordinate3="/rotation-mode@2x.png"
        imageDimensionsText2="/dotnav@2x.png"
      />
      <div className={styles.cardsChild} />
      <div className={styles.cardsItem} />
      <div className={styles.cardsInner} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-6@2x.png" />
      <b className={styles.lionelMessi}>Lionel Messi</b>
      <div className={styles.artist}>
        <img
          className={styles.artistChild}
          alt=""
          src="/group-1000003488@2x.png"
        />
        <div className={styles.byMikeJones}>By Mike Jones</div>
      </div>
      <div className={styles.k}>125K</div>
      <img className={styles.likesIcon} alt="" src="/likes@2x.png" />
      <div className={styles.image18Wrapper}>
        <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
      </div>
      <div className={styles.ellipseDiv} />
      <div className={styles.cardsChild1} />
      <div className={styles.cardsChild2} />
      <img
        className={styles.rotationModeIcon}
        alt=""
        src="/rotation-mode@2x.png"
      />
      <AuctionCardForm />
    </div>
  );
};

export default Cards1;
