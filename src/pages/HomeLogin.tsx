import { FunctionComponent } from "react";
import MenuItemSelected from "../components/MenuItemSelected";
import Container from "../components/Container";
import FormContainer from "../components/FormContainer";
import SocialMenu from "../components/SocialMenu";
import LogoutButton from "../components/LogoutButton";
import NavbarLogin from "../components/NavbarLogin";
import BestSellers from "../components/BestSellers";
import PiApprezzati from "../components/PiApprezzati";
import IlMioWallet from "../components/IlMioWallet";
import styles from "./HomeLogin.module.css";

const HomeLogin: FunctionComponent = () => {
  return (
    <div className={styles.homeLogin}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <img
            className={styles.logoAlessandriaIcon}
            alt=""
            src="/logo-alessandria@2x.png"
          />
          <div className={styles.alessandriaClubNftMarketplaWrapper}>
            <div className={styles.alessandriaClubNftContainer}>
              <p className={styles.alessandriaClub}>
                <b>Alessandria club</b>
              </p>
              <p className={styles.nftMarketplace}>nft marketplace</p>
            </div>
          </div>
        </div>
        <div className={styles.frame2}>
          <div className={styles.frame3}>
            <div className={styles.frame4}>
              <MenuItemSelected
                vuesaxoutlinesetting2="/vuesaxoutlinesetting2.svg"
                vuesaxoutlinemessage="/vuesaxoutlinemessage.svg"
                menuItemSelectedPosition="unset"
                menuItemSelectedTop="unset"
                menuItemSelectedLeft="unset"
                menuItemSelectedHeight="65.1px"
              />
              <div className={styles.menuSettings}>
                <div className={styles.frame5}>
                  <div className={styles.menuItemSelectedParent}>
                    <Container />
                    <FormContainer />
                  </div>
                </div>
              </div>
            </div>
            <SocialMenu
              socialIconsSocialIcons="pagine social "
              vector="/clip-path-group.svg"
              vector1="/vector.svg"
              vector2="/vector.svg"
              vuesaxlinearcloseSquare="/vector.svg"
              socialMenuPosition="unset"
              socialMenuTop="unset"
              socialMenuLeft="unset"
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
              socialMenuMarginLeft="10px"
              socialMenuMarginTop="-1px"
            />
          </div>
          <LogoutButton
            vuesaxlinearlogout="/vuesaxlinearlogout.svg"
            logoutButtonPosition="unset"
            logoutButtonTop="unset"
            logoutButtonLeft="unset"
            logoutButtonFlexShrink="unset"
            logoutButtonHeight="24px"
            logoutButtonMarginLeft="10px"
          />
        </div>
      </div>
      <div className={styles.frame6}>
        <div className={styles.frame7}>
          <NavbarLogin
            vuesaxlinearsearchNormal="/vuesaxlinearsearchnormal.svg"
            vuesaxlinearethereumEth="/vuesaxlinearethereumeth.svg"
            vuesaxoutlinenotification="/vuesaxoutlinenotification.svg"
            profileImage="/profile-image.svg"
            navbarLoginWidth="1296px"
            navbarLoginPosition="absolute"
            navbarLoginTop="-24px"
            navbarLoginLeft="0px"
          />
          <div className={styles.frame8}>
            <BestSellers
              frame22="/frame-22.svg"
              frame221="/frame-22.svg"
              group1000003500="/group-1000003500.svg"
              bestSellersWidth="1300px"
              bestSellersHeight="472px"
              bestSellersPosition="absolute"
              bestSellersTop="0px"
              bestSellersLeft="-8px"
              filterGap="0px 19px"
            />
            <div className={styles.frame9}>
              <div className={styles.frame10}>
                <div className={styles.frame11}>
                  <div className={styles.frame12}>
                    <PiApprezzati
                      vuesaxlinearethereumEth="/vuesaxlinearethereumeth.svg"
                      vuesaxlinearethereumEth1="/vuesaxlinearethereumeth.svg"
                      vuesaxlinearethereumEth2="/vuesaxlinearethereumeth.svg"
                      rectangle18="/rectangle-18@2x.png"
                      rectangle20="/rectangle-20@2x.png"
                      rectangle21="/rectangle-21@2x.png"
                      vuesaxoutlinearrowUp="/vuesaxoutlinearrowup@2x.png"
                      vuesaxoutlinearrowUp1="/vuesaxoutlinearrowup@2x.png"
                      vuesaxoutlinearrowUp2="/vuesaxoutlinearrowup@2x.png"
                      piApprezzatiPosition="relative"
                    />
                  </div>
                </div>
                <IlMioWallet
                  vuesaxlinearethereumEth="/vuesaxlinearethereumeth.svg"
                  vuesaxlineararrowDown="/vuesaxlineararrowdown.svg"
                  vuesaxoutlinerefresh2="/vuesaxoutlinerefresh2.svg"
                  ilMioWalletWidth="604px"
                  ilMioWalletPosition="absolute"
                  ilMioWalletTop="-12.8px"
                  ilMioWalletLeft="692px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLogin;
