import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useQuery } from "../hooks";
import useSpaceTwoUsers from "../hooks/useSpaceTwoUsers";
import { useAuthContext } from "../providers";

const CreateAccount: React.FC<{}> = ({}) => {
  const { user } = useAuthContext();
  const { createNewSpaceTwoUser } = useSpaceTwoUsers();

  const newUser: any = useQuery();

  useEffect(() => {
    if (newUser) {
      createNewSpaceTwoUser({ ...newUser, type: "individual" });
    }
  }, [newUser]);

  console.info(newUser);

  return (
    <Box>
      <Typography>
        {newUser.name}, welcome! Let's create your account
      </Typography>
    </Box>
  );
};

export default CreateAccount;
