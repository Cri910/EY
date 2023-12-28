import { useMemo } from "react";
import SocialIcons from "./SocialIcons";
import styles from "./SocialMenu.module.css";

const SocialMenu = ({
  seguiLeNostre,
  socialIconsSocialIcons,
  clipPathGroup,
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
  const socialMenuStyle = useMemo(() => {
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

  const frameStyle = useMemo(() => {
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

  const seguiLeNostreContainerStyle = useMemo(() => {
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

  const seguiLeNostreStyle = useMemo(() => {
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

  const pagineSocialStyle = useMemo(() => {
    return {
      margin: pagineSocialMargin,
    };
  }, [pagineSocialMargin]);

  const socialIconsStyle = useMemo(() => {
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

  const clipPathGroupStyle = useMemo(() => {
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

  const vectorIconStyle = useMemo(() => {
    return {
      width: vectorIconWidth,
    };
  }, [vectorIconWidth]);

  const vectorIcon1Style = useMemo(() => {
    return {
      width: vectorIconWidth1,
    };
  }, [vectorIconWidth1]);

  return (
    <div className={styles.socialMenu} style={socialMenuStyle}>
      <div className={styles.frame} style={frameStyle}>
        <div className={styles.seguiLeNostreContainer}>
          <p className={styles.seguiLeNostre}>Segui le nostre</p>
          <p className={styles.seguiLeNostre}>{`pagine social `}</p>
        </div>
        <SocialIcons
          clipPathGroup="/clip-path-group1@2x.png"
          vector="/vector3@2x.png"
          vector1="/vector4@2x.png"
          vector2="/vector5@2x.png"
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
