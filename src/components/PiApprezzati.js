import { useMemo } from "react";
import IPiApprezzati from "./IPiApprezzati";
import styles from "./PiApprezzati.module.css";

const PiApprezzati = ({
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
  const piApprezzatiStyle = useMemo(() => {
    return {
      position: piApprezzatiPosition,
    };
  }, [piApprezzatiPosition]);

  return (
    <div className={styles.piApprezzati} style={piApprezzatiStyle}>
      <IPiApprezzati
        vuesaxlinearethereumEth="/vuesaxlinearethereumeth2@2x.png"
        vuesaxlinearethereumEth1="/vuesaxlinearethereumeth2@2x.png"
        vuesaxlinearethereumEth2="/vuesaxlinearethereumeth2@2x.png"
        rectangle18="/rectangle-181@2x.png"
        rectangle20="/rectangle-201@2x.png"
        rectangle21="/rectangle-211@2x.png"
        vuesaxoutlinearrowUp="/vuesaxoutlinearrowup1@2x.png"
        vuesaxoutlinearrowUp1="/vuesaxoutlinearrowup1@2x.png"
        vuesaxoutlinearrowUp2="/vuesaxoutlinearrowup1@2x.png"
        iPiApprezzatiPosition="absolute"
        iPiApprezzatiTop="0px"
        iPiApprezzatiLeft="0px"
      />
    </div>
  );
};

export default PiApprezzati;
