import { FunctionComponent, useMemo, type CSSProperties } from "react";
import VuesaxlinearethereumEthIcon from "./VuesaxlinearethereumEthIcon";
import styles from "./IlMioWallet.module.css";

type IlMioWalletType = {
  vuesaxlinearethereumEth?: string;
  vuesaxlineararrowDown?: string;
  vuesaxoutlinerefresh2?: string;

  /** Style props */
  ilMioWalletWidth?: CSSProperties["width"];
  ilMioWalletPosition?: CSSProperties["position"];
  ilMioWalletTop?: CSSProperties["top"];
  ilMioWalletLeft?: CSSProperties["left"];
};

const IlMioWallet: FunctionComponent<IlMioWalletType> = ({
  vuesaxlinearethereumEth,
  vuesaxlineararrowDown,
  vuesaxoutlinerefresh2,
  ilMioWalletWidth,
  ilMioWalletPosition,
  ilMioWalletTop,
  ilMioWalletLeft,
}) => {
  const ilMioWalletStyle: CSSProperties = useMemo(() => {
    return {
      width: ilMioWalletWidth,
      position: ilMioWalletPosition,
      top: ilMioWalletTop,
      left: ilMioWalletLeft,
    };
  }, [ilMioWalletWidth, ilMioWalletPosition, ilMioWalletTop, ilMioWalletLeft]);

  return (
    <div className={styles.ilMioWallet} style={ilMioWalletStyle}>
      <div className={styles.ilMioWalletChild} />
      <div className={styles.ilTuoWallet}>
        <VuesaxlinearethereumEthIcon
          vuesaxlinearethereumEthIc="/vuesaxlinearethereumeth@2x.png"
          vuesaxlinearethereumEthIcWidth="52px"
          vuesaxlinearethereumEthIcHeight="52px"
          vuesaxlinearethereumEthIcPosition="absolute"
          vuesaxlinearethereumEthIcTop="134px"
          vuesaxlinearethereumEthIcLeft="0px"
        />
        <div className={styles.ilMioWallet1}>Il mio wallet</div>
        <div className={styles.ethereum}>
          <span>{`14.08 `}</span>
          <span className={styles.ethereum1}>Ethereum</span>
        </div>
        <div className={styles.aggiornato2Min}>Aggiornato 2 min fa</div>
        <div className={styles.address0x13r456hk4}>
          Address : 0x13r45...6hk4
        </div>
        <div className={styles.ilTuoWalletChild} />
        <div className={styles.eth}>ETH</div>
        <img
          className={styles.vuesaxlineararrowDownIcon}
          alt=""
          src={vuesaxlineararrowDown}
        />
        <div className={styles.ilTuoWalletItem} />
        <div className={styles.aggiungiFondi}>Aggiungi fondi</div>
        <div className={styles.parent}>
          <div className={styles.div}>+</div>
          <div className={styles.groupChild} />
        </div>
      </div>
      <div className={styles.crypto}>
        <div className={styles.ethereumParent}>
          <div className={styles.ethereum2}>Ethereum</div>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.bnb}>BNB</div>
        <div className={styles.bnb}>USDT</div>
        <img
          className={styles.vuesaxoutlinerefresh2Icon}
          alt=""
          src={vuesaxoutlinerefresh2}
        />
      </div>
    </div>
  );
};

export default IlMioWallet;
