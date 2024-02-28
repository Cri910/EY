import { FunctionComponent } from "react";
import PasswordForm from "./PasswordForm";
import styles from "./AccountSettingsContainer.module.css";

const AccountSettingsContainer: FunctionComponent = () => {
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
            <PasswordForm passwordFieldNames="Old Password" />
            <PasswordForm
              passwordFieldNames="New Password"
              propTop="104px"
              propTop1="32px"
            />
            <PasswordForm
              passwordFieldNames="Retype Password"
              propTop="208px"
              propTop1="32px"
            />
            <div className={styles.phoneNumber}>
              <div className={styles.fullName}>Phone Number</div>
              <div className={styles.tanzirRahmanWrapper}>
                <div className={styles.tanzirRahman}>
                  <span className={styles.span}>{`+880  | `}</span>
                  <span> 51547 58868</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonBig}>
            <b className={styles.aggiornaPassword}>Aggiorna Password</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsContainer;
