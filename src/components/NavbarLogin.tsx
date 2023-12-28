import { FunctionComponent, useMemo, type CSSProperties } from "react";
import BarraInAlto from "./BarraInAlto";
import styles from "./NavbarLogin.module.css";

type NavbarLoginType = {
  /** Style props */
  navbarLoginWidth?: CSSProperties["width"];
  navbarLoginPosition?: CSSProperties["position"];
  navbarLoginTop?: CSSProperties["top"];
  navbarLoginLeft?: CSSProperties["left"];
};

const NavbarLogin: FunctionComponent<NavbarLoginType> = ({
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
        barraInAltoPosition="absolute"
        barraInAltoTop="0px"
        barraInAltoLeft="0px"
      />
    </div>
  );
};

export default NavbarLogin;
