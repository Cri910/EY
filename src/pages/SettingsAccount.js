import LogoutButton from "../components/LogoutButton";
import SocialMenu from "../components/SocialMenu";
import AccountSettingsContainer from "../components/AccountSettingsContainer";
import NavbarLogin from "../components/NavbarLogin";
import MenuSettings from "../components/MenuSettings";
import styles from "./SettingsAccount.module.css";

const SettingsAccount = () => {
  return (
    <div className={styles.settingsAccount}>
      <div className={styles.settingsAccountChild} />
      <div className={styles.alessandriaClubNftMarketplaWrapper}>
        <div className={styles.alessandriaClubNftContainer}>
          <p className={styles.alessandriaClub}>
            <b>Alessandria club</b>
          </p>
          <p className={styles.nftMarketplace}>nft marketplace</p>
        </div>
      </div>
      <b className={styles.impostazioni}>Impostazioni</b>
      <div className={styles.menuButton}>
        <div className={styles.menuButtonChild} />
        <img className={styles.menuIcon} alt="" src="/menu@2x.png" />
      </div>
      <img
        className={styles.logoAlessandriaIcon}
        alt=""
        src="/stemma-us-1@2x.png"
      />
      <LogoutButton
        vuesaxlinearlogout="/vuesaxlinearlogout@2x.png"
        logoutButtonPosition="absolute"
        logoutButtonTop="998.2px"
        logoutButtonLeft="70.5px"
        logoutButtonFlexShrink="unset"
        logoutButtonHeight="unset"
        logoutButtonMarginLeft="unset"
      />
      <SocialMenu
        socialIconsSocialIcons="pagine social "
        vector="/clip-path-group@2x.png"
        vector1="/vector@2x.png"
        vector2="/vector@2x.png"
        vuesaxlinearcloseSquare="/vector@2x.png"
        socialMenuPosition="absolute"
        socialMenuTop="752.5px"
        socialMenuLeft="63.7px"
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
        socialMenuMarginLeft="unset"
        socialMenuMarginTop="unset"
      />
      <AccountSettingsContainer />
      <NavbarLogin
        vuesaxlinearsearchNormal="/vuesaxlinearsearchnormal@2x.png"
        vuesaxlinearethereumEth="/vuesaxlinearethereumeth@2x.png"
        vuesaxoutlinenotification="/vuesaxoutlinenotification@2x.png"
        profileImage="/profile-image@2x.png"
        navbarLoginWidth="1163px"
        navbarLoginPosition="absolute"
        navbarLoginTop="51px"
        navbarLoginLeft="457.5px"
      />
      <MenuSettings
        vuesaxlineardiamonds="/vuesaxlineardiamonds@2x.png"
        vuesaxlinearwallet="/vuesaxlinearwallet@2x.png"
        vuesaxoutlinesetting2="/vuesaxoutlinesetting2@2x.png"
        vuesaxoutlineinfoCircle="/vuesaxoutlineinfocircle@2x.png"
        dashboard="/dashboard@2x.png"
        vuesaxoutlinemessage="/vuesaxoutlinemessage@2x.png"
        vuesaxboldhome="/vuesaxboldhome@2x.png"
        vuesaxoutlinesetting21="/vuesaxoutlinesetting2@2x.png"
        vuesaxoutlinemessage1="/vuesaxoutlinemessage@2x.png"
        menuSettingsPosition="absolute"
        menuSettingsTop="202.8px"
        menuSettingsLeft="63.7px"
      />
    </div>
  );
};

export default SettingsAccount;
