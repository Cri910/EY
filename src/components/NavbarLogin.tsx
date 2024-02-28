import { FunctionComponent, useMemo, type CSSProperties } from "react";
import BarraInAlto from "./BarraInAlto";
import styles from "./NavbarLogin.module.css";

export type NavbarLoginType = {
  vuesaxlinearsearchNormal?: string;
  vuesaxlinearethereumEth?: string;
  vuesaxoutlinenotification?: string;
  profileImage?: string;

  /** Style props */
  navbarLoginWidth?: CSSProperties["width"];
  navbarLoginPosition?: CSSProperties["position"];
  navbarLoginTop?: CSSProperties["top"];
  navbarLoginLeft?: CSSProperties["left"];
};

const NavbarLogin: FunctionComponent<NavbarLoginType> = ({
  vuesaxlinearsearchNormal,
  vuesaxlinearethereumEth,
  vuesaxoutlinenotification,
  profileImage,
  navbarLoginWidth,
  navbarLoginPosition,
  navbarLoginTop,
  navbarLoginLeft,
}) => {
  const navbarLoginStyle: CSSProperties = useMemo(() => {
    return {
      width: navbarLoginWidth,
      position: navbarLoginPosition,
      top: navbarLoginTop,
      left: navbarLoginLeft,
    };
  }, [navbarLoginWidth, navbarLoginPosition, navbarLoginTop, navbarLoginLeft]);

  return (
    <div className={styles.navbarLogin} style={navbarLoginStyle}>
      <BarraInAlto
        vuesaxlinearsearchNormal="/vuesaxlinearsearchnormal.svg"
        vuesaxlinearethereumEth="/vuesaxlinearethereumeth.svg"
        vuesaxoutlinenotification="/vuesaxoutlinenotification.svg"
        profileImage="/profile-image.svg"
        barraInAltoPosition="absolute"
        barraInAltoTop="0px"
        barraInAltoLeft="0px"
      />
    </div>
  );
};

export default NavbarLogin;
