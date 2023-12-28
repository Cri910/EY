import WalletConnectForm from "./WalletConnectForm";
import styles from "./ConnectWallet.module.css";

const ConnectWallet = () => {
  return (
    <div className={styles.connectWallet}>
      <div className={styles.background} />
      <div className={styles.titleConnect}>Connect Wallet</div>
      <img className={styles.arrowDownIcon} alt="" src="/arrow-down@2x.png" />
      <div className={styles.buttonCreaWallet}>
        <div className={styles.buttonCreaWalletChild} />
        <div className={styles.creaWallet}>Crea Wallet</div>
        <div className={styles.parent}>
          <div className={styles.div}>+</div>
          <div className={styles.groupChild} />
        </div>
      </div>
      <WalletConnectForm
        imageLabel="/metamask@2x.png"
        propTop="84px"
        propLeft="30px"
      />
      <div className={styles.walletConnect}>
        <div className={styles.titleFont}>WalletConnect</div>
        <img
          className={styles.walletConnectChild}
          alt=""
          src="/group-13003@2x.png"
        />
      </div>
    </div>
  );
};

export default ConnectWallet;
