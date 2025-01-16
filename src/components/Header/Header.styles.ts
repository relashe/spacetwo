import { SxProps, Theme } from "@mui/material";

export const headerStyles: SxProps<Theme> = {
  backgroundColor: "transparent",
  color: "#000000",
  fontSize: "calc(10px + 2vmin)",
  width: "100%",
  padding: "25px 0",
  borderBottom: "solid 2px #9fbaf1",

  "& .header__inner": {
    display: "flex",
    flexDirection: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
  },

  "& .header__title": {
    color: "#282c34",
    backgroundColor: "#eefe05",
    padding: "12px 25px",
    borderRadius: "30px",
    fontSize: "calc(10px + 2vmin)",
    fontWeight: "bold",

    "& a": {
      color: "inherit",
      textDecoration: "none",
    },

    "&:hover": {
      "& a": {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },

  "& .nav": {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-around",
    gap: "20px",
    padding: "20px 0",
  },

  "&.header--dashboard": {
    borderBottom: "none",

    "& .header__inner": {
      flexFlow: "column nowrap",
      justifyContent: "flex-start",
      alignItems: "center",
    },
  },
};
