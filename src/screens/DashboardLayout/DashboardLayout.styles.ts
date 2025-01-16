import { SxProps, Theme } from "@mui/material";

export const dashboardLayoutStyles: SxProps<Theme> = {
  height: "100vh",
  width: "100vw",
  overflow: "hidden",

  "& .dashboard__sidebar": {
    display: "inline-flex",
    flexFlow: "column nowrap",
    minWidth: "20%",
    maxWidth: "250px",
    flex: "1 1 20%",
    borderRight: "solid 2px #9fbaf1",
    height: "100%",
  },

  "& .dashboard__content": {
    width: "100%",
    flex: "1 1 80%",
    height: "100%",
  },
};
