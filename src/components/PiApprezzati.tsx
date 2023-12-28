import { FunctionComponent, useMemo, type CSSProperties } from "react";
import IPiApprezzati from "./IPiApprezzati";
import styles from "./PiApprezzati.module.css";

type PiApprezzatiType = {
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
  piApprezzatiPosition?: CSSProperties["position"];
};

const PiApprezzati: FunctionComponent<PiApprezzatiType> = ({
  vuesaxlinearethereumEth,
  vuesaxlinearethereumEth1,
  vuesaxlinearethereumEth2,
  rectangle18,
  rectangle20,
  rectangle21,
  vuesaxoutlinearrowUp,
  vuesaxoutlinearrowUp1,
  vuesaxoutlinearrowUp2,
  piApprezzatiPosition,
}) => {
  const piApprezzatiStyle: CSSProperties = useMemo(() => {
    return {
      position: piApprezzatiPosition,
    };
  }, [piApprezzatiPosition]);

  return (
    <div className={styles.piApprezzati} style={piApprezzatiStyle}>
      <IPiApprezzati
        vuesaxlinearethereumEth="/vuesaxlinearethereumeth@2x.png"
        vuesaxlinearethereumEth1="/vuesaxlinearethereumeth@2x.png"
        vuesaxlinearethereumEth2="/vuesaxlinearethereumeth@2x.png"
        rectangle18="/rectangle-18@2x.png"
        rectangle20="/rectangle-20@2x.png"
        rectangle21="/rectangle-21@2x.png"
        vuesaxoutlinearrowUp="/vuesaxoutlinearrowup@2x.png"
        vuesaxoutlinearrowUp1="/vuesaxoutlinearrowup@2x.png"
        vuesaxoutlinearrowUp2="/vuesaxoutlinearrowup@2x.png"
        iPiApprezzatiPosition="absolute"
        iPiApprezzatiTop="0px"
        iPiApprezzatiLeft="0px"
      />
    </div>
  );
};

export default PiApprezzati;
