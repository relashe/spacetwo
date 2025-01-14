import { SxProps, Theme } from "@mui/material";

export const headerStyles: SxProps<Theme> = {
  backgroundColor: "#000000",
  color: "#000000",
  // height: "75px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  boxShadow: "1px 0 0 0 rgba(0, 0, 0, 0.05)",
  width: "100%",
  padding: "50px 0",
  borderBottom: "solid 1px #282c34",

  "& .header__title": {
    color: "#282c34",
    backgroundColor: "#eefe05",
    padding: "10px 12px",
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
};
