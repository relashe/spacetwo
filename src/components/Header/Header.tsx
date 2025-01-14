import { Box, Typography } from "@mui/material";
import { Link } from "react-router";
import { APP_ROUTES } from "../../routing";
import { headerStyles } from "./Header.styles";

const Header: React.FC = () => {
  return (
    <Box component="header" className="header" sx={headerStyles}>
      <Typography variant="h2" className="header__title">
        <Link to={APP_ROUTES.HOME}>SpaceTwo</Link>
      </Typography>
    </Box>
  );
};

export default Header;
