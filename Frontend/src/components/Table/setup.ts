import { iconSetQuartzBold, themeQuartz } from "ag-grid-community";

export const tableTheme = themeQuartz.withPart(iconSetQuartzBold).withParams({
  backgroundColor: "#FFFFFF",
  borderColor: "#00000000",
  borderRadius: "0px",
  browserColorScheme: "dark",
  chromeBackgroundColor: {
    ref: "foregroundColor",
    mix: 0.07,
    onto: "backgroundColor",
  },
  fontFamily: {
    googleFont: "Roboto",
  },
  foregroundColor: "#000000",
  headerBackgroundColor: "#FFFFFF",
  headerFontFamily: {
    googleFont: "Roboto",
  },
  headerFontSize: 14,
  headerFontWeight: 700,
  oddRowBackgroundColor: "#09AFF410",
  rowVerticalPaddingScale: 1.5,
  wrapperBorderRadius: "0px",
});
