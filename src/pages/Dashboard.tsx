import { FunctionComponent } from "react";
import LogoutButton from "../components/LogoutButton";
import SocialMenu from "../components/SocialMenu";
import HomeCard from "../components/HomeCard";
import MonthlyEarnings from "../components/MonthlyEarnings";
import Cards from "../components/Cards";
import BarraInAlto from "../components/BarraInAlto";
import RecommendedNFTs from "../components/RecommendedNFTs";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <img
            className={styles.logoAlessandriaIcon}
            alt=""
            src="/logo-alessandria@2x.png"
          />
        </div>
      </div>
      <div className={styles.frame2}>
        <div className={styles.frame3}>
          <div className={styles.frame4}>
            <LogoutButton
              vuesaxlinearlogout="/vuesaxlinearlogout.svg"
              logoutButtonPosition="absolute"
              logoutButtonTop="993.8px"
              logoutButtonLeft="0px"
              logoutButtonFlexShrink="unset"
              logoutButtonHeight="unset"
              logoutButtonMarginLeft="unset"
            />
          </div>
          <div className={styles.frame5}>
            <div className={styles.frame6}>
              <SocialMenu
                socialIconsSocialIcons="pagine social "
                vector="/clip-path-group.svg"
                vector1="/vector.svg"
                vector2="/vector.svg"
                vuesaxlinearcloseSquare="/vector.svg"
                socialMenuPosition="absolute"
                socialMenuTop="763.2px"
                socialMenuLeft="0px"
                frameWidth="123.5px"
                frameHeight="107px"
                frameAlignItems="center"
                frameJustifyContent="flex-end"
                frameGap="unset"
                frameMarginTop="unset"
                seguiLeNostreContainerPosition="unset"
                seguiLeNostreContainerFontSize="unset"
                seguiLeNostreContainerFontWeight="unset"
                seguiLeNostreContainerFontFamily="unset"
                seguiLeNostreContainerColor="unset"
                seguiLeNostreContainerTextAlign="unset"
                seguiLeNostreContainerDisplay="flex"
                seguiLeNostreContainerWidth="123.5px"
                seguiLeNostreContainerHeight="93.3px"
                seguiLeNostreContainerOverflow="hidden"
                seguiLeNostreContainerFlexShrink="0"
                seguiLeNostreContainerFlexDirection="column"
                seguiLeNostreContainerAlignItems="flex-start"
                seguiLeNostreContainerJustifyContent="flex-start"
                seguiLeNostreContainerGap="31px 0px"
                seguiLeNostreMargin="unset"
                seguiLeNostrePosition="relative"
                seguiLeNostreFontSize="14px"
                seguiLeNostreFontWeight="500"
                seguiLeNostreFontFamily="Poppins"
                seguiLeNostreColor="#d9d9d9"
                seguiLeNostreTextAlign="left"
                seguiLeNostreDisplay="inline-block"
                socialIconsDisplay="unset"
                socialIconsFlexDirection="unset"
                socialIconsAlignItems="unset"
                socialIconsJustifyContent="unset"
                socialIconsGap="unset"
                socialIconsMargin="0"
                clipPathGroupPosition="unset"
                clipPathGroupWidth="unset"
                clipPathGroupHeight="unset"
                clipPathGroupObjectFit="unset"
                clipPathGroupDisplay="flex"
                clipPathGroupFlexDirection="row"
                clipPathGroupAlignItems="center"
                clipPathGroupJustifyContent="flex-start"
                clipPathGroupGap="0px 20px"
                vectorIconWidth="17.3px"
                vectorIconWidth1="9px"
                socialMenuMarginLeft="unset"
                socialMenuMarginTop="unset"
              />
            </div>
            <div className={styles.frame7}>
              <div className={styles.frame8}>
                <div className={styles.menuDashboard}>
                  <HomeCard />
                </div>
              </div>
              <div className={styles.frame9}>
                <div className={styles.frameParent}>
                  <div className={styles.frame10}>
                    <div className={styles.alessandriaClubNftContainer}>
                      <p className={styles.alessandriaClub}>
                        <b>Alessandria club</b>
                      </p>
                      <p className={styles.nftMarketplace}>nft marketplace</p>
                    </div>
                  </div>
                  <div className={styles.frameChild} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame11}>
          <div className={styles.frame12}>
            <MonthlyEarnings
              vector="/vector.svg"
              group4="/group-4.svg"
              maskGroup="/mask-group@2x.png"
              maskGroup1="/mask-group@2x.png"
              vector1="/vector-1.svg"
              vector2="/vector-2.svg"
              monthlyEarningsPosition="absolute"
              monthlyEarningsTop="470.8px"
              monthlyEarningsLeft="0px"
            />
          </div>
          <div className={styles.frame13}>
            <div className={styles.frame14}>
              <div className={styles.frame15}>
                <Cards
                  rectangle6="/rectangle-6.svg"
                  group1000003488="/group-1000003488.svg"
                  likes="/likes.svg"
                  image18="/image-18@2x.png"
                  rotationMode="/rotation-mode.svg"
                  dotnav="/dotnav.svg"
                  rectangle61="/rectangle-6.svg"
                  group10000034881="/group-1000003488.svg"
                  likes1="/likes.svg"
                  image181="/image-18@2x.png"
                  rotationMode1="/rotation-mode.svg"
                  cardsPosition="absolute"
                  cardsTop="177px"
                  cardsLeft="0px"
                />
              </div>
              <div className={styles.frame16}>
                <div className={styles.menuButton}>
                  <div className={styles.menuButtonChild} />
                  <img className={styles.menuIcon} alt="" src="/menu@2x.png" />
                </div>
              </div>
            </div>
            <div className={styles.frame17}>
              <div className={styles.frame18}>
                <BarraInAlto
                  vuesaxlinearsearchNormal="/vuesaxlinearsearchnormal.svg"
                  vuesaxlinearethereumEth="/vuesaxlinearethereumeth.svg"
                  vuesaxoutlinenotification="/vuesaxoutlinenotification.svg"
                  profileImage="/profile-image.svg"
                  barraInAltoPosition="absolute"
                  barraInAltoTop="42.1px"
                  barraInAltoLeft="0px"
                />
              </div>
              <div className={styles.frame19}>
                <b className={styles.iTuoiNft}>I tuoi NFT</b>
              </div>
              <div className={styles.frame20}>
                <RecommendedNFTs
                  image48="/image-48@2x.png"
                  group1000003485="/group-1000003485.svg"
                  recommendedNFTsPosition="absolute"
                  recommendedNFTsTop="175.9px"
                  recommendedNFTsLeft="0px"
                />
              </div>
              <div className={styles.frame21}>
                <div className={styles.mostraTutti}>
                  <div className={styles.mostraTutti1}>Mostra tutti</div>
                  <img
                    className={styles.vuesaxlineararrowDownIcon}
                    alt=""
                    src="/vuesaxlineararrowdown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
