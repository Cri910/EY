import { FunctionComponent } from "react";
import WalletConnectForm from "./WalletConnectForm";
import styles from "./ConnectWallet.module.css";

const ConnectWallet: FunctionComponent = () => {
  return (
    <div className={styles.connectWallet}>
      <div className={styles.background} />
      <div className={styles.titleConnect}>Connect Wallet</div>
      <img className={styles.arrowDownIcon} alt="" src="/arrow-down.svg" />
      <div className={styles.buttonCreaWallet}>
        <div className={styles.buttonCreaWalletChild} />
        <div className={styles.creaWallet}>Crea Wallet</div>
        <div className={styles.parent}>
          <div className={styles.div}>+</div>
          <div className={styles.groupChild} />
        </div>
      </div>
      <WalletConnectForm imageLabel="/metamask.svg" />
      <div className={styles.walletConnect}>
        <div className={styles.titleFont}>WalletConnect</div>
        <img
          className={styles.walletConnectChild}
          alt=""
          src="/group-13003.svg"
        />
      </div>
    </div>
  );
};

export default ConnectWallet;
