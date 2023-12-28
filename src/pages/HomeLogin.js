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

const HomeLogin = () => {
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
                vuesaxoutlinesetting2="/vuesaxoutlinesetting21@2x.png"
                vuesaxoutlinemessage="/vuesaxoutlinemessage@2x.png"
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
              vector="/clip-path-group@2x.png"
              vector1="/vector@2x.png"
              vector2="/vector@2x.png"
              vuesaxlinearcloseSquare="/vector@2x.png"
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
              seguiLeNostreContainerGap="31px"
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
              clipPathGroupGap="20px"
              vectorIconWidth="17.3px"
              vectorIconWidth1="9px"
              socialMenuMarginLeft="10px"
              socialMenuMarginTop="-1px"
            />
          </div>
          <LogoutButton
            vuesaxlinearlogout="/vuesaxlinearlogout@2x.png"
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
            vuesaxlinearsearchNormal="/vuesaxlinearsearchnormal@2x.png"
            vuesaxlinearethereumEth="/vuesaxlinearethereumeth3@2x.png"
            vuesaxoutlinenotification="/vuesaxoutlinenotification1@2x.png"
            profileImage="/profile-image@2x.png"
            navbarLoginWidth="1296px"
            navbarLoginPosition="absolute"
            navbarLoginTop="-24px"
            navbarLoginLeft="0px"
          />
          <div className={styles.frame8}>
            <BestSellers
              frame22="/frame-221@2x.png"
              frame221="/frame-221@2x.png"
              group1000003500="/group-10000035002@2x.png"
              bestSellersWidth="1300px"
              bestSellersHeight="472px"
              bestSellersPosition="absolute"
              bestSellersTop="0px"
              bestSellersLeft="-8px"
              filterGap="19px"
            />
            <div className={styles.frame9}>
              <div className={styles.frame10}>
                <div className={styles.frame11}>
                  <div className={styles.frame12}>
                    <PiApprezzati
                      vuesaxlinearethereumEth="/vuesaxlinearethereumeth4@2x.png"
                      vuesaxlinearethereumEth1="/vuesaxlinearethereumeth4@2x.png"
                      vuesaxlinearethereumEth2="/vuesaxlinearethereumeth4@2x.png"
                      rectangle18="/rectangle-182@2x.png"
                      rectangle20="/rectangle-202@2x.png"
                      rectangle21="/rectangle-212@2x.png"
                      vuesaxoutlinearrowUp="/vuesaxoutlinearrowup2@2x.png"
                      vuesaxoutlinearrowUp1="/vuesaxoutlinearrowup2@2x.png"
                      vuesaxoutlinearrowUp2="/vuesaxoutlinearrowup2@2x.png"
                      piApprezzatiPosition="relative"
                    />
                  </div>
                </div>
                <IlMioWallet
                  vuesaxlinearethereumEth="/vuesaxlinearethereumeth5@2x.png"
                  vuesaxlineararrowDown="/vuesaxlineararrowdown2@2x.png"
                  vuesaxoutlinerefresh2="/vuesaxoutlinerefresh21@2x.png"
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
