import { useMemo } from "react";
import BarraInAlto from "./BarraInAlto";
import styles from "./NavbarLogin.module.css";

const NavbarLogin = ({
  vuesaxlinearsearchNormal,
  vuesaxlinearethereumEth,
  vuesaxoutlinenotification,
  profileImage,
  navbarLoginWidth,
  navbarLoginPosition,
  navbarLoginTop,
  navbarLoginLeft,
}) => {
  const navbarLoginStyle = useMemo(() => {
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
        vuesaxlinearsearchNormal="/vuesaxlinearsearchnormal@2x.png"
        vuesaxlinearethereumEth="/vuesaxlinearethereumeth3@2x.png"
        vuesaxoutlinenotification="/vuesaxoutlinenotification1@2x.png"
        profileImage="/profile-image@2x.png"
        barraInAltoPosition="absolute"
        barraInAltoTop="0px"
        barraInAltoLeft="0px"
      />
    </div>
  );
};

export default NavbarLogin;
