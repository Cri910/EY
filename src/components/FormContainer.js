import styles from "./FormContainer.module.css";

const FormContainer = () => {
  return (
    <div className={styles.menuLaterale}>
      <div className={styles.impostazioni}>
        <img
          className={styles.vuesaxoutlinesetting2Icon}
          alt=""
          src="/vuesaxoutlinesetting2@2x.png"
        />
        <div className={styles.impostazioni1}>Impostazioni</div>
      </div>
      <div className={styles.frame}>
        <div className={styles.collezioni}>
          <img
            className={styles.vuesaxlineardiamondsIcon}
            alt=""
            src="/vuesaxlineardiamonds@2x.png"
          />
          <div className={styles.collezioni1}>Collezioni</div>
        </div>
      </div>
      <div className={styles.frame1}>
        <div className={styles.collezioni}>
          <img
            className={styles.vuesaxlineardiamondsIcon}
            alt=""
            src="/vuesaxlinearwallet@2x.png"
          />
          <div className={styles.collezioni1}>Wallet</div>
        </div>
      </div>
      <div className={styles.frame2}>
        <div className={styles.collezioni}>
          <img
            className={styles.vuesaxlineardiamondsIcon}
            alt=""
            src="/vuesaxoutlineinfocircle@2x.png"
          />
          <div className={styles.collezioni1}>Aiuto</div>
        </div>
      </div>
      <div className={styles.dashboard}>
        <img className={styles.dashboardIcon} alt="" src="/dashboard@2x.png" />
        <div className={styles.collezioni1}>Dashboard</div>
      </div>
      <div className={styles.frame3}>
        <div className={styles.messaggi}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.div}>4</div>
          </div>
          <div className={styles.frame4}>
            <img
              className={styles.vuesaxlineardiamondsIcon}
              alt=""
              src="/vuesaxoutlinemessage@2x.png"
            />
            <div className={styles.collezioni1}>Messaggi</div>
          </div>
        </div>
      </div>
      <div className={styles.frame5}>
        <div className={styles.home}>
          <img
            className={styles.vuesaxlineardiamondsIcon}
            alt=""
            src="/vuesaxboldhome@2x.png"
          />
          <div className={styles.collezioni1}>Home</div>
        </div>
      </div>
      <div className={styles.frame6}>
        <div className={styles.collezioni}>
          <img
            className={styles.vuesaxlineardiamondsIcon}
            alt=""
            src="/vuesaxoutlinesetting2@2x.png"
          />
          <div className={styles.collezioni1}>Impostazioni</div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
