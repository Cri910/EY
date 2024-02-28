import { FunctionComponent } from "react";
import styles from "./AccountSettingsContainer1.module.css";

const AccountSettingsContainer1: FunctionComponent = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.header}>
        <div className={styles.account}>
          <div className={styles.account1}>Account</div>
        </div>
        <div className={styles.security}>
          <div className={styles.sicurezza}>Sicurezza</div>
        </div>
      </div>
      <div className={styles.accountsDetails}>
        <div className={styles.updateProfile}>
          <div className={styles.input}>
            <div className={styles.name}>
              <div className={styles.nomeECognome}>Nome e Cognome</div>
            </div>
            <div className={styles.email}>
              <div className={styles.fullName}>Email</div>
            </div>
            <div className={styles.userName}>
              <div className={styles.fullName1}>Username</div>
              <div className={styles.userNameChild} />
              <div className={styles.fedePecoWrapper}>
                <div className={styles.fedePeco}>Fede_Peco</div>
              </div>
            </div>
            <div className={styles.phoneNumber}>
              <div className={styles.numeroDiWallet}>Numero di Wallet</div>
              <div className={styles.wrapper}>
                <div className={styles.div}>************</div>
              </div>
              <div className={styles.phoneNumberChild} />
            </div>
            <div className={styles.federicoPecoraro}>Federico Pecoraro</div>
            <div className={styles.inputChild} />
            <div className={styles.infochainblockitWrapper}>
              <div className={styles.infochainblockit}>info@chainblock.it</div>
            </div>
          </div>
        </div>
        <div className={styles.profilePicture}>
          <div className={styles.yourProfilePicture}>Your Profile Picture</div>
          <div className={styles.pictureBox}>
            <img
              className={styles.pictureBoxChild}
              alt=""
              src="/frame-133542.svg"
            />
            <div className={styles.uploadYourPhoto}>Upload your photo</div>
          </div>
        </div>
      </div>
      <div className={styles.buttonBig}>
        <b className={styles.aggiornaProfilo}>Aggiorna Profilo</b>
      </div>
    </div>
  );
};

export default AccountSettingsContainer1;
