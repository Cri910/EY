import { FunctionComponent } from "react";
import LogoutButton from "../components/LogoutButton";
import SocialMenu from "../components/SocialMenu";
import AccountSettingsContainer1 from "../components/AccountSettingsContainer1";
import NavbarLogin from "../components/NavbarLogin";
import MenuSettings from "../components/MenuSettings";
import styles from "./SettingsAccount.module.css";

const SettingsAccount: FunctionComponent = () => {
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
        src="/logo-alessandria@2x.png"
      />
      <LogoutButton
        vuesaxlinearlogout="/vuesaxlinearlogout.svg"
        logoutButtonPosition="absolute"
        logoutButtonTop="998.2px"
        logoutButtonLeft="70.5px"
        logoutButtonFlexShrink="unset"
        logoutButtonHeight="unset"
        logoutButtonMarginLeft="unset"
      />
      <SocialMenu
        socialIconsSocialIcons="pagine social "
        vector="/clip-path-group.svg"
        vector1="/vector.svg"
        vector2="/vector.svg"
        vuesaxlinearcloseSquare="/vector.svg"
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
      <AccountSettingsContainer1 />
      <NavbarLogin
        vuesaxlinearsearchNormal="/vuesaxlinearsearchnormal.svg"
        vuesaxlinearethereumEth="/vuesaxlinearethereumeth.svg"
        vuesaxoutlinenotification="/vuesaxoutlinenotification.svg"
        profileImage="/profile-image.svg"
        navbarLoginWidth="1163px"
        navbarLoginPosition="absolute"
        navbarLoginTop="51px"
        navbarLoginLeft="457.5px"
      />
      <MenuSettings
        vuesaxlineardiamonds="/vuesaxlineardiamonds.svg"
        vuesaxlinearwallet="/vuesaxlinearwallet.svg"
        vuesaxoutlinesetting2="/vuesaxoutlinesetting2.svg"
        vuesaxoutlineinfoCircle="/vuesaxoutlineinfocircle.svg"
        dashboard="/dashboard.svg"
        vuesaxoutlinemessage="/vuesaxoutlinemessage.svg"
        vuesaxboldhome="/vuesaxboldhome.svg"
        vuesaxoutlinesetting21="/vuesaxoutlinesetting2.svg"
        vuesaxoutlinemessage1="/vuesaxoutlinemessage.svg"
        menuSettingsPosition="absolute"
        menuSettingsTop="202.8px"
        menuSettingsLeft="63.7px"
      />
    </div>
  );
};

export default SettingsAccount;
