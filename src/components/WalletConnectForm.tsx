import { FunctionComponent, useMemo, type CSSProperties } from "react";
import MetamaskIcon from "./MetamaskIcon";
import styles from "./WalletConnectForm.module.css";

export type WalletConnectFormType = {
  imageLabel?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const WalletConnectForm: FunctionComponent<WalletConnectFormType> = ({
  imageLabel,
  propTop,
  propLeft,
}) => {
  const metamaskStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.metamask} style={metamaskStyle}>
      <div className={styles.metamask1}>
        <div className={styles.titleFont}>Metamask</div>
        <MetamaskIcon
          metamaskIconMetamask="/metamask.svg"
          metamaskIconWidth="60px"
          metamaskIconHeight="60px"
          metamaskIconPosition="absolute"
          metamaskIconTop="2px"
          metamaskIconRight="31.7px"
        />
      </div>
    </div>
  );
};

export default WalletConnectForm;
