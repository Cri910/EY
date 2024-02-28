import { FunctionComponent } from "react";
import styles from "./NewsletterForm.module.css";

const NewsletterForm: FunctionComponent = () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletterChild} />
      <div className={styles.indirizzoEmail}>Indirizzo email</div>
      <div className={styles.newsletterItem} />
      <div className={styles.iscriviti}>Iscriviti</div>
      <div className={styles.iscrivitiAllaNewsletter}>
        Iscriviti alla Newsletter
      </div>
    </div>
  );
};

export default NewsletterForm;
