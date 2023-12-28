import { useMemo } from "react";
import MetamaskIcon from "./MetamaskIcon";
import styles from "./WalletConnectForm.module.css";

const WalletConnectForm = ({ imageLabel, propTop, propLeft }) => {
  const metamaskStyle = useMemo(() => {
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
          metamaskIconMetamask="/metamask@2x.png"
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
