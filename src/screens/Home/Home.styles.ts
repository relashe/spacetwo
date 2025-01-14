import { SxProps, Theme } from "@mui/material";

export const homeStyles: SxProps<Theme> = {
  display: "flex",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
  flexFlow: "column nowrap",
  alignItems: "center",

  "& .home-page__content": {
    display: "inline-flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    width: "100%",
    flex: "1 1 100%",
  },

  "& .home-page__hero": {
    width: "60%",
  },
};
