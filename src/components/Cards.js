import { useMemo } from "react";
import CardPlayer from "./CardPlayer";
import AuctionCardForm from "./AuctionCardForm";
import styles from "./Cards.module.css";

const Cards = ({
  rectangle6,
  group1000003488,
  likes,
  image18,
  rotationMode,
  dotnav,
  rectangle61,
  group10000034881,
  likes1,
  image181,
  rotationMode1,
  cardsPosition,
  cardsTop,
  cardsLeft,
}) => {
  const cardsStyle = useMemo(() => {
    return {
      position: cardsPosition,
      top: cardsTop,
      left: cardsLeft,
    };
  }, [cardsPosition, cardsTop, cardsLeft]);

  return (
    <div className={styles.cards} style={cardsStyle}>
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
      <img className={styles.rectangleIcon} alt="" src={rectangle61} />
      <b className={styles.lionelMessi}>Lionel Messi</b>
      <div className={styles.artist}>
        <img className={styles.artistChild} alt="" src={group10000034881} />
        <div className={styles.byMikeJones}>By Mike Jones</div>
      </div>
      <div className={styles.k}>125K</div>
      <img className={styles.likesIcon} alt="" src={likes1} />
      <div className={styles.image18Wrapper}>
        <img className={styles.image18Icon} alt="" src={image181} />
      </div>
      <div className={styles.ellipseDiv} />
      <div className={styles.cardsChild1} />
      <div className={styles.cardsChild2} />
      <img className={styles.rotationModeIcon} alt="" src={rotationMode1} />
      <AuctionCardForm />
    </div>
  );
};

export default Cards;
