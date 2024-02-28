import { FunctionComponent, useMemo, type CSSProperties } from "react";
import CardPlayer from "./CardPlayer";
import AuctionCardForm from "./AuctionCardForm";
import styles from "./Cards.module.css";

export type CardsType = {
  rectangle6?: string;
  group1000003488?: string;
  likes?: string;
  image18?: string;
  rotationMode?: string;
  dotnav?: string;
  rectangle61?: string;
  group10000034881?: string;
  likes1?: string;
  image181?: string;
  rotationMode1?: string;

  /** Style props */
  cardsPosition?: CSSProperties["position"];
  cardsTop?: CSSProperties["top"];
  cardsLeft?: CSSProperties["left"];
};

const Cards: FunctionComponent<CardsType> = ({
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
  const cardsStyle: CSSProperties = useMemo(() => {
    return {
      position: cardsPosition,
      top: cardsTop,
      left: cardsLeft,
    };
  }, [cardsPosition, cardsTop, cardsLeft]);

  return (
    <div className={styles.cards} style={cardsStyle}>
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
      <img className={styles.rectangleIcon} alt="" src={rectangle61} />
      <b className={styles.lionelMessi}>Lionel Messi</b>
      <div className={styles.artist}>
        <img className={styles.artistChild} alt="" src={group10000034881} />
        <div className={styles.byMikeJones}>By Mike Jones</div>
      </div>
      <div className={styles.k}>125K</div>
      <div className={styles.wrapperLikes}>
        <img className={styles.likesIcon} alt="" src={likes1} />
      </div>
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
