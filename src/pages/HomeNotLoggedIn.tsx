import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import MenuFrame from "../components/MenuFrame";
import Filter from "../components/Filter";
import styles from "./HomeNotLoggedIn.module.css";

const HomeNotLoggedIn: FunctionComponent = () => {
  return (
    <div className={styles.homeNotLoggedIn}>
      <div className={styles.loginFrame}>
        <MenuFrame />
        <div className={styles.rectanglepopular}>
          <div className={styles.ellipsefilter} />
          <img
            className={styles.menuIcon}
            loading="lazy"
            alt=""
            src="/menu@2x.png"
          />
        </div>
      </div>
      <main className={styles.menuFrame}>
        <section className={styles.homeFrame}>
          <div className={styles.discoverFrame}>
            <div className={styles.filterFrame}>
              <div className={styles.searchFrame}>
                <div className={styles.searchFrameChild} />
                <img
                  className={styles.vuesaxlinearsearchNormalIcon}
                  alt=""
                  src="/vuesaxlinearsearchnormal.svg"
                />
                <input
                  className={styles.cerca}
                  placeholder="Cerca"
                  type="text"
                />
              </div>
              <button className={styles.allNFTsFrame}>
                <img
                  className={styles.loginRoundedIcon}
                  alt=""
                  src="/login-rounded@2x.png"
                />
                <div className={styles.login}>LOGIN</div>
              </button>
            </div>
          </div>
          <div className={styles.discoverPopularNFTs}>
            <div className={styles.mostraTuttiFrame}>
              <div className={styles.cercaFrame}>
                <h1 className={styles.discoverPopularNft}>
                  Discover Popular NFT
                </h1>
                <Form.Select className={styles.metamaskFrameFormselect} />
              </div>
              <div className={styles.connectWalletFrameWrapper}>
                <img
                  className={styles.connectWalletFrame}
                  loading="lazy"
                  alt=""
                  src="/rectangle-19@2x.png"
                />
              </div>
              <div className={styles.ipiFrame}>
                <h3 className={styles.iPiApprezzatiContainer}>
                  <span>{`I più apprezzati `}</span>
                  <span className={styles.span}>(5)</span>
                </h3>
                <div className={styles.vediTutti}>Vedi tutti</div>
              </div>
            </div>
            <div className={styles.discoverframe}>
              <div className={styles.popularframe}>
                <div className={styles.filterellipseParent}>
                  <div className={styles.filterellipse}>
                    <Filter />
                  </div>
                  <img
                    className={styles.connectframeIcon}
                    loading="lazy"
                    alt=""
                    src="/rectangle-19@2x.png"
                  />
                </div>
                <div className={styles.connectWallet}>
                  <div className={styles.connectWalletChild} />
                  <div className={styles.connectwalletbutton}>
                    <div className={styles.metamasktitle}>
                      <div className={styles.connectwalletframe}>
                        <div className={styles.connectWallet1}>
                          Connect Wallet
                        </div>
                      </div>
                      <div className={styles.metamasklogo}>
                        <Form.Select
                          className={styles.metaMaskconnectFormselect}
                        />
                        <button className={styles.metamask}>
                          <div className={styles.titleFont}>WalletConnect</div>
                          <img
                            className={styles.walletconnectIcon}
                            alt=""
                            src="/walletconnect.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameconnectwallet}>
                    <div className={styles.frameconnectwalletChild} />
                    <div className={styles.createwalletbutton}>
                      <div className={styles.ellipseframe}>+</div>
                      <div className={styles.creawallettext} />
                    </div>
                    <div className={styles.creaWallet}>Crea Wallet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeNotLoggedIn;
