import { FunctionComponent, useMemo, type CSSProperties } from "react";
import SocialIcons from "./SocialIcons";
import styles from "./SocialMenu.module.css";

export type SocialMenuType = {
  seguiLeNostre?: string;
  socialIconsSocialIcons?: string;
  vector?: string;
  vector1?: string;
  vector2?: string;
  vuesaxlinearcloseSquare?: string;

  /** Style props */
  socialMenuPosition?: CSSProperties["position"];
  socialMenuTop?: CSSProperties["top"];
  socialMenuLeft?: CSSProperties["left"];
  frameWidth?: CSSProperties["width"];
  frameHeight?: CSSProperties["height"];
  frameAlignItems?: CSSProperties["alignItems"];
  frameJustifyContent?: CSSProperties["justifyContent"];
  frameGap?: CSSProperties["gap"];
  frameMarginTop?: CSSProperties["marginTop"];
  seguiLeNostreContainerPosition?: CSSProperties["position"];
  seguiLeNostreContainerFontSize?: CSSProperties["fontSize"];
  seguiLeNostreContainerFontWeight?: CSSProperties["fontWeight"];
  seguiLeNostreContainerFontFamily?: CSSProperties["fontFamily"];
  seguiLeNostreContainerColor?: CSSProperties["color"];
  seguiLeNostreContainerTextAlign?: CSSProperties["textAlign"];
  seguiLeNostreContainerDisplay?: CSSProperties["display"];
  seguiLeNostreContainerWidth?: CSSProperties["width"];
  seguiLeNostreContainerHeight?: CSSProperties["height"];
  seguiLeNostreContainerOverflow?: CSSProperties["overflow"];
  seguiLeNostreContainerFlexShrink?: CSSProperties["flexShrink"];
  seguiLeNostreContainerFlexDirection?: CSSProperties["flexDirection"];
  seguiLeNostreContainerAlignItems?: CSSProperties["alignItems"];
  seguiLeNostreContainerJustifyContent?: CSSProperties["justifyContent"];
  seguiLeNostreContainerGap?: CSSProperties["gap"];
  seguiLeNostreMargin?: CSSProperties["margin"];
  seguiLeNostrePosition?: CSSProperties["position"];
  seguiLeNostreFontSize?: CSSProperties["fontSize"];
  seguiLeNostreFontWeight?: CSSProperties["fontWeight"];
  seguiLeNostreFontFamily?: CSSProperties["fontFamily"];
  seguiLeNostreColor?: CSSProperties["color"];
  seguiLeNostreTextAlign?: CSSProperties["textAlign"];
  seguiLeNostreDisplay?: CSSProperties["display"];
  pagineSocialMargin?: CSSProperties["margin"];
  socialIconsDisplay?: CSSProperties["display"];
  socialIconsFlexDirection?: CSSProperties["flexDirection"];
  socialIconsAlignItems?: CSSProperties["alignItems"];
  socialIconsJustifyContent?: CSSProperties["justifyContent"];
  socialIconsGap?: CSSProperties["gap"];
  socialIconsMargin?: CSSProperties["margin"];
  clipPathGroupPosition?: CSSProperties["position"];
  clipPathGroupWidth?: CSSProperties["width"];
  clipPathGroupHeight?: CSSProperties["height"];
  clipPathGroupObjectFit?: CSSProperties["objectFit"];
  clipPathGroupDisplay?: CSSProperties["display"];
  clipPathGroupFlexDirection?: CSSProperties["flexDirection"];
  clipPathGroupAlignItems?: CSSProperties["alignItems"];
  clipPathGroupJustifyContent?: CSSProperties["justifyContent"];
  clipPathGroupGap?: CSSProperties["gap"];
  vectorIconWidth?: CSSProperties["width"];
  vectorIconWidth1?: CSSProperties["width"];
  socialMenuMarginLeft?: CSSProperties["marginLeft"];
  socialMenuMarginTop?: CSSProperties["marginTop"];
};

const SocialMenu: FunctionComponent<SocialMenuType> = ({
  seguiLeNostre,
  socialIconsSocialIcons,
  vector,
  vector1,
  vector2,
  vuesaxlinearcloseSquare,
  socialMenuPosition,
  socialMenuTop,
  socialMenuLeft,
  frameWidth,
  frameHeight,
  frameAlignItems,
  frameJustifyContent,
  frameGap,
  frameMarginTop,
  seguiLeNostreContainerPosition,
  seguiLeNostreContainerFontSize,
  seguiLeNostreContainerFontWeight,
  seguiLeNostreContainerFontFamily,
  seguiLeNostreContainerColor,
  seguiLeNostreContainerTextAlign,
  seguiLeNostreContainerDisplay,
  seguiLeNostreContainerWidth,
  seguiLeNostreContainerHeight,
  seguiLeNostreContainerOverflow,
  seguiLeNostreContainerFlexShrink,
  seguiLeNostreContainerFlexDirection,
  seguiLeNostreContainerAlignItems,
  seguiLeNostreContainerJustifyContent,
  seguiLeNostreContainerGap,
  seguiLeNostreMargin,
  seguiLeNostrePosition,
  seguiLeNostreFontSize,
  seguiLeNostreFontWeight,
  seguiLeNostreFontFamily,
  seguiLeNostreColor,
  seguiLeNostreTextAlign,
  seguiLeNostreDisplay,
  pagineSocialMargin,
  socialIconsDisplay,
  socialIconsFlexDirection,
  socialIconsAlignItems,
  socialIconsJustifyContent,
  socialIconsGap,
  socialIconsMargin,
  clipPathGroupPosition,
  clipPathGroupWidth,
  clipPathGroupHeight,
  clipPathGroupObjectFit,
  clipPathGroupDisplay,
  clipPathGroupFlexDirection,
  clipPathGroupAlignItems,
  clipPathGroupJustifyContent,
  clipPathGroupGap,
  vectorIconWidth,
  vectorIconWidth1,
  socialMenuMarginLeft,
  socialMenuMarginTop,
}) => {
  const socialMenuStyle: CSSProperties = useMemo(() => {
    return {
      position: socialMenuPosition,
      top: socialMenuTop,
      left: socialMenuLeft,
      marginLeft: socialMenuMarginLeft,
      marginTop: socialMenuMarginTop,
    };
  }, [
    socialMenuPosition,
    socialMenuTop,
    socialMenuLeft,
    socialMenuMarginLeft,
    socialMenuMarginTop,
  ]);

  const frameStyle: CSSProperties = useMemo(() => {
    return {
      width: frameWidth,
      height: frameHeight,
      alignItems: frameAlignItems,
      justifyContent: frameJustifyContent,
      gap: frameGap,
      marginTop: frameMarginTop,
    };
  }, [
    frameWidth,
    frameHeight,
    frameAlignItems,
    frameJustifyContent,
    frameGap,
    frameMarginTop,
  ]);

  const seguiLeNostreContainerStyle: CSSProperties = useMemo(() => {
    return {
      position: seguiLeNostreContainerPosition,
      fontSize: seguiLeNostreContainerFontSize,
      fontWeight: seguiLeNostreContainerFontWeight,
      fontFamily: seguiLeNostreContainerFontFamily,
      color: seguiLeNostreContainerColor,
      textAlign: seguiLeNostreContainerTextAlign,
      display: seguiLeNostreContainerDisplay,
      width: seguiLeNostreContainerWidth,
      height: seguiLeNostreContainerHeight,
      overflow: seguiLeNostreContainerOverflow,
      flexShrink: seguiLeNostreContainerFlexShrink,
      flexDirection: seguiLeNostreContainerFlexDirection,
      alignItems: seguiLeNostreContainerAlignItems,
      justifyContent: seguiLeNostreContainerJustifyContent,
      gap: seguiLeNostreContainerGap,
    };
  }, [
    seguiLeNostreContainerPosition,
    seguiLeNostreContainerFontSize,
    seguiLeNostreContainerFontWeight,
    seguiLeNostreContainerFontFamily,
    seguiLeNostreContainerColor,
    seguiLeNostreContainerTextAlign,
    seguiLeNostreContainerDisplay,
    seguiLeNostreContainerWidth,
    seguiLeNostreContainerHeight,
    seguiLeNostreContainerOverflow,
    seguiLeNostreContainerFlexShrink,
    seguiLeNostreContainerFlexDirection,
    seguiLeNostreContainerAlignItems,
    seguiLeNostreContainerJustifyContent,
    seguiLeNostreContainerGap,
  ]);

  const seguiLeNostreStyle: CSSProperties = useMemo(() => {
    return {
      margin: seguiLeNostreMargin,
      position: seguiLeNostrePosition,
      fontSize: seguiLeNostreFontSize,
      fontWeight: seguiLeNostreFontWeight,
      fontFamily: seguiLeNostreFontFamily,
      color: seguiLeNostreColor,
      textAlign: seguiLeNostreTextAlign,
      display: seguiLeNostreDisplay,
    };
  }, [
    seguiLeNostreMargin,
    seguiLeNostrePosition,
    seguiLeNostreFontSize,
    seguiLeNostreFontWeight,
    seguiLeNostreFontFamily,
    seguiLeNostreColor,
    seguiLeNostreTextAlign,
    seguiLeNostreDisplay,
  ]);

  const pagineSocialStyle: CSSProperties = useMemo(() => {
    return {
      margin: pagineSocialMargin,
    };
  }, [pagineSocialMargin]);

  const socialIconsStyle: CSSProperties = useMemo(() => {
    return {
      display: socialIconsDisplay,
      flexDirection: socialIconsFlexDirection,
      alignItems: socialIconsAlignItems,
      justifyContent: socialIconsJustifyContent,
      gap: socialIconsGap,
      margin: socialIconsMargin,
    };
  }, [
    socialIconsDisplay,
    socialIconsFlexDirection,
    socialIconsAlignItems,
    socialIconsJustifyContent,
    socialIconsGap,
    socialIconsMargin,
  ]);

  const clipPathGroupStyle: CSSProperties = useMemo(() => {
    return {
      position: clipPathGroupPosition,
      width: clipPathGroupWidth,
      height: clipPathGroupHeight,
      objectFit: clipPathGroupObjectFit,
      display: clipPathGroupDisplay,
      flexDirection: clipPathGroupFlexDirection,
      alignItems: clipPathGroupAlignItems,
      justifyContent: clipPathGroupJustifyContent,
      gap: clipPathGroupGap,
    };
  }, [
    clipPathGroupPosition,
    clipPathGroupWidth,
    clipPathGroupHeight,
    clipPathGroupObjectFit,
    clipPathGroupDisplay,
    clipPathGroupFlexDirection,
    clipPathGroupAlignItems,
    clipPathGroupJustifyContent,
    clipPathGroupGap,
  ]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      width: vectorIconWidth,
    };
  }, [vectorIconWidth]);

  const vectorIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: vectorIconWidth1,
    };
  }, [vectorIconWidth1]);

  return (
    <div className={styles.socialMenu} style={socialMenuStyle}>
      <div className={styles.frame} style={frameStyle}>
        <div className={styles.seguiLeNostreContainer}>
          <p className={styles.seguiLeNostre}>Segui le nostre</p>
          <p className={styles.pagineSocial}>{`pagine social `}</p>
        </div>
        <SocialIcons
          clipPathGroup="/clip-path-group.svg"
          vector="/vector.svg"
          vector1="/vector.svg"
          vector2="/vector.svg"
          socialIconsPosition="unset"
          socialIconsTop="unset"
          socialIconsLeft="unset"
        />
      </div>
      <img
        className={styles.vuesaxlinearcloseSquareIcon}
        alt=""
        src={vuesaxlinearcloseSquare}
      />
    </div>
  );
};

export default SocialMenu;
