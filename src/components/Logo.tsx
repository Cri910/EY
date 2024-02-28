import { FunctionComponent } from "react";
import styles from "./Logo.module.css";

const Logo: FunctionComponent = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.stemmaUs1Icon} alt="" src="/stemma-us-1@2x.png" />
      <div className={styles.walletComponent}>
        <div className={styles.alessandriaClubNftContainer}>
          <p className={styles.alessandriaClub}>
            <b>Alessandria club</b>
          </p>
          <p className={styles.nftMarketplace}>nft marketplace</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
